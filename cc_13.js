// Task 2 - Employee Cards Dynamic Addition

document.addEventListener("DOMContentLoaded", () => {
    const employeeContainer = document.getElementById("employeeContainer")

    function addEmployeeCard(name, position) {
        const employeeCard = document.createElement("div") ;
        employeeCard.setAttribute("class", "employee-card") ;

        const employeeName = document.createElement("h2") ;
        employeeName.textContent = name ;

        const employeePosition = document.createElement("p")
        employeePosition.textContent = position ;

        employeeCard.appendChild(employeeName) ;
        employeeCard.appendChild(employeePosition) ;
    }})


// Task 3 - Bulk Update on Employee Cards

function updateEmployeeCards() {
    const employeeCards = document.querySelectorAll(".employee-card") ;              // Using querySelectorAll so all cards made are edited by the premises
    Array.from(employeeCards).forEach(card => {
        card.style.backgroundColor = "#483D8B" ;                                   // Changing background color to the correct shade of purple
    }) ;
} ;

updateEmployeeCards() ;

// Test Cases --- Addition of employees cards
    addEmployeeCard("Mare Barrow", "Electrical Engineer") ;
    addEmployeeCard("Maven Calore", "Fire Engineer") ;
    addEmployeeCard("Tiberias Calore VII", "Fire Engineer") ;
    addEmployeeCard("Evangeline Samos", "Materials Engineer")
