function toNumber(human) {
    if (human == 'Piedra' || human == 'piedra' || human == 'PIEDRA') {
        return 1;
    } else if (human == 'Papel' || human == 'papel' || human == 'PAPEL') {
        return 2;
    } else if (human == 'Tijera' || human == 'tijera' || human == 'TIJERA') {
        return 3;
    } else {
        return false;
    }
}

let num = prompt('Cuántas veces desea jugar?');
for (let i = 0; i < num; i++) {
    let human = prompt('¿Piedra, Papel o Tijera?')
    if (toNumber(human) == false) {
        alert('¡LA OPCIÓN NO ES VÁLIDA!');
    } else {
        let random = Math.floor(Math.random() * 3) + 1;
        alert(`Tú: ${human} VS Máquina: ${toString(random)}`);
        result(toNumber(human), random);
    }
}
