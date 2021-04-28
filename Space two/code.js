//start function for the start button
function start(){
    //this line disables the start button from being pressed
    document.getElementById("start").disabled = true;
    //this line enables the stop button to be pressed again after it was disabled
    document.getElementById("stop").disabled = false;
}

//stop function for the stop button
function stop(){
    //this line disables the stop button from being pressed
    document.getElementById("stop").disabled = true;
    //this line enables the start button to be pressed again after it was disabled
    document.getElementById("start").disabled = false;
}