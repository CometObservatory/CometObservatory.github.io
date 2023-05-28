// 오른쪽 버튼 금지 소스
document.onselectstart = function(){return false}
document.oncontextmenu = function(){return false}


/*링크를 함수로_start*/

/* 안전을위한주의사항 _start*/
function caution(){location.href='http://www.nintendocaution.co.kr/';}
function cautionDS(){location.href='http://www.nintendocaution.co.kr/DS/index.php';}
function cautionDSi(){location.href='http://www.nintendocaution.co.kr/DSi/index.php';}
function cautionWii(){location.href='http://www.nintendocaution.co.kr/Wii/index.php';}
/*
function caution(){alert('페이지 점검 중입니다.   ');}
function cautionDS(){alert('페이지 점검 중입니다.   ');}
function cautionDSi(){alert('페이지 점검 중입니다.   ');}
function cautionWii(){alert('페이지 점검 중입니다.   ');}
*/
/* 안전을위한주의사항 _end*/

function home(){location.href='/main.php';}

/* 3DS */
function home3DS(){location.href='/3DS/main.php';}
function homeNew3DS(){location.href='/3DS/new/index.html';}
/* DS */
function homeDS(){location.href='/DS/main.php';}
/* Wii */
function homeWii(){location.href='/Wii/main.php';}

/* 인재채용 */
function employ(){location.href='/common/employ/employ.php';}
function em_sub01(){location.href='/common/employ/em_sub01.php';}
function em_sub02(){location.href='/common/employ/em_sub02.php';}

/* 기업정보 */
/*function corporation(){window.open('/corporate/index_nintendo.html','_blank');}*/
/*function corporation(){window.open('/corporate/nintendo.html','_blank');}*/
function corporation(){window.open('/corporate/kr/kr01.html','_blank');}

/* 이용약관 */
function account(){location.href='/common/account.php';}

/* 개인정보 */
function privacy(){location.href='/common/privacy.php';}

/* 고객 지원 */
/*function support(){location.href='http://support.nintendo.co.kr';}*/
function support(){window.open('http://support.nintendo.co.kr','_blank');}
/*function support(){alert('현재 서비스 점검 중입니다. \n이용에 불편을 드려 죄송합니다. \n점검시간: 04:00 ~ 04:10 \n(연장될 수 있습니다.) ');}*/

/* 런칭컨퍼런스 */
function ds_launching(){location.href='/DS/launching/launching_01.php';}
function wii_launching(){location.href='/Wii/Wii_launching/launching02_01.php';}

/* PressRelease */
/*function PressRelease(){location.href='/PR/Release_List.php';}*/
function PressRelease(){location.href='/PR/press.php';}

/* 처음 만나는 분들게 */
function wii_first(){location.href='/Wii/wii/wii_first_intro.php';}

/* 마리오와 소닉 도전 영상*/
function msOlympic_intro_enjoy(){location.href='/common/msOlympic_intro_enjoy.php';}

/* wii 사용메뉴 */
function wii(){location.href='/Wii/wii/thebody.php';}
function wii_software(){location.href='/Wii/software/list_2015.php';}
function wii_3rd_software(){location.href='/Wii/software/list_3rd_2015.php';}
function wii_channel(){location.href='/Wii/wiichannel/channel.php';}
function wii_tvcm(){location.href='/Wii/tvcm/tvcm_list.php';}
function wii_purchsing(){location.href='/common/purchase/onlineWii_Wii.php';}
/*function wii_purchsing(){alert('현재 작업 중입니다.   ');}*/
function wii_sitemap(){location.href='/Wii/sitemap.php';}

/* 3DS 사용메뉴 */
function intro_3ds(){location.href='/3DS/intro/3DSXL_intro.php';}
function software_3ds(){location.href='/3DS/software/list_2012.php';}
function tvcm_3ds(){location.href='/3DS/tvcm/tvcm_list.php';}
function eshop_3ds(){location.href='/3DS/eshop/index.php';}
function customer_3ds(){location.href='/3DS/customer/index.php';}
//function purchase_3ds(){location.href='/common/purchase/online3DS_3DS.php';}
function purchase_3ds(){location.href='/common/purchase/online3DS_3DS_jibanyan.php';}
function download_3ds(){location.href='/3DS/eshop/eshop_download.php';}
function event_3ds(){location.href='/3DS/event/event02.php';}
/*function ds_purchsing(){alert('현재 작업 중입니다.   ');}*/

/* ds 사용메뉴 */
function ds_dslite(){location.href='/DS/intro/DSlite_intro1.php';}
function ds_software(){location.href='/DS/soft/list_2012.php';}
function ds_3rd_software(){location.href='/DS/soft/list_3rd_2013.php';}
function ds_tvcm(){location.href='/DS/tvcm/tvcm.php';}
//function ds_purchsing(){location.href='/common/purchase/onlineDS_3DS.php';}
function ds_purchsing(){location.href='/common/purchase/online3DS_3DS.php';}
function ds_event(){location.href='/DS/event/event.php';}
function ds_customer(){location.href='/DS/customer/customer.php';}
/*function ds_purchsing(){alert('현재 작업 중입니다.   ');}*/

/* 3DS 메뉴 링크 */
function color_3ds(){location.href='/3DS/intro/3DS_color.php';}
function built_in_3ds(){location.href='/3DS/software/built-in/main.php';}
function built_in_camera(){location.href='/3DS/software/built-in/camera.php';}
function built_in_ar_game(){location.href='/3DS/software/built-in/ar_game.php';}
function built_in_sound(){location.href='/3DS/software/built-in/sound.php';}
function built_in_face(){location.href='/3DS/software/built-in/face.php';}
function built_in_miistudio(){location.href='/3DS/software/built-in/miistudio.php';}
function built_in_miiplaza(){location.href='/3DS/software/built-in/miiplaza.php';}
function built_in_pocket(){location.href='/3DS/software/built-in/pocket.php';}
function features01_3ds(){location.href='/3DS/hardware/features01.php';}
function features02_3ds(){location.href='/3DS/hardware/features02.php';}
function features03_3ds(){location.href='/3DS/hardware/features03.php';}
function features04_3ds(){location.href='/3DS/hardware/features04.php';}
function movie01_3ds(){location.href='/3DS/intro/3DS_movie01.php';}
function movie02_3ds(){location.href='/3DS/intro/3DS_movie02.php';}
function movie01_2ds(){location.href='/3DS/intro/2DS_movie01.php';}


/* wii tvcm 링크 */
function tvcm_remote(){location.href='/Wii/tvcm/tvcm_remote01.php';}
function tvcm_remote02(){location.href='/Wii/tvcm/tvcm_remote02.php';}


function tvcm_tennisTake(){location.href='/Wii/tvcm/tvcm_tennisTake.php';}
function tvcm_baseballTake(){location.href='/Wii/tvcm/tvcm_baseballTake.php';}
function tvcm_sports(){location.href='/Wii/tvcm/tvcm_sports.php';}
function tvcm_tennis(){location.href='/Wii/tvcm/tvcm_tennis.php';}
function tvcm_golf(){location.href='/Wii/tvcm/tvcm_golf.php';}
function tvcm_bowling(){location.href='/Wii/tvcm/tvcm_bowling.php';}
function tvcm_baseball(){location.href='/Wii/tvcm/tvcm_baseball.php';}

function tvcm_exp_boxing(){location.href='/Wii/tvcm/tvcm_exp_boxing.php';}
function tvcm_exp_bowling(){location.href='/Wii/tvcm/tvcm_exp_bowling.php';}
function tvcm_exp_golf(){location.href='/Wii/tvcm/tvcm_exp_golf.php';}

function tvcm_exp_boxingF(){location.href='/Wii/tvcm/tvcm_exp_boxingF.php';}
function tvcm_exp_golf02(){location.href='/Wii/tvcm/tvcm_exp_golf02.php';}

function tvcm_enjoy(){location.href='/Wii/tvcm/tvcm_enjoy.php';}

function tvcm_first_shooting(){location.href='/Wii/tvcm/tvcm_first_shooting.php';}
function tvcm_first_sow(){location.href='/Wii/tvcm/tvcm_first_sow.php';}

function tvcm_mii_family(){location.href='/Wii/tvcm/tvcm_mii_family.php';}
function tvcm_mii_enter(){location.href='/Wii/tvcm/tvcm_mii_enter.php';}


function tvcm_msOlympicT_friend(){location.href='/Wii/tvcm/tvcm_msOlympicT_friend.php';}
function tvcm_msOlympicT_family(){location.href='/Wii/tvcm/tvcm_msOlympicT_family.php';}
function tvcm_msOlympicT_various(){location.href='/Wii/tvcm/tvcm_msOlympicT_various.php';}
function tvcm_msOlympicT_te(){location.href='/Wii/tvcm/tvcm_msOlympicT_te.php';}


function tvcm_brain_classroom_child(){location.href='/Wii/tvcm/tvcm_brain_classroom_child.php';}
function tvcm_brain_classroom_friend(){location.href='/Wii/tvcm/tvcm_brain_classroom_friend.php';}
function tvcm_brain_classroom_family(){location.href='/Wii/tvcm/tvcm_brain_classroom_family.php';}

function tvcm_supermario_adven(){location.href='/Wii/tvcm/tvcm_supermario_adven.php';}
function tvcm_supermario_adven01(){location.href='/Wii/tvcm/tvcm_supermario_adven01.php';}
function tvcm_supermario_adven02(){location.href='/Wii/tvcm/tvcm_supermario_adven02.php';}
function tvcm_supermario_cg(){location.href='/Wii/tvcm/tvcm_supermario_cg.php';}

/*function tvcm_together_party01(){location.href='/Wii/tvcm/tvcm_together_party01.php';}
function tvcm_together_party02(){location.href='/Wii/tvcm/tvcm_together_party02.php';}*/
function tvcm_together_partyhome(){location.href='/Wii/tvcm/tvcm_together_partyhome.php';}

/* 마리오 tvcm */
function tvcm_marioparty8_01(){location.href='/Wii/tvcm/tvcm_marioparty8_01.php';}

/* Wii Fit tvcm */
function tvcm_wiifit_rhythmboxing(){location.href='/Wii/tvcm/tvcm_wiifit_rhythmboxing.php';}
function tvcm_wiifit_skijump(){location.href='/Wii/tvcm/tvcm_wiifit_skijump.php';}
/*function tvcm_wiifit_bmi(){location.href='/Wii/tvcm/tvcm_wiifit_bmi.php';}*/
function tvcm_wiifit_muscular(){location.href='/Wii/tvcm/tvcm_wiifit_muscular.php';}
function tvcm_wiifit_balance(){location.href='/Wii/tvcm/tvcm_wiifit_balance.php';}
function tvcm_wiifit(){location.href='/Wii/tvcm/tvcm_wiifit_v_balance01.php';}
function tvcm_wiifit_yoga(){location.href='/Wii/tvcm/tvcm_wiifit_yoga.php';}
function tvcm_wiifit_uoxygen(){location.href='/Wii/tvcm/tvcm_wiifit_uoxygen.php';}
function tvcm_wiifit_synthesis(){location.href='/Wii/tvcm/tvcm_wiifit_synthesis.php';}


function tvcm_wiifit_couple(){location.href='/Wii/tvcm/tvcm_wiifit_couple.php';}
function tvcm_wiifit_mother(){location.href='/Wii/tvcm/tvcm_wiifit_mother.php';}
function tvcm_wiifit_father(){location.href='/Wii/tvcm/tvcm_wiifit_father.php';}

function tvcm_wiifit_v_training01(){location.href='/Wii/tvcm/tvcm_wiifit_v_training01.php';}
function tvcm_wiifit_v_training02(){location.href='/Wii/tvcm/tvcm_wiifit_v_training02.php';}
function tvcm_wiifit_v_couple(){location.href='/Wii/tvcm/tvcm_wiifit_v_couple.php';}
function tvcm_wiifit_v_mother(){location.href='/Wii/tvcm/tvcm_wiifit_v_mother.php';}
function tvcm_wiifit_v_father(){location.href='/Wii/tvcm/tvcm_wiifit_v_father.php';}
function tvcm_wiifit_v_rhythmboxing(){location.href='/Wii/tvcm/tvcm_wiifit_v_rhythmboxing.php';}
function tvcm_wiifit_v_skijump(){location.href='/Wii/tvcm/tvcm_wiifit_v_skijump.php';}
/*function tvcm_wiifit_v_bmi(){location.href='/Wii/tvcm/tvcm_wiifit_v_bmi.php';}*/
function tvcm_wiifit_v_muscular(){location.href='/Wii/tvcm/tvcm_wiifit_v_muscular.php';}
function tvcm_wiifit_v_balance(){location.href='/Wii/tvcm/tvcm_wiifit_v_balance.php';}
function tvcm_wiifit_v_yoga(){location.href='/Wii/tvcm/tvcm_wiifit_v_yoga.php';}
function tvcm_wiifit_v_uoxygen(){location.href='/Wii/tvcm/tvcm_wiifit_v_uoxygen.php';}
function tvcm_wiifit_v_synthesis(){location.href='/Wii/tvcm/tvcm_wiifit_v_synthesis.php';}

function tvcm_wiifit_training01(){location.href='/Wii/tvcm/tvcm_wiifit_training01.php';}
function tvcm_wiifit_training02(){location.href='/Wii/tvcm/tvcm_wiifit_training02.php';}

/* wii software list 링크 */
function software_first(){location.href='/Wii/software/first/main.php';}
function software_first_submain(){location.href='/Wii/software/first/submain.php';}
function software_first_sub01(){location.href='/Wii/software/first/sub01.php';}
function software_first_sub02(){location.href='/Wii/software/first/sub02.php';}
function software_first_sub03(){location.href='/Wii/software/first/sub03.php';}
function software_first_sub04(){location.href='/Wii/software/first/sub04.php';}
function software_first_sub05(){location.href='/Wii/software/first/sub05.php';}
function software_first_sub06(){location.href='/Wii/software/first/sub06.php';}
function software_first_sub07(){location.href='/Wii/software/first/sub07.php';}
function software_first_sub08(){location.href='/Wii/software/first/sub08.php';}
function software_first_sub09(){location.href='/Wii/software/first/sub09.php';}
function software_first_sub10(){location.href='/Wii/software/first/sub10.php';}

function software_sports(){location.href='/Wii/software/sports/main.php';}
function software_sports_submain(){location.href='/Wii/software/sports/submain.php';}
function software_sports_sub01(){location.href='/Wii/software/sports/sub01.php';}
function software_sports_sub02(){location.href='/Wii/software/sports/sub02.php';}
function software_sports_sub03(){location.href='/Wii/software/sports/sub03.php';}
function software_sports_sub04(){location.href='/Wii/software/sports/sub04.php';}
function software_sports_sub05(){location.href='/Wii/software/sports/sub05.php';}
function software_sports_sub06(){location.href='/Wii/software/sports/sub06.php';}
function software_sports_sub07(){location.href='/Wii/software/sports/sub07.php';}

function software_sports_exp(){location.href='/Wii/software/sports/exp_list.php';}

function software_msOlympic(){location.href='/Wii/software/msOlympic/main.php';}
function software_msOlympic_submain(){location.href='/Wii/software/msOlympic/submain.php';}
function software_msOlympic_sub01(){location.href='/Wii/software/msOlympic/sub01.php';}
function software_msOlympic_sub02(){location.href='/Wii/software/msOlympic/sub02.php';}
function software_msOlympic_sub03(){location.href='/Wii/software/msOlympic/sub03.php';}
function software_msOlympic_sub04(){location.href='/Wii/software/msOlympic/sub04.php';}
function software_msOlympic_sub05(){location.href='/Wii/software/msOlympic/sub05.php';}
function software_msOlympic_sub06(){window.open("/Wii/software/msOlympic/sub06.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=702,height=408;")}

function software_msOlympic_intro(){location.href='/Wii/software/msOlympic/intro.php';}

function software_msOlympic_explist(){location.href='/Wii/software/msOlympic/exp_list.php';}
function software_msOlympic_expview(){location.href='/Wii/software/msOlympic/exp_view.php?fpath=ANI123457007.swf';}

