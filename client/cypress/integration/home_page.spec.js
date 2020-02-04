describe('Given I am a vistor to the UDOU website', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.location('pathname').should('equal', '/')
  })

  it('when I am on the home page, I can see customer reviews of the furniture.', () => {
    cy.contains('Customer Reviews')

    cy.wait(500)
    cy.get('.review-card').find('.reviewer-name')
    // cy.get('.review-card').find('.review-text')
    // cy.get('.review-card').find('.review-date')
  })
  it('When I am on the home page, then I want to be able to see the different types of furniture products they make and see what they look like.', () => {
    cy.contains('Shelves').click()

    cy.contains('li', 'Bookshelves')
    cy.contains('li', 'Wall Units')
    cy.contains('li', 'Sideboards').click()

    cy.location('pathname').should('equal', '/products/sideboards')
    
    
  })
})