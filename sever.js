const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Connect to database
const connection= mysql.createConnection({
  PORT: process.env.PORT || 3001,
  app:express(),
  user: 'root',
  host: 'localhost',
  password:'321password',
  database: 'tracker_db',
  },
console.log(`Connected to the tracker_db database.`),
);

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected as id ' + connection.threadId + '\n');
  start();
});

const start = () => {
  inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'Pick your preffered department.',
    choices: [
      'View all departments',
      'View all employees',
      'Add a department',
      'Add an employee',
      'Update an employee role'
    ]
  }).then ((answer)=>{
    switch(answer.action){
      case 'View all departments':
        viewAllDep();
        break;
      case 'View all employees':
        viewAllEmployees(); 
        break;
      case 'Add a department':
        addDepartment();
        break;
      case 'Add an employee':
        addEmployee();
        break;
      case 'Update an employee role':
        updateEmployeeRole();
        break;
        default:
          console.log(`Invalid action ${answer.action}`);
          start();
    }
  });
};

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
