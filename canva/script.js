window.onload = function () {
    var canvas = document.getElementById('canva');

    if (canvas && canvas.getContext) {
        var ctx = canvas.getContext("2d");
        if (ctx) {
            /*ctx.fillStyle = "green";
             ctx.fillRect(0,0, ctx.canvas.width/3, ctx.canvas.height/2)

             ctx.lineWidth = 5;
             ctx.strokeStyle = "rgba(0,0,255,1)";
             ctx.strokeRect(20,20,100,100);*/

            /*for (var i = 0; i < 10; i++) {
             ctx.beginPath();
             ctx.lineWidth = i+1;
             ctx.moveTo(25, 25+i*15);
             ctx.lineTo(405, 25+i*15);
             ctx.stroke();
             }*/
           /* ctx.lineWidth = 15;
            ctx.strokeStyle = 'red';
            ctx.lineJoin = 'bevel';
            ctx.beginPath();

            ctx.moveTo(25, 150);
            ctx.lineTo(75, 50);
            ctx.lineTo(125, 150);
            ctx.stroke()*/


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
