     setTimeout(
        function() {
          //Appodeal.show(Appodeal.BANNER_TOP);
         }, 3000);

Appodeal.cache(Appodeal.BANNER);
Appodeal.enableBannerCallbacks(true);
document.addEventListener('onBannerlLoaded', function(){
  Appodeal.show(Appodeal.BANNER_TOP);
});

