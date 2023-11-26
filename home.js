let data = [
    {
        id : "835049073535",
        name: "Dennis Ritchie",
        nationality: "USA"
    },
    {
        id : "964827331269",
        name: "James Gosling",
        nationality: "Canada"
    },
    {
        id : "716586769755",
        name: "Linus Torvalds",
        nationality: "Finland"
    },
    {
        id : "452602175042",
        name: "Bjarne Stroustrup",
        nationality: "Denmark"
    },
    {
        id : "023093584774",
        name: "Ryan Dahl",
        nationality: "USA"
    },
];

var tableBody = document.getElementById("tBody");
data.forEach((element, index) => {
    var newRow = tableBody.insertRow(index);

    var ColId = newRow.insertCell(0);
    ColId.innerHTML = element.id;

    var ColName = newRow.insertCell(1);
    ColName.innerHTML = element.name;

    var colNationality = newRow.insertCell(2);
    colNationality.innerHTML = element.nationality;


//DELETE
var buttonDeleteCell = newRow.insertCell(3);
var buttonDelete = document.createElement("Button");
buttonDelete.className = "btn btn-danger";
buttonDelete.innerHTML = "Delete";
buttonDeleteCell.appendChild(buttonDelete);



//Create Button Edit
var buttonEditCell = newRow.insertCell(3);
var buttonEdit = document.createElement("Button");
buttonEdit.className = "btn btn-warning";
buttonEdit.innerHTML = "Edit";
buttonEditCell.appendChild(buttonEdit);

//Create Button View
var buttonViewCell = newRow.insertCell(3);
var buttonView = document.createElement("Button");
buttonView.className = "btn btn-info";
buttonView.innerHTML = "View";
buttonViewCell.appendChild(buttonView);

});