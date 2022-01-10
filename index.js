const inquirer = require('inquirer');
const { prompt } = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2')
const db = mysql.createConnection('mysql://root:rootroot@localhost:3306/employee_db')

const start = () => {
  inquirer.prompt ([
    {
      type: 'list',
      message: 'What would you like to do?',
      choices: ['View All Employee', 'View All Department', 'View All Roles', 'Add Employee', 'Add a Role', 'Add a Department', 'Update Employee Role', 'Exit'],
      name: 'todo'
    }
  ])
  .
}