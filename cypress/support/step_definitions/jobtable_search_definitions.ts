import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { JobsTablePage } from "../page_objects/jobtable_page_objects";


const jobs_table_page = new JobsTablePage;

/**
 * GIVEN
 */
 Given("I navigate to the Joblist page", ()=>{
    jobs_table_page.navigate_to_page();
 });

 Given("Joblist table is displayed", ()=>{
   jobs_table_page.jobstable_isdisplayed();
 })

 Given("Search bar is displayed", ()=>{
   jobs_table_page.searchbar_isdisplayed();
 })

 /**
  * WHEN
  */

 /**
  * {string} value is passed into search_text which is passed on further
  */
 When("I type {string} in the Seach bar", (search_text: string)=>{
   jobs_table_page.type_in_searchbar(search_text);
 })

 When("I click the {string} column header", (column_name:string)=>{
   jobs_table_page.sort_column(column_name);
 })

 /**
  * THEN
  * 
  */
 Then("Job with the ID {string} is displayed in the results table",(id:string)=>{
   jobs_table_page.verify_id_results(id);
 })

 /**
  * JobID or JobName can be used in Gherkin step to invoke the below step definition method
  */
 Then("Job(s) with the JobID/JobName {string} is displayed in the results table",(job_id:string)=>{
   jobs_table_page.verify_job_id_results(job_id);
 })

 /**
  * 
  * Gherkin step can start with either Job or Jobs
  * and can also contain eith is or are later
  * and still inokes the below step definition method
  * 
  */
 Then("Job(s) with the status {string} is/are displayed in the results table",(status:string)=>{
   jobs_table_page.verify_status_results(status);
 })

 Then("Job(s) with the Operation {string} is/are displayed in the results table",(operation:string)=>{
   jobs_table_page.verify_operation_results(operation);
 })

 Then("Job(s) with the environment {string} is/are displayed in the results table",(environment:string)=>{
   jobs_table_page.verify_environment_results(environment);
 })

 Then("Job(s) with the Created date {string} is/are displayed in the results table",(date:string)=>{
   jobs_table_page.verify_date_results(date);
 })

 /**
  * This step definition verifies that a given Column is sorted in ascending order
  */
Then("Jobs table is sorted in {string} order of {string}",(order: string, column:string)=>{
   jobs_table_page.verify_sorted_results(column, order);
 })