// let arr = [1,2,3,4,8]
//   const output = arr.reduce((pre,val)=>{
//     return pre>val?pre:val;

//   })
  
//   console.log(output);
  


// let arr =[65,65,89,94,95,9,76]
// const output =arr.filter((val)=>{
//     return  val>90;
// })
// console.log(output);


let n = prompt("Enter your Number");

let are = [];
for(let  i =1; i<=n;i++){
are[i-1] =i;

}

console.log(are);

let  sum = are.reduce((val,index)=>{
    return  val+index;
})
console.log(sum);


// let t = prompt("Enter your number");
// let arr =[]

// for(let i=1;i<=t;i++){
//     arr[i-1]=i;
// }
// console.log(arr);

// let sum = arr.reduce((val,index)=>{
//     return val+index;
// })
//   console.log(sum);
  