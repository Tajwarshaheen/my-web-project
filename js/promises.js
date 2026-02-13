// let promise = new Promise ((resolve,reject)=>{
//     let num = prompt("Enter your Number")
//     if( num <= 50){
//         console.log("Yes  I am Win ");
        
// resolve("Yes I am  Selecten ")
//     }
//     else{
//         console.log("Yes  You are lose");
        
//         reject("Error Occured")
//     }
// })
// function getData(dataId,getnextData){
//     return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Data",dataId);
//         resolve("success")
//         if(getnextData){
//             getnextData();
//         }
        
//     }, 4000);
//     })
// }


// function getData( getid,getnextData){
//     console.log("processing..");
    
// setTimeout(() => {
//     console.log("your Id Data is ", getid);
    
// console.log("your Next Data is",getnextData);
     
// }, 2000);


// }


// let val = prompt("enter your order value")

// if (val =true ){
//     resolve("order Successed")
// }
// else{
//     reject("order cansel")
// }
// let promise = new promise((resolve,reject)=>{
// console.log("i am promise");
// reject("some error occured"
// )

// })



// function getData(dataId){
//     return  new Promise((resolve,reject)=>{
//         setTimeout(() => { 
//             if(dataId){
//             resolve("Your DataId is Resolve");
//             console.log("Your DataId is ", dataId);
//             }
//             else{
//                 reject("Your DataId is Rejected")
//             }
//         }, 3000);
//     })
  
// }





// const  GetPromise =()=>{
//     return  new Promise ((resolve,reject)=>{
//         console.log(" Promise Loading...");
//         resolve("Successfully");
//         // reject("Reject");
        
//      });
// };



// let promise = GetPromise ();
// Promise.then(()=>{
//     console.log("Promise Fullfullied");
    
// })
// Promise.cathc(()=>{
//     console.log("Promise Rejected");
    
// })



// function asyncFunction(){
//     return new Promise(( resolve,reject)=>{
//     setTimeout(() => {
        
//     }, 3000);
//     })
// }



// function  getData(dataId ,getnextData){
//  return new Promise (( resolve,reject)=>{
//     setTimeout(() => {
//           console.log("Your Data Id is ", dataId);
//           resolve("Successfully");
//           if(getnextData){
//             getnextData();
//           }
          
//     }, 6000);
//  })
// } 







// function asyncFunction1(){
//      return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Return Data 1");
//         resolve("Success");
//     }, 4000);       
//      });
// }



//  function asyncFunction2(){
//      return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Return Data 2");
//         resolve("Success");
//     }, 4000);       
//      });
// }

 
//  console.log("Fetching Data...1");
//   let  p1 = asyncFunction1();
//   p1.then(()=>{
//     console.log("Fetching Data 1 is Complete");
    
//  console.log("Fetching Data...2");
//    let p2 =asyncFunction2();
//    p2.then(()=>{
//     console.log("Fetching Data 2 is Complete");
    
//    })
//   });

  function getData(getid){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data  is ", getid);
            resolve("Success")
        }, 2000);
    })
  }

// promise chain **************
console.log("Getting Data 1...");

  getData(1).then(()=>{
console.log("Getting Data 2...");

    return getData(2).then(()=>{
console.log("Getting Data 3...");

        return getData(3).then(()=>{
console.log("Getting Data 4...");

            return getData(4).then(()=>{
                console.log("Successfully");
                
            })
        })
    })
  })