function send(){
    CalculateAge();
    BirthdayChecker();
    PersonalDetails();
}

function  CalculateAge(){
    const  yearB=document.getElementById("yearB").value;
    const  yearD=document.getElementById("yearD").value;
    const  resultD=document.getElementById("resultD");

    const Age=yearD-yearB;
    document.getElementById("resultC").innerHTML=Age+" years old.";

    if(Age>=18){
        resultD.innerHTML="you are mature  enough to do anything you want,  but if it is necessary";
    }
    else{
        resultD.innerHTML="Just now, You are still young, you must obey each other"; 
    }
} 

  function  BirthdayChecker(){
    const  dayB=document.getElementById("dayB").value;
    const  monthB=document.getElementById("monthB").value;
    const  dayD=document.getElementById("dayD").value;
    const  monthD=document.getElementById("monthD").value;
    const  resultF=document.getElementById("resultF");

    if(dayB==dayD && monthB==monthD){
        resultF.innerHTML="Wow happy birthday too you!!!";
    }
    else{
        resultF.innerHTML="oooh!  your birthday isn't today.";
    }
  }

 function PersonalDetails(){
    const fname=document.getElementById("fname").value;
    const lname=document.getElementById("lname").value;
    const dayB=document.getElementById("dayB").value;
    const  yearB=document.getElementById("yearB").value;
    const  monthB=document.getElementById("monthB").value;

  
    const resultA=document.getElementById("resultA");
    const resultB=document.getElementById("resultB");
    const resultE=document.getElementById("resultE");

    resultA.innerText="firstname: "+fname;
    resultB.innerText="lastname: "+lname;

    resultE.innerHTML=dayB+"/"+monthB+"/"+yearB;
    
 }