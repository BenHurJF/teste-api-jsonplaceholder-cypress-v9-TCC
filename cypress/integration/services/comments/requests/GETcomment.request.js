/// <reference types="Cypress" />

function allPosts() {
    cy.getRequestFakeApi('posts').then(response => {
        return response;
    }).as('allBodyPosts');
 }
 
 function getPost(postID) {
     cy.getRequestFakeApi('posts/' + postID)
 }
 
 module.exports = {
     allPosts,
     getPost,
 }