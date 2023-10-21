document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function() {
      var modal = new bootstrap.Modal(document.getElementById("coupon"));
      modal.show();
    }, 1300); 
  });

let time = 18000;
const CountDown = document.getElementById("countdown");

setInterval(updateCountdown,1000);

function updateCountdown(){
    let hour = Math.floor(time / 3600);
    let min = Math.floor((time % 3600) / 60);
    let sec = time % 60;
    if(sec < 10){
        sec ="0"+ sec; 
    }
    else if(hour<10){
        hour = "0" + hour;
    }
    else if(min < 10){
        min = "0" + min;
    }
    CountDown.innerHTML = `${hour}:${min}:${sec}`
    time--;
}
