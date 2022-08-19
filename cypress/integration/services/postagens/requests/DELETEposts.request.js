/// <reference types="Cypress" />

function deletePost(id) {
    cy.deleteRequestFakeApi('posts/', id).then(response => {
        return response;
    }).as('deletePost');
 }
 
 module.exports = {
    deletePost,
 }