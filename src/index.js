const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    const p = document.createElement("p");
    p.innerText = inputText;
    li = createListDiv(p);
    li.firstElementChild.appendChild(completeButton);
    li.firstElementChild.appendChild(deleteButton);

    document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById('add-button').addEventListener('click',() => onClickAdd());

const createListDiv = (todo) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";
    li.appendChild(div);
    div.appendChild(todo);
    return li;
}

const deleteList = (todoList,target) => {
    document.getElementById(todoList).removeChild(target);
}

const completeButton = document.createElement("button");
completeButton.innerText = "完了"
completeButton.addEventListener('click',() => {
    deleteList("incomplete-list",completeButton.parentNode.parentNode);
    const addP = completeButton.parentNode.firstElementChild;
    li = createListDiv(addP);
    document.getElementById("complete-list").appendChild(li);
    li.firstElementChild.appendChild(returnButton);
});

const deleteButton = document.createElement("button");
deleteButton.innerText = "削除"
deleteButton.addEventListener('click',() => {
    deleteList("incomplete-list",deleteButton.parentNode.parentNode);
});

const returnButton = document.createElement("button");
returnButton.innerText = "戻す"
returnButton.addEventListener('click',() => {
    deleteList("complete-list",returnButton.parentNode.parentNode);

    const p = returnButton.parentNode.firstElementChild;
    li = createListDiv(p);
    li.firstElementChild.appendChild(completeButton);
    li.firstElementChild.appendChild(deleteButton);

    document.getElementById("incomplete-list").appendChild(li);
})