/// <reference types="cypress" />
const { putPost } = require('../requests/PUTposts.request')

describe('Testing updating posts', () => {

    it('Updated posts and validating', () => {
        putPost();
     });
  });
    