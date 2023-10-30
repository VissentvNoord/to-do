import LogMessage from "./scripts/logger";
import { priority, Project, Task } from "./scripts/ClassManager";
import { projectDisplayer, buttonEvents } from "./scripts/DisplayController";
import './styles/main.css';

const projectManager = (function(){
    let projectList = [];

    const Init = function(){
        if(projectList.length < 1){
            CreateProject("Default board");
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

    const project = projectManager.GetProjectList()[0];
    taskManager.CreateTask(project, "Default task");
    taskManager.CreateTask(project, "Default task");
    taskManager.CreateTask(project, "Default task");
    taskManager.CreateTask(project, "Default task");
    taskManager.CreateTask(project, "Default task");
    taskManager.CreateTask(project, "Default task");
    taskManager.CreateTask(project, "Default task");

    projectDisplayer.loadProjects(projectManager.GetProjectList());
    projectDisplayer.loadTasks(project);
}

function SetupForms(){
    let addProjectForm = document.getElementById('projectform');
    addProjectForm.addEventListener("submit", (e) =>{
        e.preventDefault();

        let boardName = document.getElementById('bname').value;
        if(boardName == "")
            return;

        projectManager.CreateProject(boardName);
        buttonEvents.hideAddProjectPanel();

        projectDisplayer.loadProjects(projectManager.GetProjectList());
    });
}

InitializePage();
SetupForms();
