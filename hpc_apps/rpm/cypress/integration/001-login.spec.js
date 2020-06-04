const [USERNAME, PASSWORD] = ['alex@example.com', 'test'];

describe('Login', () => {
  it('Should log in and get some flows', () => {
    cy.login(USERNAME, PASSWORD);
    cy.url().should('eq', 'http://rpm.hpc.vm/#/plan');
  });
});
