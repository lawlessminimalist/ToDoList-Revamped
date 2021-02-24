
let html;

function todoItem(title,description,duedate,priority){
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
}

function toDoList(){
    this.todoList = ["test","x"];
    this.getList = function(){
        return this.todoList;
    }
    this.appendItem = function(index,todo){
        console.log(todo.title);

    }
    this.deleteItem = function(index){
        this.todoList.splice(index,1);
    }
}


function arraytoContainer(array){
    var perrow = 5;
    let temp = array.getList;
    html = "<table>";

    for (var i = 0; i < todoList.length; i++) {

        //if at the header
      if(i==0){
          html+=`<tr><th>Title</th><th>Author</th><th>Pages</th><th>Read</th><th>Edit</th></tr>`
      }
      
      html+= `<tr>`
          var cell = temp[i].title;
          html += `<td style="text-wrap:normal;word-wrap:break-word">${cell}</td>`
           cell = temp[i].description;
          html += `<td style="text-wrap:normal;word-wrap:break-word">${cell}</td>`
           cell = temp[i].duedate;
          html += `<td style="text-wrap:normal;word-wrap:break-word">${cell}</td>`
           cell = temp[i].priority;
          html += `<td style="text-wrap:normal;word-wrap:break-word">${cell}</td>`
      
          //add button to delete the row and change read status from the libray//
          html += `<td><button onClick="change_status(${i})">&#9998</button></td>`
          html += `<td><button onClick="removeBook(${i})">&#128465</button></td>`
          
      html+= `</tr>`
      }
      
      document.getElementById("todoList").innerHTML = html;
      console.log(html);
      

}


function updateDOM(){

}

let todolist = new toDoList();
let e = new todoItem("name","task description","03/12/1999","H");
console.log(todolist);
todolist.appendItem(ref e,todolist.length);
console.log(todolist.getList())

arraytoContainer(todolist);
