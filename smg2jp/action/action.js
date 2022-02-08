
//
// ============================
//  file name :action.js
// ============================
//


// ====================================================================================
// 

$(document).ready(function(){
				
	$('body#mario ul.page_nav li a').attr("href","javascript:void(0)");	
	$('body#yoshi div#sliderAction ul.sliderNav li a').attr("href","javascript:void(0)");	
	$('body#yoshi div#sliderAction p.btnPrev a').attr("href","javascript:void(0)");	
	$('body#yoshi div#sliderAction p.btnNext a').attr("href","javascript:void(0)");	
	$('body#yoshi div#panel p.btn_transform a').attr("href","javascript:void(0)");
});

// ====================================================================================
// 

var sliderAction = {

	activePanel: 0,
	
	panelWidth: function () {
		var width = $('#'+this.contentID+' > div > div')[0].offsetWidth;
		return width;
	},
	
	panels: function () {
		var panelLength = $('#'+this.contentID+' > div > div').length;
		return panelLength;
	},
	
	activeNav: function () {
		$('#'+this.contentID+' .'+this.nav+' li a').removeClass('active');
		$('#'+this.contentID+' .'+this.nav+' li:eq('+this.activePanel+') a').addClass('active');
		$('#'+this.contentID+' .'+this.nav+' li a').css('cursor','pointer');
		$('#'+this.contentID+' .'+this.nav+' li:eq('+this.activePanel+') a').css('cursor','default');
	},
	
	animateNext: function () {	
		this.activePanel++;
		if ( this.activePanel == this.panels() ){
			this.activePanel = 0;
		}
		if ( this.activePanel == this.panels() ) {
			$('#'+this.contentID+' > div').stop().animate({left: '0'}, 500);
			this.activePanel = 0;
		} else {
			$('#'+this.contentID+' > div').stop().animate({left: -(this.panelWidth()*this.activePanel)+'px'}, 500);
		}		
		if (this.nav) {
			this.activeNav();
		}
	},
	
	animatePrev: function () {
		this.activePanel--;
		if ( this.activePanel < 0 ) {
			this.activePanel = this.panels() - 1;
		}
		if ( this.activePanel < 0 ) {
			$('#'+this.contentID+' > div').stop().animate({left: -(this.panelWidth()*(this.panels()-1))+'px'}, 500);
			this.activePanel = this.panels();
		} else {
			$('#'+this.contentID+' > div').stop().animate({left: -(this.panelWidth()*this.activePanel)+'px'}, 500);
		}
		if (this.nav) {
			this.activeNav();
		}
	},
	
	showPanel: function (n) {
		this.activePanel = n;
		$('#'+this.contentID+' > div').stop().animate({left: -(this.panelWidth()*n)+'px'}, 500);
		if (this.nav) {
			this.activeNav();
		}
	},
	
	//setup
	setup: function(idName,navName,panelNum) {
		
		if (!idName) {
			return false;
		} else {
			this.contentID = idName;
		}
		
		//‰Šú‰»
		if (panelNum) {
			this.activePanel = panelNum;
			$('#'+this.contentID+' > div').css('left', -(this.panelWidth()*panelNum)+'px');
		} else {
			this.activePanel = 0;
			$('#'+this.contentID+' > div').css('left','0');
		}		
		
		if (navName) {
			this.nav = navName;
			this.activeNav();
		} else {
			this.nav = null;
		}
		
		$('#'+this.contentID).css({
			position: 'relative',
			overflow: 'hidden'
		});
		
		$('#'+this.contentID+' > div').css({
			position: 'relative',
			width: this.panels()*this.panelWidth() + 'px'
		});
		
		for( i=0; i < this.panels(); i++ ){
			$('#'+this.contentID+' > div > div:eq('+i+')').css({
				position: 'absolute',
				top: '0',
				left: this.panelWidth()*i + 'px'
			});
		}		
		
		if (this.panels() == 0) {
			$('#'+this.contentID).css('display', 'none');
		}
		
	}
}