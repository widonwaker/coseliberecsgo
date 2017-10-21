

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

var percentBar=0;	
var barFilter = document.getElementById('pbar'); 
function loadBar () {        
            $.ajax('http://apploadin.com/FreeCSGOstuff/goal.php', 
                {
                    dataType: "json",
                    jsonp: "jsoncallback",
                    method: 'get',
                    contentType: 'application/json',
                    success: function (data, status) {
                        $.each(data, function (i, item) {
                            percentBar = (item.attuale * 100) / item.obiettivo;
							if (percentBar>100) percentBar = 100;
                            barFilter.style.width=percentBar+"%";
							if (item.attuale>item.obiettivo) item.attuale=item.obiettivo;
	                        $('#goal').append('Current goal: '+item.attuale+' / '+item.obiettivo+' points');
                        });
                    },
                    error: function (xhr, d, s) {
                        //$('#output').empty().html(s);
                    }
                });
};

loadBar();