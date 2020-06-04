const PlanForm = require('../support/plan-form');
const f = new PlanForm();
const [USERNAME, PASSWORD] = ['alex@example.com', 'test'];

const BASE_URL = 'http://rpm.hpc.vm/#/plan';

describe('Login', () => {
  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
    cy.url().should('eq', BASE_URL);
  });

  it('Should log in and get some flows', () => {
    cy.get('button').click();
    cy.get(f.name).type('TEST PLAN A')
    cy.get(f.planType).select('Humanitarian response plan')
    cy.get(f.years).select('2020')
    cy.get(f.visibleInProjects).click()
    cy.get(f.clusterType).check('multi')
    cy.get(f.saveButton).click()
    // cy.url().should('eq', `${BASE_URL}/x/edit#periodsDiv`)
    cy.get(f.saveAndContinueButton).click()
    cy.get(f.saveAndContinueButton).click()
  });
});
