// Generated from: tests\features\credit-card.feature
import { test } from "playwright-bdd";

test.describe('Credit Card Functionality', () => {

  test.beforeEach('Background', async ({ Given, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('User is authenticated and at credit card form page', null, { page }); 
    await And('All text field is cleared'); 
  });
  
  test.describe('To evaluate the credit card form Functionality with valid credentials', () => {

    test('Example #1', { tag: ['@valid', '@sanity', '@regression'] }, async ({ When, Then, And, page }) => { 
      await When('User enters "EPKPA7238P" card number', null, { page }); 
      await And('User selects "Male" from dropdown'); 
      await And('User checks "Indian" from checkbox'); 
      await And('User enters "Mama" in mother_name text field', null, { page }); 
      await And('User enters "robot@automation.com" in email text field'); 
      await And('User enters "685552" in address text field'); 
      await Then('User will be able to click next button'); 
      await And('User will be navigated to next section', null, { page }); 
    });

  });

  test.describe('To evaluate the credit card form Functionality with invalid credentials', () => {

    test('Example #1', { tag: ['@invalid', '@regression'] }, async ({ When, Then, And, page }) => { 
      await When('User enters "NOPANFORYO" card number', null, { page }); 
      await Then('User gets the error message "PAN not valid, please enter a valid PAN"', null, { page }); 
      await And('User will not be able to click next button', null, { page }); 
    });

  });

  test.describe('To evaluate the credit card form Functionality with blank personal email', () => {

    test('Example #1', { tag: ['@regression'] }, async ({ When, Then, And, page }) => { 
      await When('User enters "EPKPA7238P" card number', null, { page }); 
      await And('User enters "Mama" in mother_name text field', null, { page }); 
      await And('User enters "" in email text field'); 
      await Then('User gets the error message "Please enter a valid email ID"', null, { page }); 
      await And('User will not be able to click next button', null, { page }); 
    });

  });

  test.describe('To evaluate the credit card form Functionality with blank pincode', () => {

    test('Example #1', { tag: ['@regression'] }, async ({ When, And, page }) => { 
      await When('User enters "EPKPA7238P" card number', null, { page }); 
      await And('User enters "" in address text field'); 
      await And('User enters "robot@automation.com" in email text field'); 
      await And('User will not be able to click next button', null, { page }); 
    });

  });

  test.describe('To evaluate the credit card form Functionality with blank mothers name', () => {

    test('Example #1', { tag: ['@regression'] }, async ({ When, Then, And, page }) => { 
      await When('User enters "EPKPA7238P" card number', null, { page }); 
      await And('User enters "" in mother_name text field', null, { page }); 
      await And('User enters "robot@automation.com" in email text field'); 
      await Then('User gets the error message "Please enter a valid mother\'s name (minimum 3 characters)"', null, { page }); 
      await And('User will not be able to click next button', null, { page }); 
    });

  });

  test.describe('To evaluate whether the user is able to type in the pan field', () => {

    test('Example #1', { tag: ['@regression', '@ui-testing'] }, async ({ When, Then, And }) => { 
      await When('User clicks the element "panField"'); 
      await And('User enters "NOPANFORYO" in the field "panField"'); 
      await Then('User is able to see "NOPANFORYO" in the field "panField"'); 
    });

  });

  test.describe('To evaluate whether the user is able to see the dob', () => {

    test('Example #1', { tag: ['@regression', '@ui-testing'] }, async ({ When, Then, And }) => { 
      await When('User clicks the element "<elementName>"'); 
      await And('User enters "EPKPA7238P" in the field "panFieldField"'); 
      await Then('User is able to see "15/08/2003" in the field "dobField"'); 
    });

  });

  test.describe('To evaluate whether the user is able and select gender drop down', () => {

    test('Example #1', { tag: ['@regression', '@ui-testing'] }, async ({ When, Then }) => { 
      await When('User clicks the element "genderBox"'); 
      await Then('User will be able to see "genderSelect"'); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\credit-card.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":13,"pickleLine":20,"tags":["@valid","@sanity","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is authenticated and at credit card form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And All text field is cleared","isBg":true,"stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User enters \"EPKPA7238P\" card number","stepMatchArguments":[{"group":{"start":12,"value":"\"EPKPA7238P\"","children":[{"start":13,"value":"EPKPA7238P","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And User selects \"Male\" from dropdown","stepMatchArguments":[{"group":{"start":13,"value":"\"Male\"","children":[{"start":14,"value":"Male","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And User checks \"Indian\" from checkbox","stepMatchArguments":[{"group":{"start":12,"value":"\"Indian\"","children":[{"start":13,"value":"Indian","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And User enters \"Mama\" in mother_name text field","stepMatchArguments":[{"group":{"start":12,"value":"\"Mama\"","children":[{"start":13,"value":"Mama","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And User enters \"robot@automation.com\" in email text field","stepMatchArguments":[{"group":{"start":12,"value":"\"robot@automation.com\"","children":[{"start":13,"value":"robot@automation.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And User enters \"685552\" in address text field","stepMatchArguments":[{"group":{"start":12,"value":"\"685552\"","children":[{"start":13,"value":"685552","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then User will be able to click next button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"And User will be navigated to next section","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":30,"tags":["@invalid","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is authenticated and at credit card form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And All text field is cleared","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When User enters \"NOPANFORYO\" card number","stepMatchArguments":[{"group":{"start":12,"value":"\"NOPANFORYO\"","children":[{"start":13,"value":"NOPANFORYO","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then User gets the error message \"PAN not valid, please enter a valid PAN\"","stepMatchArguments":[{"group":{"start":28,"value":"\"PAN not valid, please enter a valid PAN\"","children":[{"start":29,"value":"PAN not valid, please enter a valid PAN","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"And User will not be able to click next button","stepMatchArguments":[]}]},
  {"pwTestLine":38,"pickleLine":42,"tags":["@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is authenticated and at credit card form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And All text field is cleared","isBg":true,"stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When User enters \"EPKPA7238P\" card number","stepMatchArguments":[{"group":{"start":12,"value":"\"EPKPA7238P\"","children":[{"start":13,"value":"EPKPA7238P","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"And User enters \"Mama\" in mother_name text field","stepMatchArguments":[{"group":{"start":12,"value":"\"Mama\"","children":[{"start":13,"value":"Mama","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"And User enters \"\" in email text field","stepMatchArguments":[{"group":{"start":12,"value":"\"\"","children":[{"start":13,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then User gets the error message \"Please enter a valid email ID\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Please enter a valid email ID\"","children":[{"start":29,"value":"Please enter a valid email ID","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"And User will not be able to click next button","stepMatchArguments":[]}]},
  {"pwTestLine":50,"pickleLine":54,"tags":["@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is authenticated and at credit card form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And All text field is cleared","isBg":true,"stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When User enters \"EPKPA7238P\" card number","stepMatchArguments":[{"group":{"start":12,"value":"\"EPKPA7238P\"","children":[{"start":13,"value":"EPKPA7238P","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":52,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"And User enters \"\" in address text field","stepMatchArguments":[{"group":{"start":12,"value":"\"\"","children":[{"start":13,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":53,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"And User enters \"robot@automation.com\" in email text field","stepMatchArguments":[{"group":{"start":12,"value":"\"robot@automation.com\"","children":[{"start":13,"value":"robot@automation.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":54,"gherkinStepLine":50,"keywordType":"Action","textWithKeyword":"And User will not be able to click next button","stepMatchArguments":[]}]},
  {"pwTestLine":61,"pickleLine":67,"tags":["@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is authenticated and at credit card form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And All text field is cleared","isBg":true,"stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":59,"keywordType":"Action","textWithKeyword":"When User enters \"EPKPA7238P\" card number","stepMatchArguments":[{"group":{"start":12,"value":"\"EPKPA7238P\"","children":[{"start":13,"value":"EPKPA7238P","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":63,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"And User enters \"\" in mother_name text field","stepMatchArguments":[{"group":{"start":12,"value":"\"\"","children":[{"start":13,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":64,"gherkinStepLine":61,"keywordType":"Action","textWithKeyword":"And User enters \"robot@automation.com\" in email text field","stepMatchArguments":[{"group":{"start":12,"value":"\"robot@automation.com\"","children":[{"start":13,"value":"robot@automation.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":65,"gherkinStepLine":62,"keywordType":"Outcome","textWithKeyword":"Then User gets the error message \"Please enter a valid mother's name (minimum 3 characters)\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Please enter a valid mother's name (minimum 3 characters)\"","children":[{"start":29,"value":"Please enter a valid mother's name (minimum 3 characters)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":66,"gherkinStepLine":63,"keywordType":"Outcome","textWithKeyword":"And User will not be able to click next button","stepMatchArguments":[]}]},
  {"pwTestLine":73,"pickleLine":78,"tags":["@regression","@ui-testing"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is authenticated and at credit card form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And All text field is cleared","isBg":true,"stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":72,"keywordType":"Action","textWithKeyword":"When User clicks the element \"panField\"","stepMatchArguments":[{"group":{"start":24,"value":"\"panField\"","children":[{"start":25,"value":"panField","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":75,"gherkinStepLine":73,"keywordType":"Action","textWithKeyword":"And User enters \"NOPANFORYO\" in the field \"panField\"","stepMatchArguments":[{"group":{"start":12,"value":"\"NOPANFORYO\"","children":[{"start":13,"value":"NOPANFORYO","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":38,"value":"\"panField\"","children":[{"start":39,"value":"panField","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":76,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"Then User is able to see \"NOPANFORYO\" in the field \"panField\"","stepMatchArguments":[{"group":{"start":20,"value":"\"NOPANFORYO\"","children":[{"start":21,"value":"NOPANFORYO","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":46,"value":"\"panField\"","children":[{"start":47,"value":"panField","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":83,"pickleLine":89,"tags":["@regression","@ui-testing"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is authenticated and at credit card form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And All text field is cleared","isBg":true,"stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":83,"keywordType":"Action","textWithKeyword":"When User clicks the element \"<elementName>\"","stepMatchArguments":[{"group":{"start":24,"value":"\"<elementName>\"","children":[{"start":25,"value":"<elementName>","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":85,"gherkinStepLine":84,"keywordType":"Action","textWithKeyword":"And User enters \"EPKPA7238P\" in the field \"panFieldField\"","stepMatchArguments":[{"group":{"start":12,"value":"\"EPKPA7238P\"","children":[{"start":13,"value":"EPKPA7238P","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":38,"value":"\"panFieldField\"","children":[{"start":39,"value":"panFieldField","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":86,"gherkinStepLine":85,"keywordType":"Outcome","textWithKeyword":"Then User is able to see \"15/08/2003\" in the field \"dobField\"","stepMatchArguments":[{"group":{"start":20,"value":"\"15/08/2003\"","children":[{"start":21,"value":"15/08/2003","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":46,"value":"\"dobField\"","children":[{"start":47,"value":"dobField","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":93,"pickleLine":98,"tags":["@regression","@ui-testing"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is authenticated and at credit card form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And All text field is cleared","isBg":true,"stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":94,"keywordType":"Action","textWithKeyword":"When User clicks the element \"genderBox\"","stepMatchArguments":[{"group":{"start":24,"value":"\"genderBox\"","children":[{"start":25,"value":"genderBox","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":95,"gherkinStepLine":95,"keywordType":"Outcome","textWithKeyword":"Then User will be able to see \"genderSelect\"","stepMatchArguments":[{"group":{"start":25,"value":"\"genderSelect\"","children":[{"start":26,"value":"genderSelect","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end