import readlineSync from "readline-sync";
import chalk from "chalk";
import { loadTodos, listTodos, addTodo, removeTodo } from "./commands.js";

function main() {
  const todos = loadTodos();

  while (true) {
    console.log(chalk.cyan("\nTodo CLI"));
    console.log("1. List todos");
    console.log("2. Add a todo");
    console.log("3. Remove a todo");
    console.log("4. Exit");

    const choice = readlineSync.questionInt(
      chalk.magenta("Choose an option: ")
    );

    switch (choice) {
      case 1:
        listTodos(todos);
        break;
      case 2:
        addTodo(todos);
        break;
      case 3:
        removeTodo(todos);
        break;
      case 4:
        console.log(chalk.yellow("Goodbye!"));
        process.exit(0);
        break;
      default:
        console.log(chalk.red("Invalid choice. Please choose a valid option."));
    }
  }
}

main();
