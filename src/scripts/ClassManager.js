class TaskData{
    constructor(name){
        this.name = name;
    }

    GetName(){
        return this.name;
    }

    SetName(name){
        this.name = name;
    }

    SetDescription(description){
        this.description = description;
    }

    GetDescription(){
        return this.description;
    }

    SetDueDate(date){
        this.duedate = date;
    }

    GetDueDate(){
        return this.duedate;
    }

    SetPriority(priority){
        this.priority = priority;
    }

    GetPriority(){
        return this.priority;
    }
}

class Project extends TaskData{
    constructor(name){
        super(name);
        this.tasks = [];
    }

    set Tasks(taskList){
        this.tasks = taskList;
    }

    get Tasks(){
        return this.tasks;
    }

    AddTask(task){
        this.tasks.push(task);
    }
}

class Task extends TaskData{
    constructor(name){
        super(name); 
        this.done = false;
    }

    set Done(done){
        this.done = done;
    }

    get isDone(){
        return this.done;
    }
}

class Priority{
    constructor(name, index){
        this.name = name;
        this.index = index;
    }
}

const priority = {
    lowest: new Priority("Lowest", 0),
    low: new Priority("Low", 1),
    medium: new Priority("Medium", 2),
    high: new Priority("High", 3),
    critical: new Priority("Critical", 4)
};

export{
    Project,
    Task,
    priority
}