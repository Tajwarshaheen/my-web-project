function getData(getid,getnextdata){
   setTimeout(() => {
     console.log("Data",getid);
  if(getnextdata){
    getnextdata();
  }     
     
   }, 2000);
}

// getData(1);
// setTimeout(() => {
//     getData(2);
// }, 2000);

// setTimeout(() => {
//     getData(3);
// }, 4000);


getData(1,()=>
    
{
    console.log("Data 2 is loading...");
    
    getData(2,()=>{
    console.log("Data 3 is loading... ");

        getData(3,()=>{
    console.log("Data 4 is loading... ");

            getData(4,()=>{
                console.log("Finish");
                
            });
        })
    });
}
)