$(function() {

  // If target date is specific to one timezone, set to true and specify it
  var absoluteTarget = true;
  var targetTimeZone = -5;
  
  var targetDateUTC  = new Date(Date.UTC(2022,12,31)).getTime();
  var currentDate    = new Date();
  var timeZoneOffset = (absoluteTarget ? targetTimeZone * -60 : currentDate.getTimezoneOffset()) * 60 * 1000;
  var targetDate     = targetDateUTC + timeZoneOffset;

  var getCountdown = function() {
    var totalSeconds = (targetDate - Date.now())/1000;
    var days    = Math.floor(totalSeconds / (60 * 60 * 24));
    var hours   = Math.floor(totalSeconds / (60 * 60)) % 24;
    var minutes = Math.floor(totalSeconds / 60) % 60;
    var seconds = Math.floor(totalSeconds) % 60;

    if ( currentDate > targetDate ) {
      // Redirect to specific URL
      window.location.replace("http://google.com");
    } else {
      // Display the remaining time
      $('header .clock .days p').html(days);
      $('header .clock .hours p').html(hours);
      $('header .clock .minutes p').html(minutes);
      $('header .clock .seconds p').html(seconds);
    }
  };

  setInterval(getCountdown, 1000);

  getCountdown();

})
