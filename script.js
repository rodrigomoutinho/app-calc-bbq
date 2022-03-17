// Carne - 400 gramas por pessoa + de 6 horas - 650
// Cerveja - 1200ml por pessoa + de 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml
// Dados retirados de um site especializado em churrasco.

let inputAdultos = document.getelementById("adultos");
let inputCriancas = document.getelementById("criancas");
let inputDuracao = document.getelementById("duracao");

let resultado = document.getElementsById("resultado");

function calcular(){
    console.log("Calculando...");
 
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    

    let qdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas); 
    let qdTotalCerveja = cervejaPP(duracao) * adultos; 
    let qdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas); 



    resultado.innerHTML = `<p>${qdTotalCarne / 1000}Kg de Carne </p>´
    resultado.innerHTML += `<p>${Math.ceil(qdTotalCerveja / 355)}Latas de Cerveja </p>´
    resultado.innerHTML += `<p>${Math.ceil(qdTotalBebidas / 2000)} Garrafas de Bebidas/Refrigerante. </p>´

}

function carnePP (duracao){
    if (duracao >= 6){
    return 650;
    }else {
        return 400;
    }
}

function cervejaPP (duracao){
    if (duracao >= 6){
    return 2000;
    }else {
        return 1200;
    }
}

function bebidasPP (duracao){
    if (duracao >= 6){
    return 1500;
    }else {
        return 1000;
    }
}
