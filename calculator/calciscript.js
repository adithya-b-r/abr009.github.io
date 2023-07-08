function ClearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function displaydot() {
    if (!document.getElementById("result").value.includes("."))
        document.getElementById("result").value += ".";
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
