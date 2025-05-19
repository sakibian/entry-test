describe('Login Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display the login form initially', () => {
    cy.get('.login-form').should('be.visible');
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').contains('Login').should('be.visible');
  });

  it('should allow user to log in and display welcome message', () => {
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.get('.welcome-container').should('be.visible');
    cy.get('.welcome-card h1').should('contain', 'Welcome, John Doe!');
    cy.get('.logout-button').should('be.visible');
  });

  it('should allow user to log out and return to login form', () => {
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.get('.logout-button').click();
    cy.get('.login-form').should('be.visible');
    cy.get('input[name="name"]').should('have.value', '');
    cy.get('input[name="password"]').should('have.value', '');
  });
});