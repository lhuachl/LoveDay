const container = document.querySelector(".container");

const rain = () => {
    let n = 0;
    while (n <= 40) {
        let gout = document.createElement('i');
        let x = innerWidth * Math.random();  // Posición horizontal aleatoria
        let time = 1.75+5 * Math.random();  // Duración del efecto de caída, entre 3 y 5 segundos
        let size = 1 + Math.random() * 50;  // Tamaño del pétalo entre 5px y 15px

        container.appendChild(gout);
        gout.style.animationDuration = time + "s";
        gout.style.left = x + "px";
        gout.style.fontSize = size + "px";
        gout.style.position = "absolute";
        gout.style.top = "-10px";  // Inicia fuera de la pantalla

        // Agregar un estilo para que se vea como un pétalo
        gout.style.color = "rgba(255, 182, 193, 0.8)";  // Rosa suave
          // Rotar ligeramente los pétalos
        gout.style.opacity = 0.7 + Math.random() * 0.3;  // Variar la opacidad para dar aleatoriedad

        // Establecer la animación de caída
        gout.style.animation = `fall ${time}s linear infinite`;

        n++;
    }
};

// Llamamos a la función para generar los pétalos
rain();
