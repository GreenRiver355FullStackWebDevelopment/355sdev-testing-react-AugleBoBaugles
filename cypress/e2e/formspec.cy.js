describe('Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5174')
  })

  it("Create a booking", () => {
    cy.get('[data-cy="input-name').type("The Rolling Fork");
    cy.get('[data-cy="input-address"').type("123 Whimsy Way, Sillytown, USA");
    cy.get('[data-cy="input-phone"]').type("678-4321");
    cy.get('[data-cy="input-cuisine"]').type("Fusion Comfort");
    cy.get('[data-cy="input-rating"]').type("4.2");
    cy.get('[data-cy="form-submit"]').submit();

    // figure this bit out
    /* cy.get('[data-cy="The Rolling Fork"] ul').within(() => {
      cy.contains('li', '123 Whimsy Way, Sillytown, USA').should('be.visible');
    }) */
  })
})