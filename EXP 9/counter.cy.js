describe("Counter Test", () => {
  it("increments count when button is clicked", () => {
   cy.visit("/");


    cy.get('[data-testid="count"]').should("have.text", "0");
    cy.contains("Increment").click();
    cy.get('[data-testid="count"]').should("have.text", "1");
  });
});


