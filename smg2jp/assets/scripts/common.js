
//
// ============================
//  file name : common.js
// ============================
//


// ====================================================================================
// 画像のhover設定

function initRollovers() {
	if (!document.getElementById) { return; };
	
	var aPreLoad = new Array();
	var sTempSrc;
	
	var aImages = new Array();
	var imgs = document.getElementsByTagName('img');
	var inputs = document.getElementsByTagName('input');
	for (var i=0; i<imgs.length; i++){
		aImages.push(imgs[i]);
	}
	for (var i=0; i<inputs.length; i++){
		aImages.push(inputs[i]);
	}

	for (var i = 0; i < aImages.length; i++)
	{		
		if (aImages[i].className == 'hover')
		{
			var src = aImages[i].getAttribute('src');
			var ftype = src.substring(src.lastIndexOf('.'), src.length);
			var hsrc = src.replace(ftype, '_on'+ftype);

			aImages[i].setAttribute('hsrc', hsrc);
			
			aPreLoad[i] = new Image();
			aPreLoad[i].src = hsrc;
			
			if (aImages[i].parentNode.nodeName == "A" || aImages[i].type == "image")	
			{
				aImages[i].onmouseover = function()
				{
					sTempSrc = this.getAttribute('src');
					this.setAttribute('src', this.getAttribute('hsrc'));
				}	
				
				aImages[i].onmouseout = function()
				{
					if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_on'+ftype, ftype);
					this.setAttribute('src', sTempSrc);
				}
			}
		}
	}
}

// ====================================================================================
// popupWindow ver1.2

function popupWindow (url, width, height, option, windowName)
{	
	if (!width) width = window.innerWidth || document.documentElement.clientWidth;
	if (!height) height = window.innerHeight || document.documentElement.clientHeight;
	if (!option) option = 'menubar=yes, toolbar=yes, location=yes, status=yes, scrollbars=yes, resizable=yes';
	if (!windowName) windowName = "popup";
	var x = (screen.availWidth - width)/2;
	var y = (screen.availHeight - height)/2;
	var o = option+', width='+width+', height='+height+', left='+x+', top='+y;
	var blockMessage = "ウィンドウがお使いのブラウザでポップアップブロックされました。\nポップアップブロックを解除してください。";
	var win = window.open(url, windowName, o);
	if (win)
	{
		win.focus();
	} else {
		alert(blockMessage);
	}
}

// ====================================================================================
// dvdOpen

function dvdOpen ()
{	
	var url = 'dvd/index.html';
	var width = 760;
	var height = 560;
	var option = 'menubar=no, toolbar=no, location=no, status=no, scrollbars=yes, resizable=yes';
	var windowName = "dvd";
	var x = (screen.availWidth - width)/2;
	var y = (screen.availHeight - height)/2;
	var o = option+', width='+width+', height='+height+', left='+x+', top='+y;
	var blockMessage = "ウィンドウがお使いのブラウザでポップアップブロックされました。\nポップアップブロックを解除してください。";
	var win = window.open(url, windowName, o);
	if (win)
	{
		win.focus();
	} else {
		alert(blockMessage);
	}
}

// ====================================================================================
// smartScroll 1.9

function smartScroll ()
{	
	//初期設定
	var easing = .2;
	var interval = 30;
	var allLinks = document.links;
	
	for (var i=0;i<allLinks.length;i++)
	{
		var lnk = allLinks[i];
		
		if ((lnk.href && lnk.href.indexOf('#') != -1) && ((lnk.pathname == location.pathname) || ('/'+lnk.pathname == location.pathname)))
		{
			var myHash = lnk.hash.replace(/#/g,"");
			if (!(myHash.length == 0)) //hrefが"#"のみだった場合は処理を中止
			{
				lnk.onclick = function ()
				{
					//ターゲットのid名を取得
					var hash = this.hash;
					var targetId = hash.replace(/#/g,"");
				
					if (!document.getElementById(targetId)) { return; };
					
					//ターゲット要素の座標を取得（y座標）
					var element = document.getElementById(targetId);
					var targetY = 0;
					while(element)
					{
					   targetY += element.offsetTop;
					   element = element.offsetParent;
					}					
					
					//現在の表示位置の座標を取得（y座標）
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
					
					//スクール量の調整			
					var windowHeight = window.innerHeight || document.documentElement.clientHeight; //ウィンドウの高さ	
					var bodyHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
					var footHeight = bodyHeight - targetY;
					var adjust = windowHeight - footHeight;
					
					//移動量の計算
					if (windowHeight > footHeight)
					{				
						var toY = targetY - scrollTop - adjust;
					} else	{
						var toY = targetY - scrollTop;
					}
										
					function windowScroll ()
					{
						var moveY = Math.floor(toY*easing);	
						window.scrollBy(0,moveY);
						toY -= moveY; 
						myTimer = setTimeout(windowScroll,interval);
						if (moveY == 0) clearTimeout(myTimer);
					}								
					windowScroll();	
					return false;					
				};
			}
		}
	}	
}

/////////////////////////////////////////////////////////////////////////////////////////

function init(){
	initRollovers();
	smartScroll();
}

//addLoadEvent
function addLoadEvent(func) {
	if (typeof window.addEventListener == 'function') {
		window.addEventListener('load', func, false);
		return true;
	} else if (typeof window.attachEvent == 'object') {
		window.attachEvent('onload', func);
		return true;
	}
	
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

addLoadEvent(init);