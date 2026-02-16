const URL  = "https://jsonplaceholder.typicode.com/posts"
const factpara = document.querySelector("#fact")
const getfetch = async () =>{
    console.log("Getting Data...");
    
    let response =  await fetch(URL);
console.log(response);
 let data = await response.json();
 factpara.innerText = data[65];
 
//   factpara.innerTEXT = data[4];
 
}



