describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
    cy.get("button").click();
    cy.get(".modal").should("be.visible");
    cy.get(".backdrop").click({ force: true });
    cy.get(".modal").should("not.exist");
    cy.get(".actions button").should("be.visible");
  });
});
