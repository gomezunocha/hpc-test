const [USERNAME, PASSWORD] = ['alex@example.com', 'test'];
const ff = new (require('../support/flow-form'))();

describe('Create Flow', () => {
  beforeEach(() => {
    cy.loginWithZeroFlows(USERNAME, PASSWORD);
  })

  it('Should create flow', () => {
    cy.get(ff.newFlowButton).click();
    cy.get(ff.title)
      .should('have.text', 'Add Funding Flow');

    cy.get(ff.sourceOrganization, {timeout: 5000})
      .type('France')
      .get(ff.sourceOrganizationOption2).click();

    // TODO fix this
    // cy.get(ff.usageYears)
    //   .type('2020')
    //   .get(ff.usageYearsOption1).click();
  });
});
