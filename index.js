
let text=document.querySelector('#text')//we are creating selector
let todo= document.querySelector('.todo')//we are creating selector

text.addEventListener(
    "keyup",
    function(event){
        //geting data on element that 
// console.log(event.key)
if(event.key=="Enter")
{
    addTodo(this.value)//"this" represent(refer) the text
    this.value =''
}
}
)
 
const addTodo = (text) =>{
    const listitem = 
     document.createElement('li')
    listitem.innerHTML = 
      ${text}  
      <i class="fa-regular fa-circle-xmark"></i>
    ;
    todo.appendChild(listitem)
}