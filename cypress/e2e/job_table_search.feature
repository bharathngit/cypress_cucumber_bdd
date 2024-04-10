Feature: Verify the Job list table for Search and Reorder functionality

  Rule: Search in Jobs functionality - with keywords for any of the columns

    @jobs_search @automated @regression
    Scenario Outline: Verify that Jobs be searched using ID
      Given I navigate to the Joblist page
      And Search bar is displayed
      When I type <id> in the Seach bar
      Then Job with the ID <id> is displayed in the results table

      Examples: 
        | id   |
        | "4"  |
        | "54" |

    @jobs_search @automated
    Scenario Outline: Verify that Jobs can be searched using JobID
      Given I navigate to the Joblist page
      And Search bar is displayed
      When I type "post_98" in the Seach bar
      Then Job with the JobID "post_98" is displayed in the results table

      Examples: 
        | job_id     |
        | "post_98"  |
        | "post_629" |
        | "post_721" |

    @jobs_search @automated @regression
    Scenario Outline: Verify that Jobs can be searched using JobName
      Given I navigate to the Joblist page
      And Search bar is displayed
      When I type "Name of the job again" in the Seach bar
      Then Jobs with the JobName <job_name> is displayed in the results table

      Examples: 
        | job_name                        |
        | "Name of the job againpost_835" |
        | "Name of the job againpost_98"  |

    @jobs_search @automated 
    Scenario Outline: Verify that Jobs can be searched using Status
      Given I navigate to the Joblist page
      And Search bar is displayed
      When I type <status_type> in the Seach bar
      Then Jobs with the status <status_type> are displayed in the results table

      Examples: 
        | status_type |
        | "failure"   |
        | "warning"   |
        | "success"   |

    @jobs_search @automated
    Scenario Outline: Verify that Jobs can be searched using Operation
      Given I navigate to the Joblist page
      And Search bar is displayed
      When I type <operation> in the Seach bar
      Then Jobs with the Operation <operation> are displayed in the results table

      Examples: 
        | operation |
        | "Restore" |
        | "Update"  |
        | "Backup"  |

    @jobs_search @automated
    Scenario Outline: Verify that Jobs can be searched using Environment
      Given I navigate to the Joblist page
      And Search bar is displayed
      When I type <environment> in the Seach bar
      Then Jobs with the environment <environment> are displayed in the results table

      Examples: 
        | environment  |
        | "Entreprise" |
        | "Sandbox"    |
        | "Production" |

    @jobs_search @automated @smoke
    Scenario Outline: Verify that Jobs can be searched using Created Date
      Given I navigate to the Joblist page
      And Search bar is displayed
      When I type <date> in the Seach bar
      Then Jobs with the Created date <date> are displayed in the results table

      Examples: 
        | date                  |
        | "Oct"                 |
        | "Oct 2, 2021"         |
        | "Nov 4, 2021 6:18 PM" |
        | "2022"                |

  Rule: Search in Jobs and verify ReOrder columns

    @reorder_columns @automated @regression @smoke
    Scenario Outline: Verify that the Jobs list is Sorted when clicked on column names
      Given I navigate to the Joblist page
      And Joblist table is displayed
      When I click the <column_name> column header
      Then Jobs table is sorted in ascending order of <column_name>

      Examples: 
        | column_name    |
        | "ID"           |
        | "Job ID"       |
        | "Status"       |
        | "Operation"    |
        | "Environment"  |
        | "Created Date" |
