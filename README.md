# Job Table Component - Test Automation with Cypress

## Introduction
This test plan outlines the testing approach, resources, schedule, and deliverables for the Job Table component .

## Purpose
The purpose of this test plan is to ensure that the Job Table Search and Reorder components functions correctly and displays accurate information regarding the operations executed on the platform.

## Scope
The testing will cover the following aspects of the Job Table component:
- Display of job information including ID, Name, JobID, Status, Operation, Environment, and Create Date.
- Sorting functionalities.

## How to run tests?

Once all the pre-requisite dependencies and packages are installed, using `npm install` on the project folde, also refer to package.json, you can use the script _tests:automated_ to run all the automated tests from the feature file as below:

`npm run test:automated`

## Test Plan and Gherkin Feature

The Gherkin feature file is located under: **_./cypress/e2e_** folder and the Test Plan is located in _**./test_plan**_ folder

## HTML Reports

The mochawesome html reports are generated after each run and are located in _**./cypress/reports/mocha-report.html**_ .

