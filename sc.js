window.onload = function() {
    document.getElementById('txtStepCount').addEventListener("keyup", onStepCountChange );
}

function onStepCountChange(){
    var txtStepCount = document.getElementById('txtStepCount')
    var txtMiles = document.getElementById('txtMiles');
    txtMiles.value = txtStepCount.value;
}