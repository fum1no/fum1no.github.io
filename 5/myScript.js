function click1() {
    var result;
    var num1 = document.getElementById("num1").value;
    if(String(num1).match(/^[0-9]+$/)!== null){    
        var sel = document.getElementById("select1");
        var num2 = sel.value;
        result = num1*num2;
        document.getElementById("result").innerHTML = result;
    }
    else{
        result = "Введено недопустимое значение. Введите число.";
        document.getElementById("result").innerHTML = result;
    }
    return false;
}


    // if(!isNaN(num1) && parseInt(Number(num1)) == num1 && !isNaN(parseInt(num1, 10))){
        // num1 = parseInt(document.getElementById("num1").value);