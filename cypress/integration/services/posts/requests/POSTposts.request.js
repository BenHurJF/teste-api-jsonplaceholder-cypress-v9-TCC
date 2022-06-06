/// <reference types="Cypress" />

const faker = require('faker');

const create = { 
    title: `title-${faker.random.words(9)}`,
    body: faker.random.words(1),
    userId: faker.random.number(1)
 }

function createPost() {
    cy.postRequestFakeApi('posts', create.title, create.body, create.userId).then((response) => {
        response.id
    })
 }
 
 module.exports = {
    createPost,
 }