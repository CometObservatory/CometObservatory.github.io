function PnFlashNone(fname,wlen,hlen)
{
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ');
document.write('codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" ');
document.write('width="');
document.write(wlen);
document.write('" height="');
document.write(hlen);
document.write('" >');
document.write('<param name="movie" value="');
document.write(fname);
document.write('">');
document.write('<param name="quality" value="high"> ');
document.write('<embed src="');
document.write(fname);
document.write('"');
document.write('width="');
document.write(wlen);
document.write('" height="');
document.write(hlen);
document.write('"');
document.write(' align="right" quality="high" ');
document.write('pluginspage="http://www.macromedia.com/go/getflashplayer" ');
document.write('type="application/x-shockwave-flash"></embed></object>');
}

function PnFlash(fname,wlen,hlen)
{
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="aa" ');
document.write('codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" ');
document.write('width="');
document.write(wlen);
document.write('" height="');
document.write(hlen);
document.write('" >');
document.write('<param name="movie" value="');
document.write(fname);
document.write('">');
document.write('<param name="allowScriptAccess" value="always"><param name="quality" value="high"> ');
document.write('<param name="wmode" value="transparent"> ');
document.write('<embed src="');
document.write(fname);
document.write('"');
document.write('width="');
document.write(wlen);
document.write('" height="');
document.write(hlen);
document.write('"');
document.write(' align="right" quality="high" wmode="transparent" bgcolor="#ffffff"');
document.write('pluginspage="http://www.macromedia.com/go/getflashplayer" ');
document.write('type="application/x-shockwave-flash"></embed></object>');
}

//nike0626 Add Start
function PnMovie(mPath,mName,wlen1,hlen1,wlen2,hlen2,pName){
	//if(supports_html5()){
//		document.write('<video autoplay controls loop width="'+wlen1+'" height="'+hlen1+'" poster="'+pName+'" >');
//		document.write('<source src="'+mPath+mName+'.mp4"></source>');
		//MP4 must be first for iPad! you must use `</source>` to avoid a closure bug in Firefox 3.0 / Camino 2.0!
		//Safari / iPhone video
//		document.write('<source src="'+mPath+mName+'.mp4" type="video/mp4"></source>');
		//Firefox native OGG video
		//document.write('<source src="'+mPath+mName+'.wmv" type="video/wmv"></source>');		
		//document.write('<source src="'+mPath+mName+'.theora.ogv" type="video/ogg"></source>');

		//			document.write('<a href="javascript:fileDownload(\''+mPath+mName+'.mp4\');" >');
		document.write('<a href="'+mPath+mName+'.mp4" >');
		document.write('<img	src="'+pName+'" border="0" alt="" width="'+wlen1+'" height="'+hlen1+'"></a>');

//		document.write('</video>');
	//}else{
		/*
		document.write('<object width="'+wlen1+'" height="'+hlen1+'" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab">');
		document.write('<param name="src" value="'+mPath+mName+'.mp4" />');
		document.write('<param name="controller" value="true" />');
		document.write('</object>');
		*/
		/*
		var mFlag = false;
		try
		{
		var axObj = null;
		axObj = new ActiveXObject("MediaPlayer.MediaPlayer.1");
			if(axObj){ 
				//alert('엑티브엑스가 존재합니다');
			}
		}catch(e){
			mFlag = true;
			//alert('엑티브엑스가 존재하지 않습니다');
		}

		if(mFlag){
			if(mName=="Satisfaction"||mName=="Call_Me"||mName=="Proud_web"||mName=="sway"||mName=="SOS"||mName=="alright"||mName=="tik_tok"){
				document.write('<br><br><br><br><br><br>');//저스트댄스sub03용 br태그
				hlen1 = hlen1-40;//저스트댄스sub03용 이미지 높이 조절
			}
			hlen1 = hlen1-40;//TVCM/소개영상용 이미지 높이 조절

//			document.write('<a href="javascript:fileDownload(\''+mPath+mName+'.mp4\');" >');
*/
		//	document.write('<a href="'+mPath+mName+'.mp4" >');
		//	document.write('<img	src="'+pName+'" border="0" alt="" width="'+wlen1+'" height="'+hlen1+'"></a>');
/*			
		}else{
			document.write('<OBJECT ID="tagin_net" WIDTH="'+wlen2+'" HEIGHT="'+hlen2+'" '+
				' classid="clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95" '+
				' type="application/x-oleobject" onError="onErrorDisplay();">');
			document.write('<param name="Filename" value="'+mPath+mName+'.wmv">');
			document.write('<param name="ShowControls" value="1">');
			document.write('<param name="ShowPositionControls" value="0">');
			document.write('<param name="AutoStart" value="1">');
			document.write('<param name="AutoRewind" value="1">');
			document.write('<param name="PlayCount" value="10">');
			document.write('<param name="EnableContextMenu" value="0">');
			document.write('<param name="TransparentAtStart" value="1">');
			document.write('<param name="AnimationAtStart" value="0">');
			document.write('<embed type="application/x-mplayer2">');
			document.write('</OBJECT>');
		}
		*/		
	//}
}

