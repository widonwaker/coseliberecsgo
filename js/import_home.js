

$(document).on({
    ajaxSend: function () { loading('show'); },
    ajaxStart: function () { loading('show'); },
    ajaxStop: function () { loading('hide'); },
    ajaxError: function () { loading('hide'); }
});
 
function loading(showOrHide) {
    setTimeout(function(){
        $.mobile.loading(showOrHide);
    }, 1); 
}

function loadBar () {     
var percentBar=0;	    
            $.ajax('http://apploadin.com/FreeCSGOstuff/goal.php', 
                {
                    dataType: "json",
                    jsonp: "jsoncallback",
                    method: 'get',
                    contentType: 'application/json',
                    success: function (data, status) {
                        $.each(data, function (i, item) {
                            $('<li />')
                            percentBar = (item.attuale * 100) / item.obiettivo;
							 //content.appendTo(makePage);
	                        
                        });
                    },
                    error: function (xhr, d, s) {
                        $('#output').empty().html(s);
                    }
                });
}
loadBar();