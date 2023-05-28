
function PnFlashTopMenu(fname,wlen,hlen)
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
document.write('<param name="wmode" value="transparent"> ');
document.write('<embed src="');
document.write(fname);
document.write('"');
document.write('width="');
document.write(wlen);
document.write('" height="');
document.write(hlen);
document.write('"');
document.write(' align="right" quality="high" wmode="transparent"');
document.write('pluginspage="http://www.macromedia.com/go/getflashplayer" ');
document.write('type="application/x-shockwave-flash"></embed></object>');
}
