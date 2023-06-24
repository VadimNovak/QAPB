/// <reference types="cypress" />


it('By ID', () => {
    cy.visit("https://www.facebook.com/")
    cy.get('#email')
});

