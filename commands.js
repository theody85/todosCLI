import fs from "fs";
import readlineSync from "readline-sync";
import chalk from "chalk";

const TODO_FILE = "todos.json";

export function loadTodos() {
  if (fs.existsSync(TODO_FILE)) {
    const data = fs.readFileSync(TODO_FILE);
    return JSON.parse(data);
  }
  return [];
}

export function saveTodos(todos) {
  fs.writeFileSync(TODO_FILE, JSON.stringify(todos, null, 2));
}

export function listTodos(todos) {
  console.log(chalk.blue("\nYour Todos:"));
  todos.forEach((todo, index) => {
    console.log(`${index + 1}. ${todo}`);
  });
  console.log();
}

export function addTodo(todos) {
  const newTodo = readlineSync.question(chalk.green("Enter a new todo: "));
  if (newTodo) {
    todos.push(newTodo);
    saveTodos(todos);
    console.log(chalk.green("Todo added successfully!"));
  } else {
    console.log(chalk.red("Todo cannot be empty."));
  }
}

export function removeTodo(todos) {
  const index =
    readlineSync.questionInt(
      chalk.yellow("Enter the number of the todo to remove: ")
    ) - 1;
  if (index >= 0 && index < todos.length) {
    todos.splice(index, 1);
    saveTodos(todos);
    console.log(chalk.green("Todo removed successfully!"));
  } else {
    console.log(chalk.red("Invalid todo number."));
  }
}
