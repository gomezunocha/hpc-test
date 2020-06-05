const PlanForm = require('../support/plan-form');
const f = new PlanForm();
const [USERNAME, PASSWORD] = ['alex@example.com', 'test'];

const BASE_URL = 'http://rpm.hpc.vm/#/plan';

describe('Login', () => {
  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
    cy.url().should('eq', BASE_URL);
  });

  it('Should log in and create a plan', () => {
    cy.get('button').click();
    cy.get(f.name).type('TEST PLAN A')
    cy.get(f.planType).select('Humanitarian response plan')
    cy.get(f.years).select('2020')
    cy.get(f.visibleInProjects).click()
    cy.get(f.clusterType).check('multi')
    cy.get(f.saveButton).click()
    cy.wait(2000)
    cy.get(f.saveAndContinueButton).click()
    cy.wait(1000)
    cy.get(f.locationSelector).type('Switzerland');
    cy.get(f.locationSelectorValue).click();
    cy.get(f.saveAndContinueButton).click()
    cy.wait(1000)
    cy.get(f.monitoringPeriodType).select('Yearly');
    cy.get(f.popualeMonitoringPeriodButton).click();
    cy.get(f.startDate).clear();
    cy.get(f.startDate).type('01/01/2020');
    cy.get(f.saveAndContinueButton).click()
    cy.wait(2000)
    cy.get(f.continueButton).click();
    cy.wait(1000)
    cy.get('div.ng-scope > .form-item--control').click();
    cy.get('.form-textarea').type('test description');
    cy.get('.indicator--text > .form-text').type('test comment');
    cy.get('.form-group--activity-controls > .form-item--control > .ng-scope').click();
    cy.wait(1000);
    cy.get(f.indicatorName).type('test indicator1');
    cy.get(f.indicatorUnitSelector).click();
    cy.get(f.indicatorUnitValueSelect).click();
    cy.get(f.indicatorAffected).type('100');
    cy.get(f.indicatorInneed).type('200');
    cy.get(f.indicatorTargeted).type('500');
    cy.get(f.indicatorCommet).type('test indicator comment');
    cy.get(f.saveIndicator).click();
    cy.wait(1000);
    cy.get(f.saveAndContinueButton).click();
    cy.get(f.sectorIconPopup).click();
    cy.wait(1000);
    cy.get(f.sectorIcon).click();
    cy.get(f.sectorName).type('test sector');
    cy.get(f.globalClusterNameSelector).click();
    cy.get(f.globalClusterNameValue).click();
    cy.get(f.sectorComment).type('sector comment');
    cy.get(f.saveAndContinueButton).click();
    cy.get(f.addCaseloadButton).click();
    cy.wait(1000);
    cy.get(f.caseLoadDescription).type('caseload Description');
    cy.get(f.caseLoadSource).type('caseload source');
    cy.get(f.caseLoadAffected).type('100');
    cy.get(f.caseLoadInneed).type('200');
    cy.get(f.caseLoadTargeted).type('500');
    cy.get(f.saveCaseloadButton).click();
    cy.wait(1000);
    cy.get(f.addCostButton).click();
    cy.get(f.cost).type('100');
    cy.get(f.saveCostButton).click();
    cy.wait(1000);
    cy.get(f.addContactButton).click();
    cy.wait(1000);
    cy.get(f.contactName).type('test name');
    cy.get(f.contactEmail).type('test@test.com');
    cy.get(f.contactAgency).type('test agency');
    cy.get(f.saveContact).click();
    cy.wait(1000);
    cy.get(f.saveAndContinueButton).click();
    cy.wait(1000);
    cy.get(f.addClusterObjectiveButton).click();
    cy.wait(1000);
    cy.get(f.clusterorSectorObjectiveDesc).type('cluster objective description');
    cy.get(f.strategicObjAlignment).click();
    cy.get(f.strategicObjAlignmentValue).click();
    cy.get(f.clusterObjectiveComment).type('cluster objective comments');
    cy.get(f.saveAndContinueButton).click();
    cy.wait(1000);
    cy.get(f.addClusterObjectiveButton).click();
    cy.wait(1000);
    cy.get(f.clusterorSectorObjectiveDesc).type('sector objective description');
    cy.get(f.alignmentTypeRadio).click();
    cy.get(f.strategicObjAlignment).click();
    cy.get(f.clusterObjAlignmentValue).click();
    cy.get(f.saveCompleteButton).click();
    cy.wait(2000);

  });  
});

