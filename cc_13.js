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
        
        employeeContainer.appendChild(employeeCard) ;                                   // Adding employee card to the container of employees

        // Task 4 - Employee Card Removal with Event Bubbling
        
        const removeEmployee = document.createElement("button") ;
        removeEmployee.textContent = "Remove Employee" ;
        removeEmployee.addEventListener("click", (event) => {                           // Will do the following when clicked
            event.stopPropagation() ;                                                   // Used to stop the program fron logging more messages to the console
            employeeContainer.removeChild(employeeCard) ;                               // Adding functionality to the remove button so it is out of the container
        }) ;
        
        employeeCard.appendChild(removeEmployee) ;                                      // Adding the remove button to each card

        employeeContainer.addEventListener("click", () => {
            console.log("Employee card succesfully clicked!")                           // Adding console message when card is clicked
        })
        
        // Task 5 - Inline Editing for Employee Cards

        const editEmployee = document.createElement("button") ;
        editEmployee.textContent = "Edit Employee" ;
        editEmployee.addEventListener("click", (event) => {                            // Will do the following when clicked
        event.stopPropagation() ;                                                      // Used to stop the program fron logging more messages to the console
        
        const editedName = document.createElement("input") ;                           // Creates an input field for name editions
        editedName.value = employeeName.textContent ;                                  // Changes the text content by using the field
        employeeName.textContent = "" ;                                                // Starts with an empty field
        employeeCard.appendChild(editedName) ;                                         // Exchanges the past name for the edited one

        const editedPosition = document.createElement("input") ;                       // Creates an input field for name editions
        editedPosition.value = employeePosition.textContent ;                          // Changes the text content by using the field
        employeePosition.textContent = "" ;                                            // Starts with an empty field
        employeeCard.appendChild(editedPosition) ;                                     // Exchanges past position witht the edited one

        const saveButton = document.createElement("button");                           // Adds a saving changes button
        saveButton.textContent = "Save Changes"
        saveButton.addEventListener("click", () => {                                   // When clicked, saves changes
            employeeName.textContent = editedName.value ;
            employeePosition.textContent = editedPosition.value ;
            
            employeeCard.removeChild(saveButton) ;                                      // Removing save button for editEmployee when edited
            employeeCard.appendChild(editEmployee) ;
        }) ;

        
        employeeCard.appendChild(saveButton) ;
        employeeCard.appendChild(editEmployee) ;
 
}) ;

employeeCard.appendChild(editEmployee) ;
}

// Test Cases --- Addition of employees cards
addEmployeeCard("Mare Barrow", "Electrical Engineer") ;                              // Using Red Queen characters to test the code
addEmployeeCard("Maven Calore", "Fire Engineer") ;
addEmployeeCard("Tiberias Calore VII", "Fire Engineer") ;
addEmployeeCard("Evangeline Samos", "Materials Engineer")

// Task 3 - Bulk Update on Employee Cards

function updateEmployeeCards() {
    const employeeCards = document.querySelectorAll(".employee-card") ;                  // Using querySelectorAll so all cards made are edited by the premises
    Array.from(employeeCards).forEach(card => {                                          // For each card in the group, apply the following settings in color
        card.style.backgroundColor = "#483D8B" ;                                         // Changing background color to the correct shade of purple
    }) ;
} ;

updateEmployeeCards() ;                                                                  // Logging the color update

}) ;