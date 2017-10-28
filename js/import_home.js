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
							if (percentBar>100) { percentBar = 100; }
                            barFilter.style.width=percentBar+"%";
							if (parseInt(item.attuale) >= parseInt(item.obiettivo)) { item.attuale = item.obiettivo; }
	                        $('#goal').empty().append('Current goal: '+item.attuale+' / '+item.obiettivo+' points');
                        });
                    },
                    error: function (xhr, d, s) {
                        //$('#output').empty().html(s);
                    }
                });
};

var usernick = window.localStorage.getItem("nickname");

function dataCheck () {        

	if (usernick === null) {
        $("#collect").hide();
		$("#chances").hide();
		$("#collectWarn").html("Login your account to partecipate.");
        $("#collectWarn").show();
		return;
    }
	var now = new Date();
	var month = now.getUTCMonth() +1;
	var day = now.getUTCDate();
	var year = now.getUTCFullYear();
	newdate = year + "-" + month + "-" + day;
	newdate=newdate.split("-");
    newdate=newdate[1]+"/"+newdate[2]+"/"+newdate[0];
	newdate=new Date(newdate).getTime();
	            $.ajax('http://apploadin.com/FreeCSGOstuff/counter.php', 
                {
                    type: 'POST',
                    data: { nickname: usernick, dataCheck: 'yes' },
                    success: function (data, status) {
                        $.each(data, function (i, item) {
							var data2 = item.lastclick;
							data2=data2.split("-");
                            data2=data2[1]+"/"+data2[2]+"/"+data2[0];
							data2=new Date(data2).getTime();
                             if (newdate>data2) {
								 $("#collectWarn").hide();
                                 $("#collect").show();
							 } else {
								 $("#collect").hide();
                                 $("#collectWarn").show();
							 }
                        });
                    },
                    error: function (xhr, d, s) {
                        //$('#output').empty().html(s);
                    }
                });
};

loadBar();
dataCheck();