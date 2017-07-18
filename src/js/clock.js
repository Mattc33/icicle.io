var clockVar = {}; // globally scoped variable

function calcTime() {
	currentTime = new Date();
	clockVar.h = currentTime.getHours();
	clockVar.m = currentTime.getMinutes();
	clockVar.s = currentTime.getSeconds();

  if(clockVar.h == 0){
    clockVar.h = 12;
  }

  if(clockVar.h > 12){
    clockVar.h = clockVar.h - 12;
  }

	if (clockVar.h < 10) {
		clockVar.h = "0" + clockVar.h;
	}

	if (clockVar.m < 10) {
		clockVar.m= "0" + clockVar.m;

	}
	if (clockVar.s < 10) {
		clockVar.s = "0" + clockVar.s;
	}

  clockVar.time = clockVar.h + " : " + clockVar.m + " : " + clockVar.s;

  return clockVar.time;
}

function renderTime(time) {
  var element = document.getElementById("clockDisplay");
  element.innerHTML = time;
  setTimeout('renderTime(calcTime())', 1000);
}

renderTime();
