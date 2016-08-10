var canvas = document.getElementById('canvas');
var button = document.querySelector('button');

var ctx = canvas.getContext('2d');

var bullets = [];
var asteroids = [];
var start = null;
var deltaTime = null;
var asteroidSizeModifier = 5;

var step = function( timestamp ) {
    if (!start) start = timestamp;
    var progress = timestamp - start;

    // Stash Canvas Height/Width
    var h = canvas.height;
    var w = canvas.width;

    // Clear the canvas
    ctx.clearRect(0, 0, w, h);

    // Draw the background
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(0, 0, w, h);
    ctx.save();

    // Randomize the Asteroids
    var rando = Math.floor(Math.random() * 150 );
    if(rando == 0) {
        var randomHP = Math.ceil(Math.random() * 10);
        asteroids.push( {
            x: Math.floor(Math.random()* w),
            y: 0,
            radius: randomHP *  asteroidSizeModifier,
            hp: randomHP
        });
    }

    // Move the Bullets
    for(var i = 0; i< bullets.length; i++ ) {
        var bullet = bullets[i];
        bullet.y -= 2;
        bullet.x += 2; // 45deg angle
        if( bullet.y < 0 ) {
            bullets.splice(i, 1);
        }
    }

    // Move the Asteroids
    for(var i = 0; i< asteroids.length; i++ ) {
        var asteroid = asteroids[i];
        asteroid.y += 1;

        if( asteroid.y > h ) {
            asteroids.splice(i, 1);
        }
    }

    // Detect Collisions
    for(var i = 0; i< bullets.length; i++ ) {
        var bull = bullets[i];

        for ( var j = 0; j<asteroids.length; j++) {
            var ast = asteroids[j];

            var dx = bull.x - ast.x;
            var dy = bull.y - ast.y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < bull.radius + ast.radius) {
                // collision detected!
                bullets.splice( i, 1 );

                if(ast.hp - 1 == 0) {
                    asteroids.splice( j, 1 );
                } else {
                    ast.hp = ast.hp - 1;
                    ast.radius = ast.hp * asteroidSizeModifier;
                }
            }
        }
    }

    // Draw the bullets
    for(var i = 0; i< bullets.length; i++ ) {
        var bullet = bullets[i];

        ctx.beginPath();
        ctx.fillStyle = '#0CF';
        ctx.arc(
            bullet.x,
            bullet.y,
            bullet.radius,
            0,
            2 * Math.PI);
        ctx.fill();
    }


    // Draw the Asteroids
    for(var i = 0; i< asteroids.length; i++ ) {
        var asteroid = asteroids[i];

        ctx.beginPath();
        ctx.strokeStyle = '#0CF';
        ctx.arc(
            asteroid.x,
            asteroid.y,
            asteroid.radius,
            0,
            2 * Math.PI);
        ctx.stroke();

    }

    // Re-draw the Scene
    requestAnimationFrame(step);
}

var setCanvasSize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

setCanvasSize();
window.addEventListener('resize', setCanvasSize );

canvas.addEventListener('click', function(e) {
    e.preventDefault();
    console.log( (e.clientX - window.innerWidth/2) + ", " + (window.innerHeight - e.clientY ) );

    bullets.push( {
        x: window.innerWidth/2,
        y: window.innerHeight,
        radius: 3,
        deg: Math.floor(Math.random() * 180) - 90
    } );
} );


window.requestAnimationFrame(step);
