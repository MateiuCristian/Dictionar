insertedWords = []

function saveWord() {
    let textBoxValue = document.getElementById("insertTextBoxId").value;
    insertedWords.push(document.getElementById("insertTextBoxId").value);
}

function findWord() {
    let textBoxValue = document.getElementById("findTextBoxId").value;
    let divOutputBox = document.createElement("div");
    if (insertedWords.includes(textBoxValue) == true) {
        divOutputBox.append("Word \"" + textBoxValue + "\" has found.");
    } else {
        divOutputBox.append("Word \"" + textBoxValue + "\" has not found.");
    }
    document.body.appendChild(divOutputBox);
}
