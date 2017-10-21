document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {  
var appKey = "80729c3857e25a006c7c1006fd65af2a2e03d540f22a6dce";
            Appodeal.disableLocationPermissionCheck();
            Appodeal.initialize(appKey, Appodeal.INTERSTITIAL | Appodeal.SKIPPABLE_VIDEO | Appodeal.BANNER);
    setTimeout(
        function() {
          Appodeal.show(Appodeal.BANNER_BOTTOM);
         }, 3000);
}
