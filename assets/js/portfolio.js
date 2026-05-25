//Contador de habilidades
// Obtiene el elemento HTML con id="contadorHabilidades"
const contadorHabilidades = document.getElementById(
    "contadorHabilidades"
);

// Variable que almacena el valor actual del contador
let actualHabilidades = 0;

// Ejecuta una función cada 200 ms
const intervaloHabilidades = setInterval(() => {
    // Incrementa el contador
    actualHabilidades++;
    // Si el elemento existe actualiza el texto
    if (contadorHabilidades) {
        contadorHabilidades.textContent =
            actualHabilidades;
    }
    // Detiene el intervalo al llegar a 8
    if (actualHabilidades >= 8) {
        clearInterval(
            intervaloHabilidades
        );
    }
}, 200);



// Contador de proyectos
// Obtiene el elemento del contador
const contadorProyectos = document.getElementById("contadorProyectos");

// Valor inicial
let actualProyectos = 0;

// Incrementa cada 200 ms
const intervaloProyectos = setInterval(() => {
    actualProyectos++;
    // Actualiza el texto visible
    if (contadorProyectos) {
        contadorProyectos.textContent =
            actualProyectos;
    }
    // Detiene al llegar a 3
    if (actualProyectos >= 3) {
        clearInterval(
            intervaloProyectos
        );
    }
}, 200);

//Contador de año
// Obtiene el elemento HTML con id="contadorAño"
const contadorAño = document.getElementById(
    "contadorAño"
);

// Variable que almacena el valor actual del contador
let actualAño = 2000;

// Ejecuta una función cada 80 ms
const intervaloAño = setInterval(() => {
    // Incrementa el contador
    actualAño++;
    // Si el elemento existe actualiza el texto
    if (contadorAño) {
        contadorAño.textContent = actualAño;
    }
    // Detiene el intervalo al llegar a 2027
    if (actualAño >= 2027) {
        clearInterval(
            intervaloAño
        );
    }
}, 80);


//Boton de cambio de tema
// Obtiene el botón de tema
const botonTema =
document.getElementById(
    "botonTema"
);

// Verifica si el botón existe
if (botonTema) {
    // Evento click
    botonTema.addEventListener(
        "click",
        () => {
            // Activa o desactiva modo claro
            document.body.classList.toggle(
                "modo-claro"
            );
            // Reinicia y reproduce sonido
            sonidoTema.currentTime = 0;
            sonidoTema.play();
            // Cambia texto del botón
            botonTema.textContent =
                document.body.classList.contains(
                    "modo-claro"
                )
                ? "HELL MODE"
                : "HEAVEN MODE";
        }
    );
}

//Animación de tarjetas al entrar en pantalla
// Selecciona tarjetas
const tarjetas = document.querySelectorAll(".tarjeta-skill, .tarjeta-proyecto, .tarjeta-experiencia");

// Cuando la página carga
window.addEventListener("load", () => {
        tarjetas.forEach(
            tarjeta => {
                // Inicialmente ocultas
                tarjeta.style.opacity = "0";
                // Desplazadas hacia abajo
                tarjeta.style.transform =
                    "translateY(50px)";
                // Tiempo animación
                tarjeta.style.transition =
                    ".6s";
            }
        );
    }
);

// Esto hace que las tarjetas se animen al entrar en pantalla, con un efecto de fade-in y desplazamiento hacia arriba. 
// Se utiliza IntersectionObserver para detectar cuando cada tarjeta es visible y aplicar los estilos correspondientes.
// Detecta cuando elementos entran en pantalla
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            // Si está visible

            if (entry.isIntersecting) {
                // Mostrar elemento
                entry.target.style.opacity = "1";
                // Regresar posición
                entry.target.style.transform = "translateY(0px)";
            }

        });
    },
    {
      threshold: 0.1
      // Se activa cuando 10% es visible
    }
);

// Observa cada tarjeta
tarjetas.forEach(tarjeta => observer.observe(tarjeta)
);

//Efecto de texto en terminal con Typed.js
// Librería Typed.js para animar texto como si se escribiera en terminal
new Typed(
    "#textoTerminal",
    {
        // Textos a escribir
        strings: [
            "ACCESSING UAC DATABASE...",
            "INITIALIZING SLAYER SYSTEM...",
            "WELCOME TO THE PORTFOLIO OF EMMANUEL MATA VAZQUEZ",
            "SYSTEM STATUS: ACTIVE"
        ],

        // Velocidad escritura
        typeSpeed: 45,

        // Velocidad borrado
        backSpeed: 20,

        // Espera antes borrar
        backDelay: 1500,

        // Repetición infinita
        loop: true
    }
);


//Efecto de las runas cayendo de fondo
// Crea canvas
const canvas =
document.createElement(
    "canvas"
);

// Lo agrega al body
document.body.appendChild(
    canvas
);

// Contexto 2D
const ctx =
canvas.getContext(
    "2d"
);

// Estilos del canvas
canvas.style.cssText = `
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
pointer-events:none;
z-index:0;
opacity:.65;
`;

let w, h;

// Ajusta tamaño canvas en función del tamaño de ventana
function resize() {
    w =
    canvas.width = window.innerWidth;

    h =
    canvas.height = window.innerHeight;
}

// Ejecuta al iniciar
resize();

// Detecta redimensionado
window.addEventListener("resize", resize);

// Lista de runas para animación de partículas
const runas = [
    "ᛝ","ᚱ","ᚢ","ᚾ","ᛦ",
    "ᛄ","ᛰ","ᚠ","ᚸ","ᛟ",
    "ᛞ","ᛉ","ᛇ","ᛁ","ᛃ",
    "ᛋ","ᛏ","ᛒ","ᚨ"
];

// Calcula cantidad de partículas según ancho de pantalla, máximo 55
const cantidad = Math.min(Math.floor(window.innerWidth / 20), 55);

// Genera runas aleatorias para cada partícula
const particulas = Array.from(
    { length: cantidad },
    () => ({
        // Posición X
        x:
        Math.random() * w,

        // Posición Y
        y:
        Math.random() * h,

        // Tamaño
        size:
        Math.random() * 12 + 14,

        // Velocidad caída
        speed:
        Math.random() * 4 + 1,

        // Runa aleatoria
        runa:
        runas[Math.floor(Math.random() * runas.length)]
    })
);

// Color runas
ctx.fillStyle = "#ff5a1f";

// Brillo
ctx.shadowColor = "#ff2a00";
ctx.shadowBlur = 10;


// Animacion de runas
function animar() {

    // Limpia pantalla
    ctx.clearRect(
        0,
        0,
        w,
        h
    );

    // Color y brillo SIEMPRE en cada frame
    ctx.fillStyle = "#ff5a1f";

    ctx.shadowColor = "#ff2a00";

    ctx.shadowBlur = 10;

    for (
        let i = 0;
        i < particulas.length;
        i++
    ) {

        const p = particulas[i];

        // Transparencia según altura
        ctx.globalAlpha =
        Math.max(
            0.15,
            1 - (p.y / h)
        );

        // Fuente
        ctx.font =
        `${p.size}px monospace`;

        // Dibuja runa
        ctx.fillText(
            p.runa,
            p.x,
            p.y
        );

        // Movimiento
        p.y += p.speed;

        // Reinicio
        if (
            p.y > h
        ) {

            p.y = -30;

            p.x =
            Math.random() * w;

            p.runa =
            runas[
                Math.floor(
                    Math.random() *
                    runas.length
                )
            ];
        }
    }

    ctx.globalAlpha = 1;

    requestAnimationFrame(
        animar
    );
}

// Inicia animación
animar();