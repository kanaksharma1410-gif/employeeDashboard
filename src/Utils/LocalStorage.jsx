const employees = [
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "e@e.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Client Presentation",
        "taskDescription": "Revise the Q3 slides for the upcoming client meeting.",
        "taskDate": "2026-08-30",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Quarterly Report",
        "taskDescription": "Compile the financial data for Q2.",
        "taskDate": "2026-08-25",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Server Maintenance",
        "taskDescription": "Perform routine checks on the main database server.",
        "taskDate": "2026-08-28",
        "category": "IT"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Sneha",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Review Code PR",
        "taskDescription": "Review the pull requests from the junior development team.",
        "taskDate": "2026-08-29",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix Login Bug",
        "taskDescription": "Resolve the authentication timeout issue on the mobile app.",
        "taskDate": "2026-08-27",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Database Migration",
        "taskDescription": "Migrate legacy user data to the new AWS cluster.",
        "taskDate": "2026-08-26",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Deploy to Staging",
        "taskDescription": "Push the v2.4 release candidate to the staging environment.",
        "taskDate": "2026-08-31",
        "category": "DevOps"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 3,
      "newTask": 2,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Social Media Post",
        "taskDescription": "Draft and schedule Twitter and LinkedIn posts for the product launch.",
        "taskDate": "2026-08-29",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Ad Campaign Review",
        "taskDescription": "Analyze the metrics from the recent Google Ads campaign.",
        "taskDate": "2026-08-28",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Email Newsletter",
        "taskDescription": "Send out the August newsletter to the subscriber base.",
        "taskDate": "2026-08-24",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Competitor Analysis",
        "taskDescription": "Compile a feature comparison matrix against top 3 competitors.",
        "taskDate": "2026-08-20",
        "category": "Research"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "SEO Optimization",
        "taskDescription": "Update meta tags and alt text on the new landing pages.",
        "taskDate": "2026-09-05",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Priya",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Inventory Check",
        "taskDescription": "Perform a physical count of warehouse sector B.",
        "taskDate": "2026-08-30",
        "category": "Operations"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Vendor Meeting",
        "taskDescription": "Negotiate new rates with the primary shipping provider.",
        "taskDate": "2026-08-29",
        "category": "Operations"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Restock Supplies",
        "taskDescription": "Order printer ink and office stationery for Q4.",
        "taskDate": "2026-08-27",
        "category": "Operations"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Amit",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Onboard New Hire",
        "taskDescription": "Walk the new marketing associate through the company portal.",
        "taskDate": "2026-09-01",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Update HR Policies",
        "taskDescription": "Revise the remote work guidelines for 2027.",
        "taskDate": "2026-08-31",
        "category": "HR"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Conduct Interviews",
        "taskDescription": "Interview 3 candidates for the Senior Developer role.",
        "taskDate": "2026-08-26",
        "category": "HR"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Payroll Processing",
        "taskDescription": "Process the bi-weekly payroll adjustments.",
        "taskDate": "2026-08-25",
        "category": "Finance"
      }
    ]
  }
];

const admin = [
  {
    "id": 99,
    "firstName": "Admin",
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
 if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees', JSON.stringify(employees));
  }
  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin', JSON.stringify(admin));
  }
};

export const GetLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};