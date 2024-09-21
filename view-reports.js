// Sample data for demonstration
const reports = {
    userActivity: [
        { user: 'John Doe', logins: 45, actions: 120 },
        { user: 'Jane Smith', logins: 30, actions: 80 }
    ],
    courseEnrollment: [
        { course: 'Mathematics 101', enrolled: 50 },
        { course: 'History 201', enrolled: 30 }
    ],
    performance: [
        { student: 'Alice Johnson', averageGrade: 85 },
        { student: 'Bob Brown', averageGrade: 78 }
    ],
    systemHealth: [
        { metric: 'Uptime', value: '99.9%' },
        { metric: 'Errors', value: '5' }
    ]
};

// Function to display the selected report
function displayReport(reportType) {
    const reportDisplay = document.getElementById('reportDisplay');
    let htmlContent = '';

    switch (reportType) {
        case 'userActivity':
            htmlContent = `
                <h4>User Activity Report</h4>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Logins</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${reports.userActivity.map(item => `
                            <tr>
                                <td>${item.user}</td>
                                <td>${item.logins}</td>
                                <td>${item.actions}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
            break;

        case 'courseEnrollment':
            htmlContent = `
                <h4>Course Enrollment Report</h4>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Enrolled</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${reports.courseEnrollment.map(item => `
                            <tr>
                                <td>${item.course}</td>
                                <td>${item.enrolled}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
            break;

        case 'performance':
            htmlContent = `
                <h4>Performance Report</h4>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>Average Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${reports.performance.map(item => `
                            <tr>
                                <td>${item.student}</td>
                                <td>${item.averageGrade}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
            break;

        case 'systemHealth':
            htmlContent = `
                <h4>System Health Report</h4>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Metric</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${reports.systemHealth.map(item => `
                            <tr>
                                <td>${item.metric}</td>
                                <td>${item.value}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
            break;

        default:
            htmlContent = '<p>Select a report type to view.</p>';
    }

    reportDisplay.innerHTML = htmlContent;
}

// Handle form submission
document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const reportType = document.getElementById('reportType').value;
    displayReport(reportType);
});
