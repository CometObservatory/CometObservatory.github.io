
//
// ============================
//  file name : slider.js
// ============================
//

// ====================================================================================
// 

var slider = {

	activePanel: 0,
	
	panelWidth: function () {
		var width = $('#'+slider.contentID+' > div > div')[0].offsetWidth;
		return width;
	},
	
	panels: function () {
		var panelLength = $('#'+slider.contentID+' > div > div').length;
		return panelLength;
	},
	
	activeNav: function () {
		$('#'+slider.contentID+' .'+slider.nav+' li a').removeClass('active');
		$('#'+slider.contentID+' .'+slider.nav+' li:eq('+slider.activePanel+') a').addClass('active');
		$('#'+slider.contentID+' .'+slider.nav+' li a').css('cursor','pointer');
		$('#'+slider.contentID+' .'+slider.nav+' li:eq('+slider.activePanel+') a').css('cursor','default');
	},
	
	animateNext: function () {	
		slider.activePanel++;
		if ( slider.activePanel == slider.panels() ){
			slider.activePanel = 0;
		}
		if ( slider.activePanel == slider.panels() ) {
			$('#'+slider.contentID+' > div').stop().animate({left: '0'}, 500);
			slider.activePanel = 0;
		} else {
			$('#'+slider.contentID+' > div').stop().animate({left: -(slider.panelWidth()*slider.activePanel)+'px'}, 500);
		}		
		if (slider.nav) {
			this.activeNav();
		}
	},
	
	animatePrev: function () {
		slider.activePanel--;
		if ( slider.activePanel < 0 ) {
			slider.activePanel = slider.panels() - 1;
		}
		if ( slider.activePanel < 0 ) {
			$('#'+slider.contentID+' > div').stop().animate({left: -(slider.panelWidth()*(slider.panels()-1))+'px'}, 500);
			slider.activePanel = slider.panels();
		} else {
			$('#'+slider.contentID+' > div').stop().animate({left: -(slider.panelWidth()*slider.activePanel)+'px'}, 500);
		}
		if (slider.nav) {
			this.activeNav();
		}
	},
	
	showPanel: function (n) {
		slider.activePanel = n;
		$('#'+slider.contentID+' > div').stop().animate({left: -(slider.panelWidth()*n)+'px'}, 500);
		if (slider.nav) {
			this.activeNav();
		}
	},
	
	//setup
	setup: function(idName,navName,panelNum) {
		
		if (!idName) {
			return false;
		} else {
			slider.contentID = idName;
		}
		
		//‰Šú‰»
		if (panelNum) {
			this.activePanel = panelNum;
			$('#'+slider.contentID+' > div').css('left', -(slider.panelWidth()*panelNum)+'px');
		} else {
			this.activePanel = 0;
			$('#'+slider.contentID+' > div').css('left','0');
		}		
		
		if (navName) {
			slider.nav = navName;
			this.activeNav();
		} else {
			slider.nav = null;
		}
		
		$('#'+slider.contentID).css({
			position: 'relative',
			overflow: 'hidden'
		});
		
		$('#'+slider.contentID+' > div').css({
			position: 'relative',
			width: slider.panels()*slider.panelWidth() + 'px'
		});
		
		for( var i=0; i < slider.panels(); i++ ){
			$('#'+slider.contentID+' > div > div:eq('+i+')').css({
				position: 'absolute',
				top: '0',
				left: slider.panelWidth()*i + 'px'
			});
		}		
		
		if (slider.panels() == 0) {
			$('#'+slider.contentID).css('display', 'none');
		}
		
	}
}
