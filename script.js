document.addEventListener("DOMContentLoaded", function () {
    console.log("Admin Dashboard loaded.");

    // Add click event for Manage Courses button (you can expand it as per your needs)
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', function () {
            console.log(`${this.textContent} clicked`);
        });
    });
});

// Sample data for demonstration
const users = {
    teachers: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
    ],
    students: [
        { id: 1, name: 'Alice Johnson' },
        { id: 2, name: 'Bob Brown' }
    ]
};

// Function to display users
function displayUsers() {
    const teacherList = document.getElementById('teacherList');
    const studentList = document.getElementById('studentList');

    teacherList.innerHTML = ''; // Clear existing content
    studentList.innerHTML = ''; // Clear existing content

    users.teachers.forEach(teacher => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${teacher.name}</td>
            <td>
                <button class="btn btn-success btn-sm mx-1" onclick="addTeacher(${teacher.id})">Add</button>
                <button class="btn btn-danger btn-sm mx-1" onclick="deleteTeacher(${teacher.id})">Delete</button>
            </td>
        `;
        teacherList.appendChild(row);
    });

    users.students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>
                <button class="btn btn-success btn-sm mx-1" onclick="addStudent(${student.id})">Add</button>
                <button class="btn btn-danger btn-sm mx-1" onclick="deleteStudent(${student.id})">Delete</button>
            </td>
        `;
        studentList.appendChild(row);
    });
}

// Toggle visibility of user tables
function setupButtons() {
    const manageTeachersBtn = document.getElementById('manageTeachersBtn');
    const manageStudentsBtn = document.getElementById('manageStudentsBtn');
    const teacherTable = document.getElementById('teacherTable');
    const studentTable = document.getElementById('studentTable');

    manageTeachersBtn.addEventListener('click', () => {
        teacherTable.style.display = teacherTable.style.display === 'none' || teacherTable.style.display === '' ? 'table' : 'none';
    });

    manageStudentsBtn.addEventListener('click', () => {
        studentTable.style.display = studentTable.style.display === 'none' || studentTable.style.display === '' ? 'table' : 'none';
    });
}

// Add Teacher
function addTeacher(id) {
    alert(`Add functionality for Teacher ID: ${id} to be implemented.`);
}

// Delete Teacher
function deleteTeacher(id) {
    alert(`Delete functionality for Teacher ID: ${id} to be implemented.`);
}

// Add Student
function addStudent(id) {
    alert(`Add functionality for Student ID: ${id} to be implemented.`);
}

// Delete Student
function deleteStudent(id) {
    alert(`Delete functionality for Student ID: ${id} to be implemented.`);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    displayUsers();
    setupButtons();
});

// Sample data for demonstration
const teachers = [
    { id: 1, name: 'John Doe', cohort: 'Cohort 1' },
    { id: 2, name: 'Jane Smith', cohort: 'Cohort 2' },
    { id: 3, name: 'Alice Johnson', cohort: 'Cohort 1' },
    { id: 4, name: 'Bob Brown', cohort: 'Cohort 2' }
];

// Function to display teachers in their respective cohorts
function displayTeachers() {
    const cohort1List = document.getElementById('cohort1List');
    const cohort2List = document.getElementById('cohort2List');

    cohort1List.innerHTML = ''; // Clear existing content
    cohort2List.innerHTML = ''; // Clear existing content

    teachers.forEach(teacher => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = `
            ${teacher.name}
            <div>
                <button class="btn btn-warning btn-sm mx-1" onclick="changeCohort(${teacher.id}, 'Cohort 1')">To Cohort 1</button>
                <button class="btn btn-warning btn-sm mx-1" onclick="changeCohort(${teacher.id}, 'Cohort 2')">To Cohort 2</button>
            </div>
        `;

        if (teacher.cohort === 'Cohort 1') {
            cohort1List.appendChild(listItem);
        } else {
            cohort2List.appendChild(listItem);
        }
    });
}

// Function to change a teacher's cohort
function changeCohort(teacherId, newCohort) {
    const teacher = teachers.find(t => t.id === teacherId);
    if (teacher) {
        teacher.cohort = newCohort;
        displayTeachers(); // Refresh the lists
        alert(`Teacher ${teacher.name} moved to ${newCohort}.`);
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', displayTeachers);


// Sample data for demonstration
const cohorts = [
    { id: 1, name: 'Cohort 1', courses: [] },
    { id: 2, name: 'Cohort 2', courses: [] }
];

// Function to display cohorts and their courses
function displayCohorts() {
    const cohortSelect = document.getElementById('cohortSelect');
    const cohortCourses = document.getElementById('cohortCourses');

    // Populate cohort select options
    cohortSelect.innerHTML = '';
    cohorts.forEach(cohort => {
        const option = document.createElement('option');
        option.value = cohort.id;
        option.textContent = cohort.name;
        cohortSelect.appendChild(option);
    });

    // Display courses by cohort
    cohortCourses.innerHTML = '';
    cohorts.forEach(cohort => {
        const cohortDiv = document.createElement('div');
        cohortDiv.className = 'mb-4';
        cohortDiv.innerHTML = `
            <h5>${cohort.name}</h5>
            <ul class="list-group">
                ${cohort.courses.map(course => `<li class="list-group-item">${course}</li>`).join('')}
            </ul>
        `;
        cohortCourses.appendChild(cohortDiv);
    });
}

// Add a new cohort
document.getElementById('cohortForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cohortName = document.getElementById('cohortName').value;

    const newCohort = {
        id: cohorts.length + 1,
        name: cohortName,
        courses: []
    };
    cohorts.push(newCohort);
    displayCohorts();
    this.reset();
});

// Add a course to a selected cohort
document.getElementById('courseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cohortId = parseInt(document.getElementById('cohortSelect').value);
    const courseName = document.getElementById('courseName').value;

    const cohort = cohorts.find(c => c.id === cohortId);
    if (cohort) {
        cohort.courses.push(courseName);
        displayCohorts();
        this.reset();
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', displayCohorts);

