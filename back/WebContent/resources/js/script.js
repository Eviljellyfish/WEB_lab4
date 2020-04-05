function createCanvas(x, y, r){
	var canvas = document.getElementById("canvas");
    drawCanvas(r);
    var context = canvas.getContext("2d");
    context.beginPath();
    context.rect(Math.round(150 + ((x / r) * 130))-2, Math.round(150 - ((y / r) * 130))-2, 4, 4);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "red";
    context.fill();
    context.stroke();
}

function isArea(x, y, r) {
    //circle
    if(x<=0 && y<=0 && x*x+y*y<=r*r){
        return 'true';
    }
    //tri
    if(x>=0 && y<=0 && ((x-(r/2))<=y)){
        return 'true';
    }
    //rect
    if(x<=0 && y>=0 && x>=(-r) && y<=r/2){
        return 'true';
    }
    return 'false';
}

function drawCanvas(r){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    //очистка
    context.clearRect(0, 0, canvas.width, canvas.height);
    var len = 130/5*r;
    //прямоугольник
    context.beginPath();
    context.rect(150, 150, -len, -len/2);
    context.closePath();
    context.strokeStyle = "blue";
    context.fillStyle = "blue";
    context.fill();
    context.stroke();

    // сектор
    context.beginPath();
    context.moveTo(150, 150);
    context.arc(150, 150, len, Math.PI, Math.PI*0.5, true);
    context.closePath();
    context.strokeStyle = "blue";
    context.fillStyle = "blue";
    context.fill();
    context.stroke();

    //треугольник
    context.beginPath();
    context.moveTo(150, 150);
    context.lineTo(150+len/2, 150);
    context.lineTo(150, 150+len/2);
    context.lineTo(150, 150);
    context.closePath();
    context.strokeStyle = "blue";
    context.fillStyle = "blue";
    context.fill();
    context.stroke();

    //отрисовка осей
    context.beginPath();
    context.font = "10px Verdana";
    context.moveTo(150, 0); context.lineTo(150, 300);
    context.moveTo(150, 0); context.lineTo(145, 15);
    context.moveTo(150, 0); context.lineTo(155, 15);
    context.fillText("Y", 160, 10);
    context.moveTo(0, 150); context.lineTo(300, 150);
    context.moveTo(300, 150); context.lineTo(285, 145);
    context.moveTo(300, 150); context.lineTo(285, 155);
    context.fillText("X", 290, 135);

    // деления X
    context.moveTo(145, 20); context.lineTo(155, 20); context.fillText(5, 160, 20);
    context.moveTo(145, 85); context.lineTo(155, 85); context.fillText((5 / 2), 160, 78);
    context.moveTo(145, 215); context.lineTo(155, 215); context.fillText(-(5 / 2), 160, 215);
    context.moveTo(145, 280); context.lineTo(155, 280); context.fillText(-5, 160, 280);
    // деления Y
    context.moveTo(20, 145); context.lineTo(20, 155); context.fillText(-5, 20, 170);
    context.moveTo(85, 145); context.lineTo(85, 155); context.fillText(-(5 / 2), 70, 170);
    context.moveTo(215, 145); context.lineTo(215, 155); context.fillText((5 / 2), 215, 170);
    context.moveTo(280, 145); context.lineTo(280, 155); context.fillText(5, 280, 170);

    context.closePath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.stroke();
}

function drawPoint(x, y, isArea){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.rect(x - 2, y - 2, 4, 4);
    context.closePath();
    if(isArea === 'true'){
        context.strokeStyle = "orange";
        context.fillStyle = "orange";
    } else {
        context.strokeStyle = "red";
        context.fillStyle = "red";
    }
    context.fill();
    context.stroke();
}

function clickCanvas() {
	var canvas = document.getElementById("canvas");
	var r = document.getElementById("form:rValue").innerText;
	console.log(r);
	if (r>=2) {
	    var br = canvas.getBoundingClientRect();
	    var left = br.left;
	    var top = br.top;
	    var event = window.event;
	    var x = event.clientX-left;
	    var y = event.clientY-top;
	    x = (x - 150) / 130 * 5;
	    y = (150 - y) / 130 * 5;
	    //drawPoint(x, y, isArea(x, y, Math.floor(r*100)/1000));
	    sendData(x, y);
	}
	else {
		alert("Undefined R.");
	}
}

function clickButton() {
	var x = document.getElementById("form:x_input").value;
	var y = document.getElementById("form:y").value;
	var r = document.getElementById("form:rValue").innerText;
	if (r>=2) {
		drawPoint(x*130/5+150, -(y*130/5)+150, isArea(x, y, r));
	}
	else {
		alert("Undefined R.");
	}
}


function sendData(x, y) {
	var inputX = document.getElementById("form:x_input");
	var inputY = document.getElementById("form:y");

	inputX.value = x;
    inputY.value = y;
    
    document.getElementById("form:submit").click();
}