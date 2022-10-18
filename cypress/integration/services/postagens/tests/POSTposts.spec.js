/// <reference types="cypress" />
const { getPost } = require('../requests/GETpost.request');
const { createPost } = require('../requests/POSTposts.request');

function verificarSePostFoiCriado(idPOST = 0, contador = 60) {
    cy.getRequestFakeApi('posts/' + idPOST)
        .then((resposta) => {
            if (resposta.status === 200)
            return cy.log('Postagem foi criado.');
            const DECREMENTA_CONTADOR = contador - 1;
            (contador === 0) ? cy.log('Postagem Ainda não foi criado no JSON PlaceHolder') : 
            verificarSePostFoiCriado(idPOST, DECREMENTA_CONTADOR)
        });
}


describe('Testing posts CREATED', () => {
    const faker = require('faker');
    const POST_ID = {
        id: faker.random.number(20)
}

    it('Created post and validation', () => {
        createPost()
        cy.get('@postCreated').then((resposta) => {
           expect(resposta.status).eq(201)
           console.log(resposta)
        })
        getPost(POST_ID.id)
        cy.get('@getOnePost').then(resposta => {
            expect(resposta.status).to.equal(200);
            expect(resposta.body).to.have.property('body');
            expect(resposta.body.id).to.be.equal(POST_ID.id);
            expect(resposta.body).to.have.property('title');
            expect(resposta.body).to.have.property('userId');
        });
     });

     it.only('Verificando se post foi criado no JSON PlaceHolder', async () => {
           
         createPost()
         cy.get('@postCreated').then(({status, body}) => {
            expect(status).eq(201)
            
            verificarSePostFoiCriado(101)
         });
         
    });
});