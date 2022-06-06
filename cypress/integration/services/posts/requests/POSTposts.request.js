/// <reference types="Cypress" />

const faker = require('faker');

const project = { 
    title: `title-${faker.random.words(1)}`,
    body: faker.random.words(1),
    userId: faker.random.number(1)
 }

function createPost() {
    cy.postRequestFakeApi(project).then(result => {
        expect(result.body.title).to.equal(project.title)
        expect(result.body.body).to.equal(project.body)
        expect(result.body.userId).to.equal(project.userId)
    }).as('postCreated'); 
 }
 
 module.exports = {
    createPost,
 }