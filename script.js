// =====================
// Part 1: Variables & Conditionals
// =====================
const checkAgeBtn = document.getElementById("checkAgeBtn");
checkAgeBtn.addEventListener("click", function() {
    const age = parseInt(document.getElementById("ageInput").value);
    const ageResult = document.getElementById("ageResult");

    if (isNaN(age)) {
        ageResult.textContent = "Please enter a valid number!";
    } else if (age >= 18) {
        ageResult.textContent = "You are an adult.";
    } else {
        ageResult.textContent = "You are a minor.";
    }
});

// =====================
// Part 2: Functions
// =====================
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript mastery.`;
}

function calculateSquare(num) {
    return num * num;
}

const greetBtn = document.getElementById("greetBtn");
greetBtn.addEventListener("click", function() {
    const greetResult = document.getElementById("greetResult");
    greetResult.textContent = greetUser("Meshack");
});

// =====================
// Part 3: Loops
// =====================
const numberList = document.getElementById("numberList");

// For loop example
for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    numberList.appendChild(li);
}

// While loop example
let j = 1;
while (j <= 3) {
    console.log(`While loop iteration: ${j}`);
    j++;
}

// =====================
// Part 4: DOM Manipulation
// =====================

// Change text content
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("textToChange").textContent = "The text has been changed!";
});

// Toggle a class
document.getElementById("toggleClassBtn").addEventListener("click", function() {
    document.getElementById("highlightText").classList.toggle("highlight");
});

// Dynamically add list items
let dynamicCount = 1;
document.getElementById("addElementBtn").addEventListener("click", function() {
    const li = document.createElement("li");
    li.textContent = `Dynamic item ${dynamicCount++}`;
    document.getElementById("dynamicList").appendChild(li);
});
