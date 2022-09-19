let palabrita;
let cant_errores = 0; //cuantas veces me equivoqué
let cant_aciertos = 0; //cuantas letras acerté


const palabras = [
    'manzanas',     
    'Camiseta',     
    'caramelos',    
    'computadora',  
    'videojuegos',  
    'vehiculo',     
    'murcielago',   
    'microfono',
    'militar',
    'colegio',
    'helicoptero',
    'espada',
    'gallina',
    'desarrollador',
    'deportista' 
];
const btn = id('jugar');
const imagen = id( 'imagen' );
const btn_letras = document.querySelectorAll( "#letras button" );

/* click en iniciar juego */
btn.addEventListener('click', iniciar );

function iniciar(event){
    imagen.src = 'img/a0.png';
    btn.disabled = true;
    cant_errores = 0;
    cant_aciertos = 0; 

    const parrafo = id( 'palabra_a_adivinar' );
    parrafo.innerHTML = ''; 

    const valor_al_azar=Math.floor(Math.random()*palabras.length)+1;

    palabrita = palabras[ valor_al_azar ];
    console.log( palabrita );
    const cant_letras = palabrita.length;

    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = false;
    }

    for( let i = 0; i < cant_letras; i++ ){
        const span = document.createElement( 'span' );
        parrafo.appendChild( span );
    }

}

/* click de adivinar letra */
for( let i = 0; i < btn_letras.length ; i++ ){
    btn_letras[ i ].addEventListener( 'click', click_letras );
}

function click_letras(event){
    const spans = document.querySelectorAll( '#palabra_a_adivinar span' );
    const button = event.target; //cuál de todas las letras, llamó a la función.
    button.disabled = true;

    const letra = button.innerHTML.toLowerCase( );
    const palabra = palabrita.toLowerCase( ); // .toUpperCase( )
    let mensaje=document.getElementById("mensaje")
    let intentos=document.getElementById("intentos")
    let acerto = false;
    for( let i = 0; i < palabra.length;  i++ ){
        if( letra == palabra[i] ){
            //la variable i es la posición de la letra en la palabra.
            //que coincide con el span al que tenemos que mostarle esta letra...
            spans[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
        }
    }

    if( acerto == false ){
        
        cant_errores++;
        intentos.innerHTML=9-cant_errores;
        const source = `img/a${cant_errores}.png` ;
        imagen.src = source;
    }

    if( cant_errores == 9 ){
       
        game_over( );
        
        // Para activar el modal
        
        mensaje.innerHTML="Perdiste, la palabra era " + palabrita;
        console.log(mensaje);
        window.location.href="#modal"
        intentos.innerHTML=9

    }else if( cant_aciertos == palabrita.length ){
        mensaje.innerHTML="Felicidades, has ganado ";
        window.location.href="#modal"
        intentos.innerHTML=9
        game_over( );
    }
    
}


/* fin del juego */
function game_over( ){
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = true;
    }

    btn.disabled = false;
    const palabra = id( 'palabra_a_adivinar' );
    palabra.innerHTML = '';
    

}


game_over( );