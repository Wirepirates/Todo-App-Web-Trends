const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task
addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = '';
    }
});


const sw = new URL('service-worker.js', import.meta.url) 
if ('serviceWorker' in navigator) { 
    const s = navigator.serviceWorker; 
    s.register(sw.href, { 
        scope: '/checklist/' 
    }) 
        .then(_ => console.log('Service Worker Registered for scope:', sw.href, 
'with', import.meta.url)) 
        .catch(err => console.error('Service Worker Error:', err)); 
}

// Remove Task on Click
taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

window.addEventListener('error', function (event){
    console.error('error occured: ', event.message);
});
