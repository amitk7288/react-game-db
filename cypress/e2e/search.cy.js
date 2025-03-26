/// <reference types="Cypress" />

const base_url = Cypress.env("VITE_BASE_URL");

describe("Search tests", () => {
  beforeEach(() => {
    cy.intercept("GET", `${base_url}/games?*search=*`, {
      body: {
        results: [
          {
            id: 2552,
            name: "Sonic the Hedgehog 2",
            background_image:
              "https://media.rawg.io/media/games/2c3/2c3363eb1ae202b9e4e7520d3f14ab2e.jpg",
            metacritic: 85,
            genres: [{ name: "Platformer" }],
            slug: "sonic-the-hedgehog-2",
          },
        ],
      },
    }).as("searchGames");
  });

  it("should allow the user to type a query and perform a search on pressing Enter", () => {
    cy.visit("/");
    cy.get('#desktop-search [data-cy="search-field"]').type(
      "Sonic the hedgehog 2{enter}",
    );
    cy.wait("@searchGames");
  });

  it("should display search results matching the query", () => {
    cy.visit("/");
    cy.get('#desktop-search [data-cy="search-field"]').type(
      "Sonic the hedgehog 2{enter}",
    );
    cy.wait("@searchGames");

    cy.contains("Search results").should("exist");
    cy.contains("Sonic the Hedgehog 2").should("exist");
  });

  it("should navigate to the single game page when a search result is clicked", () => {
    cy.visit("/");
    cy.get('#desktop-search [data-cy="search-field"]').type(
      "Sonic the hedgehog 2{enter}",
    );
    cy.wait("@searchGames");

    cy.contains("Search results").should("exist");
    cy.contains("Sonic the Hedgehog 2").should("exist").click();

    cy.url().should("include", "/game/2552");
    cy.contains("Stats").should("exist");
    cy.contains("Screenshots").should("exist");
    cy.contains("Achievements").should("exist");
  });
});
