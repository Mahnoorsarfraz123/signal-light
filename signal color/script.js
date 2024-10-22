function generateMessage() {
    const colorInput = document.getElementById("color").value.toLowerCase();
    const resultDiv = document.getElementById("result");

    let message;
    
    switch(colorInput) {
        case 'red':
            message = "Stop! The signal is red.";
            break;
        case 'yellow':
            message = "Countine! The signal is yellow.";
            break;
        case 'green':
            message = "Go! The signal is green.";
            break;
        default:
            message = "Invalid color! Please enter red, yellow, or green.";
    }

    resultDiv.textContent = message;
}
