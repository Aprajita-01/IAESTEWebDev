function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  
  burger.addEventListener("click", () => {
      //Toggle Nav
      nav.classList.toggle("nav-active");
      
      //Animate Links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ""
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
      });
      //Burger Animation
      burger.classList.toggle("toggle");
  });
  
}

navSlide();

function currentTime() {
  var date = new Date(); /* creating object of Date class */
 var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
  var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime(); /* calling currentTime() function to initiate the process */
/*
const d = new Date();
var currentdate = d.getDate()+' - '+(d.getMonth()+1)+' - '+(d.getFullYear());
document.getElementById("clock").innerHTML = currentdate;
  <div id="clock"></div>
*/


var timer = null;
var end;
var toZero;
var btn = document.getElementById("btn");
var oDay = document.getElementById("day");
var oHour = document.getElementById("hour");
var oMinute = document.getElementById("minute");
var oSecond = document.getElementById("second");
var endtime = document.getElementById("endtime");
var startBtn = document.getElementById("start-count");
toZero = oDay.innerHTML = oHour.innerHTML = oMinute.innerHTML = oSecond.innerHTML = "00";
startBtn.onclick = function() {
  end = endtime.value;
  if (!end) {
    alert("Please enter date！")
    return false;
  };
  countDown();
  timer = setInterval(countDown, 1000);
}

function countDown() {　　
  var timedate = new Date(Date.parse(end.replace(/-/g, "/"))); 
  var now = new Date(); 
  var date = (timedate.getTime() - now.getTime()) / 1000; 
  var day = Math.floor(date / (60 * 60 * 24));
  var _hour = date - day * 60 * 60 * 24;
  var hour = Math.floor(_hour / (60 * 60));
  var _minute = _hour - hour * 60 * 60;
  var minute = Math.floor(_minute / (60));
  var _second = _minute - minute * 60;
  var second = Math.floor(_second);

  function toDou(n) {
      if (n < 10) {
        return '0' + n;
      } else {
        return '' + n;
      }
    } 
  if (date > 0) {
    oDay.innerHTML = toDou(day);
    oHour.innerHTML = toDou(hour);
    oMinute.innerHTML = toDou(minute);
    oSecond.innerHTML = toDou(second);
  } else {
    btn.className = "";
    btn.className = "btn";
    btn.onclick = function() {
      alert("oops")
    }
    endtime.value = "";
    clearInterval(timer);
    toZero;
  }
}



