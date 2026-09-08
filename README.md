# CONDITIONAL_SAMUEL
juego de condicinales cero primero segundo y tercer condicional

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>English Conditionals Game - Aprende los Condicionales</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>🎮 English Conditionals Game</h1>
            <p class="subtitle">Aprende los condicionales en inglés de forma divertida</p>
        </header>

        <!-- Menu Principal -->
        <section id="mainMenu" class="menu-section active">
            <div class="menu-card">
                <h2>Selecciona el nivel:</h2>
                <div class="button-group">
                    <button class="btn btn-primary" onclick="selectLevel('firstConditional')">
                        📌 First Conditional<br><small>Posible en el futuro</small>
                    </button>
                    <button class="btn btn-primary" onclick="selectLevel('secondConditional')">
                        📌 Second Conditional<br><small>Imaginario presente/futuro</small>
                    </button>
                    <button class="btn btn-primary" onclick="selectLevel('thirdConditional')">
                        📌 Third Conditional<br><small>Pasado contrafáctico</small>
                    </button>
                </div>
            </div>
        </section>

        <!-- Sección de Explicación -->
        <section id="explanationSection" class="menu-section">
            <div class="explanation-card">
                <button class="btn-back" onclick="backToMenu()">← Atrás</button>
                <h2 id="explanationTitle"></h2>
                <div id="explanationContent" class="explanation-content"></div>
                <button class="btn btn-success" onclick="startGame()">Comenzar Quiz →</button>
            </div>
        </section>

        <!-- Sección de Quiz -->
        <section id="quizSection" class="menu-section">
            <div class="quiz-card">
                <div class="progress-bar">
                    <div id="progressFill" class="progress-fill"></div>
                </div>
                <p class="question-counter"><span id="currentQuestion">1</span> / <span id="totalQuestions">5</span></p>
                
                <h2 id="questionText"></h2>
                
                <div id="optionsContainer" class="options-container"></div>
                
                <div id="feedbackContainer" class="feedback-container hidden">
                    <p id="feedbackText"></p>
                </div>

                <button id="nextButton" class="btn btn-primary hidden" onclick="nextQuestion()">
                    Siguiente →
                </button>

                <button id="resultButton" class="btn btn-success hidden" onclick="showResults()">
                    Ver Resultados →
                </button>
            </div>
        </section>

        <!-- Sección de Resultados -->
        <section id="resultsSection" class="menu-section">
            <div class="results-card">
                <h2>🎉 ¡Juego Terminado!</h2>
                <div class="score-display">
                    <p class="score-text">Puntuación: <span id="finalScore">0</span> / <span id="maxScore">5</span></p>
                    <div class="score-circle">
                        <span id="scorePercentage">0%</span>
                    </div>
                </div>
                <p id="resultMessage" class="result-message"></p>
                <button class="btn btn-primary" onclick="backToMenu()">
                    ← Volver al Menú
                </button>
            </div>
        </section>
    </div>

    <script src="game.js"></script>
</body>
</html>
