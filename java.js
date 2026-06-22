// ===========================================
// Task 1: Traffic Signal Management
// ===========================================

console.log("Task 1");

let signal = "Red";

switch (signal) {
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Get Ready");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}

// ===========================================
// Task 2: Employee Attendance Report
// ===========================================

console.log("\nTask 2");

for (let i = 1; i <= 30; i++) {
    console.log(`Employee ${i} Present`);
}

// ===========================================
// Task 3: ATM Cash Withdrawal
// ===========================================

console.log("\nTask 3");

let balance = 10000;

while (balance > 0) {
    balance -= 500;
    console.log("Remaining Balance:", balance);
}

// ===========================================
// Task 4: College Admission Eligibility
// ===========================================

console.log("\nTask 4");

let age = 20;
let percentage = 75;
let examPassed = true;

if (age >= 18) {
    if (percentage >= 70) {
        if (examPassed) {
            console.log("Admission Approved");
        } else {
            console.log("Rejected: Entrance Exam Not Passed");
        }
    } else {
        console.log("Rejected: Percentage Below 70");
    }
} else {
    console.log("Rejected: Age Below 18");
}

// ===========================================
// Task 5: Food Delivery Status
// ===========================================

console.log("\nTask 5");

function deliveryStatus(customerName, foodItem, address) {
    console.log(
        `${customerName}, your ${foodItem} will be delivered to ${address}`
    );
}

deliveryStatus("Madhu", "Pizza", "Hyderabad");

// ===========================================
// Task 6: Salary Processing System
// ===========================================

console.log("\nTask 6");

function calculateSalary(basicSalary) {
    return basicSalary;
}

function calculateBonus(salary) {
    return salary + salary * 0.10;
}

let salaryAmount = calculateSalary(50000);
let finalSalary = calculateBonus(salaryAmount);

console.log("Final Salary:", finalSalary);

// ===========================================
// Task 7: E-commerce Discount Engine
// ===========================================

console.log("\nTask 7");

function generateInvoice(finalAmount) {
    console.log("Invoice Generated:", finalAmount);
}

function applyDiscount(amount, callback) {
    let discountedAmount = amount - amount * 0.10;
    callback(discountedAmount);
}

applyDiscount(10000, generateInvoice);

// ===========================================
// Task 8: Promotional Offers
// ===========================================

console.log("\nTask 8");

function* offersGenerator() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offers = offersGenerator();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

// ===========================================
// Task 9: Student Database Merge
// ===========================================

console.log("\nTask 9");

let scienceStudents = ["Rahul", "John"];
let commerceStudents = ["Madhu", "Kavin"];

let allStudents = [...scienceStudents, ...commerceStudents];

console.log(allStudents);

// ===========================================
// Task 10: Online Exam System
// ===========================================

console.log("\nTask 10");

function calculateMarks(studentName, ...marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    console.log(studentName, "Total Marks:", total);
}

calculateMarks("Madhu", 90, 85, 88, 95);

// ===========================================
// Task 11: Employee Profile
// ===========================================

console.log("\nTask 11");

let employee = {
    name: "Rahul",
    department: "IT",
    salary: 50000,
    experience: 5
};

let { name, department, salary, experience } = employee;

console.log(name);
console.log(department);
console.log(salary);
console.log(experience);

// ===========================================
// Task 12: Product Inventory Filter
// ===========================================

console.log("\nTask 12");

let products = [
    { name: "Mobile", price: 20000, category: "Electronics" },
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Book", price: 500, category: "Education" }
];

let expensiveProducts = products.filter(
    product => product.price > 5000
);

console.log(expensiveProducts);

// ===========================================
// Task 13: Find First Premium Customer
// ===========================================

console.log("\nTask 13");

let customers = [
    { name: "A", amount: 20000 },
    { name: "B", amount: 60000 },
    { name: "C", amount: 80000 }
];

let premiumCustomer = customers.find(
    customer => customer.amount > 50000
);

console.log(premiumCustomer);

// ===========================================
// Task 14: Company Expense Tracker
// ===========================================

console.log("\nTask 14");

let expenses = [10000, 20000, 15000, 5000];

let totalExpense = expenses.reduce(
    (total, expense) => total + expense,
    0
);

console.log("Total Expense:", totalExpense);

// ===========================================
// Task 15: Gaming Tournament Verification
// ===========================================

console.log("\nTask 15");

let players = [20, 25, 19, 30];

let allAdults = players.every(
    age => age > 18
);

console.log("All Players Above 18:", allAdults);

// ===========================================
// Task 16: Job Portal Search
// ===========================================

console.log("\nTask 16");

let candidates = [
    { name: "Rahul", skill: "Java" },
    { name: "Madhu", skill: "React" },
    { name: "John", skill: "Python" }
];

let reactDeveloper = candidates.some(
    candidate => candidate.skill === "React"
);

console.log("React Developer Available:", reactDeveloper);

// ===========================================
// Task 17: Mobile Number Validator
// ===========================================

console.log("\nTask 17");

let mobile = "9876543210";

let valid =
    mobile.length === 10 &&
    (
        mobile.startsWith("9") ||
        mobile.startsWith("8") ||
        mobile.startsWith("7") ||
        mobile.startsWith("6")
    );

console.log("Valid Mobile:", valid);

// ===========================================
// Task 18: URL Slug Generator
// ===========================================

console.log("\nTask 18");

let title = "Learn JavaScript Complete Course";

let slug = title
    .toLowerCase()
    .split(" ")
    .join("-");

console.log(slug);

// ===========================================
// Task 19: Employee Sorting Dashboard
// ===========================================

console.log("\nTask 19");

let employeeList = [
    { name: "Rahul", salary: 30000 },
    { name: "Madhu", salary: 50000 },
    { name: "John", salary: 40000 }
];

let highestToLowest = [...employeeList].sort(
    (a, b) => b.salary - a.salary
);

let lowestToHighest = [...employeeList].sort(
    (a, b) => a.salary - b.salary
);

console.log("Highest To Lowest");
console.log(highestToLowest);

console.log("Lowest To Highest");
console.log(lowestToHighest);

// ===========================================
// Task 20: Movie Booking System
// ===========================================

console.log("\nTask 20");

let movies = [
    "Pushpa",
    "RRR",
    "Salaar"
];

let bookingIds = movies.map(
    (movie, index) => ({
        movie,
        bookingId: `BOOK${index + 1}`
    })
);

console.log(bookingIds);