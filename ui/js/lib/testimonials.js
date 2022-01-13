var json_url = 'testimonials.json';
var entriesArray = [];



 $(document).ready(function(){  
		loadGameJSON()
 });

function loadGameJSON() {
	$.ajaxSetup({ cache:false });
		
	$.getJSON(json_url, function(entryData){					
		$.each(entryData.entries, function(i,iItem){
			entriesArray[i] = [iItem.body, iItem.user, iItem.callout];
		});
		writeDivs();
	});	
	
}



function writeDivs() {
	var tempStr ='';
	
	$.each(entriesArray, function(i,iItem){				  
								  
								  
		tempStr += '<div id="entry"><div id="quoteTop"><div id="quoteOpen">"</div><p>'+ entriesArray[i][0] +'</p><div id="user">'+ entriesArray[i][1] +'</div></div></div>'
		tempStr += '<div align="center"><img src="../_ui/img/testimonials/popup/hr.jpg" width="87" height="29" /></div>';
	});
	$("#testimonials").html(tempStr);
	$(document).pngie(); 
}