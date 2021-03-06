class PlanForm {
  name = '.form-group--name--plan > .form-type-textfield > input[name="edit-textfield--plan-name"]';
  planType = '.form-group--name--plan > .form-type-select > select[name="edit-select--type-of-plan"]';
  years = 'select[name="edit-select--years-of-plan"]';
  visibleInProjects = 'input[name="is-for-project"]';
  clusterType = 'input[name="clusterType"]';
  saveButton = '.form--save';
  saveAndContinueButton = '.form--continue--primary';
  saveCostButton = '[click-confirm-message="Are you sure you want to save this attachment?"] > .ng-scope'; 
  addContactButton = ':nth-child(3) > .form-group--activity-controls > .form-item--control > .ng-scope';
  addCostButton = ':nth-child(2) > .form-group--activity-controls > .form-item--control > .ng-scope';
  cost = '.form-group--2 > .form-item > .form-text';
  saveCaseloadButton = '[ng-click="vm.saveAttachment(vm.coreEntity.id, indicator)"] > .ng-scope';
  addCaseloadButton = ':nth-child(1) > .form-group--activity-controls > .form-item--control > .ng-scope';
  caseLoadDescription = '.form-group--1 > .indicator--global-indicator > .form-text';
  caseLoadSource = '.form-group--2 > .indicator--global-indicator > .form-text';
  caseLoadAffected = '.form-group--3 > :nth-child(1) > :nth-child(1) > label > .form-text';
  caseLoadInneed = '.form-group--3 > :nth-child(1) > :nth-child(2) > label > .form-text';
  caseLoadTargeted = ':nth-child(3) > label > .form-text';
  sectorComment = '.indicator--text > .form-text';
  contactName = '.attachment--wrapper > .form-group--1 > :nth-child(2) > .form-text';
  contactEmail = ':nth-child(3) > .form-text';
  contactAgency = ':nth-child(4) > .form-text';
  saveContact = '[ng-click="vm.saveAttachment(vm.coreEntity.id, attachment)"] > .ng-scope';
  continueButton = '.form--continue--primary';
  indicatorAffected = ':nth-child(3) > label > .form-text';
  indicatorInneed = ':nth-child(4) > label > .form-text';
  indicatorTargeted = ':nth-child(5) > label > .form-text';
  indicatorCommet = '.form-group--3 > :nth-child(2) > .indicator--text > .form-text';
  saveIndicator = '[ng-click="vm.saveAttachment(vm.coreEntity.id, indicator)"] > .ng-scope';
  indicatorName = '.form-group--2 > .indicator--text > .form-text';
  indicatorUnitSelector = '.indicator--unit > .ui-select-container > .select2-choice';
  indicatorUnitValueSelect = '#ui-select-choices-row-6-0 > .select2-result-label > .ng-binding';
  addClusterObjectiveButton = 'div.ng-scope > .form-item--control';
  clusterorSectorObjectiveDesc = '.form-textarea';
  strategicObjAlignment = '.select2-input';
  strategicObjAlignmentValue = '[ng-bind-html="alignmentEntity.planEntityVersion.value.description | characters: 60 | highlight: $select.search"]';
  clusterObjectiveComment = '.indicator--text > .form-text';
  alignmentTypeRadio = ':nth-child(3) > .form-item > .option > .form-radio';
  clusterObjAlignmentValue = '#ui-select-choices-row-10-0 > .select2-result-label';
  saveCompleteButton = '.form--normal > .ng-scope';
  locationSelector = '.select2-chosen.ng-binding';
  locationSelectorValue = '.select2-result-label > .ng-binding';
  monitoringPeriodType = '.button-group--stop > .ng-valid';
  popualeMonitoringPeriodButton = '.button-group--stop > .form-item--control > .ng-scope';
  startDate = '[name="edit-textfield--start-date"]';
  sectorIconPopup = ':nth-child(1) > .cluster-icon-tabs > .icon-button > .ng-scope > #Layer_1';
  sectorIcon = '[for="radio--clusters_protection_icon"] > #Layer_1';
  sectorName = '.form-text-medium';
  globalClusterNameSelector = '.select2-input';
  globalClusterNameValue = '#ui-select-choices-row-7-0 > .select2-result-label > .ng-binding';
}

module.exports = PlanForm;
