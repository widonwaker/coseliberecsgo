var arr = document.getElementsByClassName('wrap');
for(var i = 0; i < arr.length; i++) {
  arr[i].innerHTML = arr[i].innerHTML.replace(/-/g, '_<wbr/>');
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
        
            $.ajax('http://apploadin.com/TPS/shiftcodes_to_app.php', 
                {
                    dataType: "json",
                    jsonp: "jsoncallback",
                    method: 'get',
                    contentType: 'application/json',
                    success: function (data, status) {
                        var _ul = $('<ul />').attr('data-role', 'listview').attr('data-inset', 'true');
                        $.each(data, function (i, item) {
                            $('<li />')
                                 .append($('<a class="wrap" onclick="Appodeal.show(Appodeal.INTERSTITIAL | Appodeal.SKIPPABLE_VIDEO)" href="#p'+item.id+'" >'+item.content+'</a>')
                                 )
                            .appendTo(_ul);
							var makePage = $('<div />').attr('data-role', 'page').attr('id', 'p'+item.id)
							.append($('<div />').attr('data-role', 'header').attr('data-position', 'fixed')
							.append('<a href="#" data-rel="back" data-role="button" data-icon="back" data-iconpos="notext" class="ui-btn-left"></a>')
							.append('<img src="img/logo_app.png" id="navImg"/>')
							.append('<div class="separatore"></div></div>')); // header
							
							var content = $('<div />').attr('data-role', 'main').attr('class', 'ui-content');						                  
				            
							var listul = $('<ul style="font-size: 4vw;" />').attr('data-role', 'listview').attr('data-inset', 'true') ;
  if (item.PC != '') { listul.append('<li><img src="img/pc.png" alt="playstation" class="ui-li-icon">'+item.PC+'</li>') };
  if (item.xbox != '') { listul.append('<li><img src="img/microsoft.png" alt="microsoft" class="ui-li-icon" >'+item.xbox+'</li>') };
  if (item.playstation != '') { listul.append('<li><img src="img/playstation.png" alt="pc" class="ui-li-icon" >'+item.playstation+'</li>') };
                             listul.appendTo(content);
							 							
							 content.appendTo(makePage);
	                        
							makePage.appendTo($.mobile.pageContainer);
                        });
                        $('#output').empty().append(_ul).enhanceWithin();//.listview();
                    },
                    error: function (xhr, d, s) {
                        $('#output').empty().html(s);
                    }
                });
