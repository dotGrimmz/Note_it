import NoteCard from "../note/NoteCard.vue";

describe("Note Card", () => {
  it("should render", () => {
    cy.mount(NoteCard, {
      props: { details: "this is a note details", index: 0 },
    });
  });

  it("should render a note and an edit and delete button", () => {
    cy.mount(NoteCard, {
      props: { details: "this is a note details", index: 0 },
    });
    cy.get("button").should("contain", "Edit");
    cy.get("button").should("contain", "Delete");
    cy.get(".details").should("contain", "this is a note details");
  });

  it("should display a text area when the edit button is clicked", () => {
    cy.mount(NoteCard, {
      props: { details: "this is a note details", index: 0 },
    });
    cy.get("#edit-btn").click();
    cy.get("textarea").should("be.visible");
    cy.get("textarea").should("have.value", "this is a note details");
  });
});
