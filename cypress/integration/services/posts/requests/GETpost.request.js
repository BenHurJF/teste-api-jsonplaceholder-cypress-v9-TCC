/// <reference types="Cypress" />

function allPosts() {
   cy.getRequestFakeApi('posts')
}

function getPost(postID) {
    cy.getRequestFakeApi('posts', postID)
}

module.exports = {
    allPosts,
    getPost,
}