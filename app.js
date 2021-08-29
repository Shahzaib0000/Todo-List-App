var list = document.getElementById("list")

function addTodo() {
    var input = document.getElementById("todo-input");
    if (input.value == "." && input.value == "           ") {
        alert("invalid input")
        
    }

    // Create li 
    var li = document.createElement("li");
    var textNode = document.createTextNode(input.value)
    li.appendChild(textNode)

    // Creating edit button
    var editbtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editbtn.appendChild(editText)
    editbtn.setAttribute("class", "edit-btn");
    editbtn.setAttribute("value", "Edit");
    editbtn.setAttribute("onclick", "editButton(this)");
    li.appendChild(editbtn)


    // Creating delete button
    var dltbtn = document.createElement("button");
    var dltText = document.createTextNode("DELETE");
    dltbtn.appendChild(dltText)
    dltbtn.setAttribute("class", "dlt-btn");
    dltbtn.setAttribute("value", "delete");
    dltbtn.setAttribute("onclick", "dltButton(this)");
    li.appendChild(dltbtn)

    // apdated ul
    list.appendChild(li)
    input.value = ""
}

function dltAll() {
    list.innerHTML = ""
}

function dltButton(e) {
    e.parentNode.remove()
}

function editButton(e) {

    var todoItem = e.parentNode.firstChild.nodeValue;
    var edit = prompt("Edit todo here:", todoItem);
    e.parentNode.firstChild.nodeValue = edit

}