function fileDownload(fileName){
//	document.getElementById("downloadFile").document.location = fileName;
	window.open(fileName,'download');
}

function supports_html5() {
	return !!document.createElement("video").canPlayType;
}

function PnImage(img,coords,url,alt)
{
document.write('<img src="' + img + '" border=0 usemap="#menu"> ');
document.write('<map name="menu"> ');
document.write('<area shape="rect" coords=" ');
document.write(coords);
document.write('" href="'+url+'" target="_self" alt="'+alt+'"> ');
document.write('</map> ');
}

function PnImage2(img)
{
document.write('<img src="/images/' + img + '" border=0 usemap="#menu"> ');
}

function PnImage3(img)
{
document.write('<img src=" '+img+' "> ');
}
/*
function PnMovie(mp4name,wmvname,wlen,hlen)
{
document.write('<video width="'+wlen+'" height="'+hlen+'" controls="controls">');
document.write('<source src="'+wmvname+'" type="video/mp4"></source>');
document.write('<object data="'+mp4name+'" width="'+wlen+'" height="'+hlen+'">');
document.write('</object>');
document.write('</video>');
}
*/
/*
function PnMovie(mp4name,wmvname,wlen,hlen)
{
document.write('<video width="'+wlen+'" height="'+hlen+'" controls="controls" >');

document.write('<source src="'+mp4name+'" />');

document.write('<source src="'+wmvname+'" type="video/wmv" />');
document.write('<source src="'+mp4name+'" type="video/mp4" />');
document.write('<object data="'+mp4name+'" width="'+(wlen-100)+'" height="'+(hlen-40)+'" >');
document.write('</object>');
document.write('</video>');

}
*/
function PnMovieWithPosterMain(mp4name,wmvname,wlen,hlen,posterimg)
{
document.write('<video width="'+(wlen-100)+'" height="'+hlen+'" controls="controls" poster="'+posterimg+'">');

document.write('<source src="'+mp4name+'" />');

document.write('<source src="'+wmvname+'" type="video/wmv" />');
document.write('<source src="'+mp4name+'" type="video/mp4" />');
document.write('<object data="'+mp4name+'" width="'+wlen+'" height="'+(hlen+70)+'" >');
document.write('</object>');
document.write('</video>');

}

function PnMovieWithPoster(mp4name,wmvname,wlen,hlen,posterimg)
{
document.write('<video width="'+wlen+'" height="'+hlen+'" controls="controls" poster="'+posterimg+'">');

document.write('<source src="'+mp4name+'" />');

document.write('<source src="'+wmvname+'" type="video/wmv" />');
document.write('<source src="'+mp4name+'" type="video/mp4" />');
document.write('<object data="'+mp4name+'" width="'+(wlen-100)+'" height="'+(hlen+40)+'" >');
document.write('</object>');
document.write('</video>');

}

var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
if ( plugin ) {
	plugin = parseInt(plugin.description.match(/\d+\.\d+/)) >= 7;
} else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 
   && (navigator.userAgent.indexOf("Windows 95")>=0 || navigator.userAgent.indexOf("Windows 98")>=0 || navigator.userAgent.indexOf("Windows NT")>=0)) {
	document.write('<SCRIPT LANGUAGE=VBScript\> \n');
	document.write('on error resume next \n');
	document.write('plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.7")))\n');
	document.write('</SCRIPT\> \n');
}

function isMobile(){
	var mFlag = false;
//	var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson');
	var mobileKeyWords = new Array('iPhone', 'iPod');
	for (var word in mobileKeyWords){
	    if (navigator.userAgent.match(mobileKeyWords[word]) != null){
	        mFlag = true;
	    }
	}
	
	if (!CheckFlashPlayer()) {
		 mFlag = true;
	}	
/*
	var flashMobileKeyWord = new Array('BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson');
	for (var word in flashMobileKeyWord){
	    if (navigator.userAgent.match(flashMobileKeyWord[word]) != null){
	        mFlag = false;
	    }
	}
*/
	return mFlag;
}

