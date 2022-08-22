import CreateNote from "../create/CreateNote.vue";

describe("Create Note ", () => {
  it("renders properly", () => {
    cy.mount(CreateNote);
  });

  it("renders input", () => {
    cy.mount(CreateNote);
    cy.get("textarea").should("be.visible");
    cy.get("button").should("be.disabled");
  });

  it("should be enabled when the text area is not empty", () => {
    cy.mount(CreateNote);
    cy.get("textarea").type("This is a note");
    cy.get("button").should("be.visible");
  });

});
