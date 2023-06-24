/// <reference types="cypress" />


it.only('By Class', () => {
    cy.visit("https://www.paypal.com/signin")
    cy.get('.desktop')
   
});