function CheckFlashPlayer() {
    try {
        if (navigator.plugins["Shockwave Flash"] 
        || new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")) {
            return 1;
        }
        else {
            return 0;
        }
    }
    catch (e) {
        return 0;
    }
}
//nike0626 Add End

function PnFlash_C(fname,wlen,hlen)
{
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ');
document.write('codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" ');
document.write('width="');
document.write(wlen);
document.write('" height="');
document.write(hlen);
document.write('" >');
document.write('<param name="movie" value="');
document.write(fname);
document.write('">');
document.write('<param name="allowScriptAccess" value="always"><param name="quality" value="high"> ');
document.write('<param name="wmode" value="transparent"> ');
document.write('<embed src="');
document.write(fname);
document.write('"');
document.write('width="');
document.write(wlen);
document.write('" height="');
document.write(hlen);
document.write('"');
document.write(' align="center" quality="high" wmode="transparent" bgcolor="#ffffff"');
document.write('pluginspage="http://www.macromedia.com/go/getflashplayer" ');
document.write('type="application/x-shockwave-flash"></embed></object>');
}

function PnFlash_L(fname,wlen,hlen)
{
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ');
document.write('codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" ');
document.write('width="');
document.write(wlen);
document.write('" height="');
document.write(hlen);
document.write('" >');
document.write('<param name="movie" value="');
document.write(fname);
document.write('">');
document.write('<param name="allowScriptAccess" value="always"><param name="quality" value="high"> ');
document.write('<param name="wmode" value="transparent"> ');
document.write('<embed src="');
document.write(fname);
document.write('"');
document.write('width="');
document.write(wlen);
document.write('" height="');
document.write(hlen);
document.write('"');
document.write(' align="left" quality="high" wmode="transparent" bgcolor="#ffffff"');
document.write('pluginspage="http://www.macromedia.com/go/getflashplayer" ');
document.write('type="application/x-shockwave-flash"></embed></object>');
}

function PnFlashNew(fname,wlen,hlen,idname)
{
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ');
document.write(' id="');
document.write(idname);
document.write('" ');
document.write('codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" ');
document.write('width="');
document.write(wlen);
document.write('" height="');
document.write(hlen);
document.write('" >');
document.write('<param name="movie" value="');
document.write(fname);
document.write('">');
document.write('<param name="allowScriptAccess" value="always"><param name="quality" value="high"> ');
document.write('<param name=wmode value=transparent> ');
document.write('<embed src="');
document.write(fname);
document.write('"');
document.write('width="');
document.write(wlen);
document.write('" height="');
document.write(hlen);
document.write('"');
document.write(' id="');
document.write(idname);
document.write('" ');
document.write(' align="right" quality="high" wmode="transparent" bgcolor="#ffffff"');
document.write('pluginspage="http://www.macromedia.com/go/getflashplayer" ');
document.write('type="application/x-shockwave-flash"></embed></object>');
}

function PnFlash2(fname,wlen,hlen)
{
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="movie" ');
document.write('codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" ');
document.write('width="');
document.write(wlen);
document.write('" height="');
document.write(hlen);
document.write('" >');
document.write('<param name="movie" value="');
document.write(fname);
document.write('">');
document.write('<param name="allowScriptAccess" value="always"><param name="quality" value="high"> ');
document.write('<param name=wmode value=transparent> ');
document.write('<embed src="');
document.write(fname);
document.write('"');
document.write('width="');
document.write(wlen);
document.write('" height="');
document.write(hlen);
document.write('"');
document.write(' align="right" quality="high" wmode="transparent" bgcolor="#ffffff"');
document.write('pluginspage="http://www.macromedia.com/go/getflashplayer" ');
document.write('type="application/x-shockwave-flash"></embed></object>');
}

function PnFlashParam(fname,wlen,hlen,paramvalue)
{
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ');
document.write('codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" ');
document.write('width="');
document.write(wlen);
document.write('" height="');
document.write(hlen);
document.write('" >');
document.write('<param name="movie" value="');
document.write(fname);
document.write('">');
document.write('<param name="quality" value="high"> ');
document.write(paramvalue);
document.write('<embed src="');
document.write(fname);
document.write('"');
document.write('width="');
document.write(wlen);
document.write('" height="');
document.write(hlen);
document.write('"');
document.write(' align="right" quality="high" ');
document.write('pluginspage="http://www.macromedia.com/go/getflashplayer" ');
document.write('type="application/x-shockwave-flash"></embed></object>');
}

