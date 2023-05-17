const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const table = require('console.table');
const queries = require('./Queries')

const connection = mysql.createConnection({
  port: 3306,
  user: 'root',
  host: 'localhost',
  password: '2327',
  database: 'tracker_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected to the tracker_db database.`);
  console.log(`\n
╔═══╗─────╔╗──────────────╔═╗╔═╗
║╔══╝─────║║──────────────║║╚╝║║
║╚══╦╗╔╦══╣║╔══╦╗─╔╦══╦══╗║╔╗╔╗╠══╦═╗╔══╦══╦══╦═╗
║╔══╣╚╝║╔╗║║║╔╗║║─║║║═╣║═╣║║║║║║╔╗║╔╗╣╔╗║╔╗║║═╣╔╝
║╚══╣║║║╚╝║╚╣╚╝║╚═╝║║═╣║═╣║║║║║║╔╗║║║║╔╗║╚╝║║═╣║
╚═══╩╩╩╣╔═╩═╩══╩═╗╔╩══╩══╝╚╝╚╝╚╩╝╚╩╝╚╩╝╚╩═╗╠══╩╝
──────║║──────╔═╝║─────────────────────╔═╝║
──────╚╝──────╚══╝─────────────────────╚══╝`);
  mainMenu();
});

// const sql = {
//   viewAllEmployees: `
//     SELECT department.name AS department, role.salary, CONCAT(employee.first_name, ' ', employee.last_name) AS employee
//     FROM employee
//     LEFT JOIN role ON employee.role_id = role.id
//     LEFT JOIN department ON role.department_id = department.id
//     LEFT JOIN employee AS manager ON employee.manager_id = manager.id;
//   `,
//   updateEmployeeRole: `
//     UPDATE employee
//     SET role_id = ?
//     WHERE id = ?;
//   `,
//   // Add other queries as needed
// };

function mainMenu() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'Pick your preferred department.',
      choices: [
        'View all employees',
        'Update an employee role',
        // Add other choices as needed
      ]
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'Update an employee role':
          updateEmployeeRole();
          break;
        // Handle other choices accordingly
        default:
          console.log(`Invalid action ${answer.action}`);
          mainMenu();
          break;
      }
    })
    .catch((err) => console.error(err));
}

function viewAllEmployees() {
  connection.promise()
    .query(sql.viewAllEmployees)
    .then(([rows, fields]) => {
      console.log('\n');
      console.table(rows);
      console.log('\n');
      mainMenu();
    })
    .catch((error) => {
      console.error('Error viewing employees:', error);
      mainMenu();
    });
}

function updateEmployeeRole() {
  inquirer.prompt([
    {
      type: 'number',
      name: 'employeeId',
      message: 'Enter the employee ID:',
      validate: (value) => !isNaN(value),
    },
    {
      type: 'number',
      name: 'roleId',
      message: 'Enter the new role ID:',
      validate: (value) => !isNaN(value),
    }
  ]).then((answers) => {
    const { employeeId, roleId } = answers;
    connection.promise()
      .query(sql.updateEmployeeRole, [roleId, employeeId])
      .then(() => {
        console.log(`Employee with ID ${employeeId} updated to role with ID ${roleId}`);
        mainMenu();
      })
      .catch((error) => {
        console.error('Error updating employee role:', error);
        mainMenu();
      });
  });
}
