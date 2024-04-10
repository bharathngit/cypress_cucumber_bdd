import 'cypress-map'
chai.use(require('chai-sorted'))

export class JobsTablePage {

    jobs_table_page_url = 'https://s3.eu-west-1.amazonaws.com/odaseva.tech.tests/rand/qa-zpxafg/index.html#';
    /**
     * The following is the list of element locators,
     * that can be resused across different implementations 
     **/
    search_bar_selector = '#navbarScroll > form > input';
    jobtable_selector = '.table';
    jobtablebody_selector = '.table tbody';
    id_col_selector = 'td:nth-child(1)';
    jobid_col_selector = 'td[colspan="2"]';
    status_col_selector = 'td:nth-child(3)';
    operation_col_selector = 'td:nth-child(4)';
    env_col_selector = 'td:nth-child(5)';
    date_col_selector = 'td:nth-child(6)';
    column_header_selector = 'thead > tr > th';

    /**
     * The following function helps navigate to the Jobslist page
     */
    navigate_to_page() {
        cy.visit(this.jobs_table_page_url);
        console.log('Navigating to: ' + this.jobs_table_page_url);
    }

    /**
     * To verify whether the Search field is displayed and enabled 
     */
    searchbar_isdisplayed() {
        cy.get(this.search_bar_selector).should('be.enabled');
        cy.get(this.search_bar_selector).should('be.visible');
    }

    /**
     * To verify whether the Job table body is displayed
     */
    jobstable_isdisplayed() {
        cy.get(this.jobtable_selector).as('jobstable');
        cy.get('@jobstable').should('be.visible');
    }

    /**
     * Type and search for a Job
     * @param search_keyword used to search the Jobs, can be 
     * any of ID, Name, Job ID, and other columns
     */
    type_in_searchbar(search_keyword: string) {
        cy.get(this.search_bar_selector).type(search_keyword);
    }

    /**
     * To Click on a Column header to help sort the Jobs list
     * @param column_name could be any of ID, Job ID, Name, etc
     */
    sort_column(column_name: string) {
        cy.get(this.column_header_selector).contains(column_name).click();
    }

    /**
     * Verifies text of ID column for the results displayed 
     * @param id verify results for a given ID
     */
    verify_id_results(id: string) {
        this.jobstable_isdisplayed();
        cy.get(this.id_col_selector).should('contain.text', id);
    }

    /**
     * Verifies text of Job ID column for the results displayed 
     * @param job_id 
     */
    verify_job_id_results(job_id: string) {
        this.jobstable_isdisplayed();
        cy.get(this.jobid_col_selector).should('contain.text', job_id);
    }

    /**
     * Verifies text of Status column for all the results displayed 
     * @param status 
     */
    verify_status_results(status: string) {
        this.jobstable_isdisplayed();
        // Itereate through the list of td elements and verify text
        cy.get(this.status_col_selector).each((item) => {
            cy
                .wrap(item)
                .should('have.text', status);
        })
    }

    /**
     * Verifies values of Operation column for all the results displayed 

     * @param operation 
     */
    verify_operation_results(operation: string) {
        this.jobstable_isdisplayed();
        // Itereate through the list of td elements and verify text
        cy.get(this.operation_col_selector).each((item) => {
            cy
                .wrap(item)
                .should('have.text', operation);
        })
    }

    /**
     * Verifies valuues of Operation column for all the results displayed 
     * @param environment 
     */
    verify_environment_results(environment: string) {
        this.jobstable_isdisplayed();
        // Itereate through the list of td elements and verify text
        cy.get(this.env_col_selector).each((item) => {
            cy
                .wrap(item)
                .should('have.text', environment);
        })
    }

    /**
     * Verifies values of Created Date column for all the results displayed 
     * @param date 
     */
    verify_date_results(date: string) {
        this.jobstable_isdisplayed();
        // Itereate through the list of td elements and verify text
        cy.get(this.date_col_selector).each((item) => {
            cy.wrap(item)
                .should('contain.text', date);
        })
    }

