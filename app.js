var list = document.getElementById("list")

function addTodo() {
    var input = document.getElementById("todo-input");
    var val = input.value;
    if (val == "" || val == " " || val == "  ") {
        alert("Invalid Input")
        return 0
    }
    else if (!val.trim().length) {
        input.value = ""
        return 0
    }
    else {
        // Create li 
        var li = document.createElement("li");
        var liText = document.createElement("input");
        
        liText.setAttribute('disabled', 'disabled');
        liText.setAttribute('class','inputBox')
        liText.value = val.toUpperCase();
        li.appendChild(liText)

        // Creating edit button
        var editbtn = document.createElement("button");
        var editText = document.createTextNode("EDIT");
        editbtn.appendChild(editText)
        editbtn.setAttribute("class", "edit-btn");
        editbtn.setAttribute("value", "Edit");
        editbtn.setAttribute("onclick", "editButton(this.previousSibling)");
        li.appendChild(editbtn)


        // Creating delete button
        var dltbtn = document.createElement("button");
        var dltText = document.createTextNode("DELETE");
        dltbtn.appendChild(dltText)
        dltbtn.setAttribute("class", "dlt-btn");
        dltbtn.setAttribute("value", "delete");
        dltbtn.setAttribute("onclick", "dltButton(this)");
        dltbtn.setAttribute('id', 'delete')
        li.appendChild(dltbtn)
        // apdated ul
        list.appendChild(li)
        input.value = ""
    }
}

function dltAll() {
    list.innerHTML = ""
}

function dltButton(e) {
    e.parentNode.remove()
}

function editButton(listData) {
    var del = document.getElementById("delete");
    var check = listData.nextSibling.innerText;
    console.log(check)
    if (check == "EDIT") {
        listData.disabled = false;
        listData.focus();
        listData.nextSibling.innerText = "Update";
        del.disabled = true;

    }
    else if (check === "Update") {
        listData.disabled = true;
        listData.nextSibling.innerText = "Edit";
        del.disabled = false;
    }
}