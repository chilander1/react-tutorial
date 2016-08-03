window.onload = function () {
    var canvas = document.getElementById('canva');

    if (canvas && canvas.getContext) {
        var ctx = canvas.getContext("2d");
        if (ctx) {
            ctx.fillStyle = "green";
             ctx.fillRect(0,0, ctx.canvas.width/3, ctx.canvas.height/2)

             ctx.lineWidth = 5;
             ctx.strokeStyle = "rgba(0,0,255,1)";
             ctx.strokeRect(20,20,100,100);

            for (var i = 0; i < 10; i++) {
             ctx.beginPath();
             ctx.lineWidth = i+1;
             ctx.moveTo(25, 25+i*15);
             ctx.lineTo(405, 25+i*15);
             ctx.stroke();
             }
           ctx.lineWidth = 15;
            ctx.strokeStyle = 'red';
            ctx.lineJoin = 'bevel';
            ctx.beginPath();

            ctx.moveTo(25, 150);
            ctx.lineTo(75, 50);
            ctx.lineTo(125, 150);
            ctx.stroke()


           ctx.strokeStyle = "blue";
            ctx.fillStyle = "red";
            ctx.lineWidth = 5;

            ctx.beginPath();
            ctx.arc(300, 150, 100, 0, 2*Math.PI);
            ctx.fill()
            ctx.stroke();

        }


    }

}

/*
var a = (1,5 - 1) * 2;

alert(a);*/

/*
for(var i=0; i<10; i++) {
    console.log(i);
}
alert(i)*/
/*
function F() {}
console.log(F)*/


/*
var a = 1;
var b = { toString:function() {return '1'} };
var c = 1;
console.log(a + b + c)*/

/*for(var i=0; i<10; i++) {

        alert(i);

}*/
/*
a = [1, 2, 3];
b = [1, 2, 3];
console.log(a == b)*/

/*var a = new Array(1,2), b = new Array(3);
alert(a[0] + b[0]);*/

/*
var name = "Вася";
function sayHi() {
    alert(name);
}

setTimeout(function() {
    var name = "Петя";
    sayHi();
}, 1000);*/

/*
function F() {}
console.log(F  instanceof Function)*/

/*function User() { }
User.prototype = { admin: false };

var user = new User();

User.prototype = { admin: true };

alert(user);*/

