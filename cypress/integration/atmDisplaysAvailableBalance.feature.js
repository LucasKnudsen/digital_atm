describe('ATM displays available balance', () => {

  it('displays an initial balance of 1000', () => {
    cy.visit('/')
    cy.get('#balance').should('contain', 'Your balance: 1000')
  })
})