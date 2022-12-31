const countdown = () => {
  // Specify the date and time we are counting down to.
  const countDate = new Date("Dec 31, 2022 11:22:00").getTime();
  const now = new Date().getTime();
  const remainingTime = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(remainingTime / day);
  const textHour = Math.floor((remainingTime % day) / hour);
  const textMinute = Math.floor((remainingTime % hour) / minute);
  const textSecond = Math.floor((remainingTime % minute) / second);

  document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
  document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
  document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
  document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
};

// should use 500 as setInterval won't always run on time.
setInterval(countdown, 500);

  // Total seconds to wait
    var seconds = 10;
    
    function countdown1() {
        seconds = seconds - 1;
        if (seconds < 0) {
            // Chnage your redirection link here
            window.location = "https://duckdev.com";
        } else {
            // Update remaining seconds
            document.getElementById("countdown1").innerHTML = seconds;
            // Count down using javascript
            window.setTimeout("countdown1()", 1000);
        }
    }
    
    // Run countdown function
    countdown1();
