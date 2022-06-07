/// <reference types="cypress" />
const { deletePost } = require('../requests/DELETEposts.request')

describe('Testing delete one or more posts', () => {
    const faker = require('faker');
    const POST_ID = {
        id: faker.random.number(40)
}
    it('request get in all posts', () => {
       deletePost(POST_ID.id);
       cy.get('@deletePost').then(postDeleted => {
           expect(postDeleted.body).to.have.empty;
       })
    });
});