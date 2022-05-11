var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(window).ready(function(){
	$("#contentTabset").addClass("active");
	if (window.location.hash!="") {
		$("#contentTabset").addClass("activeTab-"+window.location.hash.replace(/#/,""));
	} else {
		$("#contentTabset").addClass("activeTab-stage");
	}
	$("#contentTabset #contentTabs a").click(function(){
		$("#contentTabset").removeClass("activeTab-stage").removeClass("activeTab-textContent");
		$("#contentTabset").addClass("activeTab-"+this.hash.replace(/#/,""));
		//return false;
	});
});


}
/*
     FILE ARCHIVED ON 13:17:47 Feb 19, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:32:00 Mar 16, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 306.026
  exclusion.robots: 0.098
  exclusion.robots.policy: 0.09
  RedisCDXSource: 0.66
  esindex: 0.008
  LoadShardBlock: 283.764 (3)
  PetaboxLoader3.datanode: 257.262 (4)
  CDXLines.iter: 18.605 (3)
  PetaboxLoader3.resolve: 133.007 (2)
  load_resource: 119.115
*/