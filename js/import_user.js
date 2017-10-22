        if(window.localStorage.getItem("loggedIn") == 1) {
              $("#reglogforms").hide();
              $("#loggedin").show();
        }

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


function loadProfile () {        
            $.ajax('http://apploadin.com/FreeCSGOstuff/profile.php', 
                {
                    dataType: "json",
                    jsonp: "jsoncallback",
                    method: 'get',
                    contentType: 'application/json',
                    success: function (data, status) {
                        $.each(data, function (i, item) {
	                        $('#loggedin').append('<p>'+item.nickname+'</p><br><p> Ref ID: '+item.id+'</p>');
                        });
                    },
                    error: function (xhr, d, s) {
                        //$('#output').empty().html(s);
                    }
                });
};

function SuccessDismiss() {
   //window.localStorage.setItem("loggedIn", 1);
   $("#reglogforms").hide();
   $("#loggedin").show();
   loadProfile();
}	
function FailedDismiss() {
    //location.href='register.html';
}	

$('#regform').on('submit', function(event) {
    event.preventDefault();
$.post("http://apploadin.com/FreeCSGOstuff/reguser.php", {username:$("#username").val(), uniqueid:device.uuid, refid:$("#refid").val(), password:$("#password").val()}).done(function(data){
if(data){
navigator.notification.alert(
    'Registrazione effettuata',  // message
    SuccessDismiss,         // callback
    'Congratulazioni!',            // title
    'Ok'                  // buttonName
);
}else{
navigator.notification.alert(
    'Probabilmente l\'email che hai inserito è già presente nel nostro archivio. Inoltre, assicurati di inserire nome e cognome.',  // message
    FailedDismiss,         // callback
    'Errore!',            // title
    'Riprova'                  // buttonName
);
}
});
});