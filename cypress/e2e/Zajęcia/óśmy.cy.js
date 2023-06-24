it('', () => {
    cy.visit("https://www.costacoffee.pl/")
    cy.contains('Czytaj więcej')
});

it.only('', () => {
    cy.visit("https://www.costacoffee.pl/")
    cy.contains('ok')
});
