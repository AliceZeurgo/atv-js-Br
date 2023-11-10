/*
Objetivo:Criar projeto de manipulação de estados.
Versão:1.0.
Autor: Alice.
*********************************************/



let contador, contador2;


function getListaDeEstados() {
    let estados = []
    let lista = {}
    let erro = true
    for (contador = 0; contador < estadosCidades.estados.length; contador++) {
        estados.push(estadosCidades.estados[contador].sigla)
        erro = false
    }
    lista.uf = estados
    lista.quantidade = estados.length
    
    if(erro){
        return false
    } else {
        return lista
    }
}

function getDadosEstado(siglaEscolhida) {
    let dados = {}
    let erro = true

    for (contador = 0; contador < estadosCidades.estados.length; contador++) {
        if (estadosCidades.estados[contador].sigla == siglaEscolhida.toUpperCase()) {
            dados.uf = estadosCidades.estados[contador].sigla
            dados.descricao = estadosCidades.estados[contador].nome
            dados.capital = estadosCidades.estados[contador].capital
            dados.regiao = estadosCidades.estados[contador].regiao
            erro = false
        }
    }
    if(erro){
        return false
    } else {
        return dados
    }
}

function getCapitalEstado(EscolhaDaSigla) {
    let dados = {}
    let erro = true
    for (contador = 0; contador < estadosCidades.estados.length; contador++) {
        if (estadosCidades.estados[contador].sigla == EscolhaDaSigla) {
            dados.uf = estadosCidades.estados[contador].sigla
            dados.descricao = estadosCidades.estados[contador].nome
            dados.capital = estadosCidades.estados[contador].capital
            erro = false
        }
    }
    if(erro){
        return false
    } else { 
        return dados
    }
}
function getEstadosRegiao(EscolhaDaRegião) {
    let dados = {}
    let lista = []
    let regiao
    for (contador = 0; contador < estadosCidades.estados.length; contador++) {
        regiao = estadosCidades.estados[contador].regiao.toUpperCase()
        if (regiao == EscolhaDaRegião) {
            let estados = {}
            estados.uf = estadosCidades.estados[contador].sigla
            estados.descricao = estadosCidades.estados[contador].nome
            dados.regiao = estadosCidades.estados[contador].regiao
            lista.push(estados)
        }
    }
    dados.estados = lista
    return dados
}
function getCapitalPais() {
    let dados = {}
    let lista = []

    for (contador = 0; contador < estadosCidades.estados.length; contador++) {
        if (estadosCidades.estados[contador].capital_pais) {

            let estados = {}
            estados.capital_atual = estadosCidades.estados[contador].capital_pais.capital
            estados.uf = estadosCidades.estados[contador].sigla
            estados.descricao = estadosCidades.estados[contador].nome
            estados.capital = estadosCidades.estados[contador].capital
            estados.regiao = estadosCidades.estados[contador].regiao
            estados.capital_pais_ano_inicio = estadosCidades.estados[contador].capital_pais.ano_inicio
            estados.capital_pais_ano_termino = estadosCidades.estados[contador].capital_pais.ano_fim
            lista.push(estados)
        }
    }
    dados.capitais = lista
    return dados
}
function getCidades(EscolhaDaSigla){

    let dados = {}
    let cidades=[]
    for (contador=0;contador<estadosCidades.estados.length;contador++){
        if(estadosCidades.estados[contador].sigla==EscolhaDaSigla){
    for (contador2=0;contador2<estadosCidades.estados[contador].cidades.length;contador2++){
    cidades.push(estadosCidades.estados[contador].cidades[contador2].nome)
    }
    dados.uf = estadosCidades.estados[contador].sigla
    dados.descricao = estadosCidades.estados[contador].nome
    dados.quantidade_cidades = cidades.length
}
}
    dados.cidades = cidades
    return dados
}



module.exports = {
    getListaDeEstados,
    getCapitalEstado,
    getCapitalPais,
    getCidades,
    getDadosEstado,
    getEstadosRegiao
}