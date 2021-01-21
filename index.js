function validate() {
    var choice1 = document.getElementById("num").checked;
    var choice2 = document.getElementById("num1").checked;
    if ((choice1 == " ") && (choice2 == " ")) {
        alert("Choose atleast one item to unmark")
    }
    return true;
}


function addItem() {
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}


function removeItem() {
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
}
