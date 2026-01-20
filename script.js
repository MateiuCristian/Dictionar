insertedWords = []

function saveWord() {
    let textBoxValue = document.getElementById("insertTextBoxId").value;
    insertedWords.push(document.getElementById("insertTextBoxId").value);
}

function findWord() {
    let textBoxValue = document.getElementById("findTextBoxId").value;
    let divOutput = document.createElement("div");
    if (insertedWords.includes(textBoxValue) == true) {
        divOutput.append("Word \"" + textBoxValue + "\" has found.");
    } else {
        divOutput.append("Word \"" + textBoxValue + "\" has not found.");
    }
    document.body.appendChild(divOutput);
}
