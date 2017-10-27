// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.

document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("a0d44fd6-1a29-4cc0-8315-96f8b2efe454", "440027051507")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();

  
  // Sync hashed email if you have a login system or collect it.
  //   Will be used to reach the user at the most optimal time of day.
  // window.plugins.OneSignal.syncHashedEmail(userEmail);
  
  	var devicePlatform = device.platform;
	if (devicePlatform === "Android") {
            var appKey = "0b9fe024c2f4c7e47d66020fa7214a0dd62d91d14e54ad45";
	}
	else if (devicePlatform === "iOS") {
		    var appKey = "054627b32c7c83d2e0d0582f21d0f12e486ca5aafda6845c";
	}
  alert(appKey);
            Appodeal.disableLocationPermissionCheck();
            Appodeal.confirm(Appodeal.SKIPPABLE_VIDEO);
    Appodeal.initialize(appKey, Appodeal.REWARDED_VIDEO | Appodeal.INTERSTITIAL | Appodeal.SKIPPABLE_VIDEO | Appodeal.NON_SKIPPABLE_VIDEO | Appodeal.BANNER);
	registerAdEvents();
	
	    
    function setUserSettings() {
        Appodeal.setUserId("awesome_user");
        Appodeal.setAge(25);
        Appodeal.setGender("female");
    }
    
    function showInterstitial() {
        Appodeal.show(Appodeal.INTERSTITIAL, function(result) { // check if INTERSTITIAL was shown
            if (result) { // returns true or false 
                alert("Appodeal Ads Shown");
            }
        });
    }
    
    function showRewardedVideo() {
        Appodeal.getRewardParameters(function(result) {
            console.log("Appodeal Reward Amount:" + result.amount);
            console.log("Appodeal Reward Currency:" + result.currency);
        });
        Appodeal.isLoaded(Appodeal.REWARDED_VIDEO, function(result) { // check if REWARDED_VIDEO was loaded
            if (result) { // returns true or false 
                Appodeal.showWithPlacement(Appodeal.REWARDED_VIDEO, "rewarded_video_button");
            } else {
                Appodeal.cache(Appodeal.REWARDED_VIDEO);
            }
        });
    }
    
    function showBanner() {
          Appodeal.show(Appodeal.BANNER_BOTTOM, function(result) { // check if INTERSTITIAL was shown
            if (result) { // returns true or false 
                alert("Appodeal Ads Shown");
            }
        });
    }
    
    function hideBanner() {
        Appodeal.hide(Appodeal.BANNER);
    }

    function showTestScreen() {
        Appodeal.showTestScreen();
    }
    
    function registerAdEvents() {
        Appodeal.setInterstitialCallbacks(function(container){
            if(container.event == 'onLoaded')
                document.getElementById("callbackContainer").innerHTML = "Appodeal. Interstitial. " + container.event + ", isPrecache: " + container.isPrecache;
            else
                document.getElementById("callbackContainer").innerHTML = "Appodeal. Interstitial. " + container.event + ", isPrecache: " + container.isPrecache;
            });
        Appodeal.setBannerCallbacks(function(container){
            if(container.event == 'onLoaded')
                document.getElementById("callbackContainer").innerHTML = "Appodeal. Banner. " + container.event + ", height: " + container.height + ", isPrecache: " + container.isPrecache;
            document.getElementById("callbackContainer").innerHTML = "Appodeal. Banner. " + container.event;
        });
        Appodeal.setRewardedVideoCallbacks(function(container){
            if(container.event == 'onClosed')
                document.getElementById("callbackContainer").innerHTML = "Appodeal. Rewarded. " + container.event + ", finished: " + container.finished;
            else if(container.event == 'onFinished')
                document.getElementById("callbackContainer").innerHTML = "Appodeal. Rewarded. " + container.event + ", amount: " + container.amount + ", name: " + container.name;
            else
                document.getElementById("callbackContainer").innerHTML = "Appodeal. Rewarded. " + container.event;
        });
    }
}, false);
