/// <reference types="cypress" />
const { createPost } = require('../requests/POSTposts.request')
const { allPosts, getPost } = require('../../posts/requests/GETpost.request')

describe('Testing get posts', () => {

    const faker = require('faker');

    const POST_ID = {
        id: faker.random.number()
}

    it('request get in all posts', () => {
       allPosts()
       cy.get('@allBodyPosts').then((response) => {
           expect(response.status).eq(200)
           expect(response.body.length).to.be.above(40)
       });
    });

    it('request get one post', () => {
        // createPost()
        // cy.get('@postCreated').then((resposta) => {
        //    expect(resposta.status).eq(201)
        // })
        getPost(POST_ID.id)
        cy.get('@getOnePost').then(resposta => {
             
        })
     });
});