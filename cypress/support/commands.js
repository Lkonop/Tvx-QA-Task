Cypress.Commands.add('confirmRes', () => {
    cy.get('button[type="submit"]').click()
})