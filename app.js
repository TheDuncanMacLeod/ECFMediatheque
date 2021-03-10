// delete TABLE row function.
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

var films = [{
        name: "Deadpool",
        years: 2016,
        authors: "Tim Miller",
        btnDlt: ""
    },
    {
        name: "Spiderman",
        years: 2002,
        authors: "Sam Raimi",
        btnDlt: ""
    },
    {
        name: "Scream",
        years: 1996,
        authors: "Wes Craven",
        btnDlt: ""
    },
    {
        name: "It: chapter 1",
        years: 2019,
        authors: "Andy Muschietti",
        btnDlt: ""
    }
];
// document.getElementById("addBtn").addEventListener("click", displayAddForm);
let x = document.getElementById("secretForm")
x.style.display = "none"

function displayAddForm() {
    let x = document.getElementById("secretForm");
    if (x.style.display == "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

testA = Array.from(document.querySelectorAll('#regristrationForm input')).reduce((acc, input) => ({
    ...acc,
    [input.id]: input.value
}), {});

function selectedItem() {
    document.getElementById("Annee")
}

document.getElementById("Annee").addEventListener("click", sortTable);
document.getElementById("Nom").addEventListener("click", sortTable2);

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }

}

function sortTable2() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }

}
//j'avoue c'est énervé...
testA = Array.from(document.querySelectorAll('#regristrationForm input')).reduce((acc, input) => ({
    ...acc,
    [input.id]: input.value
}), {});

function hide() {
    setTimeout(function(){ 
        document.getElementById("secretMessage1").style.display = "none"; 
        document.getElementById("secretMessage1").style.backgroundColor = "red"; 
        console.log("HIDE PB")
    }, 3000);
  }

// Form validation code will come here.
function validate() {
    if (document.getElementById("name").value == "" || document.getElementById("name").value.length < 2) {
        document.getElementById("secretMessage1").innerHTML = "Please provide a title!";
        document.getElementById("secretMessage1").style.display = "block";
        hide()
        console.log("ValidatePB")
        document.getElementById("name").focus();
        return false;
    }
    if (document.getElementById("name").value.indexOf(" ") === 0) {
        document.getElementById("secretMessage1").innerHTML = "Don't start with a SPACE character please!";
        document.getElementById("secretMessage1").style.display = "block";
        hide()
        document.getElementById("name").focus();
        return false;
    }
    if (document.getElementById("author").value == "" || document.getElementById("author").value.length <= 5) {
        document.getElementById("secretMessage1").innerHTML = "Please provide an author";
        document.getElementById("secretMessage1").style.display = "block";
        hide()
        document.getElementById("author").focus();
        return false;
    }
    if (document.getElementById("author").value.indexOf(" ") === 0) {
        document.getElementById("secretMessage1").innerHTML = "Don't start with a SPACE character please";
        document.getElementById("secretMessage1").style.display = "block";
        hide()
        document.getElementById("author").focus();
        return false;
    }
    var d = new Date();
    var n = d.getFullYear();
    if (document.getElementById("year").value == "" || isNaN(document.getElementById("year").value) ||
        document.getElementById("year").value.length != 4 || document.getElementById("year").value > n || document.getElementById("year").value < 1900) {
        document.getElementById("secretMessage1").innerHTML = "Choisisez une date entre 1900 et aujourd'hui";
        document.getElementById("secretMessage1").style.display = "block";
        hide()
        document.getElementById("year").focus();
        return false;
    }
    document.getElementById("secretMessage1").style.backgroundColor = "lightgreen"; 
    document.getElementById("secretMessage1").innerHTML = "Film ajouté avec succès"
    document.getElementById("secretMessage1").style.display = "block";
    hide()
    return (true);
}

//Submit actions
document.getElementById("submit").addEventListener("click", function () {
    if (validate() == true) {
        testA = Array.from(document.querySelectorAll('#regristrationForm input')).reduce((acc, input) => ({
            ...acc,
            [input.id]: input.value
        }), {});
        console.log(testA.name)
        loadSingleItem()
        document.getElementsByName('regristrationForm')
    } else {
        console.log("Boop")
    }
});

//Adding a sigle item after validation
function loadSingleItem() {
    let table1 = document.getElementById("testBody");
    let row = table1.insertRow();
    let name = row.insertCell(0);
    let myString = testA.name;
    myString = myString.replace(/^\w/, (c) => c.toUpperCase());
    name.innerHTML = myString;
    let years = row.insertCell(1);
    years.innerHTML = testA.year;
    let authors = row.insertCell(2);
    let myString2 = testA.author;
    myString2 = myString2.replace(/^\w/, (c) => c.toUpperCase());
    authors.innerHTML = myString2;
    let btnCell = row.insertCell(3);
    let btn = document.createElement("button");
    btn.type = "button";
    btn.innerHTML = "Supprimer";
    btn.addEventListener("click", function () {
        deleteRow(btn)
    });
    btnCell.append(btn);
    document.getElementById("regristrationForm").reset();
};

//First loading of the JS datas
function loadTableData(items) {
    let table1 = document.getElementById("testBody");
    items.forEach(item => {
        let row = table1.insertRow();
        let name = row.insertCell(0);
        name.innerHTML = item.name;
        let years = row.insertCell(1);
        years.innerHTML = item.years;
        let authors = row.insertCell(2);
        authors.innerHTML = item.authors;
        let btnCell = row.insertCell(3);
        let btn = document.createElement("button")
        btn.type = "button";
        btn.innerHTML = "Supprimer";
        btn.addEventListener("click", function () {
            deleteRow(btn)
        });
        btnCell.append(btn);
    });
}

loadTableData(films);

let confetti = new Confetti('addBtn');

// Edit given parameters
confetti.setCount(31);
confetti.setSize(1);
confetti.setPower(5);
confetti.setFade(false);
confetti.destroyTarget(false);