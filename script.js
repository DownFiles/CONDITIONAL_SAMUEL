const player = document.getElementById("player");

let x = 60;
let y = 70;

let velocityY = 0;
let jumping = false;

let score = 0;
let lives = 3;

let keys = {};

let currentQuestion = null;
let waitingQuestion = false;


// PREGUNTAS
const questions = [

    {
        type: "First Conditional",
        question: "If I study, I ___ the exam.",
        answers: [
            "will pass",
            "would pass",
            "would have passed"
        ],
        correct: 0
    },

    {
        type: "Second Conditional",
        question: "If I had more money, I ___ a new computer.",
        answers: [
            "will buy",
            "would buy",
            "would have bought"
        ],
        correct: 1
    },

    {
        type: "Third Conditional",
        question: "If she had studied, she ___ the exam.",
        answers: [
            "will pass",
            "would pass",
            "would have passed"
        ],
        correct: 2
    },

    {
        type: "First Conditional",
        question: "If it rains, we ___ at home.",
        answers: [
            "will stay",
            "would stay",
            "would have stayed"
        ],
        correct: 0
    },

    {
        type: "Second Conditional",
        question: "If I were invisible, I ___ anywhere.",
        answers: [
            "will go",
            "would go",
            "would have gone"
        ],
        correct: 1
    },

    {
        type: "Third Conditional",
        question: "If they had left earlier, they ___ the bus.",
        answers: [
            "will catch",
            "would catch",
            "would have caught"
        ],
        correct: 2
    }

];


// TECLADO
document.addEventListener("keydown", function(event) {
    keys[event.key] = true;
});

document.addEventListener("keyup", function(event) {
    keys[event.key] = false;
});


// MOVIMIENTO
function gameLoop() {

    if (!waitingQuestion) {

        if (keys["ArrowRight"]) {
            x += 5;
        }

        if (keys["ArrowLeft"]) {
            x -= 5;
        }

        if (keys["ArrowUp"] && !jumping) {
            velocityY = 13;
            jumping = true;
        }

        velocityY -= 0.6;
        y += velocityY;

        if (y <= 70) {
            y = 70;
            velocityY = 0;
            jumping = false;
        }

        x = Math.max(0, Math.min(860, x));

        player.style.left = x + "px";
        player.style.bottom = y + "px";

        checkCoins();

        if (x > 780 && y < 120) {
            finishGame();
        }
    }

    requestAnimationFrame(gameLoop);
}


// REVISAR MONEDAS
function checkCoins() {

    const coins = document.querySelectorAll(".coin");

    coins.forEach(function(coin) {

        if (coin.style.display === "none") {
            return;
        }

        const coinX = parseInt(coin.style.left);
        const coinY = parseInt(coin.style.bottom);

        if (
            Math.abs(x - coinX) < 40 &&
            Math.abs(y - coinY) < 40
        ) {

            coin.style.display = "none";

            askQuestion();
        }
    });
}


// MOSTRAR PREGUNTA
function askQuestion() {

    waitingQuestion = true;

    currentQuestion =
        questions[Math.floor(Math.random() * questions.length)];

    document.getElementById("question").innerHTML =
        `<b>${currentQuestion.type}</b><br><br>
        ${currentQuestion.question}`;

    document.getElementById("a1").innerText =
        currentQuestion.answers[0];

    document.getElementById("a2").innerText =
        currentQuestion.answers[1];

    document.getElementById("a3").innerText =
        currentQuestion.answers[2];

    document.getElementById("message").innerText = "";

    document.getElementById("questionBox").style.display =
        "block";
}


// RESPUESTAS
document.querySelectorAll(".answer").forEach(function(button, index) {

    button.addEventListener("click", function() {

        if (index === currentQuestion.correct) {

            score += 100;

            document.getElementById("score").innerText =
                score;

            document.getElementById("message").innerText =
                "✅ Correct! +100 points";

            setTimeout(function() {

                document.getElementById("questionBox")
                    .style.display = "none";

                waitingQuestion = false;

            }, 900);

        } else {

            lives--;

            document.getElementById("lives").innerText =
                lives;

            document.getElementById("message").innerText =
                "❌ Incorrect!";

            if (lives <= 0) {

                setTimeout(function() {

                    alert(
                        "GAME OVER 😢\n\n" +
                        "Final Score: " + score
                    );

                    restartGame();

                }, 500);
            }
        }
    });
});


// GANAR
function finishGame() {

    waitingQuestion = true;

    alert(
        "🏆 YOU WIN!\n\n" +
        "You completed Conditional Quest!\n" +
        "Score: " + score
    );

    restartGame();
}


// REINICIAR
function restartGame() {

    x = 60;
    y = 70;

    score = 0;
    lives = 3;

    document.getElementById("score").innerText =
        score;

    document.getElementById("lives").innerText =
        lives;

    document.querySelectorAll(".coin").forEach(function(coin) {
        coin.style.display = "block";
    });

    document.getElementById("questionBox")
        .style.display = "none";

    waitingQuestion = false;
}


// INICIAR JUEGO
gameLoop();
