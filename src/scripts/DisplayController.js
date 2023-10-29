const projectDisplayer = (function(){
    const contentBox = document.getElementById("content");
    const projectBox = document.getElementById("projects");
    const taskBox = document.getElementById("tasks");

    const loadProjects = function(projectList){
        for(let i = 0; i < projectList.length; i++){
            const newDiv = document.createElement("button");
            newDiv.onclick = function(){ loadTasks(projectList[i])};
            newDiv.innerHTML = projectList[i].GetName();
            projectBox.appendChild(newDiv);

            // const editButton = document.createElement("button");
            // editButton.id = "visible";
            // editButton.innerHTML = "Edit";
            // newDiv.appendChild(editButton);
        }
    }

    const loadTasks = function(project){
        taskBox.innerHTML = "";

        const tasks = project.Tasks;
        for(let i = 0; i < tasks.length; i++){
            const name = tasks[i].GetName();
            const priorityLevel = tasks[i].GetPriority();

            const taskCard = document.createElement("div");
            taskBox.appendChild(taskCard);

            const taskName = document.createElement('h2');
            taskName.innerHTML = name;
            taskCard.appendChild(taskName);

            const taskPriority = document.createElement('h5');
            taskPriority.innerHTML = "Priority: " + priorityLevel.Name;
            taskCard.appendChild(taskPriority);
        }
    }

    return {loadProjects , loadTasks};
})();


export{projectDisplayer}; 