// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.

document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("76de9b2b-577d-44c6-844a-dc9228b9597f", "440027051507")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
  
  // Sync hashed email if you have a login system or collect it.
  //   Will be used to reach the user at the most optimal time of day.
  // window.plugins.OneSignal.syncHashedEmail(userEmail);
}, false);
