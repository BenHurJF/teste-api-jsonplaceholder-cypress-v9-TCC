/// <reference types="cypress" />
const { getPost } = require('../../posts/requests/GETpost.request');
const { createPost } = require('../../posts/requests/POSTposts.request');

describe('Testing posts CREATED', () => {
    const faker = require('faker');
    const POST_ID = {
        id: faker.random.number(20)
}

    it('Created post and validation', () => {
        createPost()
        cy.get('@postCreated').then((resposta) => {
           expect(resposta.status).eq(201)
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
});