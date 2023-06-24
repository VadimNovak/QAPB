it('Using Get with Find and Eq ', () => {
    cy.visit("https://docs.cypress.io/api/table-of-contents#Commands")
    cy.get('aside').find('div').find('a')
});
