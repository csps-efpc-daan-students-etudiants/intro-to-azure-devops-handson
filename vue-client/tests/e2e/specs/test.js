// https://docs.cypress.io/api/introduction/api.html


describe("Task List", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe();
  });

  it("runs a11y test on the home page", () => {
    cy.checkA11y({
      runOnly: {
        type: "tag",
        values: ["wcag2a", "wcag2aa"]
      }
    });
  });

});
