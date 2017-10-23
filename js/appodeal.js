document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {  
var appKey = "054627b32c7c83d2e0d0582f21d0f12e486ca5aafda6845c";
            Appodeal.disableLocationPermissionCheck();
            Appodeal.initialize(appKey, Appodeal.INTERSTITIAL | Appodeal.SKIPPABLE_VIDEO | Appodeal.BANNER);
    setTimeout(
        function() {
          Appodeal.show(Appodeal.BANNER_TOP);
         }, 3000);
}
