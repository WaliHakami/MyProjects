document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('employeeList')) {
        loadEmployees();
    }
    if (document.getElementById('employeeSelect')) {
        populateEmployeeSelect();
    }
    if (document.getElementById('taskList')) {
        loadTasks();
    }
});

function loadEmployees() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    employees.forEach((employee, index) => {
        const employeeItem = document.createElement('li');
        employeeItem.textContent = `${employee.name} - ${employee.position}`;
        employeeItem.appendChild(createDeleteButton('employee', index));
        employeeList.appendChild(employeeItem);
    });
}

function addEmployee() {
    const name = document.getElementById('employeeName').value;
    const position = document.getElementById('employeePosition').value;

    if (!name || !position) {
        alert("Please fill out all fields");
        return;
    }

    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    const newEmployee = {
        name,
        position
    };

    employees.push(newEmployee);
    localStorage.setItem('employees', JSON.stringify(employees));

    loadEmployees();

    document.getElementById('employeeName').value = '';
    document.getElementById('employeePosition').value = '';
}

function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = `${task.employeeName} - ${task.taskDescription} (Due: ${task.dueDate})`;
        taskItem.appendChild(createDeleteButton('task', index));
        taskList.appendChild(taskItem);
    });
}

function addTask() {
    const employeeSelect = document.getElementById('employeeSelect');
    const taskDescription = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('dueDate').value;

    if (!employeeSelect.value || !taskDescription || !dueDate) {
        alert("Please fill out all fields");
        return;
    }

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const newTask = {
        employeeName: employeeSelect.value,
        taskDescription,
        dueDate
    };

    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    loadTasks();

    document.getElementById('taskDescription').value = '';
    document.getElementById('dueDate').value = '';
}

function populateEmployeeSelect() {
    const employeeSelect = document.getElementById('employeeSelect');
    employeeSelect.innerHTML = '';

    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    employees.forEach(employee => {
        const option = document.createElement('option');
        option.value = employee.name;
        option.textContent = employee.name;
        employeeSelect.appendChild(option);
    });
}

function loadEmployeeTasks() {
    const employeeSelect = document.getElementById('employeeSelect');
    const employeeTaskList = document.getElementById('employeeTaskList');
    employeeTaskList.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const employeeTasks = tasks.filter(task => task.employeeName === employeeSelect.value);

    employeeTasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.textContent = `${task.taskDescription} (Due: ${task.dueDate})`;
        employeeTaskList.appendChild(taskItem);
    });
}

function createDeleteButton(type, index) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        if (type === 'employee') {
            deleteEmployee(index);
        } else if (type === 'task') {
            deleteTask(index);
        }
    };
    return deleteButton;
}

function deleteEmployee(index) {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.splice(index, 1);
    localStorage.setItem('employees', JSON.stringify(employees));
    loadEmployees();
    populateEmployeeSelect(); // تحديث القوائم المنسدلة
}

function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}

function createDeleteButton(type, index) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "حذف";
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'ml-2');
    deleteButton.onclick = function() {
        if (type === 'employee') {
            deleteEmployee(index);
        } else if (type === 'task') {
            deleteTask(index);
        }
    };
    return deleteButton;
}

function loadEmployees() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    employees.forEach((employee, index) => {
        const employeeItem = document.createElement('li');
        employeeItem.textContent = `${employee.name} - ${employee.position}`;
        employeeItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        employeeItem.appendChild(createDeleteButton('employee', index));
        employeeList.appendChild(employeeItem);
    });
}

function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = `${task.employeeName} - ${task.taskDescription} (تاريخ الاستحقاق: ${task.dueDate})`;
        taskItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        taskItem.appendChild(createDeleteButton('task', index));
        taskList.appendChild(taskItem);
    });
}

function loadEmployeeTasks() {
    const employeeSelect = document.getElementById('employeeSelect');
    const employeeTaskList = document.getElementById('employeeTaskList');
    employeeTaskList.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const employeeTasks = tasks.filter(task => task.employeeName === employeeSelect.value);

    employeeTasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.textContent = `${task.taskDescription} (تاريخ الاستحقاق: ${task.dueDate})`;
        taskItem.classList.add('list-group-item');
        employeeTaskList.appendChild(taskItem);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('employeeList')) {
        loadEmployees();
    }
    if (document.getElementById('employeeSelect')) {
        populateEmployeeSelect();
    }
    if (document.getElementById('taskList')) {
        loadTasks();
    }
    if (document.getElementById('notificationList')) {
        loadEmployeeNotifications();
    }
});

function createSmsButton(employeeName, taskDescription) {
    const smsButton = document.createElement('button');
    smsButton.textContent = "إرسال SMS";
    smsButton.classList.add('btn', 'btn-success', 'btn-sm', 'ml-2');
    smsButton.onclick = function() {
        sendSms(employeeName, taskDescription);
    };
    return smsButton;
}

function sendSms(employeeName, taskDescription) {
    const notifications = JSON.parse(localStorage.getItem('notifications')) || {};
    
    if (!notifications[employeeName]) {
        notifications[employeeName] = [];
    }

    const message = `تم إرسال رسالة SMS بخصوص المهمة: ${taskDescription}`;
    notifications[employeeName].push({
        message,
        timestamp: new Date().toLocaleString()
    });

    localStorage.setItem('notifications', JSON.stringify(notifications));

    alert("تم إرسال الرسالة بنجاح!");
}

function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = `${task.employeeName} - ${task.taskDescription} (تاريخ الاستحقاق: ${task.dueDate})`;
        taskItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        taskItem.appendChild(createSmsButton(task.employeeName, task.taskDescription));
        taskItem.appendChild(createDeleteButton('task', index));
        taskList.appendChild(taskItem);
    });
}

function loadEmployeeNotifications() {
    const employeeSelect = document.getElementById('employeeSelect');
    const notificationList = document.getElementById('notificationList');
    notificationList.innerHTML = '';

    const notifications = JSON.parse(localStorage.getItem('notifications')) || {};

    const employeeNotifications = notifications[employeeSelect.value] || [];

    employeeNotifications.forEach(notification => {
        const notificationItem = document.createElement('li');
        notificationItem.textContent = `${notification.message} (توقيت: ${notification.timestamp})`;
        notificationItem.classList.add('list-group-item');
        notificationList.appendChild(notificationItem);
    });
}

function populateEmployeeSelect() {
    const employeeSelects = document.querySelectorAll('select#employeeSelect');
    employeeSelects.forEach(select => select.innerHTML = '');

    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    employees.forEach(employee => {
        const option = document.createElement('option');
        option.value = employee.name;
        option.textContent = employee.name;
        employeeSelects.forEach(select => select.appendChild(option));
    });
}

// تنفيذ تسجيل الدخول عند الضغط على Enter
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && document.getElementById('employeeName')) {
        login();
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
