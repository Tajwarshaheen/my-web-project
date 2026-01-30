// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id")
// console.log(id);

// let par = document.querySelector("p")
// console.log(par.setAttribute("id","tajwar"));



let css = document.querySelector("div");
 css.style.backgroundColor="orange"
 css.style.fontSize="26px"
 css.style.color="black"
 css.style.borderRadius="1px"

let btn1 = document.querySelector("#btn1");
btn1.onclick = (e) =>{
   // console.log(e);
   
 let body = document.querySelector("#body");

//  body.addEventListener("#btn1",()=>{
//    body.style.backgroundColor="green"
//  })
if(body.style.backgroundColor==="gray"){
   body.style.backgroundColor="white";
}
else{
   body.style.backgroundColor="gray";
}
}

function borderradius(){
    let div = document.querySelector("#btn1");
    div.style.padding="20px",div.style.backgroundColor="green",div.innerHTML="tajwar";
}

let modee = document.querySelector("#mode");
modee.onmouseover=()=>{
   body.style.backgroundColor="red"
}
  let btn3 = document.querySelector("#btn2");
  btn3.onmouseover = () =>{
   body.style.backgroundColor ="skyblue"
  }

// btn1.addEventListener("click",()=>{
// body.style.backgroundColor="green"
// })
btn1.ondblclick = () =>{
   body.style.backgroundColor ="yellow"
}
btn1.onmouseover = () =>{
   body.style.backgroundColor = "purple"
}
// let btn2 = document.querySelector("#btn1");
// btn2.ondblclick = () =>{
//    let body = document.querySelector("#body");
//    body.style.backgroundColor="white"
// }
//  let id = para.getAttribute("id");
//  console.log(id);
  let btn2 = document.querySelector("#btn2");
  btn2.ondblclick =()=>{
   btn2.style.backgroundColor="yellow"
  }

  let mode2 = document.querySelector("#mode");
  mode2.ondblclick =()=>{
mode.style.backgroundColor="pink";
  }  

let mode = document.querySelector("#mode");
mode.addEventListener("click",()=>{
let color = document.querySelector("#body");
color.style.backgroundColor ="orange"   

})
