/// <reference types="cypress" />
const { createPost, project } = require('../requests/POSTposts.request')
const { allPosts, getPost } = require('../../posts/requests/GETpost.request')

describe('Testing get posts', () => {
    it('request get in all posts', () => {
       allPosts()
    })
    it('request get one post', () => {
        createPost().then((result) => {
        const BODY_ID = result.body.id;
        getPost(BODY_ID).then((response) => {
           expect(response.status).to.be.equal(200)
           expect(response.body.tittle).to.be.equal(project.title)
           expect(response.body.body).to.be.equal(project.body)
           expect(response.body.userId).to.be.equal(project.userId)
        })
        })
     });
});