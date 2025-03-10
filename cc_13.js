// Task 2 - Employee Cards Dynamic Addition

document.addEventListener("DOMContentLoaded", () => {
    const employeeContainer = document.getElementById("employeeContainer")             // Grabbing employee container by ID

    function addEmployeeCard(name, position) {                                         // Creating a function to add employee cards to the parent section
        const employeeCard = document.createElement("div") ;
        employeeCard.setAttribute("class", "employee-card") ;                          // Setting attributes to the employee cards

        const employeeName = document.createElement("h2") ;                            // Establishing how name is going to be shown 
        employeeName.textContent = name ;

        const employeePosition = document.createElement("p")                           // Establishing how position is going to be shown 
        employeePosition.textContent = position ;

        employeeCard.appendChild(employeeName) ;                                        // Appending the name and position ot the employee card
        employeeCard.appendChild(employeePosition) ;

        // Task 4 - Employee Card Removal with Event Bubbling
        
        const removeEmployee = document.createElement("button") ;
        removeEmployee.textContent = "Remove Employee" ;
        removeEmployee.addEventListener("click", (event) => {                           // Will do the following when clicked
            event.stopPropagation() ;                                                   // Used to stop the program fron logging more messages to the console
            employeeContainer.removeChild(employeeCard) ;                               // Adding functionality to the remove button so it is out of the container
        }) ;
        
        employeeCard.appendChild(removeEmployee) ;                                      // Adding the remove button to each card

        employeeContainer.appendChild(employeeCard) ;                                   // Adding employee card to the container of employees

        employeeContainer.addEventListener("click", () => {
            console.log("Employee card succesfully clicked!")                           // Adding console message when card is clicked
        })
        
    }

// Task 3 - Bulk Update on Employee Cards

function updateEmployeeCards() {
    const employeeCards = document.querySelectorAll(".employee-card") ;                  // Using querySelectorAll so all cards made are edited by the premises
    Array.from(employeeCards).forEach(card => {                                          // For each card in the group, apply the following settings in color
        card.style.backgroundColor = "#483D8B" ;                                         // Changing background color to the correct shade of purple
    }) ;
} ;

updateEmployeeCards() ;

// Test Cases --- Addition of employees cards
    addEmployeeCard("Mare Barrow", "Electrical Engineer") ;                             // Using Red Queen characters to test the code
    addEmployeeCard("Maven Calore", "Fire Engineer") ;
    addEmployeeCard("Tiberias Calore VII", "Fire Engineer") ;
    addEmployeeCard("Evangeline Samos", "Materials Engineer")

}) ;