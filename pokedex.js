var globalActualID = 0;

const fetchPokemon = (valor) => {
    let pokeNameInput = "";
    let pokeSearch = "";
    if (valor == "go") {
        pokeNameInput = document.getElementById("pokeSearch");
        pokeSearch = pokeNameInput.value;
        pokeSearch = pokeSearch.toLowerCase();
    } else if (valor == "izquierda") {
        if (globalActualID <= 1) {
            globalActualID = 898;
            pokeSearch = globalActualID;
            console.log("XXXX ACTUALIZANDO A 899 XXXX");
        } else {
            console.log("IZQUIERDA | Valor de GAID antes: " + globalActualID);
            pokeSearch = globalActualID - 1;
            console.log("IZQUIERDA | Valor a buscar: " + pokeSearch);
        }
    } else if (valor == "derecha") {
        if (globalActualID >= 898) {
            globalActualID = 1;
            pokeSearch = globalActualID;
            console.log("XXXX ACTUALIZANDO A 1 XXXX");
        } else {
            console.log("DERECHA | Valor de GAID antes: " + globalActualID);
            pokeSearch = globalActualID + 1;
            console.log("DERECHA | Valor a buscar: " + pokeSearch);
        }
    }
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`;

    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            errorFunction();
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            play(1);
            console.log(data);
            let pokeImg = data.sprites.other["official-artwork"].front_default;
            pokeImage(pokeImg);
            let pokeName = data.name;
            pokeNameUPDT(pokeName);
            let pokeNumber = data.id;
            pokeNumberUPDT(pokeNumber);
            let pokeDataType = data.types;
            pokeTypesFormat(pokeDataType);
            let pokeStatsArray = data.stats;
            pokeStatsFormat(pokeStatsArray);
            let pokeMovesArray = data.moves;
            pokeMovesFormat(pokeMovesArray);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokemonster");
    pokePhoto.src = url;
}

const pokeNameUPDT = (name) => {
    document.getElementById("pokeName").textContent=`${name}`;
}

const pokeNumberUPDT = (number) => {
    document.getElementById("pokeNumber").textContent=`${number}`;
    if (number != "MissingNo."){
        globalActualID = number;    // toma el ID de la busqueda y lo pone en el global
    } else {
        console.log("No se actualiza gobal. Valor: " + globalActualID)
    }
}

const pokeTypesFormat = (arreglo) => {
    let cant = arreglo.length;
    if(cant == 1) {
        let pokeType1 = arreglo[0].type.name;
        pokeTypeUPDT("type", pokeType1);
    } else if (cant == 2) {
        let pokeType1 = arreglo[0].type.name;
        let pokeType2 = arreglo[1].type.name;
        pokeTypeUPDT("types", pokeType1 + " & " + pokeType2);
    } else {
        let pokeType1 = arreglo[0].type.name;
        let pokeType2 = arreglo[1].type.name;
        let pokeType3 = arreglo[2].type.name;
        pokeTypeUPDT("types", pokeType1 + ", " + pokeType2 + " & " + pokeType3);
    }
}

const pokeTypeUPDT = (word, type) => {
    document.getElementById("typeTag").textContent=`Pokemon ${word}:`;
    document.getElementById("pokeType").textContent=`${type}`;
}

const pokeStatsFormat = (arreglo) => {
    //console.log(arreglo[0].stat.name.toUpperCase());
    //console.log(arreglo[0].base_stat);
    let stat1 = arreglo[0].stat.name.toUpperCase() + ": " + arreglo[0].base_stat;
    let stat2 = arreglo[1].stat.name.toUpperCase() + ": " + arreglo[1].base_stat;
    let stat3 = arreglo[2].stat.name.toUpperCase() + ": " + arreglo[2].base_stat;
    let stat4 = arreglo[3].stat.name.toUpperCase() + ": " + arreglo[3].base_stat;
    let stat5 = arreglo[4].stat.name.toUpperCase() + ": " + arreglo[4].base_stat;
    let stat6 = arreglo[5].stat.name.toUpperCase() + ": " + arreglo[5].base_stat;
    pokeStatsUPDT(stat1,stat2,stat3,stat4,stat5,stat6);
}

const pokeStatsUPDT = (stat1, stat2, stat3, stat4, stat5, stat6) => {
    document.getElementById("stat1").textContent=`${stat1}`;
    document.getElementById("stat2").textContent=`${stat2}`;
    document.getElementById("stat3").textContent=`${stat3}`;
    document.getElementById("stat4").textContent=`${stat4}`;
    document.getElementById("stat5").textContent=`${stat5}`;
    document.getElementById("stat6").textContent=`${stat6}`;
}

const pokeMovesFormat = (arreglo) => {
    
    let cant = arreglo.length;
    if(cant == 1) {
        let pokeMove1 = arreglo[0].move.name;
        pokeMovesUPDT(pokeMove1, "- - - - -", "- - - - -", "- - - - -", "- - - - -", "- - - - -");
    } else if (cant == 2) {
        let pokeMove1 = arreglo[0].move.name;
        let pokeMove2 = arreglo[1].move.name;
        pokeMovesUPDT(pokeMove1, pokeMove2, "- - - - -", "- - - - -", "- - - - -", "- - - - -");
    } else if (cant == 3) {
        let pokeMove1 = arreglo[0].move.name;
        let pokeMove2 = arreglo[1].move.name;
        let pokeMove3 = arreglo[2].move.name;
        pokeMovesUPDT(pokeMove1, pokeMove2, pokeMove3, "- - - - -", "- - - - -", "- - - - -");
    } else if (cant == 4) {
        let pokeMove1 = arreglo[0].move.name;
        let pokeMove2 = arreglo[1].move.name;
        let pokeMove3 = arreglo[2].move.name;
        let pokeMove4 = arreglo[3].move.name;
        pokeMovesUPDT(pokeMove1, pokeMove2, pokeMove3, pokeMove4, "- - - - -", "- - - - -");
    } else if (cant == 5) {
        let pokeMove1 = arreglo[0].move.name;
        let pokeMove2 = arreglo[1].move.name;
        let pokeMove3 = arreglo[2].move.name;
        let pokeMove4 = arreglo[3].move.name;
        let pokeMove5 = arreglo[4].move.name;
        pokeMovesUPDT(pokeMove1, pokeMove2, pokeMove3, pokeMove4, pokeMove5, "- - - - -");
    } else {
        let pokeMove1 = arreglo[0].move.name;
        let pokeMove2 = arreglo[1].move.name;
        let pokeMove3 = arreglo[2].move.name;
        let pokeMove4 = arreglo[3].move.name;
        let pokeMove5 = arreglo[4].move.name;
        pokeMovesUPDT(pokeMove1, pokeMove2, pokeMove3, pokeMove4, pokeMove5, `${cant-5} more!`);
    }
}

const pokeMovesUPDT = (move1, move2, move3, move4, move5, move6) => {
    document.getElementById("move1").textContent=`${move1}`;
    document.getElementById("move2").textContent=`${move2}`;
    document.getElementById("move3").textContent=`${move3}`;
    document.getElementById("move4").textContent=`${move4}`;
    document.getElementById("move5").textContent=`${move5}`;
    document.getElementById("move6").textContent=`${move6}`;
}

const errorFunction = () => {
    play(0);
    pokeImage("./assets/IMGS/404_4-3.png")
    pokeNameUPDT("¿?");
    pokeNumberUPDT("MissingNo.");
    pokeTypeUPDT("type", "¿?")
    pokeStatsUPDT("¿?","¿?","¿?","¿?","¿?","¿?");
    pokeMovesUPDT("¿?","¿?","¿?","¿?","¿?","¿?");
}

function play(select) {
    if (select == 1){
        var audio = new Audio('./assets/Sounds/poke_sfx.mp3');
    } else {
        var audio = new Audio('./assets/Sounds/pc-on.mp3');
    }
    audio.play();
}