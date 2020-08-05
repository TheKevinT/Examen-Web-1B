$(document).ready(function() {
    $('.bxslider').bxSlider();
});



//ANIMACION SUBIR 

var selectBody = $("body");
var irArriba = document.querySelector("#irArriba");
irArriba.addEventListener("click", () => {
    body.animate({ scrollTop: 0 }, '700')
})


const cardContainer = document.querySelector(".card-container");




const myJSon = [{
        "titulo": "Prueba de titulo 1",
        "fecha": "22/07/2020",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales id est semper euismod. Proin iaculis est justo, non accumsan velit egestas ac. Sed bibendum non augue et hendrerit. Aliquam euismod felis at eros posuere, a fermentum dolor tincidunt. Donec metus"


    },
    {
        "titulo": "Prueba de titulo 2",
        "fecha": "22/07/2020",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales id est semper euismod. Proin iaculis est justo, non accumsan velit egestas ac. Sed bibendum non augue et hendrerit. Aliquam euismod felis at eros posuere, a fermentum dolor tincidunt. Donec metus"


    },
    {
        "titulo": "Prueba de titulo 3",
        "fecha": "22/07/2019",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales id est semper euismod. Proin iaculis est justo, non accumsan velit egestas ac. Sed bibendum non augue et hendrerit. Aliquam euismod felis at eros posuere, a fermentum dolor tincidunt. Donec metus"


    },
    {
        "titulo": "Prueba de titulo 4",
        "fecha": "22/07/2020",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales id est semper euismod. Proin iaculis est justo, non accumsan velit egestas ac. Sed bibendum non augue et hendrerit. Aliquam euismod felis at eros posuere, a fermentum dolor tincidunt. Donec metus"


    },
    {
        "titulo": "Prueba de titulo 5",
        "fecha": "22/07/2019",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales id est semper euismod. Proin iaculis est justo, non accumsan velit egestas ac. Sed bibendum non augue et hendrerit. Aliquam euismod felis at eros posuere, a fermentum dolor tincidunt. Donec metus"


    }
]

for (let i of myJSon) {
    //CREAR CARD EN HTML 
    const card = document.createElement("div");
    card.classList.add("card", "mt-3", "ml-4");

    card.innerHTML = `
 <div class="card-header text-green">
 ${i.titulo}
 </div>

 <div class= "card-body">
 <h5 class="card-title">Publicado el día: ${i.fecha}</h5>
 <p class="card-text">${i.descripcion} </p>
 <a href="#" class="btn bg-green ">Leer Más</a>
 
 </div>
 
 `;

    cardContainer.appendChild(card);

}


/*
//extaer datos de json 

fetch('./info.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);

        //recorer el JSON
        for (let i of myJson) {
            //console.log(i);

            cardContainer.appendChild(crearCard(i));

        }
    });
*/


//cambiar tema 

const colorVerde = document.querySelector('.color-verde');
const colorRojo = document.querySelector('.color-rojo');
const colorAzul = document.querySelector('.color-azul');

var colorAhora1 = "green";



colorVerde.addEventListener('click', () => {
    cambiarColor("green");
    //cambiar fondo
    document.body.style.backgroundImage = "url('./img/hojas.jpg')";
});
colorRojo.addEventListener('click', () => {
    cambiarColor("red");
    //cambiar fondo
    document.body.style.backgroundImage = "url('./img/rojo.jpg')";
});
colorAzul.addEventListener('click', () => {
    cambiarColor("cyan");
    //cambiar fondo
    document.body.style.backgroundImage = "url('./img/cielo.jpg')";
});

//cambiar botons y textos 
function cambiarColor(color) {

    const color1 = ".bg-" + colorAhora1;
    const color2 = ".text-" + colorAhora1;

    const todosElementos = document.querySelectorAll(color2);
    //console.log(todosElementos)

    for (let i of todosElementos) {
        i.classList.remove("text-" + colorAhora1);
        i.classList.add("text-" + color);
    }

    const todosElementos1 = document.querySelectorAll(color1);

    for (let i of todosElementos1) {
        i.classList.remove("bg-" + colorAhora1);
        i.classList.add("bg-" + color);
    }
    colorAhora1 = color;

}

var usuarios = [];


const btn_submit = document.querySelector('#btn_submit');

btn_submit.addEventListener('click', addUsuario);

function addUsuario(e) {

    e.preventDefault();

    const inputNombre = document.querySelector('#inputNombre').value;
    const inputCorreo = document.querySelector('#inputCorreo').value;
    const inputPass = document.querySelector('#inputPass').value;
    const formulario = document.querySelector('#formulario');

    if (inputNombre == usuarios[0]) {

        alert('USUARIO YA INICIO SESIÓN')

    } else {

        usuarios.push(inputNombre, inputCorreo, inputPass);

        localStorage.setItem("Usuario: ", JSON.stringify(usuarios))

        alert('SESIÓN INICIADA')

        inputNombre.value = "";
        inputCorreo.value = "";
        inputPass.value = "";
    }





}