describe('Given I am a vistor to the UDOU website', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.location('pathname').should('equal', '/')
  })

  it('when I am on the home page, I can see customer reviews of the furniture.', () => {
    cy.contains('Customer Reviews')

    cy.get('.review-card').find('.reviewer-name')
    // cy.get('.review-card').find('.review-text')
    // cy.get('.review-card').find('.review-date')
  })
})