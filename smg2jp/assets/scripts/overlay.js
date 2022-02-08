
//
// =========================================
//  file name : overlay.js
//  jQuery required.
// =========================================
//
 
/////////////////////////////////////////////////////////////////////////////////////////

var overlay = {
	
	flag: 0,
	
	//body��I��
	objBody: function () {
		var e = document.getElementsByTagName("body").item(0);
		return e;
	},
	
	//�h�L�������g�̉������擾
	documentWidth: function () {
		var w = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth);
		return w;
	},
	
	//�h�L�������g�̏c�����擾
	documentHeight: function () {
		var h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
		return h;
	},
	
	//�E�B���h�E�̉����Əc�����擾
	windowSize: function () {
		if (window.innerWidth) {
			var emptyDiv = document.createElement('div');
			with (emptyDiv.style) {
				position = 'absolute';
				top = '0';
				left = '0';
				width = '100%';
				height = '100%';
				margin = '0';
				padding = '0';
				border = 'none';
				visibility = 'hidden';
			}
			document.body.appendChild(emptyDiv);
			var w = emptyDiv.offsetWidth;
			var h = emptyDiv.offsetHeight;
			document.body.removeChild(emptyDiv);
		} else {
			var w = document.documentElement.clientWidth || document.body.clientWidth;
			var h = document.documentElement.clientHeight || document.body.clientHeight;
		}
		return [w,h];
	},
	
	//�I�[�o���C��\��
	showOverlay: function () {
		if (!document.getElementById("overlay")) {	
			var divOverlay = document.createElement("div");
			divOverlay.setAttribute('id','overlay');
			
			/*divOverlay.onclick = function () {				
				if ($('body#mario').length) {
					overlay.hideBox();
					stopActionVideo();
					stopTransformVideo();										
					stopApparatusVideo();
				} else if ($('body#yoshi').length) {
					overlay.hideBox();
					stopTransformVideo();
				} else {
					overlay.hideBox();
				}
			}*/
			
			this.objBody().appendChild(divOverlay);
			
			with(divOverlay.style){
				display = 'none';
				position = 'absolute';
				top = '0';
				left = '0';
				width = '100%';
				height = this.documentHeight() + 'px';
				margin = '0';
				padding = '0';
				backgroundColor = '#000';
				filter = 'alpha(opacity=70)';
				MozOpacity = '0.7';
				opacity = '0.7';
				zIndex = '8000';
			}
		}

		var divOverlay = document.getElementById("overlay");
		
		with(divOverlay.style){
			display = 'none';
			height = this.documentHeight() + 'px';
		}
		
		$('div#overlay').fadeIn('400');
	},
	
	//�{�b�N�X��\��
	showBox: function (boxName) {
		
		var box = document.getElementById(boxName);
		var boxWidth = box.offsetWidth;
		var boxHeight = box.offsetHeight;
		
		// ��\���̏ꍇ�͕\������
		if($('div#'+boxName)){
			
			$('div#'+boxName).css({
				display: 'none',
				visibility: 'visible'				
			});
			$('div#'+boxName+' *').css('visibility','visible');					
			overlay.update(boxName,boxWidth,boxHeight);
			$('div#'+boxName).fadeIn('600');
			
			$(window).bind("resize",function(){
				overlay.update(boxName,boxWidth,boxHeight);
			});
			$(window).bind("scroll",function(){
				overlay.update(boxName,boxWidth,boxHeight);
			});

		}
	},
	
	//update
	update: function (boxName,boxWidth,boxHeight) {
		// ���݂̕\���ʒu��x���W���擾
		var scrollLeft = document.body.parentNode.scrollLeft || document.body.scrollLeft || window.pageXOffset;					
		
		// ���݂̕\���ʒu��y���W���擾
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
		
		var divOverlay = document.getElementById("overlay");
		divOverlay.style.height = this.documentHeight() + 'px';
		var box = document.getElementById(boxName);
		with(box.style){
			position = 'fixed';
			width = boxWidth + 'px';
			height = boxHeight + 'px';
			margin = '0';
			padding = '0';
			backgraundColor = '#000000';
			zIndex = '9000';
		}
		
		//for IE6
		if (!(typeof document.documentElement.style.maxHeight != "undefined")) {
			divOverlay.style.position = 'absolute';
			
			box.style.position = 'absolute';
			box.style.top = (document.body.scrollTop || document.documentElement.scrollTop) + (this.windowSize()[1]-boxHeight)/2 + 'px';
			box.style.left = (document.body.scrollLeft || document.documentElement.scrollLeft) + (this.windowSize()[0]-boxWidth)/2 + 'px';	
		} else if ( navigator.userAgent.search(/iPhone/) != -1 ) {
			// for iPhone
			if (this.flag == 0) {
				box.style.top = ((this.windowSize()[1]-boxHeight)/2) + scrollTop + 'px';
			}
			this.flag = 1;
			
			box.style.left = (this.windowSize()[0]-boxWidth)/2 + 'px';	
		} else {
			box.style.top = (this.windowSize()[1]-boxHeight)/2 + 'px';
			box.style.left = (this.windowSize()[0]-boxWidth)/2 + 'px';
		}
	},
	
	//�I�[�o�[���C���\��
	hideOverlay: function () {
		var divOverlay = document.getElementById("overlay");
		$(window).unbind("resize",overlay.update);
		$(window).unbind("scroll",overlay.update);
		if(divOverlay){
			with(divOverlay.style){
				display = 'none';
			}
		}
	},
	
	//�{�b�N�X���\��
	hideBox: function () {
		$('div.overlayBox').css('visibility','hidden');
		$('div.overlayBox *').css('visibility','hidden');		
		$('div#overlay').fadeOut(500,function(){
			overlay.hideOverlay()
		});
		return false;
	},
	
	//setup
	setup: function (boxName) {
		this.showOverlay();
		this.showBox(boxName);
		this.flag = 0;
		return false;
	}
}

