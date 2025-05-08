const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const paddleWidth = 10, paddleHeight = 100;
let playerY = (canvas.height - paddleHeight) / 2;
let aiY = (canvas.height - paddleHeight) / 2;
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

function drawBall(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
}

function resetBall() {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    ballSpeedX = -ballSpeedX;
}

function update() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Top and bottom wall collision
    if (ballY < 0 || ballY > canvas.height) ballSpeedY = -ballSpeedY;

    // Player paddle collision
    if (ballX < 20 && ballY > playerY && ballY < playerY + paddleHeight) {
        ballSpeedX = -ballSpeedX;
    }

    // AI paddle collision
    if (ballX > canvas.width - 20 && ballY > aiY)
}