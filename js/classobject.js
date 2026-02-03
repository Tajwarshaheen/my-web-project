let Record = {
    FullName:"Tajwar Shaheen",
    RollNo:23,
    Marks:520,
    PrintMarks: ()=>{
        console.log("Marks = ",this.Marks);
        
    }
}

const employ ={
caltex(){
    console.log("cal tex is 10%");
    
}
}

const Yawar ={
    salary:600000,
}
Yawar.__proto__ = employ;