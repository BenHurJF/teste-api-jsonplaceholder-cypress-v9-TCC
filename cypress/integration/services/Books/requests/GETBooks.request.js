// verbo/método - endpoint . motivo (request) . extensão
/// <reference types="Cypress" />

function allbooks() {
    return cy.request({
        method: 'GET',
        url: 'books',
        failOnStatusCode: false,
    })
}

export { allbooks }