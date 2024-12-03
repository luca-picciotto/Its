const canvas = document.getElementById('myCanvas');

canvas.width = 500;
canvas.height = 500;

const ctx = canvas.getContext('2d');

ctx.fillStyle = '#bada55';

// ctx.fillStyle = '#bada55';
// ctx.fillRect(10, 10, 50, 50);
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// ctx.font = '30px Arial';
// ctx.fillStyle = '#7555da';
// ctx.fillText('Hello World', 20, 80);

let x = 50;
let y = 50;
let radius = 20;
let dx = 5;
let dy = 5;

let fillColor = 'Red';
let trailColor = 'rgba(255, 0, 0, 0.2)';

function animate() {
    ctx.fillStyle= trailColor;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    y += dx;
    x += dy;
    
    if(x + radius > canvas.width || x - radius < 0) {
        dx = -dx;
        fillColor = getRandomColor();
    }
    
    if(y + radius > canvas.height || y - radius < 0) {
        dy = -dy;
        fillColor = getRandomColor();
    }
    
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    
    requestAnimationFrame(animate);
    ctx.clearReact(0, 0, canvas.width, canvas.height);
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
animate();

// ctx.fillRect(0, 0, canvas.width, canvas.height);
