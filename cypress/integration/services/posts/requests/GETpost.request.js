/// <reference types="Cypress" />

function allPosts() {
   cy.getRequestFakeApi('posts').then((response) => response.body);
}

function getPost(postID) {
    cy.getRequestFakeApi('posts', postID)
}

module.exports = {
    allPosts,
    getPost,
}