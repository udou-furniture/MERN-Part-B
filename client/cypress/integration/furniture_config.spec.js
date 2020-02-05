describe('Given I know which type of furniture I would like to purchase, ', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.contains('Shelves').click()

    cy.get('.list-item').contains('Bookshelves').click()

    // remove this line below once drop down is fixed
    cy.contains('Shelves').click()

    cy.get('.product-card-img-container').find('img')
  })

  it('I want to be able to choose to customise the sizes of the cabinet', () => {
    cy.contains('Customise').click()

    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set

    let input = cy.get('.height-sliding-block')
      .find('input[type=range]').as('range').then(input => {
        nativeInputValueSetter.call(input[0], '0.5') 
        let event = new Event('input', { bubbles: true })
        input[0].dispatchEvent(event)
      })

    cy.contains('h4', 'Height').siblings().should('have.text', '60 cm')

    cy.get('.white-radio').click()
  })

  it.only('when I have configured my cabinet I want to be able to add it to my cart.', () => {
    cy.contains('Customise').click()

    cy.contains('button', 'Add To Cart').click()

    cy.get('.links').find('.cart-link').siblings().should('have.text', '1')
  })

  
})

//when I go to configure the furntiture, then I should be able to change the size of the cabinet.