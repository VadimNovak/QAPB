/// <reference types="cypress" />



it('By Different Types', () => {
    cy.visit("https://www.cukierniasowa.pl/")
    cy.get('button[type="button"]')
    
});


