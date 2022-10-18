/// <reference types="cypress" />
const { allPosts, getPost } = require('../requests/GETpost.request')

describe('Testing get posts', () => {

    const faker = require('faker');

    const POST_ID = {
        id: faker.random.number(10)
    }

    it('request get in all posts', () => {
        allPosts()
        cy.get('@allBodyPosts').then((response) => {
            expect(response.status).eq(200)
            expect(response.body.length).to.be.above(40)
        });
    });

    it('request get one post', () => {
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