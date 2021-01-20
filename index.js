function validate() {
    var choice1 = document.getElementById("num").checked;
    var choice2 = document.getElementById("num1").checked;
    if ((choice1 == " ") && (choice2 == " ")) {
        alert("Choose atleast one item to unmark")
        return false;
    }
    return true;
}