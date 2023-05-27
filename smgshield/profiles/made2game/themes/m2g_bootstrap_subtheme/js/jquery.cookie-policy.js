/**
 *	CookiePolicy
 *	Cookie warning on the site
**/
$(function(){

    /* CONSTRUCTOR ------------------------------------- */
	var CookiePolicy={};

	// load templates
	if ($('html').attr('lang') == "en-gb"){
		templateLayer='<div id="cookiePolicy-layer" class="noSelection shadowBox-light">'+
		'<div class="messageContainer fontSmall"><p>This site uses cookies to store information on your computer. See our <a href="http://www.nvidia.co.uk/object/cookie-policy-uk.html" target="_blank">cookie policy</a> for further details on how to block cookies.</p></div>'+
		'<div id="cookiePolicy-btn-close" class="green-box-bttn"><span>Close</span></div></div>';
	}else if ($('html').attr('lang') == "sv"){
		 templateLayer='<div id="cookiePolicy-layer" class="noSelection shadowBox-light">'+
		'<div class="messageContainer fontSmall"><p> Den här webbplatsen använder cookies för att lagra information på din dator. Se vår <a href="http://www.nvidia.co.uk/object/cookie-policy-uk.html" target="_blank"> cookie policy </a> för mer information om hur du blockerar cookies.</p></div>'+
		'<div id="cookiePolicy-btn-close" class="green-box-bttn"><span>STÄNG</span></div></div>';
	}else if ($('html').attr('lang') == "nb"){
		templateLayer='<div id="cookiePolicy-layer" class="noSelection shadowBox-light">'+
		'<div class="messageContainer fontSmall"><p>Denne siden bruker informasjonskapsler til å lagre informasjon på datamaskinen din. Se <a href="http://www.nvidia.co.uk/object/cookie-policy-uk.html" target="_blank">retningslinjer for bruk av informasjonskapsler </a> for flere opplysninger om hvordan disse kan blokkeres.</p></div>'+
		'<div id="cookiePolicy-btn-close" class="green-box-bttn"><span>LUKK</span></div></div>';
	}else if ($('html').attr('lang') == "de"){
		templateLayer='<div id="cookiePolicy-layer" class="noSelection shadowBox-light">'+
		'<div class="messageContainer fontSmall"><p>Diese Webseite verwendet Cookies, um Informationen auf deinem Computer zu speichern. Informationen zum Ablehnen von Cookies findest du in unserer <a href="http://www.nvidia.de/object/cookie-policy-de.html" target="_blank">Cookie-Richtlinie.</a> </p></div>'+
		'<div id="cookiePolicy-btn-close" class="green-box-bttn"><span>SCHLIESSEN</span></div></div>';
	}else if ($('html').attr('lang') == "fr"){
		templateLayer='<div id="cookiePolicy-layer" class="noSelection shadowBox-light">'+
		'<div class="messageContainer fontSmall"><p>Ce site utilise des cookies pour stocker des informations sur votre ordinateur. Consultez notre  <a href="http://www.nvidia.fr/object/cookie-policy-fr.html" target="_blank">Charte d&#39;utilisation des cookies </a> pour savoir comment fonctionnent les cookies et apprendre comment les bloquer. </p></div>'+
		'<div id="cookiePolicy-btn-close" class="green-box-bttn"><span>FERMER</span></div></div>';
	}
	else if ($('html').attr('lang') == "fi"){
		templateLayer='<div id="cookiePolicy-layer" class="noSelection shadowBox-light">'+
		'<div class="messageContainer fontSmall"><p>Tämä sivusto käyttää evästeitä tietojen tallentamiseksi tietokoneeseesi. Katso lisätietoja evästeiden estämisestä <a href="http://www.nvidia.co.uk/object/cookie-policy-uk.html" target="_blank">evästekäytännöstämme. </a> </p></div>'+
		'<div id="cookiePolicy-btn-close" class="green-box-bttn"><span>SULJE</span></div></div>';
	}
	else if ($('html').attr('lang') == "da"){
		templateLayer='<div id="cookiePolicy-layer" class="noSelection shadowBox-light">'+
		'<div class="messageContainer fontSmall"><p>Dette websted bruger cookies til at lagre oplysninger om din computer. Se vores  <a href="http://www.nvidia.co.uk/object/cookie-policy-uk.html" target="_blank">politik for cookies, </a> hvis du vil have yderligere oplysninger om, hvordan du blokerer for cookies. </p></div>'+
		'<div id="cookiePolicy-btn-close" class="green-box-bttn"><span>LUK</span></div></div>';
	}
	else if ($('html').attr('lang') == "cs"){
		templateLayer='<div id="cookiePolicy-layer" class="noSelection shadowBox-light">'+
		'<div class="messageContainer fontSmall"><p>Tato stránka používá soubory cookies na ukládání informací do tvého počítače. Podívej se na naše <a href="http://www.nvidia.co.uk/object/cookie-policy-uk.html" target="_blank">zásady v používání souborů cookies,</a> kde jsou další informace, jak lze cookies zablokovat. </p></div>'+
		'<div id="cookiePolicy-btn-close" class="green-box-bttn"><span>UZAVŘÍT</span></div></div>';
	}else if ($('html').attr('lang') == "es"){
		templateLayer='<div id="cookiePolicy-layer" class="noSelection shadowBox-light">'+
		'<div class="messageContainer fontSmall"><p>Este sitio utiliza cookies para almacenar información sobre tu ordenador. Consulta nuestra  <a href="http://www.nvidia.es/object/cookie-policy-es.html" target="_blank">política sobre cookies </a> para obtener más información sobre la forma de bloquearlas.</p></div>'+
		'<div id="cookiePolicy-btn-close" class="green-box-bttn"><span>CERRAR</span></div></div>';
	}else if ($('html').attr('lang') == "nl"){
		templateLayer='<div id="cookiePolicy-layer" class="noSelection shadowBox-light">'+
		'<div class="messageContainer fontSmall"><p>Deze site maakt gebruik van cookies om informatie op jouw computer op te slaan. Zie ons <a href="http://www.nvidia.co.uk/object/cookie-policy-uk.html" target="_blank">cookiebeleid </a> voor meer informatie over hoe je cookies kunt blokkeren.</p></div>'+
		'<div id="cookiePolicy-btn-close" class="green-box-bttn"><span>AFSLUITEN</span></div></div>';
	}else if ($('html').attr('lang') == "it"){
		templateLayer='<div id="cookiePolicy-layer" class="noSelection shadowBox-light">'+
		'<div class="messageContainer fontSmall"><p>Questo sito utilizza i cookie per archiviare informazioni sul computer. Esamina la nostra <a href="http://www.nvidia.it/object/cookie-policy-it.html" target="_blank">politica sui cookie </a> per ulteriori dettagli sulle modalità di blocco dei cookie.</p></div>'+
		'<div id="cookiePolicy-btn-close" class="green-box-bttn"><span>CHIUSURA</span></div></div>';
	}else if ($('html').attr('lang') == "pl"){
		templateLayer='<div id="cookiePolicy-layer" class="noSelection shadowBox-light">'+
		'<div class="messageContainer fontSmall"><p>Ta strona korzysta z plików cookies do przechowywania informacji na Twoim komputerze. Aby uzyskać szczegółowe informacje na temat blokowania plików cookies, zapoznaj się z naszą <a href="http://www.nvidia.pl/object/cookie-policy-pl.html" target="_blank">polityką cookie </a>.</p></div>'+
		'<div id="cookiePolicy-btn-close" class="green-box-bttn"><span>ZAMKNIJ</span></div></div>';
	}
	
	/*else if ($('html').attr('lang') == "ru"){
		templateLayer='<div id="cookiePolicy-layer" class="noSelection shadowBox-light">'+
		'<div class="messageContainer fontSmall"><p>Этот сайт использует cookies для хранения информации на вашем компьютере. Смотрите нашу <a href="http://www.nvidia.co.uk/object/cookie-policy-uk.html" target="_blank">политику использования файлов cookie </a>, чтобы узнать, как отключить cookies.</p></div>'+
		'<div id="cookiePolicy-btn-close" class="green-box-bttn"><span>ЗАКРЫТЬ</span></div></div>';
	}*/
	
	showLayer();
		
	/* PRIVATE METHODS --------------------------------- */
	/**
	 *  showLayer()
	 *  Should place template into DOM and attach click events.
	 */
	function showLayer() {	

		if(!$.cookie('CookiePolicy')){
			$('body').append(templateLayer);
			$('#cookiePolicy-layer').delay(2000).fadeIn(300);
			$(window).scroll(function(){
				if($(window).scrollTop() > 200) {
					$('#cookiePolicy-layer').fadeOut(300);
				}else{
					$('#cookiePolicy-layer').fadeIn(300);
				}
			})
		}
		// attach close click
		$("#cookiePolicy-btn-close").on("click", function(event){
			$('#cookiePolicy-layer').fadeOut(300, function() {
				$(this).remove();
			});
			
			$.cookie('CookiePolicy', 1, {expires:365,path:'/'});
		});
		
	}
	
		
	/* PUBLIC METHODS ---------------------------------- */	

	
	/* DESTRUCTOR -------------------------------------- */
	return CookiePolicy;
});