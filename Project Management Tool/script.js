const projects = document.getElementById('projects');
const tasks = document.getElementById('tasks');

// Dummy data
const projectData = [
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' }
];

const taskData = [
    { id: 1, project: 1, name: 'Task 1' },
    { id: 2, project: 1, name: 'Task 2' },
    { id: 3, project: 2, name: 'Task 3' }
];

// Populate project list
projectData.forEach(project => {
    const li = document.createElement('li');
    li.textContent = project.name;
    projects.appendChild(li);
});

// Populate task list
taskData.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.name;
    tasks.appendChild(li);
});
