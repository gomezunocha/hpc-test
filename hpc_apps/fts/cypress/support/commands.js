const hidForm = new (require('./hid-form'))();
const ftsPage = new (require('./fts-page'))();

Cypress.Commands.add('login', (username, password) => {
  const log = Cypress.log({name: 'login'})
  cy.clearCookies({log: false});
  cy.visit('/', {log: false});
  cy.get(ftsPage.loginButton, {log: false}).click({log: false});
  cy.get(hidForm.email, {log: false}).type(username, {log: false});
  cy.get(hidForm.password, {log: false}).type(password, {log: false});
  cy.get(hidForm.form, {log: false}).submit({timeout: 2000, log: false});
});

Cypress.Commands.add('loginWithZeroFlows', (username, password) => {
  const log = Cypress.log({name: 'loginWithZeroFlows'})
  cy.clearCookies({log: false});
  cy.server({log: false});
  cy.visit('/', {log: false,
    onBeforeLoad (win) {
      const original = win.document.head.appendChild
      cy.stub(win.document.head, 'appendChild').callsFake(child => {
        if(child.type === 'text/javascript' && child.innerHTML.includes('NREUM')) {
          return
        }
        original(child);
      })
    }
  });

  cy.fixture('/flows/search.json').as('flows');
  cy.route('POST',
    '/v1/flow/search?userid=alex@example.com_1485421117650',
    '@flows').as('postFlowSearch');

  cy.get(ftsPage.loginButton, {log: false}).click({log: false});
  cy.get(hidForm.email, {log: false}).type(username, {log: false});
  cy.get(hidForm.password, {log: false}).type(password, {log: false});
  cy.get(hidForm.form, {log: false}).submit({timeout: 2000, log: false});

  cy.wait('@postFlowSearch');
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
