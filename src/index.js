import LogMessage from "./scripts/logger";
import { priority, Project, Task } from "./scripts/ClassManager";
import { projectDisplayer } from "./scripts/DisplayController";
import './styles/main.css';

const projectManager = (function(){
    let projectList = [];

    const Init = function(){
        if(projectList.length < 1){
            CreateProject("Default project");
        }
    }

    const CreateProject = function(projectName) {
        const newProject = new Project(projectName);
        projectList.push(newProject);

        LogMessage("Created new project with name: " + projectName);

        return newProject;
    }

    const GetProjectList = () => projectList;

    return{Init, CreateProject, GetProjectList};
})();

const taskManager = (function(){

    const CreateTask = function(project, taskName){
        const newTask = new Task(taskName);
        project.AddTask(newTask);
        newTask.SetPriority(priority.low);
        LogMessage("Created new task with name: " + taskName);
        return newTask;
    }

    return{CreateTask};
})();

function InitializePage(){
    projectManager.Init();
    projectManager.CreateProject("Another test project");

    const project = projectManager.GetProjectList()[0];
    taskManager.CreateTask(project, "Default task");

    projectDisplayer.loadProjects(projectManager.GetProjectList());
    projectDisplayer.loadTasks(project);
}

InitializePage();