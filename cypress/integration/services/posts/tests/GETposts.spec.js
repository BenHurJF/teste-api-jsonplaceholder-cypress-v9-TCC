/// <reference types="cypress" />

const { allPosts, getPost } = require('../../posts/requests/GETpost.request')

describe('Testing get posts', () => {
    it('request get in all posts', () => {
       allPosts()
    })
    it('request get one post', () => {
        getPost()
     });
});