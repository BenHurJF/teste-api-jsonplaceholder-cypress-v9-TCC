/// <reference types="Cypress" />

const faker = require('faker');

const project = { 
    title: `title-${faker.random.words(9)}`,
    body: faker.random.words(1),
    userId: faker.random.number(1)
 }

function createPost() {
    cy.postRequestFakeApi('posts', project.title, project.body, project.userId);
 }
 
 module.exports = {
    createPost,
    project,
 }