var mysql = require("mysql");
var inquirer = require("inquirer");

var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "root",
  database: "company_db",
});

con.connect(function (err) {
  if (err) throw err;
  init();
});

function init() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all departments",
        "View all company roles",
        "Add a new employee",
        "Add a new role",
        "Add a new department",
        "Update employee role",
        "Exit",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View all employees":
          displayAll();
          break;

        case "View all departments":
          departmentView();
          break;

        case "View all company roles":
          roleView();
          break;

        case "Add a new employee":
          addEmployee();
          break;

        case "Add a new role":
          addRole();
          break;

        case "Add a new department":
          addDepartment();
          break;

        case "Update employee role":
          updateRole();
          break;

        case "Exit":
          exitMenu();
          break;
      }
    });
}
