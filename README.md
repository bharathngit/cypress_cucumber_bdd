#Job Table Component - Test Automation with Cypress

##Introduction
This test plan outlines the testing approach, resources, schedule, and deliverables for the Job Table component of the Odaseva platform.

##Purpose
The purpose of this test plan is to ensure that the Job Table Search and Reorder components functions correctly and displays accurate information regarding the operations executed on the platform.

##Scope
The testing will cover the following aspects of the Job Table component:
- Display of job information including ID, Name, JobID, Status, Operation, Environment, and Create Date.
- Sorting functionalities.

##How to run tests?

Once all the pre-requisite dependencies and packages are installed, refer to package.json, you can use the script _tests:automated_ to run all the automated tests from the feature file as below:

```bash
npm run test:automated
```

The Gherkin feature file is located under: _./cypress/e2e_ folder and the Test Plan is located in _./testplan_ folder

##HTML Reports

The mochawesome html reports are generated after each run and are located in _./cypress/reports_ folder.