function PnFlashParam2(fname,wlen,hlen,paramvalue,etcparam)
{
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ');
document.write('codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" ');
document.write('width="');
document.write(wlen);
document.write('" height="');
document.write(hlen);
document.write('" >');
document.write('<param name="movie" value="');
document.write(fname);
document.write('">');
document.write('<param name="quality" value="high"> ');
document.write(paramvalue);
document.write('<embed src="');
document.write(fname);
document.write('"');
document.write('width="');
document.write(wlen);
document.write('" height="');
document.write(hlen);
document.write('"');
document.write(' quality="high" ');
document.write('pluginspage="http://www.macromedia.com/go/getflashplayer" ');
document.write('type="application/x-shockwave-flash ');
document.write(etcparam);
document.write(' "></embed></object>');
}

function PrnMovie(mname,namevalue,wlen,hlen,paramvalue)
{
document.write('      <object classid=CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95 ');
document.write('          codebase=http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701 ');
document.write('          height="');
document.write(hlen);
document.write('" ');document.write(namevalue);document.write(' ');
document.write(' 	 type=application/x-oleobject width="');
document.write(wlen);
document.write('" ');
document.write('          standby="Loading Microsoft Windows Media Player components...">');
document.write('          <param name="Width" value="');
document.write(wlen);
document.write('">');
document.write('          <param name="Height" value="');
document.write(hlen);
document.write('">');
document.write('          <param name="FileName" value="');
document.write(mname);
document.write('">');
document.write(paramvalue);
document.write('        </object> ');

}

function PrnMovie2(mname,namevalue,paramvalue,objectvalue)
{
document.write('      <object classid=CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95 ');
document.write('          codebase=http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701 ');
document.write(' ');
document.write(objectvalue);
document.write(' ');
document.write(' ');document.write(namevalue);document.write(' ');
document.write(' 	 type=application/x-oleobject ');
document.write('          standby="Loading Microsoft Windows Media Player components...">');
document.write('          <param name="FileName" value="');
document.write(mname);
document.write('">');
document.write(paramvalue);
document.write('        </object> ');

}

function PrnMovie3(mname,namevalue,paramvalue,objectvalue,emvalue)
{
document.write('      <object classid=CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95 ');
document.write('          codebase=http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=6,4,7,1112 ');
document.write(' ');
document.write(objectvalue);
document.write(' ');
document.write(' ');document.write(namevalue);document.write(' ');
document.write(' 	 type=application/x-oleobject ');
document.write('          standby="Loading Microsoft Windows Media Player components...">');
document.write('          <param name="FileName" value="');
document.write(mname);
document.write('">');
document.write(paramvalue);
document.write(emvalue);
document.write('        </object> ');

}

function PrnMovie4(emvalue)
{

document.write(emvalue);

}

function AddActiveX(sadd,sport,mc,msct,msck)
{
document.write('<OBJECT ID=Twoway CLASSID=CLSID:8FA25066-34B2-11D5-A434-00E04C800430 CODEBASE=Twoway35.cab#Version=3,5,0,0>     ');
document.write('    <PARAM NAME=StationAddress VALUE=');
document.write(sadd);
document.write('>      ');
document.write('    <PARAM NAME=StationPort VALUE=');
document.write(sport);
document.write('>        ');
document.write('    <PARAM NAME=mmsChange VALUE=');
document.write(mc);
document.write('>     ');
document.write('    <PARAM NAME=mmsChangeCheckTime VALUE=');
document.write(msct);
document.write('>  ');   
document.write('    <PARAM NAME=mmsChangeCookieTime VALUE=');
document.write(msck);
document.write('> ');
document.write('</OBJECT>	 ');
}

function Addinfobada()
{
document.write('<object ID=ibcd1 WIDTH=0 HEIGHT=0 CLASSID=CLSID:FFBD9DBD-43C6-11D5-AF63-0050BF0C87E4 ');
document.write(' CODEBASE=http://www.bugslive.co.kr/onair/multibugs/ibcda.cab#version=3,0,1,28 ');
document.write(' STANDBY=infobada start>	');
document.write('</object>');
}

function bgmPlayer()
{
document.write('<object id=bgm classid=CLSID:22D6f312-B0F6-11D0-94AB-0080C74C7E95 width=300 height=120 >');
document.write('<param name=AutoStart value=true>');
document.write('<param name=ClickToPlay value=false>');
document.write('<param name=transparentAtStart value=True>');
document.write('<param name=ShowControls value=1>');
document.write('<param name=DisplaySize value=0>');
document.write('<param name=ShowStatusBar value=1>');
document.write('<param name=FileName value=>');
document.write('</object>');
}