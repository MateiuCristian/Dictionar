insertedWords = []

function saveWord() {
    let textBoxValue = document.getElementById("insertTextBoxId").value;
    insertedWords.push(textBoxValue);
}

function findWord() {
    let textBoxValue = document.getElementById("findTextBoxId").value;
    outputTextBox = document.createElement("input");
    outputTextBox.readoOnly = true;
    if (insertedWords.includes(textBoxValue) == true) {
        outputTextBox.value = "Word \"" + textBoxValue + "\" has found.";
    } else {
        outputTextBox.value = "Word \"" + textBoxValue + "\" has not found.";
    }
    document.body.appendChild(outputTextBox);
}