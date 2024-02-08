// This function is called when human user win 'Cachipun'
function win() {
    return '¡FELICIDADES! HAS GANADO!'
}

// This function is called when human user lose 'Cachipun'
function lose() {
    return '¡HAS PERDIDO CONTRA LA MÁQUINA!';
}

// This function evalue the 'Cachipun' options and deliver the result
function result(human, random) {
    switch (true) {
        case (human == random):
            alert('¡EMPATE!');
            break;
        // From here all alerts call 'win or lose' function, it based in the conditional statement by each case below
        case (human == 1 && random == 2):
            alert(`Piedra pierde contra Papel...\n ${lose()}`);
            break;
        case (human == 1 && random == 3):
            alert(`Piedra le gana a Tijera...\n ${win()}`);
            break;
        case (human == 2 && random == 1):
            alert(`Papel le gana a Piedra...\n ${win()}`);
            break;
        case (human == 2 && random == 3):
            alert(`Papel pierde contra Tijera...\n ${lose()}`);
            break;
        case (human == 3 && random == 1):
            alert(`Tijera pierde contra Piedra...\n ${lose()}`);
            break;
        case (human == 3 && random == 2):
            alert(`Tijera le gana a Papel...\n ${win()}`);
            break;
    }
}

// This function convert random result to a string and 'Cachipun' option to best workflow
function toString(random) {
    if (random == 1) { // It was chosen 'Piedra' for 1
        return 'Piedra';
    } else if (random == 2) { // It was chosen 'Papel' for 2 
        return 'Papel';
    } else { // It chosen any other for 'Tijera' because random number are limited beetwen 1 and 3, due to there are only one another option (number 3)
        return 'Tijera';
    }
}

// This function convert human option to a number to best workflow
function toNumber(human) {
    // It was used '||' for probably common options by a human 
    if (human == 'Piedra' || human == 'piedra' || human == 'PIEDRA') {
        return 1;
    } else if (human == 'Papel' || human == 'papel' || human == 'PAPEL') {
        return 2;
    } else if (human == 'Tijera' || human == 'tijera' || human == 'TIJERA') {
        return 3;
    } else {
        return false; // false == 0, so it's necessary a random between 1 and 3
    }
}

/* START
Request a number of time(s) to play to a human player */
let num;
do {
    num = +prompt('Cuántas veces desea jugar?');
    for (let i = 0; i < num; i++) {
        let human;
        do {
            // Request an option to a human player (and showing the game's number)
            human = prompt(`JUEGO Nro. ${i + 1} \n¿Piedra, Papel o Tijera?`)
            // Conditional statement to limit the options in the game
            if (toNumber(human) == false) {
                alert('¡LA OPCIÓN NO ES VÁLIDA!\n Las opciones válidas son:\n > Piedra, piedra, PIEDRA o \n > Papel, papel, PAPEL o \n > Tijera, tijera, TIJERA');
            } else {
                // Generate a random between 1 and 3 to a machine player
                let random = Math.floor(Math.random() * 3) + 1;
                // Show the versus players
                alert(`Tú: ${human} \nVS \nMáquina: ${toString(random)}`);
                // Deliver result of the game
                result(toNumber(human), random);
            }
        } while (toNumber(human) == false);
    }
    // Verify if 'num' variable is an Integer
    if (Number.isInteger(num) == false || num < 0) {
        alert(`El número o caracter ingresado no es válido. No se ha podido iniciar el juego.\nPor favor inténtelo nuevamente`);
    } else if (num == 0) {
        alert('La máquina tampoco quería jugar.')
    } else {
        alert('EL JUEGO HA TERMINADO')
    }
} while (Number.isInteger(num) == false || num < 0);
