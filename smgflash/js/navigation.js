function writeFlash(xml_file,flash_file){
	width = 899;
	height = 90;
	id = "navigation";
	filename = "flash/" + flash_file;
	if (flash.ver[7])
	{
			//document.write("Flash 7 is installed");
			document.write("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='"+width+"' height='"+height+"' id="+id+" align='middle'>");
			document.write("<param name='allowScriptAccess' value='sameDomain' />");
			document.write("<param name='movie' value='"+filename+"?&mainSection=" + mainSection + "&subSection=" + subSection + "&langXML=" + xml_file + "' />");
			document.write("<param name='quality' value='high' />");
			document.write("<param name='wmode' value='transparent' />");
			document.write("<embed src='"+filename+"?&mainSection=" + mainSection + "&subSection=" + subSection + "&langXML=" + xml_file + "' quality='high' wmode='transparent' width='"+width+"' height='"+height+"' name='"+id+"' id='"+id+"' align='middle' allowscriptaccess='sameDomain' swLiveConnect=\"true\" type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' /></embed>");
			document.write("</object>");
	}
	else if (flash.installed)
	{
			//document.write("Please upgrade your flash player");
			//document.write("Flash is not installed");
			document.write("<a href='http://www.macromedia.com/go/getflashplayer'>Click here</a> to download the latest Flash plugin.");
	}
	else
	{
			//document.write("Flash is not installed");
			document.write("<a href='http://www.macromedia.com/go/getflashplayer'>Click here</a> to download the latest Flash plugin.");
	}
}
function writeNav(filename){
	width = 899;
	height = 90;
	id = "navigation";
	filename = "flash/"+filename;
	if (flash.ver[7])
	{
			//document.write("Flash 7 is installed");
			document.write("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='"+width+"' height='"+height+"' id="+id+" align='middle'>");
			document.write("<param name='allowScriptAccess' value='sameDomain' />");
			document.write("<param name='movie' value='"+filename+"'");
			document.write("<param name='quality' value='high' />");
			document.write("<param name='wmode' value='transparent' />");
			document.write("<param name='FlashVars' value='lang="+langCookie+"&mainSection=" + mainSection + "&subSection=" + subSection + "' />");
			document.write("<embed src='"+filename+"' FlashVars='lang="+langCookie+"&mainSection=" + mainSection + "&subSection=" + subSection + "' quality='high' wmode='transparent' width='"+width+"' height='"+height+"' name='"+id+"' id='"+id+"' align='middle' allowscriptaccess='sameDomain' swLiveConnect=\"true\" type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' /></embed>");
			document.write("</object>");
	}
	else if (flash.installed)
	{
			//document.write("Please upgrade your flash player");
			//document.write("Flash is not installed");
			document.write("<a href='http://www.macromedia.com/go/getflashplayer'>Click here</a> to download the latest Flash plugin.");
	}
	else
	{
			//document.write("Flash is not installed");
			document.write("<a href='http://www.macromedia.com/go/getflashplayer'>Click here</a> to download the latest Flash plugin.");
	}
}

function jumpScroll() {
   	window.scroll(0,0); // horizontal and vertical scroll targets
}
function writeTitle(){
	jLang = document.cookie.substr(document.cookie.indexOf("lang=")+5, 2);
	switch(jLang){
		case "es" :
			rVal = "Cobertura Regional Detallada del Wii";
			break;
		case "fr" :
			rVal = "Couverture r&eacute;gionale de la Wii en details";
			break;
		default :
			rVal = "Wii.Nintendo.com - In-Depth Regional Wii Coverage";
			break;
	}
	return rVal;
}