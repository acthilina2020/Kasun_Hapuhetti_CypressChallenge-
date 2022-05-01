/// <reference types="cypress" />
// https://instapage.com domain
describe("test cases for postclick", () => {
  beforeEach(() => {
    cy.visit("/", { retryOnNetworkFailure: true });
  });

  it("Task 1", () => {
    cy.url().should("include", "instapage.com");
    cy.get(".navbar-login-options > .list-option > a").click();
    cy.get("#email").type("Testemail@gmail.com");
    cy.get("#password").type("password");
    cy.get("div.l-space-top-tertiary > .fx-ripple-effect").click();
    cy.get(".material-icons-outlined").should("be.visible"); // Error logo is visible
    cy.get(".c-alert__text")
      .invoke("text")
      .then((errorMessege) => {
        // this returns a string with the element's InnerHTML
        expect(errorMessege).equal("Incorrect Email or Password");
      });
  });

  it("Task 2", () => {
    cy.url().should("include", "instapage.com");
    cy.get(".v7-btn-group > .v7-btn-cta").click();
    cy.get(".v7-mt-80 > p.v7-heading-small").scrollIntoView(); // Scrolling to the bottom of the page
    cy.get(".v7-mt-80 > p.v7-heading-small").should("be.visible"); //Postclick.Inc is visible
    cy.get('[href="https://instapage.com/privacy-policy"]').should(
      "be.visible"
    ); //Privacy Policy is visible
    cy.get('[href="https://instapage.com/terms-of-service"]').should(
      "be.visible"
    ); //Terms of service is visible
    cy.get('[href="https://instapage.com/about"]').should("be.visible"); //About us is visible
    cy.get('[href="https://instapage.com/privacy-policy"]').click();
    cy.url().should("include", "/privacy-policy"); // asserting the url after navigating to the privacy policy page
  });

  it("Task 3", () => {
    cy.get(
      ":nth-child(5) > .main-footer-menu > :nth-child(1) > .v7-btn-flat-black"
    ).click(); //Click on Browse Library link
    cy.url().should("include", "/resources"); // Asserting the url
    cy.get(".v7-search-input").type("Conversion ROAS");
    cy.get(".v7-search-shadow > .v7-btn").click(); //Search for results
    cy.get(":nth-child(1) > .v7-box-copy").should("be.visible"); //Verify the 8 results
    cy.get(":nth-child(2) > .v7-box-copy").should("be.visible");
    cy.get(":nth-child(3) > .v7-box-copy").should("be.visible");
    cy.get(":nth-child(4) > .v7-box-copy").should("be.visible");
    cy.get(":nth-child(5) > .v7-box-copy").should("be.visible");
    cy.get(":nth-child(6) > .v7-box-copy").should("be.visible");
    cy.get(":nth-child(7) > .v7-box-copy").should("be.visible");
    cy.get(":nth-child(8) > .v7-box-copy").should("be.visible");
  });
});
