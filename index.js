
// let text=document.querySelector('#text')//we are creating selector
// let todo= document.querySelector('.todo')//we are creating selector

 
// let text1 = document.querySelector("#text")
// let todoapp = document.querySelector(".todoapp")

// text.addEventListener(
//     "keyup",
//     function(event){
//       if(event.key=="Enter")
//       {
//         console.log(this.value)//this refer to text
//         this.value=('')
//       }
//     }
// )

let text=document.querySelector('#text')
let todoapp=document.querySelector('.todo')

text.addEventListener(
  "keyup",
  function (event){
    if(event.key=="Enter" ){
    addtodo(this.value)
      this.value=('')
    }
  }
)
  const addtodo =(text) =>{
    const listitem =document.createElement("li");
    listitem.innerHTML=`
    ${text}
    <i class="fa-regular fa-circle-xmark"></i>`;
    listitem.querySelector("i").addEventListener(
      "click",
      function()
      {
        listitem.remove()
      }
    )
    todoapp.appendChild(listitem)
  }

 