document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  alert('device is ready, appodeal should initialize');
var appKey = "054627b32c7c83d2e0d0582f21d0f12e486ca5aafda6845c";
            Appodeal.disableLocationPermissionCheck();
            Appodeal.initialize(appKey, Appodeal.INTERSTITIAL | Appodeal.SKIPPABLE_VIDEO | Appodeal.BANNER);
}
document.addEventListener('onBannerLoaded', function(){
          Appodeal.show(Appodeal.BANNER_TOP);
         });
