const projectDisplayer = (function(){
    const contentBox = document.getElementById("content");
    const projectBox = document.getElementById("projectlist");
    const taskBox = document.getElementById("tasklist");

    const loadProjects = function(projectList){
        projectBox.innerHTML = "";

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

        const boardHeader = document.getElementById("tasksheader");
        boardHeader.children[0].innerHTML = project.GetName();
        const sideBar = document.createElement("div");
        sideBar.classList.add('sidebar');
        taskBox.appendChild(sideBar);

        const tasks = project.Tasks;
        for(let i = 0; i < tasks.length; i++){
            const name = tasks[i].GetName();
            const priorityLevel = tasks[i].GetPriority();

            const taskCard = document.createElement("div");
            taskCard.classList.add('task');
            taskBox.appendChild(taskCard);

            const taskName = document.createElement('h2');
            taskName.innerHTML = name;
            taskCard.appendChild(taskName);

            const taskPriority = document.createElement('h5');
            taskPriority.innerHTML = "Priority: " + priorityLevel.Name;
            taskCard.appendChild(taskPriority);

            const editButton = document.createElement('button');
            taskCard.appendChild(editButton);
        }
    }

    return {loadProjects , loadTasks};
})();

const buttonEvents = (function(){
    const contentContainer = document.getElementById('content');
    const addProjectPanel = document.querySelector('.addwindow');
    const showAddProjectPanelButton = document.getElementById('addproject');
    showAddProjectPanelButton.onclick = function() { showAddProjectPanel(); };

    const showAddProjectPanel = function(){
        addProjectPanel.classList.replace('hidden', 'shown');
        unfocusContent();
    }

    const hideAddProjectPanel = function(){
        addProjectPanel.classList.replace('shown', 'hidden');
        focusContent();
    }

    const unfocusContent = function(){
        contentContainer.classList.add('blurred');
    }

    const focusContent = function(){
        contentContainer.classList.remove('blurred');
    }

    return{showAddProjectPanel, hideAddProjectPanel};
})();


export{projectDisplayer, buttonEvents}; 