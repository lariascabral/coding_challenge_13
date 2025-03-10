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
        
        const removeEmployee = document.createElement("button") ;
        removeEmployee.textContent = "Remove Employee" ;
        removeEmployee.addEventListener("click", () => {
            employeeContainer.removeChild(employeeCard) ;
        }) ;

        employeeCard.appendChild(employeeName) ;
        employeeCard.appendChild(employeePosition) ;
        employeeCard.appendChild(removeEmployee) ;

        employeeContainer.appendChild(employeeCard) ;
    }

    addEmployeeCard("Mare Barrow", "Electrical Engineer") ;
    addEmployeeCard("Maven Calore", "Fire Engineer") ;
    addEmployeeCard("Tiberias Calore VII", "Fire Engineer") ;

}) ;