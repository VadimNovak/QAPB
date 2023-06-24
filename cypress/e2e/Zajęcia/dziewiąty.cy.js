it('', () => {
    cy.visit("https://www.costacoffee.pl/")
    cy.get('footer').contains('Nasze menu')
});