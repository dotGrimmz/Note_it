describe("Note It", () => {
  it("should render the Note It Application", () => {
    cy.visit("/");
  });

  it("should allow a user to create a note", () => {
    cy.get("textarea").should("be.visible");
    cy.get("#create-btn").should("be.disabled");
    cy.get("textarea").type("This is a new Note");
    cy.get("#create-btn").should("be.enabled");
    cy.get("#create-btn").click();
    cy.get(".mosha__toast").should("contain", "Note Created");
  });

  it("should render note on saved list once created", () => {
    cy.get(".panel-item").should("be.visible");
    cy.get("#note-details-0").should("contain", "This is a new Note");
  });

  it("should allow a user to edit a note", () => {
    cy.get("#edit-btn").should("be.visible");
    cy.get("#edit-btn").click();
    cy.get("#save-btn").should("be.visible");
    cy.get("#edit-input0").should("be.visible");
    cy.get("#edit-input0").type("This note has been edited");
    cy.get(".panel-item").should("be.visible");
    cy.get("#edit-btn").click();
    cy.get(".mosha__toast").should("contain", "Note Saved");
    cy.get("#note-details-0").should("contain", "This note has been edited");
  });

  it("should allow a user to delete a note", () => {
    cy.get("#delete-btn0").should("be.visible");
    cy.get("#delete-btn0").click();
    cy.get(".mosha__toast").should("contain", "Note Deleted");
    cy.get(".panel-item").should("not.exist");
    cy.get(".empty-notes-msg").should("be.visible");
  });
});
