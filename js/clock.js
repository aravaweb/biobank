 function showDateTime() {
      var currentDateTime = new Date();
      var time = currentDateTime.toLocaleTimeString();
      var date = currentDateTime.getDate();
      var month = currentDateTime.toLocaleString('default', { month: 'long' });

      document.getElementById("time").innerHTML =  time;
      document.getElementById("date").innerHTML = date + " , " + month + " , " + "2023";
    }

    // Call the showDateTime function every second to update the time
    setInterval(showDateTime, 1000);