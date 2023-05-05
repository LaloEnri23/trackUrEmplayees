SELECT employee.id, first_name, last_name, role.title AS title, department.name AS department, salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id
LEFT JOIN employee AS manager ON employee.manager_id = manager.id;

UPDATE employee
SET role_id = 2
WHERE id = 1;
