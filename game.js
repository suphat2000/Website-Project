context = c.getContext('2d');
const snake = new Image();
snake.src = "img/snake.jpg"
snakeX = snakeDY = score = bestScore = 0;
snakeSize = 100;
pipeWidth = topPipeBottomY = 50;
interval = 35;
snakeY = pipeGap = 200;
canvasSize = pipeX = 500;
c.onclick = () => { snakeDY =7 }
setInterval(() => {
    context.fillStyle = "rgb(160, 160, 255)";
    context.fillRect(0, 0, canvasSize, canvasSize); //พื้นหลัง
    snakeY -= snakeDY -= 0.5; // แรงโน้มถ่วง
    context.drawImage(snake, snakeX, snakeY, snakeSize, snakeSize); // วาด งู
    context.fillStyle = "Red";
    pipeX -= 10; 
    pipeX < -pipeWidth && ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random()))   // สุ่มท่อ
 
    context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY); // ท่อด้านบน
    context.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize); // ท่อด้านล่าง
    context.fillStyle = "black";
    context.fillText(score++, 10, 15); // คะแนน
    bestScore = bestScore < score ? score : bestScore; // คะแนนใหม่สูงสุด
    context.fillText(`Best: ${bestScore}`, 10, 25); // คะแนนสูงสุด
    // งูโดนท่อ
    (((snakeY < topPipeBottomY || snakeY > topPipeBottomY + pipeGap) && pipeX < snakeSize) 
    || snakeY > canvasSize) && 
    ((snakeDY = 0), (snakeY = 200), (pipeX = canvasSize), (score = 0)); 
}, interval)
