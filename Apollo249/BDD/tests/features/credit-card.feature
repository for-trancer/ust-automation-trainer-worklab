Feature: Credit Card Functionality

Background:
Given User is authenticated and at credit card form page
And All text field is cleared

# Test Case 1
@valid @sanity @regression @functional-testing
Scenario Outline: To evaluate the credit card form Functionality with valid credentials
When User enters "<pan>" card number
And User selects "<gender>" from dropdown
And User checks "<nationality>" from checkbox
And User enters "<mother_name>" in mother_name text field
And User enters "<email>" in email text field
And User enters "<pincode>" in address text field
Then User will be able to click next button
And User will be navigated to next section
Examples: 
| pan        | gender | nationality | mother_name | email                | pincode | message |
| EPKPA7238P | Male   | Indian      | Mama        | robot@automation.com | 685552  | Step 2 of 4 |

# Test Case 2
@invalid @regression @functional-testing
Scenario Outline: To evaluate the credit card form Functionality with invalid credentials
When User enters "<pan>" card number
Then User gets the error message "<message>"
And User will not be able to click next button
Examples:
| pan        | gender | nationality | mother_name | email                | pincode | message |
| NOPANFORYO | none   | none      | Mama        | none | none  | PAN not valid, please enter a valid PAN |

# Test Case 3
@regression @functional-testing
Scenario Outline: To evaluate the credit card form Functionality with blank personal email
When User enters "<pan>" card number
And User enters "<mother_name>" in mother_name text field
And User enters "<email>" in email text field
Then User gets the error message "<message>"
And User will not be able to click next button
Examples:
| pan        | gender | nationality | mother_name | email                | pincode | message |
| EPKPA7238P | Male   | Indian      | Mama        |  | 685552  | Please enter a valid email ID |

# Test Case 4
@regression @functional-testing
Scenario Outline: To evaluate the credit card form Functionality with blank pincode
When User enters "<pan>" card number
And User enters "<pincode>" in address text field
And User enters "<email>" in email text field
And User will not be able to click next button

Examples:
| pan        | gender | nationality | mother_name | email                | pincode | message |
| EPKPA7238P | none   | none     | none        | robot@automation.com |   | none |

# Test Case 5
@regression @functional-testing
Scenario Outline: To evaluate the credit card form Functionality with blank mothers name
When User enters "<pan>" card number
And User enters "<mother_name>" in mother_name text field
And User enters "<email>" in email text field
Then User gets the error message "<message>"
And User will not be able to click next button

Examples: 
| pan        | gender | nationality | mother_name | email                | pincode | message |
| EPKPA7238P | none   | none      |        | robot@automation.com | none  | Please enter a valid mother's name (minimum 3 characters) |

# Test Case 6
@regression @ui-testing
Scenario Outline: To evaluate whether the user is able to type in the pan field
When User clicks the element "<elementName>"
And User enters "<inputData>" in the field "<elementName>"
Then User is able to see "<outputData>" in the field "<elementName>"

Examples:
|   elementName |   inputData   |   outputData  |
|   panField    |   NOPANFORYO  |   NOPANFORYO  |

# Test Case 7
@regression @ui-testing
Scenario Outline: To evaluate whether the user is able to see the dob
When User clicks the element "<elementName>"
And User enters "<inputData>" in the field "<elementName1>"
Then User is able to see "<outputData>" in the field "<elementName2>"

Examples:
|   elementName1 |  elementName2    |   inputData   |   outputData  |
|   panFieldField   | dobField    |   EPKPA7238P  |   15/08/2003  |

# Test Case 8
@regression @ui-testing
Scenario Outline: To evaluate whether the user is able and select gender drop down
When User clicks the element "<elementName>"
Then User will be able to see "<targetElement>"
Examples:
|   elementName |   targetElement   |
|   genderBox   |   genderSelect    |






