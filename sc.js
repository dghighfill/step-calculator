window.onload = function() {
    document.getElementById('txtStepCount').addEventListener("keyup", onStepCountChange );
    document.getElementById('txtStepCount').addEventListener("focus", onStepCountChange );
    document.getElementById('txtMiles').addEventListener("keyup", onMilesChange );
    // document.getElementById('txtMiles').addEventListener("focus", onMilesChange );
    document.getElementById('btnReset').addEventListener("click", reset );
    readFromStorage();
}

function onStepCountChange(){
    document.getElementById('txtMiles').value = 
        calculateBySteps();
}

function onMilesChange(){
    document.getElementById('txtStepCount').value = 
        calculateByMiles();
}

function reset(){
    document.getElementById('txtStepCount').value = "";
    document.getElementById('txtMiles').value = "";
}

function calculateBySteps() {
    var miles = (document.getElementById("txtGoal").value - 
        document.getElementById('txtStepCount').value) /
        document.getElementById("txtDivisor").value;
    writeToStorage();
    return miles.toFixed(2);
}

function calculateByMiles() {
    var steps = document.getElementById("txtMiles").value *
        document.getElementById("txtDivisor").value;
    writeToStorage();
    return steps.toFixed();
}

function writeToStorage(){
    if( typeof( Storage ) !== "undefined" ){
        localStorage.stepGoal = document.getElementById("txtGoal").value;
        localStorage.divisor = document.getElementById("txtDivisor").value;
    }
}

function readFromStorage(){
    if( typeof( Storage ) !== "undefined" ){
        if( localStorage.stepGoal ){
            document.getElementById("txtGoal").value = localStorage.stepGoal;
        }
        if( localStorage.divisor ){
            document.getElementById("txtDivisor").value = localStorage.divisor;
        }
    }
}