/* 마리오 체험,소개영상 */
function software_marioparty8_explist(){location.href='/Wii/software/marioparty8/exp_list.php';}
function software_marioparty8_expview(){location.href='/Wii/software/marioparty8/exp_view.php?fpath=ANI123457007.swf';}

function software_marioparty8_intro(){location.href='/Wii/software/marioparty8/intro.php';}


/* 말랑_start */
function software_brain_classroom(){location.href='/Wii/software/brain_classroom/main.php';}
function software_brain_classroom_submain(){location.href='/Wii/software/brain_classroom/submain.php';}
function software_brain_classroom_sub01(){location.href='/Wii/software/brain_classroom/sub01.php';}
function software_brain_classroom_sub01_pop(){
window.open("/Wii/software/brain_classroom/pop01.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=500,height=390;")
}
function software_brain_classroom_sub02(){location.href='/Wii/software/brain_classroom/sub02.php';}

function software_brain_classroom_sub02_01_01(){location.href='/Wii/software/brain_classroom/sub02_01_01.php';}
function software_brain_classroom_sub02_01_02(){location.href='/Wii/software/brain_classroom/sub02_01_02.php';}
function software_brain_classroom_sub02_01_03(){location.href='/Wii/software/brain_classroom/sub02_01_03.php';}
function software_brain_classroom_sub02_01_04(){location.href='/Wii/software/brain_classroom/sub02_01_04.php';}

function software_brain_classroom_sub02_02_01(){location.href='/Wii/software/brain_classroom/sub02_02_01.php';}
function software_brain_classroom_sub02_02_02(){location.href='/Wii/software/brain_classroom/sub02_02_02.php';}
function software_brain_classroom_sub02_02_03(){location.href='/Wii/software/brain_classroom/sub02_02_03.php';}
function software_brain_classroom_sub02_02_04(){location.href='/Wii/software/brain_classroom/sub02_02_04.php';}

function software_brain_classroom_sub02_03_01(){location.href='/Wii/software/brain_classroom/sub02_03_01.php';}
function software_brain_classroom_sub02_03_02(){location.href='/Wii/software/brain_classroom/sub02_03_02.php';}
function software_brain_classroom_sub02_03_03(){location.href='/Wii/software/brain_classroom/sub02_03_03.php';}
function software_brain_classroom_sub02_03_04(){location.href='/Wii/software/brain_classroom/sub02_03_04.php';}

function software_brain_classroom_sub02_04_01(){location.href='/Wii/software/brain_classroom/sub02_04_01.php';}
function software_brain_classroom_sub02_04_02(){location.href='/Wii/software/brain_classroom/sub02_04_02.php';}
function software_brain_classroom_sub02_04_03(){location.href='/Wii/software/brain_classroom/sub02_04_03.php';}
function software_brain_classroom_sub02_04_04(){location.href='/Wii/software/brain_classroom/sub02_04_04.php';}

function software_brain_classroom_sub02_05_01(){location.href='/Wii/software/brain_classroom/sub02_05_01.php';}
function software_brain_classroom_sub02_05_02(){location.href='/Wii/software/brain_classroom/sub02_05_02.php';}
function software_brain_classroom_sub02_05_03(){location.href='/Wii/software/brain_classroom/sub02_05_03.php';}
function software_brain_classroom_sub02_05_04(){location.href='/Wii/software/brain_classroom/sub02_05_04.php';}

function software_brain_classroom_sub03(){location.href='/Wii/software/brain_classroom/sub03.php';}
function software_brain_classroom_sub03_01(){location.href='/Wii/software/brain_classroom/sub03_01.php';}
function software_brain_classroom_sub03_02(){location.href='/Wii/software/brain_classroom/sub03_02.php';}
function software_brain_classroom_sub03_03(){location.href='/Wii/software/brain_classroom/sub03_03.php';}
function software_brain_classroom_sub03_04(){location.href='/Wii/software/brain_classroom/sub03_04.php';}
function software_brain_classroom_sub03_05(){location.href='/Wii/software/brain_classroom/sub03_05.php';}
function software_brain_classroom_sub04(){location.href='/Wii/software/brain_classroom/sub04.php';}
function software_brain_classroom_sub04_qna(){location.href='/Wii/software/brain_classroom/sub04_qna.php';}

function software_brain_classroom_intro(){location.href='/Wii/software/brain_classroom/intro.php';}

function software_brain_classroom_explist(){location.href='/Wii/software/brain_classroom/exp_list.php';}
function software_brain_classroom_expview(){location.href='/Wii/software/brain_classroom/exp_view.php?fpath=ANI123457007.swf';}
/* 말랑_end */

/* 마리오파티8_start */
function software_marioparty8ds(){location.href='/DS/soft/mariopartyDS/main.php';}
function software_marioparty8(){location.href='/Wii/software/marioparty8/main.php?nn=0';}
function software_marioparty8_submain(){location.href='/Wii/software/marioparty8/main.php?nn=1';}
function software_marioparty8_sub01(){location.href='/Wii/software/marioparty8/sub01.php';}
function software_marioparty8_sub01_02(){location.href='/Wii/software/marioparty8/sub01_02.php';}
function software_marioparty8_sub01_03(){location.href='/Wii/software/marioparty8/sub01_03.php';}
function software_marioparty8_sub01_04(){location.href='/Wii/software/marioparty8/sub01_04.php';}

function software_marioparty8_sub02(){location.href='/Wii/software/marioparty8/sub02.php';}
function software_marioparty8_sub03(){location.href='/Wii/software/marioparty8/sub03.php';}
function software_marioparty8_sub04(){location.href='/Wii/software/marioparty8/sub04.php';}
function software_marioparty8_sub05(){location.href='/Wii/software/marioparty8/sub05.php';}

/* 마리오파티8_end */


/* 슈퍼마리오갤럭시_start */
function software_supermario(){location.href='/Wii/software/supermario/main.php?nn=0';}
function software_supermario_submain(){location.href='/Wii/software/supermario/main.php?nn=1';}
function software_supermario_sub01_01(){location.href='/Wii/software/supermario/sub01_01.php';}
function software_supermario_sub01_02(){location.href='/Wii/software/supermario/sub01_02.php';}
function software_supermario_sub01_03(){location.href='/Wii/software/supermario/sub01_03.php';}
function software_supermario_sub01_04(){location.href='/Wii/software/supermario/sub01_04.php';}

function software_supermario_sub02_01(){location.href='/Wii/software/supermario/sub02_01.php';}
function software_supermario_sub02_02(){location.href='/Wii/software/supermario/sub02_02.php';}
function software_supermario_sub02_03(){location.href='/Wii/software/supermario/sub02_03.php';}

function software_supermario_sub03_01(){location.href='/Wii/software/supermario/sub03_01.php';}
function software_supermario_sub03_02(){location.href='/Wii/software/supermario/sub03_02.php';}

function software_supermario_sub04_01(){location.href='/Wii/software/supermario/sub04_01.php';}
function software_supermario_sub04_02(){location.href='/Wii/software/supermario/sub04_02.php';}
function software_supermario_sub04_03(){location.href='/Wii/software/supermario/sub04_03.php';}
function software_supermario_sub04_04(){location.href='/Wii/software/supermario/sub04_04.php';}
function software_supermario_sub04_05(){location.href='/Wii/software/supermario/sub04_05.php';}
function software_supermario_sub04_06(){location.href='/Wii/software/supermario/sub04_06.php';}
function software_supermario_sub04_07(){location.href='/Wii/software/supermario/sub04_07.php';}
function software_supermario_sub04_08(){location.href='/Wii/software/supermario/sub04_08.php';}

function software_supermario_sub05_01(){location.href='/Wii/software/supermario/sub05_01.php';}
function software_supermario_sub05_02(){location.href='/Wii/software/supermario/sub05_02.php';}
function software_supermario_sub05_03(){location.href='/Wii/software/supermario/sub05_03.php';}
function software_supermario_sub05_04(){location.href='/Wii/software/supermario/sub05_04.php';}
function software_supermario_sub05_05(){location.href='/Wii/software/supermario/sub05_05.php';}
function software_supermario_sub05_06(){location.href='/Wii/software/supermario/sub05_06.php';}

function software_supermario_sub06_01(){location.href='/Wii/software/supermario/sub06_01.php';}
function software_supermario_sub06_02(){location.href='/Wii/software/supermario/sub06_02.php';}
function software_supermario_sub06_03(){location.href='/Wii/software/supermario/sub06_03.php';}
function software_supermario_sub06_04(){location.href='/Wii/software/supermario/sub06_04.php';}
function software_supermario_sub06_05(){location.href='/Wii/software/supermario/sub06_05.php';}
function software_supermario_sub06_06(){location.href='/Wii/software/supermario/sub06_06.php';}
function software_supermario_sub06_07(){location.href='/Wii/software/supermario/sub06_07.php';}
function software_supermario_sub06_08(){location.href='/Wii/software/supermario/sub06_08.php';}
function software_supermario_sub06_09(){location.href='/Wii/software/supermario/sub06_09.php';}
function software_supermario_sub06_10(){location.href='/Wii/software/supermario/sub06_10.php';}

function software_supermario_sub07_01(){location.href='/Wii/software/supermario/sub07_01.php';}
function software_supermario_sub07_01_01(){location.href='/Wii/software/supermario/sub07_01_01.php';}
function software_supermario_sub07_02(){location.href='/Wii/software/supermario/sub07_02.php';}
function software_supermario_sub07_02_01(){location.href='/Wii/software/supermario/sub07_02_01.php';}
function software_supermario_sub07_03(){location.href='/Wii/software/supermario/sub07_03.php';}
function software_supermario_sub07_03_01(){location.href='/Wii/software/supermario/sub07_03_01.php';}
function software_supermario_sub07_04(){location.href='/Wii/software/supermario/sub07_04.php';}
function software_supermario_sub07_04_01(){location.href='/Wii/software/supermario/sub07_04_01.php';}

function software_supermario_sub08(){location.href='/Wii/software/supermario/sub08.php';}

function software_supermario_sub09_01(){location.href='/Wii/software/supermario/sub09_01.php';}
function software_supermario_sub09_02(){location.href='/Wii/software/supermario/sub09_02.php';}

function software_supermario_sub09_03(){location.href='/Wii/software/supermario/sub09_03.php';}
function software_supermario_sub09_04(){location.href='/Wii/software/supermario/sub09_04.php';}
function software_supermario_sub09_05(){location.href='/Wii/software/supermario/sub09_05.php';}
function software_supermario_sub09_06(){location.href='/Wii/software/supermario/sub09_06.php';}
function software_supermario_sub09_07(){location.href='/Wii/software/supermario/sub09_07.php';}
function software_supermario_sub09_08(){location.href='/Wii/software/supermario/sub09_08.php';}

function software_supermario_intro(){location.href='/Wii/software/supermario/intro.php';}
function software_supermario_explist(){location.href='/Wii/software/supermario/exp_list.php';}
function software_supermario_expview(){location.href='/Wii/software/supermario/exp_view.php?fpath=ANI123457007.swf';}

