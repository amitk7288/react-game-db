/// <reference types="Cypress" />

describe("Favourite tests", () => {
  it("should search for a game and click it's fav icon", () => {
    cy.visit("/");
    cy.get('#desktop-search [data-cy="search-field"]').type("Fallout 4{enter}");

    cy.contains('[data-testid="gameTitle"]', "Fallout 4")
      .parents('[data-testid="gamecard"]')
      .find('[data-testid="fav-button"]')
      .should("exist")
      .click();
  });

  it("should navigate to Favourites page and verify fav game is there", () => {
    cy.visit("/");
    cy.get('#desktop-search [data-cy="search-field"]').type("Fallout 4{enter}");

    cy.contains('[data-testid="gameTitle"]', "Fallout 4")
      .parents('[data-testid="gamecard"]')
      .find('[data-testid="fav-button"]')
      .should("exist")
      .click();

    cy.get('a[href="/favourites"]').should("exist").click();

    cy.url().should("include", "/favourites");
    cy.contains("Fallout 4").should("exist");
  });
});
