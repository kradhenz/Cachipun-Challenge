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
