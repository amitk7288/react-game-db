/// <reference types="Cypress" />

describe("Collection tests", () => {
  it("should click the Genres button and show the genres page", () => {
    cy.visit("/");

    cy.get(`a[href="/genres"]`).should("exist").click();
    cy.url().should("include", "/genres");
  });

  it("should navigate to actions genre page on click of action card", () => {
    cy.visit("/");

    cy.get(`a[href="/genres"]`).should("exist").click();
    cy.url().should("include", "/genres");

    cy.contains(`Action`).should("exist").click();
    cy.url().should("include", "/action");
  });
});
