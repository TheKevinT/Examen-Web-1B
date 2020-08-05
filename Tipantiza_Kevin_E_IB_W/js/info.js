//---------------------------UTILIZACION FETCH-----------------------------
const vnombre = document.querySelector("#nombre")
const vtipo = document.querySelector("#tipo")
const vgenero = document.querySelector("#genero")
const vestatus = document.querySelector("#estatus")
const vorigen = document.querySelector("#origen")
const vlocation = document.querySelector("#location")



fetch('https://rickandmortyapi.com/api/character/?page=2')
    .then(function(response) {
        return response.json();
    })
    .then(data => {

        var nombre = [];
        var tipo = [];
        var genero = [];
        var estatus = [];
        var origen = [];
        var location = [];

        for (let i of data.results) {
            nombre.push(i.name);
            tipo.push(i.type);
            genero.push(i.gender);
            estatus.push(i.status);
            origen.push(i.origin.name);
            location.push(i.location.name);

        }

        añadirAlLi(vnombre, nombre)
        añadirAlLi(vtipo, tipo)
        añadirAlLi(vgenero, genero)
        añadirAlLi(vestatus, estatus)
        añadirAlLi(vorigen, origen)
        añadirAlLi(vlocation, location)
            //------------funciones extras-------------
        busquedAbecedario(nombre.sort())
        verificarEstatus(data.results)
        calcularEpisodios(data.results)


        //console.log(data.results);
    });


function añadirAlLi(general, info) {

    var arr = [];

    info.forEach((i) => !(i in info) && (info[i] = true) && arr.push(i));

    //eliminar valores repetidos
    for (let i of arr) {
        if (i && i != "unknown") {
            const li = document.createElement("li");
            li.innerText = i;

            general.appendChild(li);
        }

    }

    //    general.appendChild(vnombre);
}


//----------------ABECEDARIO-----------------

function busquedAbecedario(data) {
    const abecedario = [
        { 'a': false },
        { 'b': false },
        { 'c': false },
        { 'd': false },
        { 'e': false },
        { 'f': false },
        { 'g': false },
        { 'h': false },
        { 'i': false },
        { 'j': false },
        { 'k': false },
        { 'l': false },
        { 'm': false },
        { 'n': false },
        { 'o': false },
        { 'p': false },
        { 'q': false },
        { 'r': false },
        { 's': false },
        { 't': false },
        { 'u': false },
        { 'v': false },
        { 'w': false },
        { 'x': false },
        { 'y': false },
        { 'z': false }
    ]
    var alfabetoArr = []
    for (let i of data) {
        alfabetoArr.push(i.toLowerCase().charAt(0))
    }
    var arr = []
    alfabetoArr.forEach((i) => !(i in alfabetoArr) && (alfabetoArr[i] = true) && arr.push(i));
    //var resultadoArr = []
    for (let i of abecedario) {
        for (let j of arr) {
            if (Object.keys(i) == j) {
                i[j] = true
            }

        }
    }
    console.log(abecedario)
}

//----------------------verificar el estatus-------------------------------
function verificarEstatus(info) {
    var todosVivos = true;
    for (let i of info) {
        if (i.status == "Dead") {
            todosVivos = false;
        }
    }
    if (todosVivos) {
        console.log("Existen personajes vivos")
    } else {
        console.log("Existen personajes Muertos")
    }

}
//---------------------calcular episodios--------------------------------------
function calcularEpisodios(data) {
    var resultadosEpisodios = [];
    for (let i of data) {
        resultadosEpisodios.push({ "Nombre Personaje ": i.name, "Numero de Episodios ": i.episode.length })
    }
    console.log(resultadosEpisodios)

}