/// <reference types="Cypress" />

describe("Wishlist tests", () => {
  it("should search for a game and click it's wishlist icon", () => {
    cy.visit("/");
    cy.get('#desktop-search [data-cy="search-field"]').type("Fallout 4{enter}");

    cy.contains('[data-testid="gameTitle"]', "Fallout 4")
      .parents('[data-testid="gamecard"]')
      .find('[data-testid="wish-button"]')
      .should("exist")
      .click();
  });

  it("should navigate to Wishlist page and verify wishlist game is there", () => {
    cy.visit("/");
    cy.get('#desktop-search [data-cy="search-field"]').type("Fallout 4{enter}");

    cy.contains('[data-testid="gameTitle"]', "Fallout 4")
      .parents('[data-testid="gamecard"]')
      .find('[data-testid="wish-button"]')
      .should("exist")
      .click();

    cy.get('a[href="/wishlist"]').should("exist").click();

    cy.url().should("include", "/wishlist");
    cy.contains("Fallout 4").should("exist");
  });
});
