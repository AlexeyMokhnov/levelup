
      let limit = new Date();
      limit.setHours(limit.getHours() + 1);
      let countDownDate = limit.getTime();
      var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var distance = localStorage.getItem("countDownDate") - now;
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 30 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("timer").innerHTML =
          minutes + ":" + seconds + "";
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("timer").innerHTML = "--:--";
        }
      }, 1000);
      if (
        !localStorage.getItem("countDownDate") ||
        countDownDate - localStorage.getItem("countDownDate") > 60 * 60 * 1000
      )
        localStorage.setItem("countDownDate", countDownDate);