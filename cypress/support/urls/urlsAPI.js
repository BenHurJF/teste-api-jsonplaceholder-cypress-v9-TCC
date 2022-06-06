Cypress.Commands.add('getRequestFakeApi', (uri) => {
    cy
    .request({
      method: 'GET',
      url: cypress.env('baseUrlfakeApi') + uri,
      headers: {
        'content-type': 'application/Json'
      },
    failOnStatusCode: false,
  })
});

Cypress.Commands.add('postRequestFakeApi', () => {
     cy
     .request({
         method: 'POST',
         url: cypress.env('') + uri,
          body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
         failOnStatusCode: false,
     })

   
})