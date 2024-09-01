const input=document.querySelector(".input");
const btn=document.querySelector(".add");
const list=document.querySelector(".list");


btn.addEventListener("click",()=>{
if(input.value === "")
{alert("Empty")}
else{
    const todo=document.createElement("li");
todo.classList.add("block");
todo.innerHTML=input.value;
list.append(todo);
input.value="";

//delete
const delBtn=document.createElement("button")
delBtn.classList.add("delBtn");
delBtn.innerHTML="delete";
todo.append(delBtn)

delBtn.addEventListener("click",()=>{
list.removeChild(todo)

});

//edit
const editBtn=document.createElement("button");
editBtn.classList.add("editBtn")
editBtn.innerHTML="edit"
todo.append(editBtn)

editBtn.addEventListener("click",()=>{
    const newTodo=prompt("Edit todo;", input.value)
    todo.firstChild.textContent=newTodo
})
}
})