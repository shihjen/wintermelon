

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
