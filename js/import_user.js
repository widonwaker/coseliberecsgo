        if(window.localStorage.getItem("loggedIn") == 1) {
              $("#reglogforms").hide();
              $("#loggedin").show();
			  var usernick = window.localStorage.getItem("nickname");
			  loadProfile();
        }



function logout() {
	window.localStorage.removeItem("nickname");
	window.localStorage.removeItem("loggedIn");
	location.reload();
}

/*  Update Steam Trade URL */
$('#steamform').on('submit', function(event) {
    event.preventDefault();
$.post("http://apploadin.com/FreeCSGOstuff/profile.php", {nickname:usernick, updateSteam:$("#steam").val()}).done(function(data){
location.reload();
});
});

function loadProfile () {        
            $.ajax('http://apploadin.com/FreeCSGOstuff/profile.php', 
                {
                    type: 'POST',
                    data: { nickname: usernick },
                    success: function (data, status) {
						$('#loggedin').empty();
                        $.each(data, function (i, item) {
							if (i===0) {
	                        $('#loggedin').append('<p style="display: inline;">Logged in as</p> ') 
							.append('<p class="important" style="display: inline;">'+item.nickname+'</p></h3>')
							.append($('<form />').attr('id','steamform')
							.append('<label for="steam"><p>Your Steam Trade URL:</p></label>')
							.append($('<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true">')
                            .append($('<div class="ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset">')
				 .append('<input data-mini="true" type="text" name="steam" id="steam" placeholder="https://steamcommunity.com/tradeoffer/new/?partner="/>'))
							.append($('<div class="ui-btn ui-input-btn ui-corner-all ui-shadow">')
							.append('Update<input type="submit" value="Update" />'))))
							.append('<p style="display: inline;">You Referrer ID: </p>')
							.append('<p class="important" style="display: inline;">'+item.id+'</p>');
							}
							if(i===1) {
							$('#loggedin').append('<br><p style="display: inline;">Total referrals: </p>')
							.append('<p class="important" style="display: inline;">'+item.referrals+'</p>')
							.append('<br><a href="#" onClick="logout();" class="ui-btn ui-shadow">Logoutl</a>');
							}
							if(i===2) {
							$("#chances").append('<p style="display: inline;">You currently have </p><p class="important" style="display: inline;">'+item.chances+'%</p><p style="display: inline;"> chances to win.</p>');
							}
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
    location.reload(); 
}	

$('#regform').on('submit', function(event) {
    event.preventDefault();
$.post("http://apploadin.com/FreeCSGOstuff/reguser.php", {username:$("#username").val(), uniqueid:device.uuid, refid:$("#refid").val(), password:$("#password").val()}).done(function(data){
if(data=='true'){
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
	    user = document.getElementById('user'),
        pass = document.getElementById('pass');
		

    $('#logform').on('submit', function(event) {
        event.preventDefault();

        var uniqueid = document.getElementById('uniqueid').value = device.uuid;
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
					window.localStorage.setItem("nickname", user.value);
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
				
				if (response === "mismatch") {
                    navigator.notification.alert(
                    'This account is associated to another device.',  // message
                    FailedDismiss,         // callback
                    'Error!',            // title
                    'Ok'                  // buttonName
                   ); // fine alert
                }
            }
        }
        xhr.send(data); 
    });