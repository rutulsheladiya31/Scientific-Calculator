let inputData = document.getElementById("inputValue");
let tempData;
let powerXyFlag = false;
let changeOperationFlag = true;
let dtr = true
let memData;
let memoryFlag = false;
let memStore = false;


// Input Data
function addData(number) {
    inputData.value += number;
}

// 2nd row
function degreeToradius() {
    if (dtr) {
        deg_btn.innerHTML = "RAD"
        dtr = false
    } else {
        deg_btn.innerHTML = "DEG"
        dtr = true
    }
}

// 4th row

// for Trigonometry
function calculateDegree(value) {
    let degree = (Math.PI / 180) * value;
    return degree;
}
document.getElementById("trigonometry").addEventListener("change", (event) => {
        let value = event.target.value

        if (dtr == true) {
            if (value == 'sin') {
                inputData.value = Math.sin(calculateDegree(eval(inputData.value)))
            } else if (value == "cos") {
                inputData.value = Math.cos(calculateDegree(eval(inputData.value)));
            } else if (value == "tan") {
                inputData.value = Math.tan(calculateDegree(eval(inputData.value)))
            }
            document.getElementById('trigonometry').selectedIndex = 0;
        }
        if (dtr == false) {
            if (value == 'sin') {
                inputData.value = Math.sin(inputData.value)
            } else if (value == "cos") {
                inputData.value = Math.cos(inputData.value);
            } else if (value == "tan") {
                inputData.value = Math.tan(inputData.value)
            }
            document.getElementById('trigonometry').selectedIndex = 0;
        }
    })
    // for function
document.getElementById("function").addEventListener("change", (event) => {
    let value = event.target.value
    if (value == 'random') {
        inputData.value = Math.random(inputData.value);
    } else if (value == "floor") {
        inputData.value = Math.floor(inputData.value);
    } else if (value == "ceil") {
        inputData.value = Math.ceil(inputData.value)
    }
    document.getElementById('function').selectedIndex = 0;
})

// 5th Row  
function changeOperation() {
    if (changeOperationFlag) {
        document.getElementById("changeOperation").innerHTML = "3<sup>rd</sup>"
        document.getElementById("square").innerHTML = "X<sup>3</sup>"
        document.getElementById("squareroot").innerHTML = "3√<i>x</i>"
        document.getElementById("logbytwo").innerHTML = "log<sub>10</sub>"
        changeOperationFlag = false
    } else {
        document.getElementById("changeOperation").innerHTML = "2<sup>nd</sup>"
        document.getElementById("square").innerHTML = "X<sup>2</sup>"
        document.getElementById("squareroot").innerHTML = "2√<i>x</i>"
        document.getElementById("logbytwo").innerHTML = "log<sub>2</sub>"
        changeOperationFlag = true
    }
}

function pi() {
    inputData.value = inputData.value + Math.PI
}

function exponential() {
    inputData.value = inputData.value + Math.E
}

function cleardata(flag) {
    if (flag) {
        inputData.value = ""
    } else {
        let back = inputData.value
        inputData.value = back.substring(0, back.length - 1)
    }

    inputData.placeholder = 0
}

// 6th row
function square() {
    if (changeOperationFlag) {
        inputData.value = Math.pow(inputData.value, 2)
    } else {
        inputData.value = Math.pow(inputData.value, 3)
    }

}

function fractional() {
    inputData.value = Math.pow(eval(inputData.value), -1)
}

function expo() {
    inputData.value = Math.exp(eval(inputData.value))
}

function absolute() {
    let temp = eval(inputData.value).toString().substring(0, 1)
    if (temp == '+' || temp == '-') {
        inputData.value = eval(inputData.value).toString().substring(1)
    }
}
// 7th row
function square_root() {
    if (changeOperationFlag) {
        inputData.value = Math.sqrt(inputData.value)
    } else {
        inputData.value = Math.cbrt(inputData.value)
    }

}

function factorial() {
    let fact = 1;
    for (var i = 1; i <= inputData.value; i++) {
        fact = fact * i;
    }
    inputData.value = fact
}

// 8th row
function power_xy() {
    if (inputData.value == "") {
        inputData.placeholder = "Enter First Number"
        return;
    } else {
        tempData = inputData.value
        inputData.value = ""
        inputData.placeholder = "Enter Second Number"
        powerXyFlag = true;
    }
}

// 9th row
function ten() {
    inputData.value = Math.pow(10, inputData.value)
}
//10th row
function logby_two() {
    if (changeOperationFlag) {
        inputData.value = Math.log2(inputData.value)
    } else {
        inputData.value = Math.log10(inputData.value)
    }

}
// 11th row
function ln() {
    inputData.value = Math.log(inputData.value)
}

function equalto() {
    inputData.value = eval(inputData.value)
    if (powerXyFlag == true) {
        inputData.value = Math.pow(tempData, eval(inputData.value))
        powerXyFlag = false
    }


}

function plus_minus() {
    let sign = inputData.value.substring(0, 1)
    if (sign == '+' || sign == '-') {
        inputData.value = inputData.value.substring(1)
    } else {
        inputData.value = '-' + inputData.value
    }

}



// Memory Functions
document.querySelectorAll('.memoryfunction').forEach((element) => {
    element.addEventListener('click', () => {
        memoryFunction(element)
        })
})

function memoryFunction(ele) {
    let eleId = ele.attributes.id.value;
    if (eleId == "mp") {
        if (memStore) {
            memData += '+';
            memStore = false;
        }
        if (!memoryFlag) {
            memData = "";
            document.getElementById("mc").style.color = "Black";
            document.getElementById("mr").style.color = "Black";
            document.getElementById("ms").style.color = "Black";
            memoryFlag = true;
        }

        if (memoryFlag){
            memData += eval(inputData.value) + "+";
            inputData.value = "";
        } 
    } else if (eleId == "mm") {
        if (memStore) {
            memData += '-';
            memStore = false;
        }
        if (!memoryFlag) {
            memData = "";
            document.getElementById("mc").style.color = "Black";
            document.getElementById("mr").style.color = "Black";
            document.getElementById("ms").style.color = "Black";
            memoryFlag = true;
        }
        if (memoryFlag){
            memData += eval(inputData.value) + "-";
            inputData.value = "";
        } 
    } else if (eleId == "mr" && memoryFlag) {
        (inputData.value == "") ? memData = memData.substring(0, memData.length - 1): memData += inputData.value;
        inputData.value = eval(memData);
    } else if (eleId == "mc" && memoryFlag) {
        memData = "";
        document.getElementById("mc").style.color = "rgb(163, 163, 163)";
        document.getElementById("mr").style.color = "rgb(163, 163, 163)";
        document.getElementById("ms").style.color = "rgb(163, 163, 163)";
        memoryFlag = false;
    } else if (eleId == "ms" && memoryFlag) {
        memStore = true;
        memData = eval(memData);
    }
}