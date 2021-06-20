let expressao ="";

function calcular(valor){

    expressao += valor.value;    
    document.getElementById("resultado").value = expressao;
}

function resultado(){

    expressao = eval(expressao);
    document.getElementById("resultado").value = expressao;

}

function apagarResultado(){

    expressao = "";

    document.getElementById("resultado").value = "";

}

function invertePositivoOuNegativo(){

    if(!isNaN(expressao)){

    expressao *= -1;
    document.getElementById("resultado").value = expressao;

    }

}

function raizexponencial(){

    if(!isNaN(expressao)){

        expressao *= expressao;
        document.getElementById("resultado").value = expressao;

    }
    
}

function pi(){

    expressao *= Math.PI;
    document.getElementById("resultado").value = expressao;

}