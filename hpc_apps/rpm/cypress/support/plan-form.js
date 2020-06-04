class PlanForm {
  name = '.form-group--name--plan > .form-type-textfield > input[name="edit-textfield--plan-name"]';
  planType = '.form-group--name--plan > .form-type-select > select[name="edit-select--type-of-plan"]';
  years = 'select[name="edit-select--years-of-plan"]';
  visibleInProjects = 'input[name="is-for-project"]';
  clusterType = 'input[name="clusterType"]';
  saveButton = '.form--save';
  saveAndContinueButton = '.form--continue--primary';
}

module.exports = PlanForm;
