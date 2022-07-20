var screen = document.getElementById('input');

function btnClick(value){
    screen.value += value;
}

function clearScreen(){
    screen.value = "";
}

function result(){
    var finalCal = eval(screen.value);
    screen.value = finalCal;
}

