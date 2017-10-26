document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	var devicePlatform = device.platform;
	if (devicePlatform === "Android") {
            var appKey = "0b9fe024c2f4c7e47d66020fa7214a0dd62d91d14e54ad45";
	}
	else if (devicePlatform === "iOS") {
		    var appKey = "054627b32c7c83d2e0d0582f21d0f12e486ca5aafda6845c";
	}
	//Appodeal.setLogLevel(Appodeal.LogLevel.debug);
            Appodeal.disableLocationPermissionCheck();
            Appodeal.confirm(Appodeal.SKIPPABLE_VIDEO);
    Appodeal.initialize(appKey, Appodeal.REWARDED_VIDEO | Appodeal.INTERSTITIAL | Appodeal.SKIPPABLE_VIDEO | Appodeal.NON_SKIPPABLE_VIDEO | Appodeal.BANNER);
     setTimeout(
        function() {
          Appodeal.show(Appodeal.BANNER_TOP);
         }, 3000);
}