/* pop */
function software_supermario_sub03_01_pop01(){
window.open("/Wii/software/supermario/pop/sub03_01_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub03_01_pop02(){
window.open("/Wii/software/supermario/pop/sub03_01_pop02.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub03_01_pop03(){
window.open("/Wii/software/supermario/pop/sub03_01_pop03.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub03_01_pop04(){
window.open("/Wii/software/supermario/pop/sub03_01_pop04.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub03_02_pop01(){
window.open("/Wii/software/supermario/pop/sub03_02_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub03_02_pop02(){
window.open("/Wii/software/supermario/pop/sub03_02_pop02.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub03_02_pop03(){
window.open("/Wii/software/supermario/pop/sub03_02_pop03.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub04_04_pop01(){
window.open("/Wii/software/supermario/pop/sub04_04_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=483;")
}

function software_supermario_sub06_01_pop01(){
window.open("/Wii/software/supermario/pop/sub06_01_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_01_pop02(){
window.open("/Wii/software/supermario/pop/sub06_01_pop02.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_01_pop03(){
window.open("/Wii/software/supermario/pop/sub06_01_pop03.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_01_pop04(){
window.open("/Wii/software/supermario/pop/sub06_01_pop04.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub06_02_pop01(){
window.open("/Wii/software/supermario/pop/sub06_02_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_02_pop02(){
window.open("/Wii/software/supermario/pop/sub06_02_pop02.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_02_pop03(){
window.open("/Wii/software/supermario/pop/sub06_02_pop03.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_02_pop04(){
window.open("/Wii/software/supermario/pop/sub06_02_pop04.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub06_03_pop01(){
window.open("/Wii/software/supermario/pop/sub06_03_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_03_pop02(){
window.open("/Wii/software/supermario/pop/sub06_03_pop02.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_03_pop03(){
window.open("/Wii/software/supermario/pop/sub06_03_pop03.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub06_04_pop01(){
window.open("/Wii/software/supermario/pop/sub06_04_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_04_pop02(){
window.open("/Wii/software/supermario/pop/sub06_04_pop02.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_04_pop03(){
window.open("/Wii/software/supermario/pop/sub06_04_pop03.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_04_pop04(){
window.open("/Wii/software/supermario/pop/sub06_04_pop04.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub06_05_pop01(){
window.open("/Wii/software/supermario/pop/sub06_05_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_05_pop02(){
window.open("/Wii/software/supermario/pop/sub06_05_pop02.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_05_pop03(){
window.open("/Wii/software/supermario/pop/sub06_05_pop03.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub06_06_pop01(){
window.open("/Wii/software/supermario/pop/sub06_06_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_06_pop02(){
window.open("/Wii/software/supermario/pop/sub06_06_pop02.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_06_pop03(){
window.open("/Wii/software/supermario/pop/sub06_06_pop03.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_06_pop04(){
window.open("/Wii/software/supermario/pop/sub06_06_pop04.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub06_07_pop01(){
window.open("/Wii/software/supermario/pop/sub06_07_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_07_pop02(){
window.open("/Wii/software/supermario/pop/sub06_07_pop02.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub06_08_pop01(){
window.open("/Wii/software/supermario/pop/sub06_08_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_08_pop02(){
window.open("/Wii/software/supermario/pop/sub06_08_pop02.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub06_09_pop01(){
window.open("/Wii/software/supermario/pop/sub06_09_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_09_pop02(){
window.open("/Wii/software/supermario/pop/sub06_09_pop02.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub06_10_pop01(){
window.open("/Wii/software/supermario/pop/sub06_10_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub06_10_pop02(){
window.open("/Wii/software/supermario/pop/sub06_10_pop02.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub07_01_pop01(){
window.open("/Wii/software/supermario/pop/sub07_01_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub07_01_pop02(){
window.open("/Wii/software/supermario/pop/sub07_01_pop02.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub07_02_pop01(){
window.open("/Wii/software/supermario/pop/sub07_02_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub07_03_pop01(){
window.open("/Wii/software/supermario/pop/sub07_03_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub07_03_pop02(){
window.open("/Wii/software/supermario/pop/sub07_03_pop02.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub07_04_pop01(){
window.open("/Wii/software/supermario/pop/sub07_04_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub09_01_pop01(){
window.open("/Wii/software/supermario/pop/sub09_01_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub09_01_pop02(){
window.open("/Wii/software/supermario/pop/sub09_01_pop02.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub09_02_pop01(){
window.open("/Wii/software/supermario/pop/sub09_02_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub09_03_pop01(){
window.open("/Wii/software/supermario/pop/sub09_03_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub09_04_pop01(){
window.open("/Wii/software/supermario/pop/sub09_04_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub09_04_pop02(){
window.open("/Wii/software/supermario/pop/sub09_04_pop02.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub09_05_pop01(){
window.open("/Wii/software/supermario/pop/sub09_05_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub09_05_pop02(){
window.open("/Wii/software/supermario/pop/sub09_05_pop02.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub09_06_pop01(){
window.open("/Wii/software/supermario/pop/sub09_06_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}

function software_supermario_sub09_07_pop01(){
window.open("/Wii/software/supermario/pop/sub09_07_pop01.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub09_07_pop02(){
window.open("/Wii/software/supermario/pop/sub09_07_pop02.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_sub09_07_pop03(){
window.open("/Wii/software/supermario/pop/sub09_07_pop03.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=639,height=406;")
}
function software_supermario_submain_pop(){
window.open("/Wii/software/supermario/pop/submain_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=659,height=573;")
}



/* 슈퍼마리오갤럭시_end */

/* Wii Fit_start */
function software_wiifit(){location.href='/Wii/software/wiifit/main.php';}
function software_wiifit_submain(){location.href='/Wii/software/wiifit/submain.php';}
function software_wiifit_sub01(){location.href='/Wii/software/wiifit/sub01.php';}
function software_wiifit_sub02(){location.href='/Wii/software/wiifit/sub02.php';}
function software_wiifit_sub03(){location.href='/Wii/software/wiifit/sub03.php';}

function software_wiifit_intro(){location.href='/Wii/software/wiifit/intro.php';}

function software_wiifit_explist(){location.href='/Wii/software/wiifit/exp_list.php';}
function software_wiifit_expview(){location.href='/Wii/software/wiifit/exp_view.php?fpath=ANI123457007.swf';}

function wii_wiifit_qna(){location.href='/Wii/customer/qna_list.php#qna_subtitle_wiifit';}

function wii_wiifit_vol1_01(){location.href='/Wii/software/wiifit/interview_vol1_01.php';}
function wii_wiifit_vol1_02(){location.href='/Wii/software/wiifit/interview_vol1_02.php';}
function wii_wiifit_vol1_03(){location.href='/Wii/software/wiifit/interview_vol1_03.php';}
function wii_wiifit_vol1_04(){location.href='/Wii/software/wiifit/interview_vol1_04.php';}
function wii_wiifit_vol1_05(){location.href='/Wii/software/wiifit/interview_vol1_05.php';}

function wii_wiifit_vol2_01(){location.href='/Wii/software/wiifit/interview_vol2_01.php';}
function wii_wiifit_vol2_02(){location.href='/Wii/software/wiifit/interview_vol2_02.php';}
function wii_wiifit_vol2_03(){location.href='/Wii/software/wiifit/interview_vol2_03.php';}
function wii_wiifit_vol2_04(){location.href='/Wii/software/wiifit/interview_vol2_04.php';}

function wii_wiifit_vol3_01(){location.href='/Wii/software/wiifit/interview_vol3_01.php';}
function wii_wiifit_vol3_02(){location.href='/Wii/software/wiifit/interview_vol3_02.php';}
function wii_wiifit_vol3_03(){location.href='/Wii/software/wiifit/interview_vol3_03.php';}
function wii_wiifit_vol3_04(){location.href='/Wii/software/wiifit/interview_vol3_04.php';}

function wii_wiifit_vol4_01(){location.href='/Wii/software/wiifit/interview_vol4_01.php';}
function wii_wiifit_vol4_02(){location.href='/Wii/software/wiifit/interview_vol4_02.php';}
function wii_wiifit_vol4_03(){location.href='/Wii/software/wiifit/interview_vol4_03.php';}
function wii_wiifit_vol4_04(){location.href='/Wii/software/wiifit/interview_vol4_04.php';}
function wii_wiifit_vol4_05(){location.href='/Wii/software/wiifit/interview_vol4_05.php';}

/* pop */
function software_wiifit_sub02_pop01(){
window.open("/Wii/software/wiifit/pop01.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=620,height=555;")
}

function software_wiifit_sub02_pop02(){
window.open("/Wii/software/wiifit/pop02.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=620,height=555;")
}

function software_wiifit_sub02_pop03(){
window.open("/Wii/software/wiifit/pop03.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=620,height=477;")
}

function software_wiifit_sub02_pop04(){
window.open("/Wii/software/wiifit/pop04.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=620,height=477;")
}

/* Wii Fit_end */

/* 붐블럭스 start */
function software_boomblox(){location.href='/Wii/software/boomblox/main.php';}
function software_boomblox_submain(){location.href='/Wii/software/boomblox/submain.php';}
function software_boomblox_sub01(){location.href='/Wii/software/boomblox/sub01.php';}
function software_boomblox_sub02(){location.href='/Wii/software/boomblox/sub02.php';}
function software_boomblox_sub03(){location.href='/Wii/software/boomblox/sub03.php';}

function software_boomblox_intro(){location.href='/Wii/software/boomblox/intro.php';}

function software_boomblox_produce(){location.href='/Wii/software/boomblox/produce.php';}

/* 붐블럭스 end */

/* 슈퍼 페이퍼 마리오 start */
function software_superpapermario(){location.href='/Wii/software/superpapermario/main.php';}
function software_superpapermario_submain(){location.href='/Wii/software/superpapermario/submain.php';}
function software_superpapermario_sub01(){location.href='/Wii/software/superpapermario/sub01.php';}
function software_superpapermario_sub02(){location.href='/Wii/software/superpapermario/sub02.php';}
function software_superpapermario_sub03(){location.href='/Wii/software/superpapermario/sub03.php';}
function software_superpapermario_sub04(){location.href='/Wii/software/superpapermario/sub04.php';}
function software_superpapermario_sub05(){location.href='/Wii/software/superpapermario/sub05.php';}

function software_superpapermario_intro(){location.href='/Wii/software/superpapermario/intro.php';}

function tvcm_superpapermario_01(){location.href='/Wii/tvcm/tvcm_superpapermario.php';}

/* 슈퍼 페이퍼 마리오 end */

/* 마리오 카트 Wii start*/
function software_mariokartWii(){location.href='/Wii/software/mariokartWii/main.php';}
function software_mariokartWii_submain(){location.href='/Wii/software/mariokartWii/submain.php';}
function software_mariokartWii_kartinfo(){location.href='#none';}

function software_mariokartWii_sub01(){location.href='/Wii/software/mariokartWii/sub01.php';}
function sub1pop(){window.open('/Wii/software/mariokartWii/sub01_pop.html','_blank','toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,top=0,left=0,width=630,height=408');}
function software_mariokartWii_sub02(){location.href='/Wii/software/mariokartWii/sub02.php';}
function software_mariokartWii_sub03(){location.href='/Wii/software/mariokartWii/sub03.php';}
function sub3pop(){window.open('/Wii/software/mariokartWii/sub03_pop.html','_blank','toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,top=0,left=0,width=580,height=399');}
function software_mariokartWii_sub04(){location.href='/Wii/software/mariokartWii/sub04.php';}
function software_mariokartWii_sub05(){location.href='/Wii/software/mariokartWii/sub05.php';}
function software_mariokartWii_sub06(){location.href='/Wii/software/mariokartWii/sub06.php';}

function software_mariokartWii_peripheral(){window.open('http://www.nintendo.co.kr/Wii/wii/peripheral.php#peripheral','_blank');}
function software_mariokartWii_handle(){window.open('http://www.nintendo.co.kr/Wii/wii/peripheral.php#handle','_blank');}
function software_mariokartWii_customer(){window.open('http://www.nintendo.co.kr/Wii/customer/customer.php','_blank');}
function software_mariokartWii_wifi(){window.open('http://www.nintendo.co.kr/DS/soft/wifi/wifi_usb.php','_blank');}

function tvcm_mariokartWii(){location.href='/Wii/tvcm/tvcm_mariokartWii.php';}
function tvcm_mariokartWii02(){location.href='/Wii/tvcm/tvcm_mariokartWii02.php';}
function tvcm_mariokartWii03(){location.href='/Wii/tvcm/tvcm_mariokartWii03.php';}
function tvcm_mariokartWii04(){location.href='/Wii/tvcm/tvcm_mariokartWii04.php';}
function tvcm_mariokartWii05(){location.href='/Wii/tvcm/tvcm_mariokartWii05.php';}

function tvcm_v_mariokartWii(){location.href='/Wii/tvcm/tvcm_v_mariokartWii.php';}
function tvcm_v_mariokartWii02(){location.href='/Wii/tvcm/tvcm_v_mariokartWii02.php';}
function tvcm_v_mariokartWii03(){location.href='/Wii/tvcm/tvcm_v_mariokartWii03.php';}
function tvcm_v_mariokartWii04(){location.href='/Wii/tvcm/tvcm_v_mariokartWii04.php';}
function tvcm_v_mariokartWii05(){location.href='/Wii/tvcm/tvcm_v_mariokartWii05.php';}
function tvcm_v_mariokartWii06(){location.href='/Wii/tvcm/tvcm_v_mariokartWii06.php';}
function tvcm_v_mariokartWii07(){location.href='/Wii/tvcm/tvcm_v_mariokartWii07.php';}
function tvcm_v_mariokartWii08(){location.href='/Wii/tvcm/tvcm_v_mariokartWii08.php';}
function tvcm_v_mariokartWii09(){location.href='/Wii/tvcm/tvcm_v_mariokartWii09.php';}

function tvcm_mariokartWii_circuit(){location.href='/Wii/tvcm/tvcm_mariokartWii_circuit.php';}
function tvcm_mariokartWii_yoshiwaterfall(){location.href='/Wii/tvcm/tvcm_mariokartWii_yoshiwaterfall.php';}
function tvcm_mariokartWii_mushroom(){location.href='/Wii/tvcm/tvcm_mariokartWii_mushroom.php';}
function tvcm_mariokartWii_circuitfull(){location.href='/Wii/tvcm/tvcm_mariokartWii_circuitfull.php';}

function software_mariokartWii_intro(){location.href='/Wii/software/mariokartWii/intro.php';}
function software_mariokartWii_ghost_intro(){location.href='/Wii/software/mariokartWii/ghost_intro.php';}

function software_mariokartWii_explist(){location.href='/Wii/software/mariokartWii/exp_list.php';}
function software_mariokartWii_expview(){location.href='/Wii/software/mariokartWii/exp_view01.php';}


function check(){
	window.open ("http://www.nintendo.co.kr/DS/soft/wifi/check_activex.html","","width=379,height=422,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no");
}
/* 마리오 카트 Wii end*/


/* 춤춰라 메이드 인 와리오 start */
function software_madeinwario(){location.href='/Wii/software/madeinwario/main.php';}
function software_madeinwario_submain(){location.href='/Wii/software/madeinwario/submain.php';}
function software_madeinwario_sub01(){location.href='/Wii/software/madeinwario/sub01.php';}
function software_madeinwario_sub02(){location.href='/Wii/software/madeinwario/sub02.php';}
function software_madeinwario_DS(){location.href='/DS/soft/wario/wario_main.php';}
function software_madeinwario_Wii(){location.href='/Wii/software/madeinwario/main.php';}

function tvcm_madeinwario() {location.href='/Wii/tvcm/tvcm_madeinwario01.php';}
function tvcm_madeinwario02() {location.href='/Wii/tvcm/tvcm_madeinwario02.php';}
function tvcm_madeinwario03() {location.href='/Wii/tvcm/tvcm_madeinwario03.php';}
function tvcm_madeinwario04() {location.href='/Wii/tvcm/tvcm_madeinwario04.php';}

function software_madeinwario_explist() {location.href='/Wii/software/madeinwario/exp_list.php';}
/* 춤춰라 메이드 인 와리오 end */

/* 젤다의 전설 황혼의 공주 start */
function software_zelda_tp(){location.href='/Wii/software/zelda_tp/main.php';}
function software_zelda_tp_submain(){window.open('http://zelda.foomhj.kr/tp', '_blank');}
function software_zelda_tp_intro(){location.href='/Wii/software/zelda_tp/intro.php';}
function software_zelda_tp_intro02(){location.href='/Wii/software/zelda_tp/intro02.php';}
function software_zelda_tp_intro03(){location.href='/Wii/software/zelda_tp/intro03.php';}
function software_zelda_tp_intro04(){location.href='/Wii/software/zelda_tp/intro04.php';}
function software_zelda_DS(){location.href='/DS/soft/zelda/main.php';}
function software_zelda_tp_Wii(){location.href='/Wii/software/zelda_tp/main.php';}

function tvcm_zelda_tp01(){location.href='/Wii/tvcm/tvcm_zelda_tp01.php';}
function tvcm_zelda_tp02(){location.href='/Wii/tvcm/tvcm_zelda_tp02.php';}

function wii_zelda_tp_vol1(){location.href='/Wii/software/zelda_tp/interview_vol1.php';}
function wii_zelda_tp_vol2(){location.href='/Wii/software/zelda_tp/interview_vol2.php';}
function wii_zelda_tp_vol3(){location.href='/Wii/software/zelda_tp/interview_vol3.php';}
function wii_zelda_tp_vol4(){location.href='/Wii/software/zelda_tp/interview_vol4.php';}
function wii_zelda_tp_vol5(){location.href='/Wii/software/zelda_tp/interview_vol5.php';}
function wii_zelda_tp_vol6(){location.href='/Wii/software/zelda_tp/interview_vol6.php';}
function wii_zelda_tp_vol7(){location.href='/Wii/software/zelda_tp/interview_vol7.php';}
function wii_zelda_tp_vol8(){location.href='/Wii/software/zelda_tp/interview_vol8.php';}
function wii_zelda_tp_vol9(){location.href='/Wii/software/zelda_tp/interview_vol9.php';}
function wii_zelda_tp_vol10(){location.href='/Wii/software/zelda_tp/interview_vol10.php';}

function zelda_tp_interview_pop01(){
	window.open("/Wii/software/zelda_tp/movie01.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=420;")
}
function zelda_tp_interview_pop02(){
	window.open("/Wii/software/zelda_tp/movie02.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=420;")
}
function zelda_tp_interview04_pop01(){
	window.open("/Wii/software/zelda_tp/movie03.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=420;")
}
function zelda_tp_interview04_pop02(){
	window.open("/Wii/software/zelda_tp/movie04.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=420;")
}
function zelda_tp_interview04_pop03(){
	window.open("/Wii/software/zelda_tp/movie05.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=420;")
}
function zelda_tp_interview04_pop04(){
	window.open("/Wii/software/zelda_tp/movie06.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=420;")
}
function zelda_tp_interview04_pop05(){
	window.open("/Wii/software/zelda_tp/movie07.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=420;")
}
function zelda_tp_interview05_pop01(){
	window.open("/Wii/software/zelda_tp/movie08.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=420;")
}
function zelda_tp_interview05_pop02(){
	window.open("/Wii/software/zelda_tp/movie09.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=420;")
}
function zelda_tp_interview05_pop03(){
	window.open("/Wii/software/zelda_tp/movie10.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=420;")
}
function zelda_tp_interview10_pop01(){
	window.open("/Wii/software/zelda_tp/movie11.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=420;")
}
function zelda_tp_interview10_pop02(){
	window.open("/Wii/software/zelda_tp/movie12.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=420;")
}
function zelda_tp_interview10_pop03(){
	window.open("/Wii/software/zelda_tp/movie13.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=420;")
}
/* 젤다의 전설 황혼의 공주 end */

/* Wii가 있는 새로운 생활 start */
/*function tvcm_wii_newlife01(){location.href='/Wii/tvcm/tvcm_wii_newlife01.php';}
function tvcm_wii_newlife02(){location.href='/Wii/tvcm/tvcm_wii_newlife02.php';}*/
/* Wii가 있는 새로운 생활 end */

/* 마리오와 소닉 밴쿠버 동계올림픽™ start */
function software_msvOlympic2010(){location.href='/Wii/software/msvOlympic2010/main.php';}
function software_msvOlympic2010_submain(){location.href='/Wii/software/msvOlympic2010/submain.php';}
function software_msvOlympic2010_sub01(){location.href='/Wii/software/msvOlympic2010/olympic/game.php';}
function software_msvOlympic2010_sub02(){location.href='/Wii/software/msvOlympic2010/dream/dream.php';}
function software_msvOlympic2010_sub03(){location.href='/Wii/software/msvOlympic2010/sub03.php';}
function software_msvOlympic2010_sub04(){location.href='/Wii/software/msvOlympic2010/sub04.php';}

function software_msvOlympic2010_intro(){location.href='/Wii/software/msvOlympic2010/intro.php';}
function tvcm_software_msvOlympic2010_01(){location.href='/Wii/tvcm/tvcm_msvOlympic2010_01.php';}
function tvcm_software_msvOlympic2010_02(){location.href='/Wii/tvcm/tvcm_msvOlympic2010_02.php';}
function tvcm_software_msvOlympic2010_03(){location.href='/Wii/tvcm/tvcm_msvOlympic2010_03.php';}
function tvcm_software_msvOlympic2010_04(){location.href='/Wii/tvcm/tvcm_msvOlympic2010_04.php';}

function software_msOlympic_explist(){location.href='/Wii/software/msOlympic/exp_list.php';}
function software_msOlympic_expview(){location.href='/Wii/software/msOlympic/exp_view.php?fpath=ANI123457007.swf';}
/* 마리오와 소닉 밴쿠버 동계올림픽™ end */

/* Wii Music start */
function software_wiimusic(){location.href='/Wii/software/wiimusic/main.php?nn=0';}
/*function software_wiimusic_submain(){location.href='/Wii/software/wiimusic/main.php?nn=1';}*/
function software_wiimusic_submain(){
	if(plugin){
		location.href='/Wii/software/wiimusic/main.php?nn=1';
	}else{
		location.href='/Wii/software/wiimusic/submain.php';
	}
}
function software_wiimusic_sub01(){location.href='/Wii/software/wiimusic/sub01.php';}
function software_wiimusic_sub02(){location.href='/Wii/software/wiimusic/sub02.php';}
function software_wiimusic_sub03(){location.href='/Wii/software/wiimusic/sub03.php';}
function software_wiimusic_sub04(){location.href='/Wii/software/wiimusic/sub04.php';}
function software_wiimusic_sub05(){location.href='/Wii/software/wiimusic/sub05.php';}
function software_wiimusic_producer(){location.href='/Wii/software/wiimusic/producer.php';}

function software_wiimusic_intro(){location.href='/Wii/software/wiimusic/intro.php';}

function tvcm_wiimusic01(){location.href='/Wii/tvcm/tvcm_wiimusic_01.php';}
function tvcm_wiimusic02(){location.href='/Wii/tvcm/tvcm_wiimusic_02.php';}
function tvcm_wiimusic03(){location.href='/Wii/tvcm/tvcm_wiimusic_03.php';}
function tvcm_wiimusic04(){location.href='/Wii/tvcm/tvcm_wiimusic_04.php';}
/* Wii Music end */

/* 타운으로 놀러가요 동물의 숲 start */
function software_animal_crossing(){location.href='/Wii/software/animal_crossing/main.php';}
function software_animal_crossing_submain(){location.href='/Wii/software/animal_crossing/submain.php';}
function software_animal_crossing_sub01(){location.href='/Wii/software/animal_crossing/sub01.php';}
function software_animal_crossing_sub02(){location.href='/Wii/software/animal_crossing/sub02.php';}
function software_animal_crossing_sub03(){location.href='/Wii/software/animal_crossing/sub03.php';}
function software_animal_crossing_sub04(){location.href='/Wii/software/animal_crossing/sub04.php';}
function software_animal_crossing_sub05(){location.href='/Wii/software/animal_crossing/cha/sub05_01.php';}
function software_animal_crossing_sub06(){location.href='/Wii/software/animal_crossing/sub06.php';}

function software_animal_crossing_intro(){location.href='/Wii/software/animal_crossing/intro.php';}
function tvcm_animal_crossing01(){location.href='/Wii/tvcm/tvcm_animal_crossing01.php';}
function tvcm_animal_crossing02(){location.href='/Wii/tvcm/tvcm_animal_crossing02.php';}
function tvcm_animal_crossing03(){location.href='/Wii/tvcm/tvcm_animal_crossing03.php';}
function tvcm_animal_crossing04(){location.href='/Wii/tvcm/tvcm_animal_crossing04.php';}
/* 타운으로 놀러가요 동물의 숲 end */

/* 마리오 파워 사커 start */
function software_mariopowersoccer(){location.href='/Wii/software/mariopowersoccer/main.php';}
function software_mariopowersoccer_submain(){location.href='/Wii/software/mariopowersoccer/submain.php';}
function software_mariopowersoccer_sub01(){location.href='/Wii/software/mariopowersoccer/sub01.php';}
function software_mariopowersoccer_sub02(){location.href='/Wii/software/mariopowersoccer/sub02.php';}
function software_mariopowersoccer_sub03(){location.href='/Wii/software/mariopowersoccer/sub03.php';}
function software_mariopowersoccer_sub04(){location.href='/Wii/software/mariopowersoccer/sub04.php';}
function software_mariopowersoccer_sub05(){location.href='/Wii/software/mariopowersoccer/sub05.php';}
function software_mariopowersoccer_sub06(){location.href='/Wii/software/mariopowersoccer/sub06.php';}
function software_mariopowersoccer_sub07(){location.href='/Wii/software/mariopowersoccer/sub07.php';}

function software_mariopowersoccer_intro(){location.href='/Wii/software/mariopowersoccer/intro.php';}
function tvcm_mariopowersoccer(){location.href='/Wii/tvcm/tvcm_mariopowersoccer.php';}
/* 마리오 파워 사커 end */

/* 바람의 크로노아 start*/
function software_windklonoa(){location.href='/Wii/software/windklonoa/main.php';}
function software_windklonoa_submain(){location.href='/Wii/software/windklonoa/submain.php';}
function software_windklonoa_sub01(){location.href='/Wii/software/windklonoa/sub01.php';}
function software_windklonoa_sub02(){location.href='/Wii/software/windklonoa/sub02.php';}
function software_windklonoa_sub03(){location.href='/Wii/software/windklonoa/sub03.php';}
function software_windklonoa_sub04(){location.href='/Wii/software/windklonoa/sub04.php';}

function tvcm_windklonoa(){location.href='/Wii/tvcm/tvcm_windklonoa.php';}

function klonoa_pop01_01(){
	window.open("/Wii/software/windklonoa/pop01_01.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop01_02(){
	window.open("/Wii/software/windklonoa/pop01_02.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop01_03(){
	window.open("/Wii/software/windklonoa/pop01_03.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop01_04(){
	window.open("/Wii/software/windklonoa/pop01_04.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop01_05(){
	window.open("/Wii/software/windklonoa/pop01_05.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop01_06(){
	window.open("/Wii/software/windklonoa/pop01_06.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop01_07(){
	window.open("/Wii/software/windklonoa/pop01_07.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop01_08(){
	window.open("/Wii/software/windklonoa/pop01_08.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop01_09(){
	window.open("/Wii/software/windklonoa/pop01_09.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop01_10(){
	window.open("/Wii/software/windklonoa/pop01_10.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}

function klonoa_pop02_01(){
	window.open("/Wii/software/windklonoa/pop02_01.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop02_02(){
	window.open("/Wii/software/windklonoa/pop02_02.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop02_03(){
	window.open("/Wii/software/windklonoa/pop02_03.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop02_04(){
	window.open("/Wii/software/windklonoa/pop02_04.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop02_05(){
	window.open("/Wii/software/windklonoa/pop02_05.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop02_06(){
	window.open("/Wii/software/windklonoa/pop02_06.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop02_07(){
	window.open("/Wii/software/windklonoa/pop02_07.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop02_08(){
	window.open("/Wii/software/windklonoa/pop02_08.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop02_09(){
	window.open("/Wii/software/windklonoa/pop02_09.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop02_10(){
	window.open("/Wii/software/windklonoa/pop02_10.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}

	function klonoa_pop03_01(){
	window.open("/Wii/software/windklonoa/pop03_01.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop03_02(){
	window.open("/Wii/software/windklonoa/pop03_02.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop03_03(){
	window.open("/Wii/software/windklonoa/pop03_03.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop03_04(){
	window.open("/Wii/software/windklonoa/pop03_04.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop03_05(){
	window.open("/Wii/software/windklonoa/pop03_05.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop03_06(){
	window.open("/Wii/software/windklonoa/pop03_06.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop03_07(){
	window.open("/Wii/software/windklonoa/pop03_07.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop03_08(){
	window.open("/Wii/software/windklonoa/pop03_08.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop03_09(){
	window.open("/Wii/software/windklonoa/pop03_09.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop03_10(){
	window.open("/Wii/software/windklonoa/pop03_10.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
	function klonoa_pop04_01(){
	window.open("/Wii/software/windklonoa/pop04_01.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop04_02(){
	window.open("/Wii/software/windklonoa/pop04_02.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop04_03(){
	window.open("/Wii/software/windklonoa/pop04_03.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop04_04(){
	window.open("/Wii/software/windklonoa/pop04_04.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop04_05(){
	window.open("/Wii/software/windklonoa/pop04_05.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop04_06(){
	window.open("/Wii/software/windklonoa/pop04_06.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop04_07(){
	window.open("/Wii/software/windklonoa/pop04_07.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop04_08(){
	window.open("/Wii/software/windklonoa/pop04_08.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop04_09(){
	window.open("/Wii/software/windklonoa/pop04_09.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop04_10(){
	window.open("/Wii/software/windklonoa/pop04_10.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}

function klonoa_pop05_01(){
	window.open("/Wii/software/windklonoa/pop05_01.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop05_02(){
	window.open("/Wii/software/windklonoa/pop05_02.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop05_03(){
	window.open("/Wii/software/windklonoa/pop05_03.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop05_04(){
	window.open("/Wii/software/windklonoa/pop05_04.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop05_05(){
	window.open("/Wii/software/windklonoa/pop05_05.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop05_06(){
	window.open("/Wii/software/windklonoa/pop05_06.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop05_07(){
	window.open("/Wii/software/windklonoa/pop05_07.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop05_08(){
	window.open("/Wii/software/windklonoa/pop05_08.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop05_09(){
	window.open("/Wii/software/windklonoa/pop05_09.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop05_10(){
	window.open("/Wii/software/windklonoa/pop05_10.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}

function klonoa_pop06_01(){
	window.open("/Wii/software/windklonoa/pop06_01.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop06_02(){
	window.open("/Wii/software/windklonoa/pop06_02.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop06_03(){
	window.open("/Wii/software/windklonoa/pop06_03.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop06_04(){
	window.open("/Wii/software/windklonoa/pop06_04.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop06_05(){
	window.open("/Wii/software/windklonoa/pop06_05.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop06_06(){
	window.open("/Wii/software/windklonoa/pop06_06.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop06_07(){
	window.open("/Wii/software/windklonoa/pop06_07.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop06_08(){
	window.open("/Wii/software/windklonoa/pop06_08.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop06_09(){
	window.open("/Wii/software/windklonoa/pop06_09.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}
function klonoa_pop06_10(){
	window.open("/Wii/software/windklonoa/pop06_10.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=593,height=483;")
}

function tvcm_windklonoa() {location.href='#none';}
/* 바람의 크로노아 end*/

/* Wii 채널 */
function wii_pic_intro(){location.href='/Wii/wiichannel/pic_intro.php';}
function wii_mii_intro(){location.href='/Wii/wiichannel/mii_intro.php';}
function wii_mii_exp(){location.href='/Wii/wiichannel/exp_list.php';}
function wii_shop_intro(){location.href='/Wii/wiichannel/wiishop_intro.php';}

/* wii의 wii링크 */
function wii_remote(){location.href='/Wii/wii/remote.php';}
function wii_connect24(){location.href='/Wii/wii/connect24.php';}
function wii_controler(){location.href='/Wii/wii/controler.php';}
function wii_peripheral(){location.href='/Wii/wii/peripheral.php';}
function wii_vconsol(){location.href='/Wii/wii/vconsol.php';}
function wii_vconsol_next(){location.href='/Wii/wii/vconsol_next.php';}

function wii_vconsol_familycom(){location.href='/Wii/wii/vconsol_familycom.php';}
function wii_vconsol_superfam(){location.href='/Wii/wii/vconsol_superfam.php';}
function wii_vconsol_nin64(){location.href='/Wii/wii/vconsol_nin64.php';}

function wii_point(){location.href='/common/point.php';}

function wii_event(){location.href='/Wii/event/event.php';}
function wii_event_end_list(){location.href='/Wii/event/event_end_list.php';}

function wii_channel_pic(){location.href='/Wii/wiichannel/channel_pic.php';}
function wii_channel_picview(){location.href='/Wii/wiichannel/channel_pic_view.php';}
function wii_channel_picsub01(){location.href='/Wii/wiichannel/channel_pic_sub01.php';}

function wii_channel_mii(){location.href='/Wii/wiichannel/channel.php#channel_mii';}

function wii_channel_wiishop(){location.href='/Wii/wiichannel/channel_wiishop.php';}
function wii_channel_wiishopview(){location.href='/Wii/wiichannel/channel_wiishop_view.php';}

function wii_channel_unseview(){location.href='/Wii/wiichannel/channel_unse.php';}
function wii_channel_speakeview(){location.href='/Wii/wiichannel/channel_speake.php';}

/* wii를 즐길때에는 */
function wii_enjoy(){location.href='/Wii/wii_enjoy.php';}

function software_wii_exp(){location.href='/Wii/software/first/exp_view.php?fpath=ANI123457007.swf';}
function software_wii_exp2(){location.href='/Wii/software/first/exp_list.php';}

/* wii Q&A */
function wii_customer(){location.href='/Wii/customer/customer.php';}

function wii_qna_list(){location.href='/Wii/customer/qna_list.php';}

function wii_qna01_sub01(){location.href='/Wii/customer/qna01_sub01.php';}
function wii_qna01_sub02(){location.href='/Wii/customer/qna01_sub02.php';}
function wii_qna01_sub03(){location.href='/Wii/customer/qna01_sub03.php';}
function wii_qna01_sub04(){location.href='/Wii/customer/qna01_sub04.php';}
function wii_qna01_sub05(){location.href='/Wii/customer/qna01_sub05.php';}

function wii_qna02_sub01(){location.href='/Wii/customer/qna02_sub01.php';}
function wii_qna02_sub02(){location.href='/Wii/customer/qna02_sub02.php';}
function wii_qna02_sub03(){location.href='/Wii/customer/qna02_sub03.php';}
function wii_qna02_sub04(){location.href='/Wii/customer/qna02_sub04.php';}
function wii_qna02_sub05(){location.href='/Wii/customer/qna02_sub05.php';}

function wii_qna03_sub01(){location.href='/Wii/customer/qna03_sub01.php';}
function wii_qna03_sub02(){location.href='/Wii/customer/qna03_sub02.php';}
function wii_qna03_sub03(){location.href='/Wii/customer/qna03_sub03.php';}
function wii_qna03_sub04(){location.href='/Wii/customer/qna03_sub04.php';}
function wii_qna03_sub05(){location.href='/Wii/customer/qna03_sub05.php';}
function wii_qna03_sub06(){location.href='/Wii/customer/qna03_sub06.php';}

function wii_qna04_sub01(){location.href='/Wii/customer/qna04_sub01.php';}
function wii_qna04_sub02(){location.href='/Wii/customer/qna04_sub02.php';}
function wii_qna04_sub03(){location.href='/Wii/customer/qna04_sub03.php';}

function wii_qna05_sub01(){location.href='/Wii/customer/qna05_sub01.php';}
function wii_qna05_sub02(){location.href='/Wii/customer/qna05_sub02.php';}
function wii_qna05_sub03(){location.href='/Wii/customer/qna05_sub03.php';}
function wii_qna05_sub04(){location.href='/Wii/customer/qna05_sub04.php';}
function wii_qna05_sub05(){location.href='/Wii/customer/qna05_sub05.php';}
function wii_qna05_sub06(){location.href='/Wii/customer/qna05_sub06.php';}

function wii_qna06_sub01(){location.href='/Wii/customer/qna06_sub01.php';}
function wii_qna06_sub02(){location.href='/Wii/customer/qna06_sub02.php';}
function wii_qna06_sub03(){location.href='/Wii/customer/qna06_sub03.php';}
function wii_qna06_sub04(){location.href='/Wii/customer/qna06_sub04.php';}
function wii_qna06_sub05(){location.href='/Wii/customer/qna06_sub05.php';}
function wii_qna06_sub06(){location.href='/Wii/customer/qna06_sub06.php';}
function wii_qna06_sub07(){location.href='/Wii/customer/qna06_sub07.php';}
function wii_qna06_sub08(){location.href='/Wii/customer/qna06_sub08.php';}
function wii_qna06_sub09(){location.href='/Wii/customer/qna06_sub09.php';}
function wii_qna06_sub10(){location.href='/Wii/customer/qna06_sub10.php';}
function wii_qna06_sub11(){location.href='/Wii/customer/qna06_sub11.php';}
function wii_qna06_sub12(){location.href='/Wii/customer/qna06_sub12.php';}
function wii_qna06_sub13(){location.href='/Wii/customer/qna06_sub13.php';}
function wii_qna06_sub14(){location.href='/Wii/customer/qna06_sub14.php';}
function wii_qna06_sub15(){location.href='/Wii/customer/qna06_sub15.php';}
function wii_qna06_sub16(){location.href='/Wii/customer/qna06_sub16.php';}
function wii_qna06_sub17(){location.href='/Wii/customer/qna06_sub17.php';}
function wii_qna06_sub18(){location.href='/Wii/customer/qna06_sub18.php';}

function wii_qna07_sub01(){location.href='/Wii/customer/qna07_sub01.php';}

function wii_qna08_sub01(){location.href='/Wii/customer/qna08_sub01.php';}
function wii_qna08_sub02(){location.href='/Wii/customer/qna08_sub02.php';}
function wii_qna08_sub03(){location.href='/Wii/customer/qna08_sub03.php';}
function wii_qna08_sub04(){location.href='/Wii/customer/qna08_sub04.php';}
function wii_qna08_sub05(){location.href='/Wii/customer/qna08_sub05.php';}

function wii_qna09_sub01(){location.href='/Wii/customer/qna09_sub01.php';}
function wii_qna09_sub02(){location.href='/Wii/customer/qna09_sub02.php';}
function wii_qna09_sub03(){location.href='/Wii/customer/qna09_sub03.php';}
function wii_qna09_sub04(){location.href='/Wii/customer/qna09_sub04.php';}
function wii_qna09_sub05(){location.href='/Wii/customer/qna09_sub05.php';}
function wii_qna09_sub06(){location.href='/Wii/customer/qna09_sub06.php';}
function wii_qna09_sub07(){location.href='/Wii/customer/qna09_sub07.php';}
function wii_qna09_sub08(){location.href='/Wii/customer/qna09_sub08.php';}
function wii_qna09_sub09(){location.href='/Wii/customer/qna09_sub09.php';}

function wii_qna10_sub01(){location.href='/Wii/customer/qna10_sub01.php';}
function wii_qna10_sub02(){location.href='/Wii/customer/qna10_sub02.php';}
function wii_qna10_sub03(){location.href='/Wii/customer/qna10_sub03.php';}

function wii_qna_sub_wiifit01(){location.href='/Wii/customer/qna_sub_wiifit01.php';}
function wii_qna_sub_wiifit02(){location.href='/Wii/customer/qna_sub_wiifit02.php';}
function wii_qna_sub_wiifit03(){location.href='/Wii/customer/qna_sub_wiifit03.php';}
function wii_qna_sub_wiifit04(){location.href='/Wii/customer/qna_sub_wiifit04.php';}
function wii_qna_sub_wiifit05(){location.href='/Wii/customer/qna_sub_wiifit05.php';}


/* wii 관련 Q&A */
function wii_internet01(){location.href='/Wii/customer/internet/howto_connect.php';}
function wii_internet02(){location.href='/Wii/customer/internet/connect_image.php';}
function wii_internet03(){location.href='/Wii/customer/internet/chart.php';}
function wii_internet04(){location.href='/common/ap_list.php';}

/* 버추얼콘솔 상세 */
function wii_vc_zeldalegend(){location.href='/Wii/wii/vconsol/zeldalegend/zeldalegend_01.php';}
function wii_vc_jmf(){location.href='/Wii/wii/vconsol/jmf/jmf_01.php';}
function wii_vc_kirbyball(){location.href='/Wii/wii/vconsol/kirbyball/kirbyball_01.php';}
function wii_vc_lolo_adventures(){location.href='/Wii/wii/vconsol/lolo_adventures/lolo_adventures_01.php';}
function wii_vc_hotschool_soccer(){location.href='/Wii/wii/vconsol/hotschool_soccer/hotschool_soccer_01.php';}
function wii_vc_rtype3(){location.href='/Wii/wii/vconsol/r-type3/r-type3_01.php';}
function wii_vc_mariobros(){location.href='/Wii/wii/vconsol/mariobros/mariobros_01.php';}
function wii_vc_1080_snowboarding(){location.href='/Wii/wii/vconsol/1080_snowboarding/1080_snowboarding_01.php';}
function wii_vc_doncountry2(){location.href='/Wii/wii/vconsol/doncountry2/doncountry2_01.php';}
function wii_vc_yoshicookie(){location.href='/Wii/wii/vconsol/yoshicookie/yoshicookie_01.php';}
function wii_vc_kidicarus(){location.href='/Wii/wii/vconsol/kidicarus/kidicarus_01.php';}
function wii_vc_hotschool2(){location.href='/Wii/wii/vconsol/hotschool2/hotschool2_01.php';}
function wii_vc_city(){location.href='/Wii/wii/vconsol/city/city_01.php';}
function wii_vc_penullopong(){location.href='/Wii/wii/vconsol/penullopong/penullopong_01.php';}
function wii_vc_island(){location.href='/Wii/wii/vconsol/island/island_01.php';}
function wii_vc_kerby64(){location.href='/Wii/wii/vconsol/kerby64/kerby64_01.php';}
function wii_vc_nes(){location.href='/Wii/wii/vconsol/nes/nes_01.php';}
function wii_vc_pacman(){location.href='/Wii/wii/vconsol/pacman/pacman_01.php';}
function wii_vc_rtype(){location.href='/Wii/wii/vconsol/rtype/rtype_01.php';}
function wii_vc_yoshi(){location.href='/Wii/wii/vconsol/yoshi/yoshi_01.php';}
function wii_vc_xevious(){location.href='/Wii/wii/vconsol/xevious/xevious_01.php';}
function wii_vc_superUSA(){location.href='/Wii/wii/vconsol/superUSA/superUSA_01.php';}
function wii_vc_galaga(){location.href='/Wii/wii/vconsol/galaga/galaga_01.php';}
function wii_vc_bubble(){location.href='/Wii/wii/vconsol/bubble/bubble_01.php';}
function wii_vc_fzero(){location.href='/Wii/wii/vconsol/fzero/fzero_01.php';}
function wii_vc_starfox64(){location.href='/Wii/wii/vconsol/starfox64/starfox64_01.php';}
function wii_vc_zelda(){location.href='/Wii/wii/vconsol/zelda/zelda_01.php';}
function wii_vc_supermariob3(){location.href='/Wii/wii/vconsol/supermariob3/supermariob3_01.php';}
function wii_vc_doncountry(){location.href='/Wii/wii/vconsol/doncountry/doncountry_01.php';}
function wii_vc_hotschool(){location.href='/Wii/wii/vconsol/hotschool/hotschool_01.php';}
function wii_vc_donkeykong(){location.href='/Wii/wii/vconsol/donkeykong/donkeykong_01.php';}
function wii_vc_supermariobros(){location.href='/Wii/wii/vconsol/supermariob/supermariob_01.php';}
function wii_vc_star(){location.href='/Wii/wii/vconsol/star/star_01.php';}
function wii_vc_supermarioworld(){location.href='/Wii/wii/vconsol/supermariow/supermariow_01.php';}
function wii_vc_mariokart64(){location.href='/Wii/wii/vconsol/kart64/kart64_01.php';}
function wii_vc_supermetroid(){location.href='/Wii/wii/vconsol/supermetroid/supermetroid_01.php';}
function wii_vc_contra3(){location.href='/Wii/wii/vconsol/contra3/contra3_01.php';}
function wii_vc_antarctic(){location.href='/Wii/wii/vconsol/antarctic/antarctic_01.php';}
function wii_vc_gradius3(){location.href='/Wii/wii/vconsol/gradius3/gradius3_01.php';}
function wii_vc_valken(){location.href='/Wii/wii/vconsol/valken/valken_01.php';}

/* 버추얼콘솔 팝업 */
function wii_vc_zeldalegend_pop(){
	window.open("/Wii/wii/vconsol/zeldalegend/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_jmf_pop(){
	window.open("/Wii/wii/vconsol/jmf/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_kirbyball_pop(){
	window.open("/Wii/wii/vconsol/kirbyball/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_lolo_adventures_pop(){
	window.open("/Wii/wii/vconsol/lolo_adventures/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_hotschool_soccer_pop(){
	window.open("/Wii/wii/vconsol/hotschool_soccer/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_rtype3_pop(){
	window.open("/Wii/wii/vconsol/r-type3/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_mariobros_pop(){
	window.open("/Wii/wii/vconsol/mariobros/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_1080_snowboarding_pop(){
	window.open("/Wii/wii/vconsol/1080_snowboarding/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_doncountry2_pop(){
	window.open("/Wii/wii/vconsol/doncountry2/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_yoshicookie_pop(){
	window.open("/Wii/wii/vconsol/yoshicookie/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_kidicarus_pop(){
	window.open("/Wii/wii/vconsol/kidicarus/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_hotschool2_pop(){
	window.open("/Wii/wii/vconsol/hotschool2/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_city_pop(){
	window.open("/Wii/wii/vconsol/city/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_penullopong_pop(){
	window.open("/Wii/wii/vconsol/penullopong/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}

function wii_vc_island_pop(){
	window.open("/Wii/wii/vconsol/island/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_kerby64_pop(){
	window.open("/Wii/wii/vconsol/kerby64/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}

function wii_vc_nes_pop(){
	window.open("/Wii/wii/vconsol/nes/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_pacman_pop(){
	window.open("/Wii/wii/vconsol/pacman/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}

function wii_vc_rtype_pop(){
	window.open("/Wii/wii/vconsol/rtype/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_yoshi_pop(){
	window.open("/Wii/wii/vconsol/yoshi/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}

function wii_vc_xevious_pop(){
	window.open("/Wii/wii/vconsol/xevious/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}

function wii_vc_superUSA_pop(){
	window.open("/Wii/wii/vconsol/superUSA/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_galaga_pop(){
	window.open("/Wii/wii/vconsol/galaga/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}

function wii_vc_bubble_pop(){
	window.open("/Wii/wii/vconsol/bubble/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_fzero_pop(){
	window.open("/Wii/wii/vconsol/fzero/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_starfox64_pop(){
	window.open("/Wii/wii/vconsol/starfox64/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_zelda_pop(){
	window.open("/Wii/wii/vconsol/zelda/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}

function wii_vc_supermariob3_pop(){
	window.open("/Wii/wii/vconsol/supermariob3/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_doncountry_pop(){
	window.open("/Wii/wii/vconsol/doncountry/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_hotschool_pop(){
	window.open("/Wii/wii/vconsol/hotschool/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}

function wii_vc_donkeykong_pop(){
	window.open("/Wii/wii/vconsol/donkeykong/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_supermariobros_pop(){
	window.open("/Wii/wii/vconsol/supermariob/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_star_pop(){
	window.open("/Wii/wii/vconsol/star/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_supermarioworld_pop(){
	window.open("/Wii/wii/vconsol/supermariow/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_mariokart64_pop(){
	window.open("/Wii/wii/vconsol/kart64/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_supermetroid_pop(){
	window.open("/Wii/wii/vconsol/supermetroid/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_contra3_pop(){
	window.open("/Wii/wii/vconsol/contra3/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_antarctic_pop(){
	window.open("/Wii/wii/vconsol/antarctic/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}

function wii_vc_gradius3_pop(){
	window.open("/Wii/wii/vconsol/gradius3/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}
function wii_vc_valken_pop(){
	window.open("/Wii/wii/vconsol/valken/infomovie_pop.php","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=490,height=530;")
}

function wii_vc_pop(){
	window.open("/Wii/wii/vconsol/pop/vconsol_pop01.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=100,width=550,height=505;")
}


/* DS관련 */
function DS_tvcm_msOlympic(){location.href='/DS/tvcm/msOlympic_tvcm01.php';}
function DS_tvcm_brain2(){location.href='/DS/tvcm/brain2_tvcm01.php';}

/* 토익DS */
function DS_toeicDS(){location.href='/DS/soft/toeicDS/main.php';}
function DS_toeicDS_submain(){location.href='/DS/soft/toeicDS/submain.php';}
function DS_toeicDS_sub01(){location.href='/DS/soft/toeicDS/sub01.php';}
function DS_toeicDS_sub02(){location.href='/DS/soft/toeicDS/sub02.php';}

function DS_toeicDS_sub03(){location.href='/DS/soft/toeicDS/sub03.php';}
function DS_toeicDS_sub04(){location.href='/DS/soft/toeicDS/sub04.php';}
function DS_toeicDS_sub05(){location.href='/DS/soft/toeicDS/sub05.php';}

function DS_toeicDS_intro(){location.href='/DS/soft/toeicDS/intro.php';}
/* 토익DS */

/* 포켓몬 불가사의 던전 시간의 탐험대 · 어둠의 탐험대 */
function DS_PokemonDG_ex(){location.href='/DS/soft/PokemonDG_ex/main.php';}
function DS_PokemonDG_ex_submain(){location.href='/DS/soft/PokemonDG_ex/submain.php';}
function DS_PokemonDG_ex_sub01(){location.href='/DS/soft/PokemonDG_ex/sub01.php';}
function DS_PokemonDG_ex_sub02(){location.href='/DS/soft/PokemonDG_ex/sub02.php';}
function DS_PokemonDG_ex_sub03(){location.href='/DS/soft/PokemonDG_ex/sub03.php';}
function DS_PokemonDG_ex_sub04(){location.href='/DS/soft/PokemonDG_ex/sub04.php';}

function DS_PokemonDG_ex_tvcm01(){location.href='/DS/tvcm/PokemonDG_ex_tvcm01.php';}
function DS_PokemonDG_ex_tvcm02(){location.href='/DS/tvcm/PokemonDG_ex_tvcm02.php';}

function DS_PokemonDG_ex_intro(){location.href='/DS/soft/PokemonDG_ex/intro.php';}

function DS_PokemonDG_ex_pop01(){
window.open("/DS/soft/PokemonDG_ex/pop01.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=0,left=0,width=643,height=671;")
}

/* 호텔더스크의비밀*/
function DS_hoteldusk_secret(){location.href='/DS/soft/hoteldusk_secret/main.php';}
function DS_hoteldusk_secret_submain(){location.href='/DS/soft/hoteldusk_secret/submain.php';}
function DS_hoteldusk_secret_sub01(){location.href='/DS/soft/hoteldusk_secret/sub01.php';}
function DS_hoteldusk_secret_sub02(){location.href='/DS/soft/hoteldusk_secret/sub02.php';}
function DS_hoteldusk_secret_sub03(){location.href='/DS/soft/hoteldusk_secret/sub03.php';}
function DS_hoteldusk_secret_sub04(){location.href='/DS/soft/hoteldusk_secret/sub04.php';}

function DS_hoteldusk_secret_tvcm(){location.href='/DS/tvcm/hoteldusk_secret_tvcm01.php';}

function DS_hoteldusk_secret_intro(){location.href='/DS/soft/hoteldusk_secret/intro.php';}

/*매일 매일 DS 두뇌트레이닝*/
function DS_brain_tvcm(){location.href='/DS/tvcm/brain_tvcm.php';}
function DS_brain_n_tvcm01(){location.href='/DS/tvcm/brain_n_tvcm01.php';}
function DS_brain_n_tvcm02(){location.href='/DS/tvcm/brain_n_tvcm02.php';}
function DS_brain_n_tvcm03(){location.href='/DS/tvcm/brain_n_tvcm03.php';}
function DS_brain_n_tvcm04(){location.href='/DS/tvcm/brain_n_tvcm04.php';}


/*마법천자DS*/
function DS_magic_hanjaDS(){location.href='/DS/soft/magic_hanjaDS/main.php';}
function DS_magic_hanjaDS_submain(){location.href='/DS/soft/magic_hanjaDS/submain.php';}
function DS_magic_hanjaDS_sub01(){location.href='/DS/soft/magic_hanjaDS/sub01.php';}
function DS_magic_hanjaDS_sub02(){location.href='/DS/soft/magic_hanjaDS/sub02.php';}
function DS_magic_hanjaDS_sub03(){location.href='/DS/soft/magic_hanjaDS/sub03.php';}
function DS_magic_hanjaDS_sub04(){location.href='/DS/soft/magic_hanjaDS/sub04.php';}
function DS_magic_hanjaDS_sub05(){location.href='/DS/soft/magic_hanjaDS/sub05.php';}

function DS_magic_hanjaDS_tvcm(){location.href='/DS/tvcm/magic_hanjaDS_tvcm.php';}
function DS_magic_hanjaDS_tvcm02(){location.href='/DS/tvcm/magic_hanjaDS_tvcm02.php';}
function DS_magic_hanjaDS_tvcm03(){location.href='/DS/tvcm/magic_hanjaDS_tvcm03.php';}
function DS_magic_hanjaDS_expview(){location.href='/DS/soft/magic_hanjaDS/exp_view01.php';}
function DS_magic_hanjaDS_intro(){location.href='/DS/soft/magic_hanjaDS/intro.php';}
/*마법천자DS*/

/*라그나로크*/
function DS_ragnarokDS(){location.href='/DS/soft/ragnarokDS/main.php';}
function DS_ragnarokDS_submain(){location.href='/DS/soft/ragnarokDS/submain.php';}
function DS_ragnarokDS_sub01(){location.href='/DS/soft/ragnarokDS/sub01.php';}
function DS_ragnarokDS_sub02(){location.href='/DS/soft/ragnarokDS/sub02.php';}
function DS_ragnarokDS_sub03(){location.href='/DS/soft/ragnarokDS/sub03.php';}
function DS_ragnarokDS_sub04(){location.href='/DS/soft/ragnarokDS/sub04.php';}
function DS_ragnarokDS_sub05(){location.href='/DS/soft/ragnarokDS/sub05.php';}


function ragnarokDS(){window.open('http://www.ragnarok.co.kr/ds','_blank');}
function DS_ragnarokDS_tvcm(){location.href='#none';}
function DS_ragnarokDS_intro(){location.href='#none';}
/*라그나로크*/

/*포켓몬스터Pt 기라티나*/
function DS_PokemonPt(){location.href='/DS/soft/PokemonPt/main.php';}
function DS_PokemonPt_submain(){location.href='/DS/soft/PokemonPt/submain.php';}
function DS_PokemonPt_sub01(){location.href='/DS/soft/PokemonPt/sub01.php';}
function DS_PokemonPt_sub02(){location.href='/DS/soft/PokemonPt/sub02.php';}
function DS_PokemonPt_sub03(){location.href='/DS/soft/PokemonPt/sub03.php';}
function DS_PokemonPt_sub04(){location.href='/DS/soft/PokemonPt/sub04.php';}

function DS_PokemonPt_tvcm01(){location.href='/DS/tvcm/PokemonPt_tvcm01.php';}
function DS_PokemonPt_tvcm02(){location.href='/DS/tvcm/PokemonPt_tvcm02.php';}
function DS_PokemonPt_intro(){location.href='/DS/soft/PokemonPt/intro.php';}
/*포켓몬스터Pt 기라티나*/

/*소닉러시*/
function DS_sonicrush(){location.href='/DS/soft/sonicrush/main.php';}
function DS_sonicrush_submain(){location.href='/DS/soft/sonicrush/submain.php';}
function DS_sonicrush_sub01(){location.href='/DS/soft/sonicrush/sub01.php';}
function DS_sonicrush_sub02(){location.href='/DS/soft/sonicrush/sub02.php';}
function DS_sonicrush_sub03(){location.href='/DS/soft/sonicrush/sub03.php';}
function DS_sonicrush_sub04(){location.href='/DS/soft/sonicrush/sub04.php';}
function DS_sonicrush_sub05(){location.href='/DS/soft/sonicrush/sub05.php';}

function DS_sonicrush_tvcm01(){location.href='/DS/tvcm/sonicrush_tvcm01.php';}
function DS_sonicrush_tvcm02(){location.href='/DS/tvcm/sonicrush_tvcm02.php';}

function DS_sonicrush_intro(){location.href='/DS/soft/sonicrush/intro.php';}

/*소닉러시*/

/* 리듬 세상 */
function DS_rhythm_world(){location.href='/DS/soft/rhythm_world/main.php';}
function DS_rhythm_world_submain(){location.href='/DS/soft/rhythm_world/main.php?nn=1';}
function DS_rhythm_world_sub01(){location.href='/DS/soft/rhythm_world/sub01.php';}
function DS_rhythm_world_sub02(){location.href='/DS/soft/rhythm_world/sub02.php';}
function DS_rhythm_world_sub03(){location.href='/DS/soft/rhythm_world/sub03.php';}

function DS_rhythm_world_tvcm(){location.href='/DS/tvcm/rhythm_world_tvcm.php';}
function DS_rhythm_world_tvcm01(){location.href='/DS/tvcm/rhythm_world_tvcm01.php';}
function DS_rhythm_world_tvcm02(){location.href='/DS/tvcm/rhythm_world_tvcm02.php';}
function DS_rhythm_world_tvcm03(){location.href='/DS/tvcm/rhythm_world_tvcm03.php';}
function DS_rhythm_world_tvcm04(){location.href='/DS/tvcm/rhythm_world_tvcm04.php';}

function DS_rhythm_world_exp(){location.href='/DS/soft/rhythm_world/exp_list.php';}

function DS_rhythm_world_intro(){location.href='/DS/soft/rhythm_world/intro.php';}
/* 리듬 세상 */

/* DS 마리오와 소닉 밴쿠버 동계올림픽™ start */
function DS_msvOlympic2010(){location.href='/DS/soft/msvOlympic2010/main.php';}
function DS_msvOlympic2010_submain(){location.href='/DS/soft/msvOlympic2010/submain.php';}
function DS_msvOlympic2010_sub01(){location.href='/DS/soft/msvOlympic2010/olympic/game.php';}
function DS_msvOlympic2010_sub02(){location.href='/DS/soft/msvOlympic2010/dream/dream.php';}
function DS_msvOlympic2010_sub03(){location.href='/DS/soft/msvOlympic2010/sub03.php';}
function DS_msvOlympic2010_sub04(){location.href='/DS/soft/msvOlympic2010/sub04.php';}
function DS_msvOlympic2010_sub05(){location.href='/DS/soft/msvOlympic2010/sub05.php';}

function DS_msvOlympic2010_intro(){location.href='/Wii/software/msvOlympic2010/intro.php';}
function tvcm_DS_msvOlympic2010_01(){location.href='/Wii/tvcm/tvcm_msvOlympic2010_01.php';}
function tvcm_DS_msvOlympic2010_02(){location.href='/Wii/tvcm/tvcm_msvOlympic2010_02.php';}
function tvcm_DS_msvOlympic2010_03(){location.href='/Wii/tvcm/tvcm_msvOlympic2010_03.php';}
function tvcm_DS_msvOlympic2010_04(){location.href='/Wii/tvcm/tvcm_msvOlympic2010_04.php';}

function DS_msOlympic_explist(){location.href='/Wii/software/msOlympic/exp_list.php';}
function DS_msOlympic_expview(){location.href='/Wii/software/msOlympic/exp_view.php?fpath=ANI123457007.swf';}
/* DS 마리오와 소닉 밴쿠버 동계올림픽™ end */

/* 포켓몬스터 하트골드·소울실버 start */
function DS_Pokemon_hgss(){location.href='/DS/soft/pokemon_hgss/main.php';}
function DS_Pokemon_hgss_tvcm(){location.href='/DS/tvcm/Pokemon_hgss_tvcm.php';}
/* 포켓몬스터 하트골드·소울실버 end */

/* DS series start */
function DS_series(){location.href='/DS/series.php';}
function DSi_intro(){location.href='/DSi/intro/DSi_intro1.php';}

function DSi_camera(){location.href='/DSi/intro/DSi_camera.php';}
function DSi_sound(){location.href='/DSi/intro/DSi_sound.php';}
function DSi_shop(){location.href='/DSi/intro/DSi_shop.php';}
function DSi_ware(){location.href='/DS/soft/DSiWare/DSiWare.php';}

function DS_customer(){location.href='/DS/customer/customer.php';}
function DS_qna_list(){location.href='/DS/customer/qna_list.php';}

function DS_internet(){location.href='/DS/customer/internet/howto_connect.php';}
function ap_list(){location.href='/common/ap_list.php';}
function point(){location.href='/common/point.php';}
/* DS series end */


/* 메이플스토리DS start */
//function DS_maplestoryDS(){location.href='/DS/soft/maplestoryDS/teaser.php';}
function DS_maplestoryDS(){location.href='/DS/soft/maplestoryDS/main.php';}
function DS_maplestoryDS_tvcm01(){location.href='/DS/tvcm/maplestoryDS_tvcm01.php';}
function DS_maplestoryDS_tvcm02(){location.href='/DS/tvcm/maplestoryDS_tvcm02.php';}
function DS_maplestoryDS_intro01(){location.href='/DS/soft/maplestoryDS/intro01.php';}
function DS_maplestoryDS_intro02(){location.href='/DS/soft/maplestoryDS/intro02.php';}
/* 메이플스토리DS end */


/* 마리오&루이지 RPG 시간의 파트너 start */
function DS_mario_luigi_rpg(){location.href='/DS/soft/mario_luigi_rpg/main.php';}
function DS_mario_luigi_rpg_submain(){location.href='/DS/soft/mario_luigi_rpg/submain.php';}
function DS_mario_luigi_rpg_sub01(){location.href='/DS/soft/mario_luigi_rpg/sub01.php';}
function DS_mario_luigi_rpg_sub02(){location.href='/DS/soft/mario_luigi_rpg/sub02.php';}
function DS_mario_luigi_rpg_sub03(){location.href='/DS/soft/mario_luigi_rpg/sub03.php';}
function DS_mario_luigi_rpg_sub04(){location.href='/DS/soft/mario_luigi_rpg/sub04_01.php';}
function DS_mario_luigi_rpg_sub05(){location.href='/DS/soft/mario_luigi_rpg/sub05.php';}
function DS_mario_luigi_rpg_sub06(){location.href='/DS/soft/mario_luigi_rpg/sub06_01.php';}

function DS_mario_luigi_rpg_tvcm01(){location.href='/DS/tvcm/mario_luigi_rpg_tvcm01.php';}
function DS_mario_luigi_rpg_tvcm02(){location.href='/DS/tvcm/mario_luigi_rpg_tvcm02.php';}
function DS_mario_luigi_rpg_tvcm03(){location.href='/DS/tvcm/mario_luigi_rpg_tvcm03.php';}
function DS_mario_luigi_rpg_intro(){location.href='/DS/soft/mario_luigi_rpg/intro.php';}
/* 마리오&루이지 RPG 시간의 파트너 end */

/* 나만의 컬렉션 Girls Style start */
function DS_GirlsStyle(){location.href='/DS/soft/GirlsStyle/main.php';}
function DS_GirlsStyle_submain(){location.href='/DS/soft/GirlsStyle/submain.php';}
function DS_GirlsStyle_sub01_01(){location.href='/DS/soft/GirlsStyle/sub01_01.php';}
function DS_GirlsStyle_sub01_02(){location.href='/DS/soft/GirlsStyle/sub01_02.php';}
function DS_GirlsStyle_sub01_03(){location.href='/DS/soft/GirlsStyle/sub01_03.php';}
function DS_GirlsStyle_sub02(){location.href='/DS/soft/GirlsStyle/sub02.php';}
function DS_GirlsStyle_sub03(){location.href='/DS/soft/GirlsStyle/sub03.php';}
function DS_GirlsStyle_sub04(){location.href='/DS/soft/GirlsStyle/sub04.php';}
function DS_GirlsStyle_sub05(){location.href='/DS/soft/GirlsStyle/sub05.php';}
function DS_GirlsStyle_sub06(){location.href='/DS/soft/GirlsStyle/sub06.php';}

function DS_GirlsStyle_tvcm01(){location.href='/DS/tvcm/GirlsStyle_tvcm01.php';}
function DS_GirlsStyle_tvcm02(){location.href='/DS/tvcm/GirlsStyle_tvcm02.php';}
function DS_GirlsStyle_tvcm03(){location.href='/DS/tvcm/GirlsStyle_tvcm03.php';}
function DS_GirlsStyle_intro(){location.href='/DS/soft/GirlsStyle/intro.php';}
/* 나만의 컬렉션 Girls Style end */

/*숨은 소질을 깨우는 그림교실*/
function DS_picture_class(){location.href='/DS/soft/picture_class/main.php';}
function DS_picture_class_sub01(){location.href='/DS/soft/picture_class/sub01.php';}
function DS_picture_class_sub02(){location.href='/DS/soft/picture_class/sub02.php';}
function DS_picture_class_sub03(){location.href='/DS/soft/picture_class/sub03.php';}
function DS_picture_class_sub04(){location.href='/DS/soft/picture_class/sub04.php';}
function DS_picture_class_sub05(){location.href='/DS/soft/picture_class/sub05.php';}

function DS_picture_class_tvcm01(){location.href='/DS/tvcm/picture_class_tvcm01.php';}
function DS_picture_class_tvcm02(){location.href='/DS/tvcm/picture_class_tvcm02.php';}
function DS_picture_class_tvcm03(){location.href='/DS/tvcm/picture_class_tvcm03.php';}

function DS_picture_movie01(){location.href='/DS/soft/picture_class/picture_movie01.php';}
function DS_picture_movie02(){location.href='/DS/soft/picture_class/picture_movie02.php';}
function DS_picture_movie03(){location.href='/DS/soft/picture_class/picture_movie03.php';}

function DS_picture_class_intro(){location.href='/DS/soft/picture_class/intro.php';}
/*숨은 소질을 깨우는 그림교실*/

/* Pucca Power Up */
function DS_PuccaPowerUp(){location.href='/DS/soft/PuccaPowerUp/main.php';}
function DS_PuccaPowerUp_submain(){location.href='/DS/soft/PuccaPowerUp/submain.php';}
function DS_PuccaPowerUp_sub01(){location.href='/DS/soft/PuccaPowerUp/sub01.php';}
function DS_PuccaPowerUp_sub02(){location.href='/DS/soft/PuccaPowerUp/sub02.php';}
function DS_PuccaPowerUp_sub03(){location.href='/DS/soft/PuccaPowerUp/sub03.php';}
function DS_PuccaPowerUp_sub04(){location.href='/DS/soft/PuccaPowerUp/sub04.php';}

function DS_PuccaPowerUp_intro(){location.href='/DS/soft/PuccaPowerUp/intro.php';}
/* Pucca Power Up */

/* Wii Title */
/* WII 대난투 스매시브라더스X*/
function software_smashbrosx(){location.href='/Wii/software/smashbrosx/main.php';}
function software_smashbrosx_submain(){location.href='/Wii/software/smashbrosx/submain.php';}
function software_smashbrosx_sub01(){location.href='/Wii/software/smashbrosx/sub01.php';}
function software_smashbrosx_sub02(){location.href='/Wii/software/smashbrosx/sub02.php';}
function software_smashbrosx_sub03(){location.href='/Wii/software/smashbrosx/sub03.php';}
function software_smashbrosx_sub04(){location.href='/Wii/software/smashbrosx/sub04.php';}
function software_smashbrosx_sub05(){location.href='/Wii/software/smashbrosx/sub05.php';}

function software_smashbrosx_wifi(){location.href='/DS/soft/wifi/wifi_connection.php';}
function software_smashbrosx_intro(){location.href='/Wii/software/smashbrosx/intro.php';}
function tvcm_smashbrosx_01(){location.href='/Wii/tvcm/tvcm_smashbrosx01.php';}
function tvcm_smashbrosx_02(){location.href='/Wii/tvcm/tvcm_smashbrosx02.php';}
function tvcm_smashbrosx_03(){location.href='/Wii/tvcm/tvcm_smashbrosx03.php';}
function tvcm_smashbrosx_04(){location.href='/Wii/tvcm/tvcm_smashbrosx04.php';}

function smashbrosx_pop01(){window.open("sub04_pop01.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02(){window.open("sub04_pop02.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop03(){window.open("sub04_pop03.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop04(){window.open("sub04_pop04.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop05(){window.open("sub04_pop05.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop06(){window.open("sub04_pop06.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop07(){window.open("sub04_pop07.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop08(){window.open("sub04_pop08.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop09(){window.open("sub04_pop09.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop10(){window.open("sub04_pop10.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop11(){window.open("sub04_pop11.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop12(){window.open("sub04_pop12.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop13(){window.open("sub04_pop13.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop14(){window.open("sub04_pop14.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop15(){window.open("sub04_pop15.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop16(){window.open("sub04_pop16.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop17(){window.open("sub04_pop17.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop18(){window.open("sub04_pop18.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop19(){window.open("sub04_pop19.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop20(){window.open("sub04_pop20.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop21(){window.open("sub04_pop21.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop22(){window.open("sub04_pop22.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop23(){window.open("sub04_pop23.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}


function smashbrosx_pop02_01(){window.open("sub05_pop01.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_02(){window.open("sub05_pop02.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_03(){window.open("sub05_pop03.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_04(){window.open("sub05_pop04.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_05(){window.open("sub05_pop05.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_06(){window.open("sub05_pop06.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_07(){window.open("sub05_pop07.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_08(){window.open("sub05_pop08.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_09(){window.open("sub05_pop09.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_10(){window.open("sub05_pop10.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_11(){window.open("sub05_pop11.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_12(){window.open("sub05_pop12.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_13(){window.open("sub05_pop13.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_14(){window.open("sub05_pop14.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_15(){window.open("sub05_pop15.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_16(){window.open("sub05_pop16.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_17(){window.open("sub05_pop17.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_18(){window.open("sub05_pop18.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_19(){window.open("sub05_pop19.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_20(){window.open("sub05_pop20.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_21(){window.open("sub05_pop21.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_22(){window.open("sub05_pop22.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_23(){window.open("sub05_pop23.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_24(){window.open("sub05_pop24.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_25(){window.open("sub05_pop25.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_26(){window.open("sub05_pop26.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_27(){window.open("sub05_pop27.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_28(){window.open("sub05_pop28.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_29(){window.open("sub05_pop29.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}
function smashbrosx_pop02_30(){window.open("sub05_pop30.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=597,height=380;")}


function smashbrosx_pop03_01(){window.open("sub02_pop01.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=421,height=342;")}
function smashbrosx_pop03_02(){window.open("sub02_pop02.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=421,height=342;")}
function smashbrosx_pop03_03(){window.open("sub02_pop03.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=421,height=342;")}
function smashbrosx_pop03_04(){window.open("sub02_pop04.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=421,height=342;")}
function smashbrosx_pop03_05(){window.open("sub02_pop05.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=421,height=342;")}
function smashbrosx_pop03_06(){window.open("sub02_pop06.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=421,height=342;")}
function smashbrosx_pop03_07(){window.open("sub02_pop07.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=421,height=342;")}
function smashbrosx_pop03_08(){window.open("sub02_pop08.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=421,height=342;")}
function smashbrosx_pop03_09(){window.open("sub02_pop09.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=421,height=342;")}
function smashbrosx_pop03_10(){window.open("sub02_pop10.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=421,height=342;")}
function smashbrosx_pop03_11(){window.open("sub02_pop11.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=421,height=342;")}
function smashbrosx_pop03_12(){window.open("sub02_pop12.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=421,height=342;")}
function smashbrosx_pop03_13(){window.open("sub02_pop13.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=421,height=342;")}
function smashbrosx_pop03_14(){window.open("sub02_pop14.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=421,height=342;")}

/* WII Sports Resort */
function software_wiisports_resort(){location.href='/Wii/software/wiisports_resort/main.php';}
function software_wiisports_resort_submain(){location.href='/Wii/software/wiisports_resort/submain.php';}
function software_wiisports_resort_sub01(){location.href='/Wii/software/wiisports_resort/sub01.php';}
function software_wiisports_resort_sub02(){location.href='/Wii/software/wiisports_resort/sub02.php';}
function software_wiisports_resort_sub03(){location.href='/Wii/software/wiisports_resort/sub03.php';}

function software_wiisports_resort_intro(){location.href='/Wii/software/wiisports_resort/intro.php';}
function tvcm_wiisports_resort01(){location.href='/Wii/tvcm/tvcm_wiisports_resort01.php';}
function tvcm_wiisports_resort02(){location.href='/Wii/tvcm/tvcm_wiisports_resort02.php';}
function tvcm_wiisports_resort03(){location.href='/Wii/tvcm/tvcm_wiisports_resort03.php';}
function tvcm_wiisports_resort04(){location.href='/Wii/tvcm/tvcm_wiisports_resort04.php';}
function tvcm_wiisports_resort05(){location.href='/Wii/tvcm/tvcm_wiisports_resort05.php';}
function tvcm_wiisports_resort06(){location.href='/Wii/tvcm/tvcm_wiisports_resort06.php';}
function exp_wiisports_resort01(){location.href='/Wii/software/wiisports_resort/exp_view01.php';}
function exp_wiisports_resort02(){location.href='/Wii/software/wiisports_resort/exp_view02.php';}
/* WII Sports Resort */

/* WII New super mario bros */
function software_nsmbwii(){location.href='/Wii/software/nsmbwii/main.php';}
function software_nsmbwii_submain(){location.href='/Wii/software/nsmbwii/submain.php';}
function software_nsmbwii_sub01(){location.href='/Wii/software/nsmbwii/sub01.php';}
function software_nsmbwii_sub02(){location.href='/Wii/software/nsmbwii/sub02.php';}
function software_nsmbwii_sub03(){location.href='/Wii/software/nsmbwii/sub03.php';}
function software_nsmbwii_sub04(){location.href='/Wii/software/nsmbwii/sub04.php';}
function software_nsmbwii_sub05(){location.href='/Wii/software/nsmbwii/sub05.php';}
function software_nsmbwii_sub06(){location.href='/Wii/software/nsmbwii/sub06.php';}
function software_nsmbwii_sub07(){location.href='/Wii/software/nsmbwii/sub07.php';}

function software_nsmbwii_hint(){location.href='/Wii/software/nsmbwii/hint_technic.php';}

function software_nsmbwii_intro(){location.href='/Wii/software/nsmbwii/intro.php';}
function tvcm_nsmbwii01(){location.href='/Wii/tvcm/tvcm_nsmbwii01.php';}
function tvcm_nsmbwii02(){location.href='/Wii/tvcm/tvcm_nsmbwii02.php';}
function tvcm_nsmbwii03(){location.href='/Wii/tvcm/tvcm_nsmbwii03.php';}
function tvcm_nsmbwii04(){location.href='/Wii/tvcm/tvcm_nsmbwii04.php';}
function tvcm_nsmbwii05(){location.href='/Wii/tvcm/tvcm_nsmbwii05.php';}
function tvcm_nsmbwii06(){location.href='/Wii/tvcm/tvcm_nsmbwii06.php';}
function tvcm_nsmbwii07(){location.href='/Wii/tvcm/tvcm_nsmbwii07.php';}
/* WII New super mario bros */

/* 링크의 사격 트레이닝+Wii 재퍼 */
function software_link_shooting(){location.href='/Wii/software/link_shooting/main.php';}
function software_link_shooting_submain(){location.href='/Wii/software/link_shooting/submain.php';}
function software_link_shooting_sub01(){location.href='/Wii/software/link_shooting/sub01.php';}
function software_link_shooting_sub02(){location.href='/Wii/software/link_shooting/sub02.php';}
function software_link_shooting_sub03(){location.href='/Wii/software/link_shooting/sub03.php';}
function software_link_shooting_sub04(){location.href='/Wii/software/link_shooting/sub04.php';}
function software_link_shooting_sub05(){location.href='/Wii/software/link_shooting/sub05.php';}
function software_link_shooting_sub06(){location.href='/Wii/software/link_shooting/sub06.php';}

function software_link_shooting_intro(){location.href='/Wii/software/link_shooting/intro.php';}
function tvcm_link_shooting(){location.href='/Wii/tvcm/tvcm_link_shooting.php';}
/* 링크의 사격 트레이닝+Wii 재퍼 */

/* Wii Fit Plus */
function wiifitplus_main() {location.href='/Wii/software/wiifitplus/main.php'};
function wiifitplus_submain() {location.href='/Wii/software/wiifitplus/submain.php'};
function wiifitplus_sub01() {location.href='/Wii/software/wiifitplus/sub01.php'};
function wiifitplus_sub02() {location.href='/Wii/software/wiifitplus/sub02.php'};
function wiifitplus_sub03() {location.href='/Wii/software/wiifitplus/sub03.php'};
function wiifitplus_sub04() {location.href='/Wii/software/wiifitplus/sub04.php'};

function wiifitplus_sub01_recommend1() {location.href='/Wii/software/wiifitplus/sub01_recommend.php'}

function wiifitplus_sub04_pop01() {window.open("sub04_pop01.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=586,height=415;")};
function wiifitplus_sub04_pop02() {window.open("sub04_pop02.html","","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=586,height=415;")};


function wiifitplus_sub02_flashPop01(val) {
	window.open("sub02_flashPop01.php?selectNum="+val,"flashPop01","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=620,height=555;")
}
function wiifitplus_sub02_flashPop02(val) {
	window.open("sub02_flashPop02.php?selectNum="+val,"flashPop02","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=620,height=555;")
}
function wiifitplus_sub02_flashPop03(val) {
	window.open("sub02_flashPop03.php?selectNum="+val,"flashPop03","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=620,height=477;")
}
function wiifitplus_sub02_flashPop04(val) {
	window.open("sub02_flashPop04.php?selectNum="+val,"flashPop04","toolbar=0,menubar=0,scrollbars=no,resizable=no,top=100,left=300,width=620,height=477;")
}

function CloseWindow() {window.close();}

function wiifitplus_intro(){location.href='/Wii/software/wiifitplus/intro.php'};
function tvcm_wiifitplus01(){location.href='/Wii/tvcm/tvcm_wiifitplus01.php';}
function tvcm_wiifitplus02(){location.href='/Wii/tvcm/tvcm_wiifitplus02.php';}
function tvcm_wiifitplus03(){location.href='/Wii/tvcm/tvcm_wiifitplus03.php';}
function tvcm_wiifitplus04(){location.href='/Wii/tvcm/tvcm_wiifitplus04.php';}

function wii_wiifitplus_vol1_01(){location.href='/Wii/software/wiifitplus/interview_vol1_01.php';}
function wii_wiifitplus_vol1_02(){location.href='/Wii/software/wiifitplus/interview_vol1_02.php';}
function wii_wiifitplus_vol1_03(){location.href='/Wii/software/wiifitplus/interview_vol1_03.php';}
function wii_wiifitplus_vol1_04(){location.href='/Wii/software/wiifitplus/interview_vol1_04.php';}
function wii_wiifitplus_vol1_05(){location.href='/Wii/software/wiifitplus/interview_vol1_05.php';}

function wii_wiifitplus_vol2_01(){location.href='/Wii/software/wiifitplus/interview_vol2_01.php';}
function wii_wiifitplus_vol2_02(){location.href='/Wii/software/wiifitplus/interview_vol2_02.php';}
function wii_wiifitplus_vol2_03(){location.href='/Wii/software/wiifitplus/interview_vol2_03.php';}
/* Wii Fit Plus */

/* 슈퍼 마리오 Wii 2 갤럭시 어드벤처 투게더 */
function software_sm_galaxy2(){location.href='/Wii/software/sm_galaxy2/main.php';}
function software_sm_galaxy2_submain(){location.href='/Wii/software/sm_galaxy2/submain.php';}
function software_sm_galaxy2_sub01(){location.href='/Wii/software/sm_galaxy2/sub01.php';}
function software_sm_galaxy2_sub01_02(){location.href='/Wii/software/sm_galaxy2/sub01_02.php';}
function software_sm_galaxy2_sub01_03(){location.href='/Wii/software/sm_galaxy2/sub01_03.php';}
function software_sm_galaxy2_sub02(){location.href='/Wii/software/sm_galaxy2/sub02.php';}
function software_sm_galaxy2_sub03(){location.href='/Wii/software/sm_galaxy2/sub03.php';}
function software_sm_galaxy2_sub04(){location.href='/Wii/software/sm_galaxy2/sub04.php';}

function software_sm_galaxy2_intro(){location.href='/Wii/software/sm_galaxy2/intro.php';}
function tvcm_sm_galaxy2_01(){location.href='/Wii/tvcm/tvcm_sm_galaxy2_01.php';}
function tvcm_sm_galaxy2_02(){location.href='/Wii/tvcm/tvcm_sm_galaxy2_02.php';}
/* 슈퍼 마리오 Wii 2 갤럭시 어드벤처 투게더 */

/* 마법천자DS 2 */
function DS_magic_hanja2DS_main(){location.href='/DS/soft/magic_hanja2DS/main.php';}
function DS_magic_hanja2DS_submain(){location.href='/DS/soft/magic_hanja2DS/submain.php';}
function DS_magic_hanja2DS_sub01(){location.href='/DS/soft/magic_hanja2DS/sub01.php';}
function DS_magic_hanja2DS_sub02(){location.href='/DS/soft/magic_hanja2DS/sub02.php';}
function DS_magic_hanja2DS_sub03(){location.href='/DS/soft/magic_hanja2DS/sub03.php';}
function DS_magic_hanja2DS_sub04(){location.href='/DS/soft/magic_hanja2DS/sub04.php';}
function DS_magic_hanja2DS_sub05(){location.href='/DS/soft/magic_hanja2DS/sub05.php';}
function DS_magic_hanja2DS_sub06(){location.href='/DS/soft/magic_hanja2DS/sub06.php';}
function DS_magic_hanja2DS_sub07(){location.href='/DS/soft/magic_hanja2DS/sub07.php';}

function DS_magic_hanja2DS_tvcm01(){location.href='/DS/tvcm/magic_hanja2DS_tvcm01.php';}
function DS_magic_hanja2DS_tvcm02(){location.href='/DS/tvcm/magic_hanja2DS_tvcm02.php';}
function DS_magic_hanja2DS_intro(){location.href='/DS/soft/magic_hanja2DS/intro.php';}
/* 마법천자DS 2 */

/* 와리오랜드 셰이킹 */
function software_wariolandshaking_main() {location.href='/Wii/software/wariolandshaking/main.php';}
function software_wariolandshaking_submain() {location.href='/Wii/software/wariolandshaking/submain.php';}
function software_wariolandshaking_sub01() {location.href='/Wii/software/wariolandshaking/sub01.php';}
function software_wariolandshaking_sub01_1() {location.href='/Wii/software/wariolandshaking/sub01_1.php';}
function software_wariolandshaking_sub01_2() {location.href='/Wii/software/wariolandshaking/sub01_2.php';}
function software_wariolandshaking_sub01_3() {location.href='/Wii/software/wariolandshaking/sub01_3.php';}
function software_wariolandshaking_sub01_tab01() {location.href='/Wii/software/wariolandshaking/sub01_tab01.php';}
function software_wariolandshaking_sub01_tab02() {location.href='/Wii/software/wariolandshaking/sub01_tab02.php';}
function software_wariolandshaking_sub02() {location.href='/Wii/software/wariolandshaking/sub02.php';}
function software_wariolandshaking_sub03() {location.href='/Wii/software/wariolandshaking/sub03.php';}
function software_wariolandshaking_sub04() {location.href='/Wii/software/wariolandshaking/sub04.php';}
function software_wariolandshaking_sub05() {location.href='/Wii/software/wariolandshaking/sub05.php';}
function software_wariolandshaking_sub06() {location.href='/Wii/software/wariolandshaking/sub06.php';}
function software_wariolandshaking_hint() {location.href='/Wii/software/wariolandshaking/technic_playhint.php';}

function software_wariolandshaking_intro(){location.href='/Wii/software/wariolandshaking/intro.php';}
function tvcm_wariolandshaking_01(){location.href='/Wii/tvcm/tvcm_wariolandshaking_01.php';}
function tvcm_wariolandshaking_02(){location.href='/Wii/tvcm/tvcm_wariolandshaking_02.php';}

function wariolandshaking_event() {}
/* 와리오랜드 셰이킹 */

/* 포켓몬스터 블랙 2·화이트 2 */
function DS_Pokemon_BW2_main(){location.href='/DS/soft/Pokemon_BW2/index.html';}
function DS_Pokemon_Black2_main(){location.href='/DS/soft/Pokemon_BW2/index.html';}
function DS_Pokemon_White2_main(){location.href='/DS/soft/Pokemon_BW2/index.html';}
/* 포켓몬스터 블랙 2·화이트 2 */

/* 포켓몬스터 블랙·화이트 */
function DS_Pokemon_BW_main(){location.href='/DS/soft/Pokemon_BW/main.php';}
function DS_Pokemon_BW_submain(){location.href='/DS/soft/Pokemon_BW/submain.php';}
function DS_Pokemon_BW_sub01(){location.href='/DS/soft/Pokemon_BW/sub01.php';}
function DS_Pokemon_BW_sub02(){
	if(plugin) {
		location.href='/DS/soft/Pokemon_BW/sub02.php';
	}else {
		location.href='/DS/soft/Pokemon_BW/sub02_1.php';
	}
}
function DS_Pokemon_BW_sub03(){
	if(plugin) {
		location.href='/DS/soft/Pokemon_BW/sub03.php';
	}else {
		location.href='/DS/soft/Pokemon_BW/sub03_1.php';
	}
}
function DS_Pokemon_BW_sub04(){
 var u = navigator.userAgent;
 if(u.indexOf("iPhone") != -1 || u.indexOf("iPad") != -1){
		popupWindow('pop_qna_mob.html','793','800','status=yes, scrollbars=yes, resizable=no', 'pop01');
	}else {
		popupWindow('pop_qna.html','793','800','status=yes, scrollbars=yes, resizable=no', 'pop01');
	}
}
function DS_Pokemon_BW_sub05(){location.href='/DS/soft/Pokemon_BW/sub05.php';}

function DS_Pokemon_BW_package(){popupWindow('pop_package.html','823','800','status=yes, scrollbars=yes, resizable=no', 'pop02');}
function DS_Pokemon_BW_movie(){popupWindow('pop_movie.html','823','550','status=yes, scrollbars=no, resizable=no', 'pop03');}

function DS_Pokemon_BW_intro(){location.href='/DS/soft/Pokemon_BW/intro.php';}
function DS_Pokemon_BW_tvcm01(){location.href='/DS/tvcm/Pokemon_BW_tvcm01.php';}
function DS_Pokemon_BW_tvcm02(){location.href='/DS/tvcm/Pokemon_BW_tvcm02.php';}
function DS_Pokemon_BW_tvcm03(){location.href='/DS/tvcm/Pokemon_BW_tvcm03.php';}
function DS_Pokemon_BW_tvcm04(){location.href='/DS/tvcm/Pokemon_BW_tvcm04.php';}

function DS_Pokemon_BW_line(num){location.href='/DS/soft/Pokemon_BW/file'+num+'.php';}
function DS_Pokemon_BW_move(num){location.href='/DS/soft/Pokemon_BW/sub03_'+num+'.php';}
function DS_Pokemon_BW_filemove(name){location.href='/DS/soft/Pokemon_BW/'+name+'.php';}
function DS_Pokemon_BW_movelist(name){location.href='/DS/soft/Pokemon_BW/'+name+'.php';}
/* 포켓몬스터 블랙·화이트 */
/*function DS_Pokemon_BW_main(){location.href='/DS/soft/Pokemon_BW/main.php';}
function DS_Pokemon_BW_submain(){location.href='/DS/soft/Pokemon_BW/submain.php';}
function DS_Pokemon_BW_sub01(){location.href='/DS/soft/Pokemon_BW/sub01.php';}
function DS_Pokemon_BW_sub02(){location.href='/DS/soft/Pokemon_BW/sub02.php';}
function DS_Pokemon_BW_sub03(){location.href='/DS/soft/Pokemon_BW/sub03.php';}
function DS_Pokemon_BW_sub04(){popupWindow('pop_qna.html','793','800','status=yes, scrollbars=yes, resizable=no', 'pop01');}
function DS_Pokemon_BW_sub05(){location.href='/DS/soft/Pokemon_BW/sub05.php';}

function DS_Pokemon_BW_package(){popupWindow('pop_package.html','823','800','status=yes, scrollbars=yes, resizable=no', 'pop02');}
function DS_Pokemon_BW_movie(){popupWindow('pop_movie.html','823','550','status=yes, scrollbars=no, resizable=no', 'pop03');}

function DS_Pokemon_BW_intro(){location.href='/DS/soft/Pokemon_BW/intro.php';}
function DS_Pokemon_BW_tvcm01(){location.href='/DS/tvcm/Pokemon_BW_tvcm01.php';}
function DS_Pokemon_BW_tvcm02(){location.href='/DS/tvcm/Pokemon_BW_tvcm02.php';}
function DS_Pokemon_BW_tvcm03(){location.href='/DS/tvcm/Pokemon_BW_tvcm03.php';}
function DS_Pokemon_BW_tvcm04(){location.href='/DS/tvcm/Pokemon_BW_tvcm04.php';}*/
/* 포켓몬스터 블랙·화이트 */

/* Wii Party */
function software_wiiparty_main() {location.href='/Wii/software/wiiparty/main.php';}
/*function software_wiiparty_submain() {location.href='/Wii/software/wiiparty/submain.php';}*/
function software_wiiparty_main() {location.href='/Wii/software/wiiparty/main.php';}
function software_wiiparty_submain() {
	if(plugin) {
		location.href='/Wii/software/wiiparty/submain.php';
	}else {
		location.href='/Wii/software/wiiparty/submain2.php';
	}
}
function software_wiiparty_sub01() {location.href='/Wii/software/wiiparty/sub01.php';}
function software_wiiparty_sub02() {location.href='/Wii/software/wiiparty/sub02.php';}
function software_wiiparty_sub03() {location.href='/Wii/software/wiiparty/sub03.php';}
function software_wiiparty_sub04() {location.href='/Wii/software/wiiparty/sub04.php';}
function software_wiiparty_sub05() {location.href='/Wii/software/wiiparty/sub05.php';}
function software_wiiparty_sub06() {location.href='/Wii/software/wiiparty/sub06.php';}

function software_wiiparty_intro(){location.href='/Wii/software/wiiparty/intro.php';}
function tvcm_wiiparty01(){location.href='/Wii/tvcm/tvcm_wiiparty01.php';}
function tvcm_wiiparty02(){location.href='/Wii/tvcm/tvcm_wiiparty02.php';}
function tvcm_wiiparty03(){location.href='/Wii/tvcm/tvcm_wiiparty03.php';}
function tvcm_wiiparty04(){location.href='/Wii/tvcm/tvcm_wiiparty04.php';}
/* Wii Party */

/* 마리오&루이지 RPG 3 쿠파 몸속 대모험 start */
function DS_mario_luigi_rpg3(){location.href='/DS/soft/mario_luigi_rpg3/main.php';}
function DS_mario_luigi_rpg3_submain(){location.href='/DS/soft/mario_luigi_rpg3/submain.php';}
function DS_mario_luigi_rpg3_sub01(){location.href='/DS/soft/mario_luigi_rpg3/sub01.php';}
function DS_mario_luigi_rpg3_sub02(){location.href='/DS/soft/mario_luigi_rpg3/sub02.php';}
function DS_mario_luigi_rpg3_sub03(){location.href='/DS/soft/mario_luigi_rpg3/sub03.php';}
function DS_mario_luigi_rpg3_sub04(){location.href='/DS/soft/mario_luigi_rpg3/sub04.php';}
function DS_mario_luigi_rpg3_sub05(){location.href='/DS/soft/mario_luigi_rpg3/sub05.php';}
function DS_mario_luigi_rpg3_sub06(){location.href='/DS/soft/mario_luigi_rpg3/sub06.php';}

function DS_mario_luigi_rpg3_tvcm01(){location.href='/DS/tvcm/mario_luigi_rpg3_tvcm01.php';}
function DS_mario_luigi_rpg3_tvcm02(){location.href='/DS/tvcm/mario_luigi_rpg3_tvcm02.php';}
function DS_mario_luigi_rpg3_intro(){location.href='/DS/soft/mario_luigi_rpg3/intro.php';}
/* 마리오&루이지 RPG 3 쿠파 몸속 대모험 end */

/* 털실 커비 이야기 */
function software_kirby_yarn_main() {location.href='/Wii/software/kirby_yarn/main.php';}
function software_kirby_yarn_submain() {location.href='/Wii/software/kirby_yarn/submain.php';}
function software_kirby_yarn_sub01() {location.href='/Wii/software/kirby_yarn/sub01.php';}
function software_kirby_yarn_sub02() {location.href='/Wii/software/kirby_yarn/sub02.php';}
function software_kirby_yarn_sub03() {location.href='/Wii/software/kirby_yarn/sub03.php';}
function software_kirby_yarn_sub04() {location.href='/Wii/software/kirby_yarn/sub04.php';}
function software_kirby_yarn_sub05() {location.href='/Wii/software/kirby_yarn/sub05.php';}
function software_kirby_yarn_sub06() {location.href='/Wii/software/kirby_yarn/sub06.php';}

function software_kirby_yarn_intro(){location.href='/Wii/software/kirby_yarn/intro.php';}
function tvcm_kirby_yarn01(){location.href='/Wii/tvcm/tvcm_kirby_yarn01.php';}
function tvcm_kirby_yarn02(){location.href='/Wii/tvcm/tvcm_kirby_yarn02.php';}
function tvcm_kirby_yarn03(){location.href='/Wii/tvcm/tvcm_kirby_yarn03.php';}
/* 털실 커비 이야기 */

/* 레이튼 교수와 악마의 상자 Start */
function DS_layton_box_main() {location.href='/DS/soft/layton_box/main.php';}
function DS_layton_box_submain() {location.href='/DS/soft/layton_box/submain.php';}
function DS_layton_box_sub01() {location.href='/DS/soft/layton_box/sub01.php';}
function DS_layton_box_sub02() {location.href='/DS/soft/layton_box/sub02.php';}
function DS_layton_box_sub03() {location.href='/DS/soft/layton_box/sub03.php';}
function DS_layton_box_sub04() {location.href='/DS/soft/layton_box/sub04.php';}
function DS_layton_box_sub05() {location.href='/DS/soft/layton_box/sub05.php';}
function DS_layton_box_sub06() {location.href='/DS/soft/layton_box/sub06.php';}
function DS_layton_box_puzzle() {location.href='/DS/soft/layton_box/puzzle_answer.php';}

function DS_layton_box_tvcm01(){location.href='/DS/tvcm/layton_box_tvcm01.php';}
function DS_layton_box_tvcm02(){location.href='/DS/tvcm/layton_box_tvcm02.php';}
function DS_layton_box_tvcm03(){location.href='/DS/tvcm/layton_box_tvcm03.php';}
function DS_layton_box_intro(){location.href='/DS/soft/layton_box/intro.php';}
/* 레이튼 교수와 악마의 상자 End */

/* 피크민 */
function software_pikmin_main() {location.href='/Wii/software/pikmin/main.php';}
function software_pikmin_submain() {location.href='/Wii/software/pikmin/submain.php';}
function software_pikmin_sub01() {location.href='/Wii/software/pikmin/sub01.php';}
/*function software_pikmin_sub02() {location.href='/Wii/software/pikmin/sub02.php';}*/
function software_pikmin_sub02() {
	if(isMobile()){
		location.href='/Wii/software/pikmin/sub02_1.php';
	}else{
		location.href='/Wii/software/pikmin/sub02.php';
	}
}
function software_pikmin_sub03() {location.href='/Wii/software/pikmin/sub03.php';}
function software_pikmin_sub04() {location.href='/Wii/software/pikmin/sub04.php';}

function software_pikmin_intro(){location.href='/Wii/software/pikmin/intro.php';}
/* 피크민 */

/* 젤다의 전설 스카이워드 소드 */
function software_zelda_sword_main() {location.href='/zelda25th/index.html';}
/* 젤다의 전설 스카이워드 소드 */

/* 모여라 커비 */
function DS_atsumete_kirby_main() {location.href='/DS/soft/atsumete_kirby/main.php';}
function DS_atsumete_kirby_submain() {location.href='/DS/soft/atsumete_kirby/submain.php';}
function DS_atsumete_kirby_sub01() {location.href='/DS/soft/atsumete_kirby/submain.php#/movie/';}
function DS_atsumete_kirby_sub02() {location.href='/DS/soft/atsumete_kirby/submain.php#/about/';}
function DS_atsumete_kirby_sub03() {location.href='/DS/soft/atsumete_kirby/submain.php#/control/';}
function DS_atsumete_kirby_sub04() {location.href='/DS/soft/atsumete_kirby/submain.php#/stage/';}
function DS_atsumete_kirby_sub05() {location.href='/DS/soft/atsumete_kirby/submain.php#/subgame/';}

function DS_atsumete_kirby_intro(){location.href='/DS/soft/atsumete_kirby/intro.php';}
function DS_atsumete_kirby_tvcm(){location.href='/DS/tvcm/atsumete_kirby_tvcm01.php';}
function DS_atsumete_kirby_tvcm02(){location.href='/DS/tvcm/atsumete_kirby_tvcm02.php';}
function DS_atsumete_kirby_tvcm03(){location.href='/DS/tvcm/atsumete_kirby_tvcm03.php';}
/* 모여라 커비 end */

/* Just Dance 2 */
function software_justdance2_main() {location.href='/Wii/software/justdance2/main.php';}
function software_justdance2_submain() {location.href='/Wii/software/justdance2/submain.php';}
function software_justdance2_sub01() {location.href='/Wii/software/justdance2/sub01.php';}
function software_justdance2_sub02() {location.href='/Wii/software/justdance2/sub02.php';}
function software_justdance2_sub03() {location.href='/Wii/software/justdance2/sub03.php';}

function software_justdance2_intro(){location.href='/Wii/software/justdance2/intro.php';}
function tvcm_justdance2(){location.href='/Wii/tvcm/tvcm_justdance2.php';}
/* Just Dance 2 */

/* Wii 리모컨플러스로 즐기는 버라이어티 게임 박스 */
function software_wrv_main() {location.href='/Wii/software/wrv/main.php';}
function software_wrv_submain() {location.href='/Wii/software/wrv/submain.php';}
function software_wrv_sub01() {location.href='/Wii/software/wrv/sub01.php';}
function software_wrv_sub02() {location.href='/Wii/software/wrv/sub02.php';}
function software_wrv_variety01() {location.href='/Wii/software/wrv/variety_ice.php';}
function software_wrv_variety02() {location.href='/Wii/software/wrv/variety_mole.php';}
function software_wrv_variety03() {location.href='/Wii/software/wrv/variety_stone.php';}
function software_wrv_variety04() {location.href='/Wii/software/wrv/variety_pose.php';}
function software_wrv_variety05() {location.href='/Wii/software/wrv/variety_shoot.php';}
function software_wrv_variety06() {location.href='/Wii/software/wrv/variety_jump.php';}
function software_wrv_variety07() {location.href='/Wii/software/wrv/variety_ball.php';}
function software_wrv_variety08() {location.href='/Wii/software/wrv/variety_ghost.php';}
function software_wrv_variety09() {location.href='/Wii/software/wrv/variety_umbrella.php';}
function software_wrv_variety10() {location.href='/Wii/software/wrv/variety_treasure.php';}
function software_wrv_variety11() {location.href='/Wii/software/wrv/variety_balloon.php';}
function software_wrv_variety12() {location.href='/Wii/software/wrv/variety_dock.php';}

function software_wrv_intro(){location.href='/Wii/software/wrv/intro.php';}
function software_wrv_webcm01(){location.href='/Wii/software/wrv/webcm01.php';}
function software_wrv_webcm02(){location.href='/Wii/software/wrv/webcm02.php';}
/* Wii 리모컨플러스로 즐기는 버라이어티 게임 박스 */

/* 마리오와 소닉 런던 올림픽™ */
function software_mslOlympic2012_main() {location.href='/Wii/software/mslOlympic2012/index.php';}
/* 마리오와 소닉 런던 올림픽™ */

function CloseWindow() {window.close();}