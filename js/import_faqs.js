

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

     
            $.ajax('http://apploadin.com/FreeCSGOstuff/faqs.php', 
                {
                    dataType: "json",
                    jsonp: "jsoncallback",
                    method: 'get',
                    contentType: 'application/json',
                    success: function (data, status) {
						var _ul = $('<div />').attr('data-role', 'collapsibleset').attr('data-collapsed-icon', 'false')
						.attr('data-collapsed-icon', 'false')
						.attr('data-expanded-icon', 'false')
						.attr('id', 'custom-collapsible');
                        $.each(data, function (i, item) {
							$('<div />').attr('data-role', 'collapsible')
							.append('<h3>'+item.question+'</h3><p>'+item.answer+'</p>')
							.appendTo(_ul);
	                        //$('#custom-collapsible').append('<div data-role="collapsible"><h3>'+item.question+'</h3><p>'+item.answer+'</p></div>');
                        });
						$('#faqs_output').empty().append(_ul).enhanceWithin();
                    },
                    error: function (xhr, d, s) {
                        //$('#output').empty().html(s);
                    }
                });


