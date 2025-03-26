/// <reference types="Cypress" />

describe("Collection tests", () => {
  it("should search for a game, click it's save icon and show the modal", () => {
    cy.visit("/");
    cy.get('#desktop-search [data-cy="search-field"]').type("Fallout 4{enter}");

    cy.contains('[data-testid="gameTitle"]', "Fallout 4")
      .parents('[data-testid="gamecard"]')
      .find('[data-testid="save-button"]')
      .should("exist")
      .click();

    cy.contains("Save game to...").should("exist");
  });

  it("should close the modal on click of 'x' ", () => {
    cy.visit("/");
    cy.get('#desktop-search [data-cy="search-field"]').type("Fallout 4{enter}");

    cy.contains('[data-testid="gameTitle"]', "Fallout 4")
      .parents('[data-testid="gamecard"]')
      .find('[data-testid="save-button"]')
      .should("exist")
      .click();

    cy.contains('[data-cy="modal"]', "Save game to...").should("exist");

    cy.get('[data-cy="modal"] svg.absolute.right-4.cursor-pointer')
      .should("exist")
      .click();
  });

  it("should save game to default collection ", () => {
    cy.visit("/");
    cy.get('#desktop-search [data-cy="search-field"]').type("Fallout 4{enter}");

    cy.contains('[data-testid="gameTitle"]', "Fallout 4")
      .parents('[data-testid="gamecard"]')
      .find('[data-testid="save-button"]')
      .should("exist")
      .click();

    cy.contains('[data-cy="modal"]', "Save game to...").should("exist");

    cy.contains("My game collection").should("exist").click();

    cy.get('a[href="/collections"]').should("exist").click();

    cy.url().should("include", "/collections");
    cy.contains("My game collection").should("exist").click();

    cy.contains("Fallout 4").should("exist");
  });

  it("should save game to cusom collection", () => {
    cy.visit("/");
    cy.get('#desktop-search [data-cy="search-field"]').type("Fallout 4{enter}");

    cy.contains('[data-testid="gameTitle"]', "Fallout 4")
      .parents('[data-testid="gamecard"]')
      .find('[data-testid="save-button"]')
      .should("exist")
      .click();

    cy.contains('[data-cy="modal"]', "Save game to...").should("exist");

    cy.contains("Create new collection").should("exist").click();

    cy.get(`[placeholder="Enter new collection name..."]`)
      .should("exist")
      .type("My custom collection title");

    cy.contains("Create").should("exist").click();

    cy.get('a[href="/collections"]').should("exist").click();

    cy.url().should("include", "/collections");
    cy.contains("My custom collection title").should("exist").click();

    cy.contains("Fallout 4").should("exist");
  });
});
