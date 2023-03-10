// Scores
let userScore = 0;
let computerScore = 0;
// Score en pantalla
const userScore_p = document.getElementById("user-score");
const computerScore_p = document.getElementById("computer-score");
// selecciona todo el score div
const scoreBoard_div = document.querySelector(".results");
// texto como escoje tu arma y quien gano. 
const result_h2 = document.querySelector(".m1-h > h2");
// botones
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissor_button = document.getElementById("scissor");

function getComputerChoice() {
    const choices = ['Piedra', 'Papel', 'Tijera'];
    // Eligue al azar entre 0 y 3 con random y redondea con floor:
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_p.innerHTML = userScore;
    computerScore_p.innerHTML = computerScore;
    result_h2.innerHTML = "ð¥ð¥ð¥ Ganaste!. " + userChoice + " Derrota a " + computerChoice + ".";
    // AÃ±adimos la clase green-glow css al que gano. classlist te da todas las clases del elemento
    // document.getElementsByClass(userChoice).classList.add('green-glow');
    // Remueve la clase despues de 3ms
    // setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw() {
    result_h2.innerHTML = "Empataron...ð¸ï¸ð·ï¸ð¸ï¸"
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_p.innerHTML = userScore;
    computerScore_p.innerHTML = computerScore;
    result_h2.innerHTML =  "ðâ ï¸ð Perdiste! " + computerChoice + " Derrota a " + userChoice + ".";
}

// userChoice es un argumento que toma de las funciones segun que opcion eligas.
function game (userChoice) {
    const computerChoice = getComputerChoice();
    // toma como argumenots ambas elecciones
    switch (userChoice + computerChoice) {
        case "PiedraTijera":
        case "TijeraPapel":
        case "PapelPiedra":
            win(userChoice, computerChoice);
            break;
        case "PiedraPiedra":
        case "PapelPapel":
        case "TijeraTijera":
            draw(userChoice, computerChoice);
            break;
        case "TijeraPiedra":
        case "PapelTijera":
        case "PiedraPapel":
            lose(userChoice, computerChoice);
            break;
    }
    if (userScore == 5) {
        result_h2.innerHTML = "Â¡GANASTE EL JUEGO DE LA MUERTE!";
    }
    if (computerScore == 5) {
        result_h2.innerHTML = "Â¡PERDISTE EL JUEGO DE LA MUERTE!";
    }
 }

function main () {
    rock_button.addEventListener('click', function() {
        game("Piedra")
    })
    
    paper_button.addEventListener('click', function() {
        game("Papel")
    })
    
    scissor_button.addEventListener('click', function() {
        game("Tijera")
    })
}

main();