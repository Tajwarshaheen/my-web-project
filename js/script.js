
function dark(){
document.body.style.backgroundColor="gray";
document.body.getColor="red"
}
function light(){
document.body.style.backgroundColor="white";

}
 function shahjee(){
   let ddd= document.querySelector(".ddd");
 ddd.style.backgroundColor="red";
 ddd.style.fontSize = "30px"
 ddd.innerText = "Shahjee"
 }  
 let newBtn = document.createElement("button")
 newBtn.innerText = "use me"
 newBtn.style.backgroundColor="red"
 newBtn.style.borderRadius= "10px";
 newBtn.style.padding="20px";
 newBtn.style.textAlign="center"
 newBtn.style.color="#fff"
 newBtn.style.fontSize="30px"

 let p = document.querySelector("p");
 p.after(newBtn);



 let newHeading = document.createElement("h1");
 newHeading.innerHTML = "<i> i am new tag</i> "
 document.querySelector("body").prepend(newHeading)

p.remove()



// let div = document.querySelector(".div");
// console.dir(div);

 

// let  heading = document.querySelector("h1");

// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for(div of divs){
//    div.innerText = "tajwar"
//    idx++;
// }

// divs[0].innerText = "new text";
// divs[1].innerText = "new text";
// divs[2].innerText = "new text";



