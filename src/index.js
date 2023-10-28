import { priority, Project, Task } from "./scripts/ClassManager";

const testProject = new Project("Test project");

const newTask = new Task("A default task");

testProject.AddTask(newTask);

const newTasks = [new Task("Task 1"), new Task("Task 2")];
newTasks[0].Done = true;

testProject.Tasks = newTasks;
testProject.SetDescription("A nice description");
testProject.SetPriority(priority.low);

console.log(testProject.Tasks);