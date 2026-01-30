function chekvowel(str){
    for (const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
        console.log("vowels:",char);
        
        }
        else{
            console.log("consonat:",char);
            
        }
   
    }
}
chekvowel("aeiousdnls");




 function chekpassword (name,password){
     if (name==="tajwar" || password==="1011" ){
         console.log("Verification Successfully");
         
     }
     else{
        console.log("Wrongs Name or Password Please Try again");
        
     }
     }
chekpassword("tajr","10111")