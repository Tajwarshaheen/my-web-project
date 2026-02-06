function getData(getid,getnextdata){
   setTimeout(() => {
     console.log("Data",getid);
    getnextdata();
     
     
   }, 2000);
}

// getData(1);
// setTimeout(() => {
//     getData(2);
// }, 2000);

// setTimeout(() => {
//     getData(3);
// }, 4000);


getData(2,()=>
{
    getData(4)
}
)