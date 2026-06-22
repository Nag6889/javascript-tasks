// =======================================
// Task 1: Employee Bonus Calculator
// =======================================

let employeeName = "Rahul";
let salary = 50000;
let experience = 6;
let bonus = 0;

if (experience >= 5) {
    bonus = salary * 0.20;
} else if (experience >= 2) {
    bonus = salary * 0.10;
} else {
    bonus = salary * 0.05;
}

console.log("Task 1");
console.log("Employee:", employeeName);
console.log("Final Salary:", salary + bonus);

// =======================================
// Task 2: College Admission System
// =======================================

let studentName = "Madhu";
let age = 18;
let percentage = 75;

console.log("\nTask 2");

if (age >= 17) {
    if (percentage >= 60) {
        console.log("Admission Approved");
    } else {
        console.log("Admission Rejected");
    }
} else {
    console.log("Admission Rejected");
}

// =======================================
// Task 3: Food Delivery Menu
// =======================================

let choice = 1;

console.log("\nTask 3");

switch (choice) {
    case 1:
        console.log("Order Confirmed : Pizza");
        break;
    case 2:
        console.log("Order Confirmed : Burger");
        break;
    case 3:
        console.log("Order Confirmed : Shawarma");
        break;
    case 4:
        console.log("Order Confirmed : Fried Rice");
        break;
    default:
        console.log("Invalid Selection");
}

// =======================================
// Task 4: Attendance Tracker
// =======================================

let students = [
    "Rahul",
    "Madhu",
    "John",
    "Kavin",
    "Arun",
    "Sai",
    "Ravi",
    "Ajay",
    "Kiran",
    "Vijay"
];

console.log("\nTask 4");

for (let student of students) {
    console.log(student);
}

console.log("Total Students:", students.length);

// =======================================
// Task 5: E-Commerce Cart
// =======================================

let cart = [
    { product: "Mobile", price: 15000 },
    { product: "Headset", price: 2000 },
    { product: "Charger", price: 1000 }
];

console.log("\nTask 5");

let totalCartValue = 0;
let expensiveProduct = cart[0];

for (let item of cart) {
    console.log(item.product);

    totalCartValue += item.price;

    if (item.price > expensiveProduct.price) {
        expensiveProduct = item;
    }
}

console.log("Total Cart Value:", totalCartValue);
console.log("Most Expensive Product:", expensiveProduct.product);

// =======================================
// Task 6: Bank Account Management
// =======================================

console.log("\nTask 6");

let balance = 10000;

function deposit(amount) {
    balance += amount;
    console.log("Deposited:", amount);
}

function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        console.log("Withdrawn:", amount);
    } else {
        console.log("Insufficient Balance");
    }
}

function checkBalance() {
    console.log("Current Balance:", balance);
}

deposit(5000);
withdraw(3000);
checkBalance();

// =======================================
// Task 7: Movie Ticket Booking
// =======================================

console.log("\nTask 7");

let customerAge = 25;
let ticketPrice;

if (customerAge < 5) {
    ticketPrice = 0;
} else if (customerAge <= 18) {
    ticketPrice = 100;
} else if (customerAge <= 60) {
    ticketPrice = 200;
} else {
    ticketPrice = 120;
}

console.log("Ticket Price:", ticketPrice);

// =======================================
// Task 8: Online Shopping Discount
// =======================================

console.log("\nTask 8");

let purchaseAmount = 6000;
let discount = 0;

if (purchaseAmount > 5000) {
    discount = purchaseAmount * 0.20;
} else if (purchaseAmount > 3000) {
    discount = purchaseAmount * 0.10;
} else if (purchaseAmount > 1000) {
    discount = purchaseAmount * 0.05;
}

let finalAmount = purchaseAmount - discount;

console.log("Original Amount:", purchaseAmount);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);

// =======================================
// Task 9: Food Inventory System
// =======================================

console.log("\nTask 9");

let inventory = ["Rice", "Oil", "Sugar", "Milk", "Egg"];

inventory.push("Bread");
inventory.push("Butter");

inventory.shift();
inventory.pop();

console.log("Milk Exists:", inventory.includes("Milk"));

console.log("Final Inventory:");
console.log(inventory);

// =======================================
// Task 10: Hospital Patient Management
// =======================================

console.log("\nTask 10");

let patient = {
    patientName: "Ramesh",
    age: 45,
    disease: "Fever",
    doctor: "Dr. Kumar"
};

for (let key in patient) {
    console.log(key + ":", patient[key]);
}

let { patientName, age: patientAge, disease, doctor } = patient;

console.log("Patient Name:", patientName);
console.log("Age:", patientAge);
console.log("Disease:", disease);
console.log("Doctor:", doctor);

// =======================================
// Task 11: Amazon Order Tracker
// =======================================

console.log("\nTask 11");

function sendSMS() {
    console.log("SMS Sent To Customer");
}

function placeOrder(callback) {
    console.log("Order Placed Successfully");
    callback();
}

placeOrder(sendSMS);

// =======================================
// Task 12: Cashback Offer Generator
// =======================================

console.log("\nTask 12");

function* cashbackOffers() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offers = cashbackOffers();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

// =======================================
// Task 13: Employee Database
// =======================================

console.log("\nTask 13");

let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 30000 },
    { id: 3, name: "John", salary: 40000 }
];

let totalSalary = 0;
let highestSalaryEmployee = employees[0];

for (let emp of employees) {
    console.log(emp.name);

    totalSalary += emp.salary;

    if (emp.salary > highestSalaryEmployee.salary) {
        highestSalaryEmployee = emp;
    }
}

console.log("Total Salary Expense:", totalSalary);
console.log("Highest Salary Employee:", highestSalaryEmployee.name);

// =======================================
// Task 14: Railway Reservation System
// =======================================

console.log("\nTask 14");

let availableSeats = 50;

function bookSeats(seats) {
    if (seats <= availableSeats) {
        availableSeats -= seats;
        console.log(seats + " seats booked.");
        console.log("Remaining Seats:", availableSeats);
    } else {
        console.log("Booking Rejected. Seats Unavailable.");
    }
}

bookSeats(10);
bookSeats(20);
bookSeats(25);

// =======================================
// Task 15: Mobile Store Billing System
// =======================================

console.log("\nTask 15");

let products = {
    Mobile: 20000,
    Laptop: 50000,
    Headphone: 2000,
    Smartwatch: 5000
};

let selectedProducts = ["Mobile", "Headphone", "Smartwatch"];

let totalAmount = 0;

for (let item of selectedProducts) {
    totalAmount += products[item];
}

let gst = totalAmount * 0.18;
let finalBill = totalAmount + gst;

console.log("Selected Products:", selectedProducts);
console.log("Total Amount:", totalAmount);
console.log("GST 18%:", gst);
console.log("Final Bill:", finalBill);