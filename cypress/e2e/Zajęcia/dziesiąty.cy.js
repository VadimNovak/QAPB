/// <reference types="cypress" />



it('By Different Tag', () => {
    cy.visit("https://www.cukierniasowa.pl/")
    cy.get('[placeholder="nazwa produktu"]')
    
});


