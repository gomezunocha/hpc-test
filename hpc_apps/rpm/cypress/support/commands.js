Cypress.Commands.add('login', (username, password) => {
  const log = Cypress.log({name: 'login'})
  cy.clearCookies({log: false});
  cy.server();

  // TODO fix this. skip new relic when running cypress.
  // cy.visit('/', {log: false,
  //   onBeforeLoad (win) {
  //     const original = win.document.head.appendChild
  //     cy.stub(win.document.head, 'appendChild').callsFake(child => {
  //       if(child.type === 'text/javascript' && child.innerHTML.includes('NREUM')) {
  //         return
  //       }
  //       original(child);
  //     })
  //   }
  // });

  cy.fixture('plans.json').as('plans');
  const URL = '/v1/plan?activities=false&filterBy=permittedActions&limit=10&offset=0&scopes=entityPrototypes,locations,planVersion,monitoringPeriods&userid=alex@example.com_1485421117650';
  cy.route('GET', URL, '@plans').as('getPlans');

  cy.visit('/', {log: false});
  cy.get('.login > a > .ng-scope', {log: false}).click({log: false});
  cy.get('input[name="email"]', {log: false}).type(username, {log: false});
  cy.get('input[name="password"]', {log: false}).type(password, {log: false});
  cy.get('form', {log: false}).submit({timeout: 2000, log: false});

  cy.wait('@getPlans');
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
