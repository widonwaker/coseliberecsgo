        if(window.localStorage.getItem("loggedIn") == 1) {
              $("#reglogforms").hide();
              $("#loggedin").show();
			  loadProfile();
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
	                        $('#loggedin').append('<p style="display: inline;">Logged in as</p> ') 
							.append('<p class="important" style="display: inline;">'+item.nickname+'</p></h3>')
							.append('<br><p style="display: inline;">Ref ID: </p>')
							.append('<p class="important" style="display: inline;">'+item.id+'</p>');
                        });
                    },
                    error: function (xhr, d, s) {
                        //$('#output').empty().html(s);
                    }
                });
};

function SuccessDismiss() {
	location.reload(); 
}	
function FailedDismiss() {
    //location.href='register.html';
}	

$('#regform').on('submit', function(event) {
    event.preventDefault();
$.post("http://apploadin.com/FreeCSGOstuff/reguser.php", {username:$("#username").val(), uniqueid:device.uuid, refid:$("#refid").val(), password:$("#password").val()}).done(function(data){
if(data){
navigator.notification.alert(
    'You have been successfully registered. You can now log in.',  // message
    SuccessDismiss,         // callback
    'Congratulations!',            // title
    'Ok'                  // buttonName
);
}else{
navigator.notification.alert(
    'Username already exists or your device is already registered with an account',  // message
    FailedDismiss,         // callback
    'Error!',            // title
    'Retry'                  // buttonName
);
}
});
});


/* Login */

   var form = document.getElementById('logform'),
	    user = document.getElementById('user');
        pass = document.getElementById('pass');

    $('#logform').on('submit', function(event) {
        event.preventDefault();

        var data = new FormData(form);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://apploadin.com/FreeCSGOstuff/loguser.php');
        xhr.onload = function() {
            if (xhr.status === 200) {
                // if the response is json encoded
                var response = JSON.parse(xhr.responseText);
				
				if (response === "err") {
                    navigator.notification.alert(
                    'Unknown Error.',  // message
                    FailedDismiss,         // callback
                    'Error!',            // title
                    'Ok'                  // buttonName
                   ); // fine alert
                }
				
                if (response === "ok") {
					window.localStorage.setItem("loggedIn", 1);
					location.reload(); 
                }

                if (response === "nope") {
                    navigator.notification.alert(
                    'Wrong username or password',  // message
                    FailedDismiss,         // callback
                    'Error!',            // title
                    'Ok'                  // buttonName
                   ); // fine alert
                }
            }
        }
        xhr.send(data); 
    });