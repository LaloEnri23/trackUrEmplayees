const mainMenuQuestions = [
    {
      type: 'list',
      name: 'mainMenu',
      message: 'What would you like to do?',
      choices: [
        'View All Employees',
        'Add Employee',
        'Update Employee Role',
        'View All Roles',
        'Add Role',
        'View All Departments',
        'Add Department',
        'Quit'
      ]
    }
  ];
  
  const addEmployeeQuestions = [
    {
      type: 'input',
      name: 'firstName',
      message: 'What is the employee\'s first name?'
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'What is the employee\'s last name?'
    },
    {
      type: 'list',
      name: 'role',
      message: 'What is the employee\'s role?',
      choices: [
        'interior carpenter',
        'landscaper',
        'carpenter',
        'demolition',
        'plumber',
        'electrician',
        'tile'
      ]
    },
    {
      type: 'list',
      name: 'workers',
      message: 'Check the amount of listed employees.',
      choices: [
        'Eduardo Enriquez',
        'Jose Rodriguez',
        'Jorge Domingo',
        'Ivan Hernandez',
        'Connor Kalopsis'
      ]
    }
  ];
  
  const addRoleQuestions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of the role?'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the salary of the role?'
    },
    {
      type: 'list',
      name: 'department',
      message: 'What department does the role belong to?',
      choices: [
        'carpentry',
        'landscaping',
        'demolition',
        'electrician',
        'plumbing'
      ]
    }
  ];
  
  const addDepartmentQuestions = [
    {
      type: 'input',
      name: 'departmentName',
      message: 'What is the name of the department you would like to add?'
    }
  ];
  
  module.exports = {
    mainMenuQuestions,
    addEmployeeQuestions,
    addRoleQuestions,
    addDepartmentQuestions
  };
  