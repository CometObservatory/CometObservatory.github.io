
//
// ============================
//  file name : home.js
// ============================
//


// ====================================================================================
// 初期設定

$(document).ready(function(){
 	$('body').attr('id','home');
	$('body#home h1').css('display','block');
	$('body#home p.btn_dvd').css('display','block');
});


// ====================================================================================
// 『社長が訊く』リンク設定

$(document).ready(function(){
	var interviewLink1 = $('#interview_link_1').attr("href");
	var interviewLink2 = $('#interview_link_2').attr("href");
	var interviewLink3 = $('#interview_link_3').attr("href");
	
	$('#interview_link_1').hover(function(){
		$('#interview_link').attr('href',interviewLink1);
		$('#interview_link img').attr('alt','宮本 茂篇');
		$('#interview_link img').attr('src','images/btn_interview_1.jpg');
	});
	
	$('#interview_link_2').hover(function(){
		$('#interview_link').attr('href',interviewLink2);
		$('#interview_link img').attr('alt','開発スタッフ篇');
		$('#interview_link img').attr('src','images/btn_interview_2.jpg');
	});
	
	$('#interview_link_3').hover(function(){
		$('#interview_link').attr('href',interviewLink3);
		$('#interview_link img').attr('alt','サウンドスタッフ篇');
		$('#interview_link img').attr('src','images/btn_interview_3.jpg');
	});
	
	$('#interview_link').click(function(){
		location.href = $(this).attr('href');
	});

});