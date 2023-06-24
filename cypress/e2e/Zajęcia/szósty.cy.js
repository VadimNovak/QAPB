
it('Using Get with Find and Eq ', () => {
    cy.visit("https://next.privat24.ua/deposit/open")
    cy.get('tbody').find('td').find('div').find('button')
});
