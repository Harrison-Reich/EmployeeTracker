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
      choices: ['View An Employee', 'View A Department', 'View All Roles', 'Add Employee', 'Add a Role', 'Add a Department', 'Update Employee Role', 'Exit'],
      name: 'todo'
    }
  ])
  .then(({ todo }) => {
    switch (todo) {

      case 'View An Employee':
        viewEmployees()
        break;

      case 'View A Department':
        viewDepartments()
        break;

      case 'Add Employee':
        addEmployees()
        break;

      case 'Update Employee Role':
        updateEmployeeRoles()
        break;

      case 'View All Roles':
        seeRoles()
        break;

      case 'Add A Role':
        addRole()
        break;

      case 'Add A Department':
        addDepartment()
        break;

      case 'Exit':
        end()
        break;
    }
  })
}

start()