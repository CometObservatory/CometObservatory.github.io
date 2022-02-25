/* openwin.js
   Copyright(c) Nintendo Co., Ltd. All Rights Reserved.
*/

/*
function openWin(filename, width, height, mov,args){
	var combine = 'width=' + width + ',' + 'height=' + height + ',' + args;
	NewWin = window.open(filename + "?mov=" + mov, "NewWin", combine);
	NewWin.focus();
}
*/

function openWin(filename, width, height, movie, args)
 {	
	 leftVal = (screen.width - width) / 2;
	topVal = ((screen.height - height) / 2)-30;
	var combine = 'width=' + width + ',' + 'height=' + height + ',' + args +",left="+leftVal+",top="+topVal;
   mywindow = window.open (filename,"newWin",combine);

 // mywindow.moveTo(leftVal,topVal);
  mywindow.focus;
 } 
