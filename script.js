function getPinNumber(){
    return document.getElementById("keyboard-area").value;
}
function writePinNumber(num) {
    document.getElementById("keyboard-area").value = num;
}

var number = document.getElementsByClassName("number");
for(var i = 0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        var output = getPinNumber();
        if(output != NaN){ // if output is a number
            output = output + this.id ;
            writePinNumber(output);
        }
    });
}

function generateArea(){
    return document.getElementById("generate-area").value;
}
function printGenerateArea(num){
    document.getElementById("generate-area").value = num;
}

function pinGenerator(){
    var anyNumber = Math.random() * 10000;
    var pinNumber = Math.round(anyNumber);
    return pinNumber;
}
var pinFourDigit = pinGenerator();
var pinNumber = document.getElementById("generatePin");
pinNumber.addEventListener('click', function(){
    printGenerateArea(pinFourDigit);
})

var misMatched = document.getElementById("mis-matched") ;
var matched = document.getElementById("matched") ;

var submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', function(){
    if(generateArea() == getPinNumber()){
        matched.style.display = "block" ;
        misMatched.style.display = "none" ;
    }
    else{
        misMatched.style.display = "block" ;
        matched.style.display = "none" ;
    }
})

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', function(){
        if(this.id == "clear"){
            writePinNumber("");
        }
        else if(this.id == "backspace"){
            var output = getPinNumber().toString();
            if(output){ //if output is a value
                output = output.substr(0, output.length-1);
                writePinNumber(output);
            }
        }
    });
}