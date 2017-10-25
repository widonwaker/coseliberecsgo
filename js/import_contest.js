function loadContest() {     
            $.ajax('http://apploadin.com/FreeCSGOstuff/contest.php', 
                {
                    dataType: "json",
                    jsonp: "jsoncallback",
                    method: 'get',
                    contentType: 'application/json',
                    success: function (data, status) {
						var t_colour;
						var _ul = $('<table />')
						.append($('<tr />').attr('class','important')
						.append('<th width="20%">#</th><th width="60%">User</th><th width="20%">Points</th>'));
                        $.each(data, function (i, item) {
							if (i>2) { 
							    $("#expire").html("This contest will end on "+item.end);
								$('#min_points').html("To be elegible for a reward, you must have at least "+item.min_points+" ref points.");
							    return false;
							}
							switch (i) {
								case 0:
								   t_colour = '<i class="fa fa-trophy primo-posto">';
								   break;
								case 1:
								   t_colour = '<i class="fa fa-trophy secondo-posto">';
								   break;
								case 2:
								   t_colour = '<i class="fa fa-trophy terzo-posto">';
								   break;
							}
							$('<tr />')
							.append('<td>'+t_colour+'<td>'+item.nickname+'</th><td>'+item.refpoints+'</th>')
							.appendTo(_ul);
                        });
						$('#rankTable').empty().append(_ul).enhanceWithin();
                    },
                    error: function (xhr, d, s) {
                        //$('#output').empty().html(s);
                    }
                });
}

loadContest();