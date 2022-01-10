const inquirer = require('inquirer');
const { prompt } = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2')
const db = mysql.createConnection('mysql://root:rootroot@localhost:3306/employee_db')

const start = () => {
  inquirer.prompt([
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

function seeDepartments() {
  db.query('SELECT * FROM department', (err, departments) => {
    if (err) { console.log(err) }
    console.table(departments)
    start()
  })
}

function seeRoles() {
  db.query('SELECT * FROM role', (err, roles) => {
    if (err) { console.log(err) }
    console.table(roles)
    start()
  })
}

function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      message: "What is title of the role?",
      name: 'title'
    },
    {
      type: 'input',
      message: "What is the salary of the role?",
      name: 'salary'
    },
    {
      type: 'input',
      message: "What is the department ID?",
      name: 'department_id'
    }
  ])
    .then(newRole => {
      console.log(newRole)
      db.query('INSERT INTO role SET ?', newRole, err => {
        if (err) { console.log(err) }
        console.log('New Role Added')
        start()
      })
    })
} 
