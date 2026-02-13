let array = [1,2,3,4]
let newarray = array.map((val)=>{
return val+1;

    
}
)
setTimeout((newarray) => {
console.log("New Array =",newarray);
    
}, 3000);