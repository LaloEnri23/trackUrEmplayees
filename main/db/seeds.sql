INSERT INTO department (name)
VALUES  ("carpentry"),
        ("landscaping"),
        ("demolition"),
        ("electrition"),
        ( "plumbing");

INSERT INTO role (department_id, title,  salary)
VALUES  (1, "interior carpenter", 3000),
        (2, "landscaper", 1000),
        (1, "carpenter", 1000),
        (3, "demolition", 1000),
        (5, "plumber", 2000),
        (4, "electrition", 2000),
        (5, "tile", 1500),;

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ("Eduardo", "Enriquez",1),
        ("Jose", "Rodriguez",1),
        ("Jorge", "Domingo",5),
        ("Ivan", "Hernandez",4),
        ("Connor", "Kalopsis", 3),
        ("Juan", "McGregor", 2)

