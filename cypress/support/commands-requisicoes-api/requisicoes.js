Cypress.Commands.add('getRequestFakeApi', (uri, id) => {
  fetch(cypress.env('baseUrlfakeApi') + uri, '/' + id)
}).then((response) => {response.body});

Cypress.Commands.add('postRequestFakeApi', (uri, title, body, userId) => {
     cy
     .request({
         method: 'POST',
         url: cypress.env('baseUrlfakeApi') + uri,
          body: JSON.stringify({
          title: title,
          body: body,
          userId: userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
         failOnStatusCode: false,
     }).then((response) => response.id)
});

Cypress.Commands.add('putRequestFakeApi', (uri) => {
    cy
    .request({
        method: 'PUT',
        url: cypress.env('baseUrlfakeApi') + uri,
        body: JSON.stringify({
          id: 1,
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

Cypress.Commands.add('deleteRequestFakeApi', (uri) => {
    cy
    .request({
        method: 'DELETE',
        url: cypress.env('baseUrlfakeApi') + uri,
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