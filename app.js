/**************************************************************************************************
 * Objetivo: Criar uma api para responder dados de estados e cidades
 * Data: 10/11/2023
 * Nome: Alice
 * Versão: 1.0
 *************************************************************************************************/
/**
 * Instalações da dependencias para criação da API
 * 
 * Dependencia do node para auxiliar na criação de API
 * Express
 * 
 * Dependencia para manipular recursos de acesso, permissões, etc da API (Header)
 * Cors
 * 
 * Dependencia para auxiliar na chegada de dados na API (Body)
 * Body-parser
 */

/**
 * Requisições dados
 * GET - Pegar dados
 * POST - Envia dados
 * Put - Altera dados existentes
 * Delete - Apaga dados existentes
 */

//Import das bibliotecas do projeto
const Express = require('express');
const Cors = require('cors');
const bodyParser = require('body-parser')

//Cria um objeto tendo como referencia a classe do express
const app = Express();

/** IMPORTANTE!!!!!!!!!!!
 * Request - Receber dados
 * Response - Devolve dados
 * 
 */



//Função para configurar as permissões do cors
app.use((request, response, next)=>{

    //Configura quem poderá fazer requisições na API (* - libera para todos | IP restringe o acesso)
    response.header('Acess-Control-Allow-Origin', '*')

    //Configura os métodos que poderam ser utilizados na API (GET, POST, PUT e DELETE)
    response.header('Acess-Control-Allow-Methods', 'GET')

    app.use(Cors());

    next();
})

//EndPoints - Listar as siglas de todos os Estados 

app.get('/estados/sigla', Cors(), async function(request, response, next){


     let controlelistaestados = require('./model/functions.js');
     let estados = controlelistaestados.getListaDeEstados();
     response.json(estados);
     response.status(200);

})

//Executa a API e faz ela ficar aguardando requisições
app.listen(3030, function(){
     console.log('luana superior muito inteligente')
})