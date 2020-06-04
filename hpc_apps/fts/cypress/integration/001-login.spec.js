const [USERNAME, PASSWORD] = ['alex@example.com', 'test'];
const BASE_URL = 'http://fts.hpc.vm';

describe('Login', () => {
  it('Should log in and get some flows', () => {
    cy.login(USERNAME, PASSWORD);
    cy.url().should('eq', `${BASE_URL}/#/flow/page/1`);
  });

  it('Should log in and get zero flows', () => {
    cy.loginWithZeroFlows(USERNAME, PASSWORD);
    cy.url().should('eq', `${BASE_URL}/#/flow/page/1`);
  });
});
