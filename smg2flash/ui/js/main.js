var ie = (navigator.userAgent.indexOf('MSIE')>=0) ? true : false;
var ie6 = (navigator.userAgent.indexOf('MSIE 6')>=0) ? true : false;

/*** Modal Window ***/

$.fn.modalPanel = function(options){
	var overlay = $(document.createElement('div')).attr('id','overlay').fadeTo(0, '.85');
	var modalWindow = $(document.createElement('div')).attr('id','modal-window');

	function handleEscape(e){
		if(e.keyCode == 27){
			modalHide();
		}
	}

	function modalHide(){
		$(document).unbind('keydown', handleEscape);
		var remove = function(){ $(this).remove(); };
		overlay.fadeOut(400, remove);
		modalWindow.fadeOut(400, remove).empty();

		if(typeof document.body.style.maxHeight === 'undefined'){
			$('body','html').css({ 'height' : 'auto', 'overflow' : 'auto', 'width' : 'auto' });
		}
	}

	function positionModal(){
		modalWindow.css({
			left: ($(document.body).width() - modalWindow.width()) / 2 + 'px',
			top: ($(window).height() - modalWindow.height()) / 2 + 'px'
		});
	}
	
	return this.each(function(){
		$(this).click(function(e) {
			e.preventDefault();
			$(document).keydown(handleEscape);
			$('body').append(overlay.click(function(){modalHide();})).append(modalWindow);
			overlay.fadeIn(1000);
			
			var fullModalWindow = modalWindow.html($(this).siblings('div.modal-content').html());
		   
			if(ie6){
				fullModalWindow.show().append('<div class="ie-fix"></div>');
			}else if(ie){
				fullModalWindow.show();
			}else{
				fullModalWindow.fadeIn(1000);
			}
			
			positionModal();
			
			modalWindow.append($('<a id="btn-modal-close"><span class="offscreen">Close</span></a>').click(function(){
				modalHide();
			}));
		});

		$(window).bind('resize', function(){
			positionModal();
		});

		if(typeof document.body.style.maxHeight === 'undefined' || navigator.platform == "Nintendo Wii"){
			overlay.css({
				height: ($(document.viewport).height() > $(document.body).height() ? $(document.viewport).height() : $(document.body).height()) + 'px'
			});
		}
	});
};

/*** Language Navigation ***/

function navLanguage(){
	var elNavList = $('ul#nav-lang');
	var elNavItem = $('> li:not(.in)', elNavList);

	elNavItem.css({
		height : 0,
		overflow : 'hidden'
	}).removeClass('offscreen');

	function navMouseIn(){
		setTimeout(function(){
			elNavItem.animate(
				{ height : '21px', opacity : 1 },
				{ queue: false, duration: 200, callback: function(){
					if(ie6){
						elNavList.css({
							height : '20px',
							'padding-top' : '20px'
						});
						$('> li.in', elNavList).css({
							'margin-top' : '-20px'
						});
						$('> li:last', elNavList).css({
							'margin-bottom' : '-20px'
						});
					}
				}}
			);
		}, 300);
	};

	function navMouseOut(){
		setTimeout(function(){
			elNavItem.animate({ height : 0, opacity : 0 }, 200, function(){
				if(ie6){
					elNavList.css({
						height : '20px',
						'padding-top' : '0'
					});
					$('> li.in', elNavList).css({
						'margin-top' : 0
					});
				}
			});
		}, 300);
	};

	elNavList.hover(function(){
		navMouseIn();
	},function(){
		navMouseOut();
	});
}

/*** Accordian Navigation ***/

function navAccordian(){
	$('ul#nav-main > li:not(.in) ul').hide().css({
		'left' : 'auto',
		'position' : 'static',
		'top' : 'auto'
	});

	if(ie6){
		$('ul#nav-main > li:not(.in) ul').hide().css({
			'position' : 'relative',
			'zoom' : 1
		});
	}

	$('ul#nav-main li:not(#nav-home) a.btn').click(function(){
		$('ul#nav-main > li ul').slideUp();
		$(this).next('ul').slideDown().addClass('open');
		return false;
	});
}

$(function(){
	navLanguage();
	navAccordian();
});