/// <reference types="Cypress" />

const { getPost } = require('./GETpost.request');
const faker = require('faker');
const PUT_ID = {
    id: 1
}
const project = { 
    id: 1,
    title: `title-${faker.random.words(1)}`,
    body: faker.random.words(1),
    userId: 1
 }
 
 function putPost() {
    getPost(PUT_ID.id)
    cy.get('@getOnePost').then(resposta => {
       expect(resposta.status).eq(200)  
       const id = resposta.body.id;
    cy.putRequestFakeApi(id ,project).then(bodyAlterado => {
        expect(project.id).to.be.equal(bodyAlterado.body.id)
        expect(project.title).to.be.equal(bodyAlterado.body.title)
        expect(project.body).to.be.equal(bodyAlterado.body.body)
        expect(project.userId).to.be.equal(bodyAlterado.body.userId)
  });
});
}
 
 module.exports = {
    putPost,
 }