    /**
     * This method is used to Verify a Sorted Column based on 
     * @param column 
     */
    verify_sorted_results(column: string) {
        if (column.toLowerCase() == "id") {
            this.verify_sorted_id_column();
        } else if (column.toLowerCase() == "job id") {
            this.verify_sorted_jobid_column();
        } else if (column.toLowerCase() == "status") {
            this.verify_sorted_status_column();
        } else if (column.toLowerCase() == "operation") {
            this.verify_sorted_operation_col();
        } else if (column.toLowerCase() == "environment") {
            this.verify_sorted_environment_col();
        } else if ( column.toLowerCase() == "created date"){
            this.verify_sorted_createddate_col();
        }
    }

    /**
     * This method is to verify a sorted table based on ID column
     * cypress-map's feature, allows reading values from the required column '.table(x,y,w,h)' 
     * for ID column it is table(0,0,1)
     * Column values are read as arrays and converted to number type '.map(Number)'
     *  and then uses Chai assertions to verify that its sorted
     */
    verify_sorted_id_column() {
        const id_column = () =>
            cy.get(this.jobtablebody_selector)
                .table(0, 0, 1) //cypress-map's feature, allows reading values from the 1st column
                .print() //print out the list
                .map(Number)
                .print(); //converts text to Number

        // Verify the sorted column -  and then uses Chai assertions to verify that its sorted
        id_column().should('be.ascending');
    }

    /**
     * This method is to verify a sorted table based on Name and Job ID column
     * Also, this method reads tr element into a string array
     * and extracts the 3 digit Job ID 
     * and then uses Chai assertions to verify that its sorted
     */
    verify_sorted_jobid_column() {
        // const extract_id = (s) => s.split('_')[1];
        const jobid_column = () =>
            cy.get(this.jobtablebody_selector)
                .table(1, 0, 1) //cypress-map's feature, allows reading values from the Name+JobID column
                .print() //print out the list
                .map(String)
                .print()
                .mapInvoke('match', /_[0-9]+/) //extract job id number
                .map(String) //map it to string
                .print()
                .mapInvoke('replace', '_', '')
                .print()
                .map(Number) //converts text to Number
                .print();
        //  then uses Chai assertions to verify that its sorted
        jobid_column().should('be.ascending');
    }

    /**
     * This method is to verify a sorted table based on Status column
     */
    verify_sorted_status_column() {
        const status_column = () =>
            cy.get(this.jobtablebody_selector)
                .table(2, 0, 1) //cypress-map's feature, allows reading values from the 1st column
                .print() //print out the list
                .map(String)
                .print(); 

        // Verify the sorted column
        status_column().should('be.ascending');
    }

    /**
     * This method is to verify a sorted table based on Operation column
     */
    verify_sorted_operation_col() {
        const operation_column = () =>
            cy.get(this.jobtablebody_selector)
                .table(3, 0, 1) //cypress-map's feature, allows reading values from the 1st column
                .print() //print out the list
                .map(String)
                .print(); 

        // Verify the sorted column
        operation_column().should('be.ascending');
    }

    /**
     * This method is to verify a sorted table based on Environement column
     */
    verify_sorted_environment_col() {
        const environment_column = () =>
            cy.get(this.jobtablebody_selector)
                .table(4, 0, 1) //cypress-map's feature, allows reading values from the 1st column
                .print() //print out the list
                .map(String)
                .print(); 

        // Verify the sorted column
        environment_column().should('be.ascending');
    }

    verify_sorted_createddate_col() {
        const date_column = () =>
            cy.get(this.jobtablebody_selector)
                .table(5, 0, 1) //cypress-map's feature, allows reading values from the 1st column
                .print() //print out the list
                .map(String)
                .print(); 

        // Verify the sorted column
        date_column().should('be.ascending');
    }

}