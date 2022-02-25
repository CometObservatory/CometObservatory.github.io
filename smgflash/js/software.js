function writeSoftwareFlash(newLang){
	width = 385;
	height = 370;
	id = "software";
	filename = "flash/software.swf";
	lang = newLang;
	
	if (flash.ver[7])
	{
			//document.write("Flash 7 is installed");
			document.write("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='"+width+"' height='"+height+"' id="+id+" align='middle'>");
			document.write("<param name='allowScriptAccess' value='sameDomain' />");
			document.write("<param name='movie' value='"+filename+"?&langSelected=" + lang + "' />");
			document.write("<param name='quality' value='high' />");
			document.write("<param name='wmode' value='transparent' />");
			document.write("<embed src='"+filename+"?&langSelected=" + lang + "' quality='high' wmode='transparent' width='"+width+"' height='"+height+"' name='"+id+"' id='"+id+"' align='middle' allowscriptaccess='sameDomain' swLiveConnect=\"true\" type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' /></embed>");
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
function back(){
	history.go(-1);
}