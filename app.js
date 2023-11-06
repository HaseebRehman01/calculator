
function calcData(v) {
    // Get the input element with the ID 'txtinput'
    var input = document.getElementById('txtinput');

    // Get the current value of the input
    var oldValue = input.value;

    // Get the length of the input value
    var inputLength = oldValue.length;

    // Get the last character in the input
    var lastChar = oldValue[inputLength - 1];

    // Define an array of operators
    var oprArr = ["+", "-", ".", "/", "*"];

    // Check if the new value 'v' and the last character are both operators
    if (oprArr.includes(v) && oprArr.includes(lastChar)) {
        // Remove the last operator by slicing the value
        var removeSameOpr = oldValue.slice(0, -1);

        // Update the input value by concatenating 'v'
        input.value = removeSameOpr + v;
    } else {
        // If 'v' is not an operator or there is no previous operator, simply concatenate 'v'
        input.value = oldValue + v;
    }
}

function equalTo() {
 
    // Get the input element with the ID 'txtinput'
    var input = document.getElementById('txtinput');

    // Evaluate the input value as an expression and calculate the result
    var calculate = eval(input.value);

    // Update the input value with the calculated result
    input.value = calculate;
}

function allClear() {
    // Get the input element with the ID 'txtinput' and clear its value
    var input = document.getElementById('txtinput');
    input.value = "";
}

function remove() {
    // Get the input element with the ID 'txtinput'
    var input = document.getElementById('txtinput');

    // Get the current input value
    var inputValue = input.value;

    // Check if there are characters to remove
    if (inputValue.length > 0) {
        // Remove the last character from the input value
        inputValue = inputValue.slice(0, -1);

        // Update the input value with the character removed
        input.value = inputValue;
    }
}
