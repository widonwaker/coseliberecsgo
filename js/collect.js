function collectPoint() {	
	var usernick = window.localStorage.getItem("nickname");
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
                    data: { nickname: usernick },
                    success: function (data, status) {
                        $.each(data, function (i, item) {
							var data2 = item.lastclick;
							data2=data2.split("-");
                            data2=data2[1]+"/"+data2[2]+"/"+data2[0];
							data2=new Date(data2).getTime();
                             if (newdate>data2) {
								 Appodeal.show(Appodeal.INTERSTITIAL | Appodeal.NON_SKIPPABLE_VIDEO | Appodeal.REWARDED_VIDEO);
								 location.reload();
							 } else {
								 Appodeal.show(Appodeal.INTERSTITIAL | Appodeal.NON_SKIPPABLE_VIDEO | Appodeal.REWARDED_VIDEO);
								 location.reload();
							 }
                        });
                    },
                    error: function (xhr, d, s) {
                        //$('#output').empty().html(s);
                    }
                });
}
