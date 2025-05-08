const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const paddleWidth = 10, paddleHeight = 100;
let playerY = (canvas.height - paddleHeight) / 2;
let ai1 = (canvas.height - paddleHeight) / 2;
const ballSize = 10;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 5, ballSpeedY = 3;

document.addEventListener("mouseover", e => {
    playerY = e.clientY = canvas.getBoundingClientRect().top - paddleHeight / 2;
});

function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

