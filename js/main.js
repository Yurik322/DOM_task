function addTable() {
  let body = document.querySelector("body"),
    numRows = document.getElementById("rows"),
    numColumns = document.getElementById("columns"),
    rows = numRows.value,
    columns = numColumns.value,
    tr = "",
    td = "",
    firstTable = document.querySelector("table");

  if(columns==null || rows==null || columns<=0 || rows<=0) {
    alert("Wrong Input");
    return
  }

  let table = document.createElement("table");
  table.setAttribute("id", "field");
  let text;
  for (let i = 0; i < rows; i++) {
    tr = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      td = document.createElement("td");
      text = document.createTextNode((i + 1) + " " + (j + 1));
      td.appendChild(text);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  if (firstTable == null) {
    return body.appendChild(table);
  }
  else {
    let newTable = body.appendChild(table);
    return document.body.replaceChild(newTable, firstTable);
  }
}

let button = document.getElementById('create');
button.onclick = () => {
  addTable()
  let table = document.getElementById('field');
  table.addEventListener('click', function(e){
    let target = e.target;

    if(target.tagName === 'TD'){
      target.classList.toggle('green');
    }
  }, false);
}
