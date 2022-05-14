const onClickAdd = () => {
    // インプットされた値を取得し、入力欄を空にする
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // 未完了リストに追加するリスト要素を作成
    const p = document.createElement("p");
    p.innerText = inputText;
    li = createListDiv(p);
    li.firstElementChild.appendChild(completeButton);
    li.firstElementChild.appendChild(deleteButton);

    // 未完了リストにTODOを追加
    document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById('add-button').addEventListener('click',() => onClickAdd());

// リストdivを作成
const createListDiv = (todo) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";
    li.appendChild(div);
    div.appendChild(todo);
    return li;
}

// 未完了リストから指定の要素を削除
const deleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
}

// 完了ボタン
const completeButton = document.createElement("button");
completeButton.innerText = "完了"
completeButton.addEventListener('click',() => {
    // 押された完了ボタンの親の親を削除
    deleteList(completeButton.parentNode.parentNode);
    // 完了リストに追加するリスト要素を作成
    const addP = completeButton.parentNode.firstElementChild;
    li = createListDiv(addP);
    // 完了リストにTODOを追加
    document.getElementById("complete-list").appendChild(li);
    // TODO:戻すボタンを追加
    // li.firstElementChild.appendChild(returnButton);
});

// 削除ボタン
const deleteButton = document.createElement("button");
deleteButton.innerText = "削除"
deleteButton.addEventListener('click',() => {
    deleteList(deleteButton.parentNode.parentNode);
});

// 戻すボタン
