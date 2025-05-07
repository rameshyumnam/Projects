const buttonValues = [
    "AC", "C", "+/-", "%",
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "+",
    "0", "(", ")", "-",
    ".", "="
];

const display = document.querySelector("input");
const btnDiv = document.querySelector(".buttons")

const topSymbols = ["AC", "C", "+/-", "%"];


for(let i = 0; i < buttonValues.length; i++) {
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;
    btnDiv.appendChild(button);


    // Styling buttonValues
    if (value == "=") {
        button.style.backgroundColor = "green"
        button.style.gridColumn = "span 3"
        button.style.color = "white"
    };
    if (value == "/") {
        button.style.backgroundColor = "#007009";
        button.style.color = "white"
    };
    if (value == "*") {
        button.style.backgroundColor = "#007009";
        button.style.color = "white"
    };
    if (value == "+") {
        button.style.backgroundColor = "#007009";
        button.style.color = "white"
    };
    if (value == "-") {
        button.style.backgroundColor = "#007009";
        button.style.color = "white"
    };
    if (value == "AC") {
        button.style.backgroundColor = "#a30000";
        button.style.color = "white"
    }
    if (value == "C") {
        button.style.backgroundColor = "#ff3030";
        button.style.color = "white"
    }
    if (value == "+/-") {
        button.style.backgroundColor = "#007e83";
        button.style.color = "white"
    }
    if (value == "%") {
        button.style.backgroundColor = "#007e83";
        button.style.color = "white"
    };

    // Adding EventListener
    button.addEventListener('click', function() {
        if (topSymbols.includes(value)) {
            if (value == "AC") {
                display.value = "";
            } else if (value == "C") {
                display.value = display.value.slice(0, -1);
            } else if (value == "+/-") {
                if(display.value != "" && display.value != "0") {
                    if (display.value[0] == "-") {
                        display.value = display.value.slice(1);
                    } else {
                        display.value = "-" + display.value
                    }
                }
            } else if (value == "%") {
                display.value = Number(display.value) / 100;
            }
            
        } else if (display.value == "0") {
            display.value = value;
        } else if (value == ".") {
            if (display.value !== "" && !display.value.includes(value)) {
                display.value += value;
            }
        } else if (value == "=") {
            if (value == "=") {
                try {
                    display.value = eval(display.value)
                } catch {
                    display.value = "Error"
                }
            }
        }
         else {
            display.value += value;
        }
    })
}