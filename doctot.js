// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. 
// It should have the following properties: officeName, streetAddress, doctorName, patientName,
//  visitDate, amountBilled, dueDate. You provide example values for each one.

// Lightning Exercise 2: Copy the code below and paste it above your object.

// const dateVisited = "visitDate"
// const owed = "amountBilled"
// const patient = "patientName"


const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const bills = [
    {
        officeName: "IMPS",
        streetAddress: "123, My way",
        doctorName: "Dr. Key",
        patientName: "Praful",
        visitDate: "1/4/19",
        amountBilled: 300,
        dueDate: "2/4/19"
    },
    {
        officeName: "Venderbuilt",
        streetAddress: "Melory Lane, Franklin, TN",
        doctorName: "Dr.Tanvi",
        patientName: "Oju",
        visitDate: "12/12/18",
        amountBilled: 99.30,
        dueDate: "1/4/19"
    }
]

// Use square bracket notation to output the value of those three properties to the console in Chrome.
bills.forEach(bill => console.log(bill[dateVisited], bill[owed], bill[patient]));

// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.
bills.forEach(bill => console.log(Object.values(bill)));


// Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.
console.log(Object.keys(bills[0]))

// Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM 
// inside a parent <section> element. Wrap each one in a <span> element.
const $ = document.querySelector.bind(document)
$("#doc").innerHTML = "<h2> Key Values of an object </h2>"
let html = ""
html = "<section>"
for (const key of Object.keys(bills[0])) {
    html += `<span> ${key} </span>`
}

html += "</section>"
$("#doc").innerHTML += html