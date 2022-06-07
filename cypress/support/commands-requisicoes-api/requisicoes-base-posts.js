/// <reference types="cypress" />

Cypress.Commands.add('getRequestFakeApi', (uri) => {
  cy
    .request({
      method: 'GET',
      url: Cypress.env('baseUrlfakeApi') + uri,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      failOnStatusCode: false
    }).as('pegarUserId');
});

Cypress.Commands.add('postRequestFakeApi', (project) => {
  const uri = 'posts';
     cy
     .request({
         method: 'POST',
         url: Cypress.env('baseUrlfakeApi') + uri,
         body: JSON.stringify({
           title: project.title,
           body: project.body,
           userId: project.userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
         failOnStatusCode: false,
     });
});

Cypress.Commands.add('putRequestFakeApi', (id, project) => {
  const uri = 'posts/';
    cy
    .request({
        method: 'PUT',
        url: Cypress.env('baseUrlfakeApi') + uri + id,
        body: JSON.stringify({
          id: project.id,
          title: project.title,
          body: project.body,
          userId: project.userId,
     }),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     },
        failOnStatusCode: false,
    });
});

Cypress.Commands.add('deleteRequestFakeApi', (uri) => {
    cy
    .request({
        method: 'DELETE',
        url: Cypress.env('baseUrlfakeApi') + uri,
         body: JSON.stringify({
           title: 'foo',
           body: 'bar',
           userId: 1,
     }),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     },
        failOnStatusCode: false,
    });
});