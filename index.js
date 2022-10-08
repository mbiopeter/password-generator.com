const passwordEl=document.getElementById("copy");
const lenghtEl=document.getElementById("len");
const upperEl=document.getElementById("upper");
const lowerEl=document.getElementById("lower");
const numberEl=document.getElementById("number");
const symmbolEl=document.getElementById("symbol");
const generateEl=document.getElementById("generate");

const upperCase=["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCase=["a","b","c","d","e","f","g","h","i","j",
"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const number=[1,2,3,4,5,6,7,8,9,0];
const symbols=["!","@","#","$","%","*"];

let upperIndex=Math.floor(Math.random()*26);
let secupperIndex=Math.floor(Math.random()*26);
let thirdupperIndex=Math.floor(Math.random()*26);
let fourthupperIndex=Math.floor(Math.random()*26);
let fithupperIndex=Math.floor(Math.random()*26);
let sxthupperIndex=Math.floor(Math.random()*26);
let sevethupperIndex=Math.floor(Math.random()*26);
let eightupperIndex=Math.floor(Math.random()*26);

let lowerIndex=Math.floor(Math.random()*26);
let seclowerIndex=Math.floor(Math.random()*26);
let thirdlowerIndex=Math.floor(Math.random()*26);
let fourthlowerIndex=Math.floor(Math.random()*26);
let fithlowerIndex=Math.floor(Math.random()*26);
let sixthlowerIndex=Math.floor(Math.random()*26);
let seventhlowerIndex=Math.floor(Math.random()*26);
let eighthlowerIndex=Math.floor(Math.random()*26);


let numbersIndex=Math.floor(Math.random()*10);
let secnumbersIndex=Math.floor(Math.random()*10);
let thirdnumbersIndex=Math.floor(Math.random()*10);
let fourthnumbersIndex=Math.floor(Math.random()*10);
let fithnumbersIndex=Math.floor(Math.random()*10);
let sixthnumbersIndex=Math.floor(Math.random()*10);
let seventhnumbersIndex=Math.floor(Math.random()*10);
let eighthnumbersIndex=Math.floor(Math.random()*10);

let symbolsIndex=Math.floor(Math.random()*6);
let secsymbolsIndex=Math.floor(Math.random()*6);
let thirdsymbolsIndex=Math.floor(Math.random()*6);
let fourthsymbolsIndex=Math.floor(Math.random()*6);
let fithsymbolsIndex=Math.floor(Math.random()*6);
let sixthsymbolsIndex=Math.floor(Math.random()*6);
let seventhsymbolsIndex=Math.floor(Math.random()*6);
let eighthsymbolsIndex=Math.floor(Math.random()*6);

let oneIndex=Math.floor(Math.random()*26);
let twoIndex=Math.floor(Math.random()*26);
let threeIndex=Math.floor(Math.random()*26);
let fourIndex=Math.floor(Math.random()*26);
let fiveIndex=Math.floor(Math.random()*26);
let sixIndex=Math.floor(Math.random()*26);
let sevenIndex=Math.floor(Math.random()*26);
let eightIndex=Math.floor(Math.random()*26);




function generate(){

    if(upperEl.checked){
        passwordEl.textContent=upperCase[upperIndex];
        if(upperEl.checked && lowerEl.checked && numberEl.checked && symmbolEl.checked&& lenghtEl.value ==4){
            passwordEl.textContent+=symbols[thirdsymbolsIndex];
            passwordEl.textContent+=number[thirdnumbersIndex];
            passwordEl.textContent+=lowerCase[sixthlowerIndex];
        }
        else if(upperEl.checked && lowerEl.checked && numberEl.checked && symmbolEl.checked&& lenghtEl.value ==5){
            passwordEl.textContent+=symbols[thirdsymbolsIndex];
            passwordEl.textContent+=number[thirdnumbersIndex];
            passwordEl.textContent+=upperCase[secupperIndex];
            passwordEl.textContent+=lowerCase[sixthlowerIndex];
        }
        else if(upperEl.checked && lowerEl.checked && numberEl.checked && symmbolEl.checked&& lenghtEl.value ==6){
            passwordEl.textContent+=symbols[thirdsymbolsIndex];
            passwordEl.textContent+=number[thirdnumbersIndex];
            passwordEl.textContent+=lowerCase[seclowerIndex];
            passwordEl.textContent+=upperCase[secupperIndex];
            passwordEl.textContent+=lowerCase[sixthlowerIndex];
        }
        else if(upperEl.checked && lowerEl.checked && numberEl.checked && symmbolEl.checked&& lenghtEl.value ==7){
            passwordEl.textContent+=symbols[thirdsymbolsIndex];
            passwordEl.textContent+=number[thirdnumbersIndex];
            passwordEl.textContent+=lowerCase[seclowerIndex];
            passwordEl.textContent+=upperCase[secupperIndex];
            passwordEl.textContent+=lowerCase[sixthlowerIndex];
            passwordEl.textContent+=symbols[secsymbolsIndex];
        }
       else if(upperEl.checked && lowerEl.checked && numberEl.checked && symmbolEl.checked&& lenghtEl.value ==8){
            passwordEl.textContent+=symbols[thirdsymbolsIndex];
            passwordEl.textContent+=upperCase[fithupperIndex];
            passwordEl.textContent+=number[thirdnumbersIndex];
            passwordEl.textContent+=lowerCase[seclowerIndex];
            passwordEl.textContent+=upperCase[secupperIndex];
            passwordEl.textContent+=lowerCase[sixthlowerIndex];
            passwordEl.textContent+=symbols[secsymbolsIndex];
        }



        else if(upperEl.checked && lowerEl.checked && numberEl.checked && lenghtEl.value ==4){
            passwordEl.textContent+=upperCase[secupperIndex];
            passwordEl.textContent+=number[thirdnumbersIndex];
            passwordEl.textContent+=lowerCase[sixthlowerIndex];
           
        }
        else if(upperEl.checked && lowerEl.checked && numberEl.checked && lenghtEl.value ==5){
            passwordEl.textContent+=lowerCase[seclowerIndex];
            passwordEl.textContent+=upperCase[secupperIndex];
            passwordEl.textContent+=number[thirdnumbersIndex];
            passwordEl.textContent+=lowerCase[sixthlowerIndex];
        }
        else if(upperEl.checked && lowerEl.checked && numberEl.checked && lenghtEl.value  ==6){
            passwordEl.textContent+=lowerCase[seclowerIndex];
            passwordEl.textContent+=number[secnumbersIndex];
            passwordEl.textContent+=upperCase[secupperIndex];
            passwordEl.textContent+=number[thirdnumbersIndex];
            passwordEl.textContent+=lowerCase[sixthlowerIndex];
        }
        else if(upperEl.checked && lowerEl.checked && numberEl.checked  && lenghtEl.value  ==7){
            passwordEl.textContent+=lowerCase[seclowerIndex];
            passwordEl.textContent+=number[secnumbersIndex];
            passwordEl.textContent+=upperCase[secupperIndex];
            passwordEl.textContent+=number[thirdnumbersIndex];
            passwordEl.textContent+=lowerCase[sixthlowerIndex];
            passwordEl.textContent+=number[seventhnumbersIndex];
        }
        else if(upperEl.checked && lowerEl.checked && numberEl.checked && lenghtEl.value ==8){
            passwordEl.textContent+=lowerCase[seclowerIndex];
            passwordEl.textContent+=number[secnumbersIndex];
            passwordEl.textContent+=upperCase[secupperIndex];
            passwordEl.textContent+=number[thirdnumbersIndex];
            passwordEl.textContent+=lowerCase[sixthlowerIndex];
            passwordEl.textContent+=number[seventhnumbersIndex];
            passwordEl.textContent+=upperCase[thirdupperIndex];
    
        }
    
        else if(upperEl.checked && numberEl.checked && symmbolEl.checked && lenghtEl.value==4 ){
            passwordEl.textContent+=number[seventhnumbersIndex];
            passwordEl.textContent+=symbols[fithnumbersIndex];
            passwordEl.textContent+=upperCase[thirdupperIndex];
        }
        else if(upperEl.checked && numberEl.checked && symmbolEl.checked && lenghtEl.value==5 ){
            passwordEl.textContent+=number[seventhnumbersIndex];
            passwordEl.textContent+=symbols[fithnumbersIndex];
            passwordEl.textContent+=upperCase[thirdupperIndex];
            passwordEl.textContent+=number[secnumbersIndex];
        }
        else if(upperEl.checked && numberEl.checked && symmbolEl.checked && lenghtEl.value==6 ){
            passwordEl.textContent+=number[seventhnumbersIndex];
            passwordEl.textContent+=symbols[fithnumbersIndex];
            passwordEl.textContent+=upperCase[thirdupperIndex];
            passwordEl.textContent+=number[secnumbersIndex];
            passwordEl.textContent+=symbols[secnumbersIndex];
        }
        else if(upperEl.checked && numberEl.checked && symmbolEl.checked && lenghtEl.value==7 ){
            passwordEl.textContent+=number[seventhnumbersIndex];
            passwordEl.textContent+=symbols[fithnumbersIndex];
            passwordEl.textContent+=upperCase[thirdupperIndex];
            passwordEl.textContent+=number[secnumbersIndex];
            passwordEl.textContent+=symbols[secnumbersIndex];
            passwordEl.textContent+=upperCase[secupperIndex];
        }
        else if(upperEl.checked && numberEl.checked && symmbolEl.checked && lenghtEl.value==8){
            passwordEl.textContent+=number[seventhnumbersIndex];
            passwordEl.textContent+=symbols[fithnumbersIndex];
            passwordEl.textContent+=upperCase[thirdupperIndex];
            passwordEl.textContent+=number[secnumbersIndex];
            passwordEl.textContent+=symbols[secnumbersIndex];
            passwordEl.textContent+=upperCase[secupperIndex];
            passwordEl.textContent+=number[sixthnumbersIndex];
        }
    else if(upperEl.checked && lowerEl.checked && symmbolEl.checked && lenghtEl.value==4){
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=lowerCase[thirdlowerIndex];
        passwordEl.textContent+=symbols[fithsymbolsIndex];
    }
    else if(upperEl.checked && lowerEl.checked && symmbolEl.checked && lenghtEl.value==5){
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=lowerCase[thirdlowerIndex];
        passwordEl.textContent+=symbols[fithsymbolsIndex]; 
        passwordEl.textContent+=upperCase[secupperIndex];
    }
    else if(upperEl.checked && lowerEl.checked && symmbolEl.checked && lenghtEl.value==6){
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=lowerCase[thirdlowerIndex];
        passwordEl.textContent+=symbols[fithsymbolsIndex]; 
        passwordEl.textContent+=lowerCase[seclowerIndex];
        passwordEl.textContent+=upperCase[secupperIndex];  
    }
    else if(upperEl.checked && lowerEl.checked && symmbolEl.checked && lenghtEl.value==7){
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=lowerCase[thirdlowerIndex];
        passwordEl.textContent+=symbols[fithsymbolsIndex]; 
        passwordEl.textContent+=lowerCase[seclowerIndex];
        passwordEl.textContent+=upperCase[secupperIndex];  
        passwordEl.textContent+=symbols[secsymbolsIndex];
    }
    else if(upperEl.checked && lowerEl.checked && symmbolEl.checked && lenghtEl.value==8){
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=lowerCase[thirdlowerIndex];
        passwordEl.textContent+=symbols[fithsymbolsIndex]; 
        passwordEl.textContent+=lowerCase[seclowerIndex];
        passwordEl.textContent+=upperCase[secupperIndex];  
        passwordEl.textContent+=symbols[secsymbolsIndex]; 
        passwordEl.textContent+=lowerCase[seventhlowerIndex];
    }
    



    else if(lowerEl.checked && upperEl.checked && lenghtEl.value==4){
        passwordEl.textContent+=lowerCase[thirdlowerIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=lowerCase[fourthlowerIndex];
    }
    else if(numberEl.checked && upperEl.checked && lenghtEl.value==4){
        passwordEl.textContent+=number[thirdnumbersIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=number[fourthnumbersIndex];
    }
    else if(symmbolEl.checked && upperEl.checked && lenghtEl.value==4){
        passwordEl.textContent+=symbols[thirdsymbolsIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=symbols[fourthsymbolsIndex];
    }
    else if(lowerEl.checked && upperEl.checked && lenghtEl.value==5){
        passwordEl.textContent+=lowerCase[thirdlowerIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=lowerCase[fourthlowerIndex];
        passwordEl.textContent+=lowerCase[sixthlowerIndex];
    }
    else if(numberEl.checked && upperEl.checked && lenghtEl.value==5){
        passwordEl.textContent+=number[thirdnumbersIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=upperCase[sixthlowerIndex];
        passwordEl.textContent+=number[fourthnumbersIndex];
    }
    else if(symmbolEl.checked && upperEl.checked && lenghtEl.value==5){
        passwordEl.textContent+=upperCase[sixthlowerIndex];
        passwordEl.textContent+=symbols[thirdsymbolsIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=symbols[fourthsymbolsIndex];
    }
    else if(lowerEl.checked && upperEl.checked && lenghtEl.value==5){
        passwordEl.textContent+=lowerCase[thirdlowerIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=lowerCase[fourthlowerIndex];
        passwordEl.textContent+=lowerCase[sixthlowerIndex];
    }

    else if(lowerEl.checked && upperEl.checked && lenghtEl.value==6){
        passwordEl.textContent+=lowerCase[thirdlowerIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=lowerCase[fourthlowerIndex];
        passwordEl.textContent+=upperCase[fithupperIndex];
        passwordEl.textContent+=lowerCase[sixthlowerIndex];
    }
    else if(numberEl.checked && upperEl.checked && lenghtEl.value==6){
        passwordEl.textContent+=number[thirdnumbersIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=number[fithnumbersIndex];
        passwordEl.textContent+=upperCase[sixthlowerIndex];
        passwordEl.textContent+=number[fourthnumbersIndex];
    }
    else if(symmbolEl.checked && upperEl.checked && lenghtEl.value==6){
        passwordEl.textContent+=symbols[fithsymbolsIndex];
        passwordEl.textContent+=upperCase[sixthlowerIndex];
        passwordEl.textContent+=symbols[thirdsymbolsIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=symbols[fourthsymbolsIndex];
    }
    else if(lowerEl.checked && upperEl.checked && lenghtEl.value==6){
        passwordEl.textContent+=lowerCase[thirdlowerIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=lowerCase[fourthlowerIndex];
        passwordEl.textContent+=upperCase[fithupperIndex];
        passwordEl.textContent+=lowerCase[sixthlowerIndex];
    }


    else if(lowerEl.checked && upperEl.checked && lenghtEl.value==7){
        passwordEl.textContent+=lowerCase[thirdlowerIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=lowerCase[fourthlowerIndex];
        passwordEl.textContent+=upperCase[fithupperIndex];
        passwordEl.textContent+=lowerCase[sixthlowerIndex];
        passwordEl.textContent+=upperCase[secupperIndex];
    }
    else if(numberEl.checked && upperEl.checked && lenghtEl.value==7){
        passwordEl.textContent+=number[thirdnumbersIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=number[fithnumbersIndex];
        passwordEl.textContent+=upperCase[sixthlowerIndex];
        passwordEl.textContent+=number[fourthnumbersIndex];
        passwordEl.textContent+=upperCase[secupperIndex];
    }
    else if(symmbolEl.checked && upperEl.checked && lenghtEl.value==7){
        passwordEl.textContent+=symbols[fithsymbolsIndex];
        passwordEl.textContent+=upperCase[sixthlowerIndex];
        passwordEl.textContent+=symbols[thirdsymbolsIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=symbols[fourthsymbolsIndex];
        passwordEl.textContent+=upperCase[secupperIndex];
    }
    else if(lowerEl.checked && upperEl.checked && lenghtEl.value==7){
        passwordEl.textContent+=lowerCase[thirdlowerIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=lowerCase[fourthlowerIndex];
        passwordEl.textContent+=upperCase[fithupperIndex];
        passwordEl.textContent+=lowerCase[sixthlowerIndex];
        passwordEl.textContent+=upperCase[secupperIndex];
    }


    else if(lowerEl.checked && upperEl.checked && lenghtEl.value==8){
        passwordEl.textContent+=lowerCase[thirdlowerIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=lowerCase[fourthlowerIndex];
        passwordEl.textContent+=upperCase[fithupperIndex];
        passwordEl.textContent+=lowerCase[sixthlowerIndex];
        passwordEl.textContent+=upperCase[secupperIndex];
        passwordEl.textContent+=lowerCase[seclowerIndex];
    }
    else if(numberEl.checked && upperEl.checked && lenghtEl.value==8 ){
        passwordEl.textContent+=number[thirdnumbersIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=number[fithnumbersIndex];
        passwordEl.textContent+=upperCase[sixthlowerIndex];
        passwordEl.textContent+=number[fourthnumbersIndex];
        passwordEl.textContent+=upperCase[secupperIndex];
        passwordEl.textContent+=lowerCase[seclowerIndex];
    }
    else if(symmbolEl.checked && upperEl.checked && lenghtEl.value==8){
        passwordEl.textContent+=symbols[fithsymbolsIndex];
        passwordEl.textContent+=upperCase[sixthlowerIndex];
        passwordEl.textContent+=symbols[thirdsymbolsIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=symbols[fourthsymbolsIndex];
        passwordEl.textContent+=upperCase[secupperIndex];
        passwordEl.textContent+=lowerCase[seclowerIndex];
    }
    else if(lowerEl.checked && upperEl.checked && lenghtEl.value==8){
        passwordEl.textContent+=lowerCase[thirdlowerIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=lowerCase[fourthlowerIndex];
        passwordEl.textContent+=upperCase[fithupperIndex];
        passwordEl.textContent+=lowerCase[sixthlowerIndex];
        passwordEl.textContent+=upperCase[secupperIndex];
        passwordEl.textContent+=lowerCase[seclowerIndex];
    }


    
    else if(upperEl.checked && lenghtEl.value==4 ){
        passwordEl.textContent+=upperCase[secupperIndex]
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=upperCase[fourthupperIndex];
    }
    else if(upperEl.checked && lenghtEl.value==5 ){
        passwordEl.textContent+=upperCase[secupperIndex]
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=upperCase[fourthupperIndex];
        passwordEl.textContent+=upperCase[fithupperIndex];
    }
    else if(upperEl.checked && lenghtEl.value==6 ){
        passwordEl.textContent+=upperCase[secupperIndex]
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=upperCase[fourthupperIndex];
        passwordEl.textContent+=upperCase[fithupperIndex];
        passwordEl.textContent+=upperCase[sxthupperIndex];
    }
    else if(upperEl.checked && lenghtEl.value==7 ){
        passwordEl.textContent+=upperCase[secupperIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=upperCase[fourthupperIndex];
        passwordEl.textContent+=upperCase[fithupperIndex];
        passwordEl.textContent+=upperCase[sxthupperIndex];
        passwordEl.textContent+=upperCase[sevethupperIndex];
    }
    else if(upperEl.checked && lenghtEl.value==8 ){
        passwordEl.textContent+=upperCase[secupperIndex];
        passwordEl.textContent+=upperCase[thirdupperIndex];
        passwordEl.textContent+=upperCase[fourthupperIndex];
        passwordEl.textContent+=upperCase[fithupperIndex];
        passwordEl.textContent+=upperCase[sxthupperIndex];
        passwordEl.textContent+=upperCase[sevethupperIndex];
        passwordEl.textContent+=upperCase[eightupperIndex];
    }
    }


 else if(lowerEl.checked){
    passwordEl.textContent=lowerCase[lowerIndex];

    if(upperEl.checked && lowerEl.checked && symmbolEl.checked && lenghtEl.value==4){
    passwordEl.textContent+=symbols[secnumbersIndex];
    passwordEl.textContent+=upperCase[secupperIndex];
    passwordEl.textContent+=lowerCase[thirdlowerIndex];
    }
    else if(upperEl.checked && lowerEl.checked && symmbolEl.checked && lenghtEl.value==5){
    passwordEl.textContent+=symbols[secnumbersIndex];
    passwordEl.textContent+=upperCase[secupperIndex];
    passwordEl.textContent+=lowerCase[thirdlowerIndex];
    passwordEl.textContent+=symbols[seventhnumbersIndex];
    }
else if(upperEl.checked && lowerEl.checked && symmbolEl.checked && lenghtEl.value==6){
    passwordEl.textContent+=symbols[secnumbersIndex];
    passwordEl.textContent+=upperCase[secupperIndex];
    passwordEl.textContent+=lowerCase[thirdlowerIndex];
    passwordEl.textContent+=symbols[seventhnumbersIndex];   
    passwordEl.textContent+=upperCase[fithupperIndex];
    }
else if(upperEl.checked && lowerEl.checked && symmbolEl.checked && lenghtEl.value==7){
    passwordEl.textContent+=symbols[secnumbersIndex];
    passwordEl.textContent+=upperCase[secupperIndex];
    passwordEl.textContent+=lowerCase[thirdlowerIndex];
    passwordEl.textContent+=symbols[seventhnumbersIndex];   
    passwordEl.textContent+=upperCase[fithupperIndex];
    passwordEl.textContent+=lowerCase[seclowerIndex];
    }
else if(upperEl.checked && lowerEl.checked && symmbolEl.checked && lenghtEl.value==8){
    passwordEl.textContent+=symbols[secnumbersIndex];
    passwordEl.textContent+=upperCase[secupperIndex];
    passwordEl.textContent+=lowerCase[thirdlowerIndex];
    passwordEl.textContent+=symbols[seventhnumbersIndex];   
    passwordEl.textContent+=upperCase[fithupperIndex];
    passwordEl.textContent+=lowerCase[seclowerIndex];      
    passwordEl.textContent+=upperCase[thirdupperIndex]; 
    }


else if(lowerEl.checked && numberEl.checked && symmbolEl.checked && lenghtEl.value==4){
    passwordEl.textContent+=number[secnumbersIndex];
    passwordEl.textContent+=symbols[secsymbolsIndex];
    passwordEl.textContent+=lowerCase[seclowerIndex];
}
else if(lowerEl.checked && numberEl.checked && symmbolEl.checked && lenghtEl.value==5){
    passwordEl.textContent+=number[secnumbersIndex];
    passwordEl.textContent+=symbols[secsymbolsIndex];
    passwordEl.textContent+=lowerCase[seclowerIndex];
    passwordEl.textContent+=number[seventhnumbersIndex];
}
else if(lowerEl.checked && numberEl.checked && symmbolEl.checked && lenghtEl.value==6){
    passwordEl.textContent+=number[secnumbersIndex];
    passwordEl.textContent+=symbols[secsymbolsIndex];
    passwordEl.textContent+=lowerCase[seclowerIndex];
    passwordEl.textContent+=number[seventhnumbersIndex];
    passwordEl.textContent+=symbols[seventhsymbolsIndex];
}
else if(lowerEl.checked && numberEl.checked && symmbolEl.checked && lenghtEl.value==7){
    passwordEl.textContent+=number[secnumbersIndex];
    passwordEl.textContent+=symbols[secsymbolsIndex];
    passwordEl.textContent+=lowerCase[seclowerIndex];
    passwordEl.textContent+=number[seventhnumbersIndex];
    passwordEl.textContent+=symbols[seventhsymbolsIndex];
    passwordEl.textContent+=lowerCase[seventhlowerIndex];
}
else if(lowerEl.checked && numberEl.checked && symmbolEl.checked && lenghtEl.value==8){
    passwordEl.textContent+=number[secnumbersIndex];
    passwordEl.textContent+=symbols[secsymbolsIndex];
    passwordEl.textContent+=lowerCase[seclowerIndex];
    passwordEl.textContent+=number[seventhnumbersIndex];
    passwordEl.textContent+=symbols[seventhsymbolsIndex];
    passwordEl.textContent+=lowerCase[seventhlowerIndex];
    passwordEl.textContent+=number[sixthnumbersIndex];
}



else if(lowerEl.checked && numberEl.checked && lenghtEl.value==4){
    passwordEl.textContent+=number[thirdnumbersIndex];
    passwordEl.textContent+=lowerCase[thirdlowerIndex];
    passwordEl.textContent+=number[fourthnumbersIndex];
        }
else  if(lowerEl.checked && symmbolEl.checked && lenghtEl.value==4){
    passwordEl.textContent+=symbols[thirdsymbolsIndex];
    passwordEl.textContent+=lowerCase[thirdlowerIndex];
    passwordEl.textContent+=symbols[fourthsymbolsIndex];
    }

else if(lowerEl.checked && numberEl.checked && lenghtEl.value==5){
        passwordEl.textContent+=number[fithnumbersIndex];
        passwordEl.textContent+=number[thirdnumbersIndex];
        passwordEl.textContent+=lowerCase[thirdlowerIndex];
        passwordEl.textContent+=number[fourthnumbersIndex];
        }
else  if(lowerEl.checked && symmbolEl.checked && lenghtEl.value==5){
        passwordEl.textContent+=symbols[thirdsymbolsIndex];
        passwordEl.textContent+=lowerCase[thirdlowerIndex];
        passwordEl.textContent+=symbols[fithnumbersIndex];
        passwordEl.textContent+=symbols[fourthsymbolsIndex];
}
else if(lowerEl.checked && numberEl.checked && lenghtEl.value==6){
    passwordEl.textContent+=number[fithnumbersIndex];
    passwordEl.textContent+=lowerCase[fithlowerIndex];
    passwordEl.textContent+=number[thirdnumbersIndex];
    passwordEl.textContent+=lowerCase[thirdlowerIndex];
    passwordEl.textContent+=number[fourthnumbersIndex];
    }
else  if(lowerEl.checked && symmbolEl.checked && lenghtEl.value==6){
    passwordEl.textContent+=symbols[thirdsymbolsIndex];
    passwordEl.textContent+=lowerCase[thirdlowerIndex];
    passwordEl.textContent+=symbols[fithnumbersIndex];
    passwordEl.textContent+=lowerCase[seclowerIndex];
    passwordEl.textContent+=symbols[fourthsymbolsIndex];
}


else if(lowerEl.checked && numberEl.checked && lenghtEl.value==7){
    passwordEl.textContent+=number[fithnumbersIndex];
    passwordEl.textContent+=lowerCase[fithlowerIndex];
    passwordEl.textContent+=number[thirdnumbersIndex];
    passwordEl.textContent+=lowerCase[thirdlowerIndex];
    passwordEl.textContent+=number[fourthnumbersIndex];
    passwordEl.textContent+=lowerCase[seclowerIndex];
    }
else  if(lowerEl.checked && symmbolEl.checked && lenghtEl.value==7){
    passwordEl.textContent+=symbols[thirdsymbolsIndex];
    passwordEl.textContent+=lowerCase[thirdlowerIndex];
    passwordEl.textContent+=symbols[fithsymbolsIndex];
    passwordEl.textContent+=lowerCase[seclowerIndex];
    passwordEl.textContent+=symbols[fourthsymbolsIndex];
    passwordEl.textContent+=lowerCase[seclowerIndex];
}

else if(lowerEl.checked && numberEl.checked && lenghtEl.value==8){
    passwordEl.textContent+=number[fithnumbersIndex];
    passwordEl.textContent+=lowerCase[fithlowerIndex];
    passwordEl.textContent+=number[thirdnumbersIndex];
    passwordEl.textContent+=lowerCase[thirdlowerIndex];
    passwordEl.textContent+=number[fourthnumbersIndex];
    passwordEl.textContent+=lowerCase[seclowerIndex];
    passwordEl.textContent+=number[secnumbersIndex];
    }
else  if(lowerEl.checked && symmbolEl.checked && lenghtEl.value==8){
    passwordEl.textContent+=symbols[thirdsymbolsIndex];
    passwordEl.textContent+=lowerCase[thirdlowerIndex];
    passwordEl.textContent+=symbols[fithnumbersIndex];
    passwordEl.textContent+=lowerCase[seclowerIndex];
    passwordEl.textContent+=symbols[fourthsymbolsIndex];
    passwordEl.textContent+=lowerCase[seclowerIndex];
    passwordEl.textContent+=number[secnumbersIndex];
}



else if(lowerEl.checked && lenghtEl.value==4 ){
    passwordEl.textContent+=lowerCase[seclowerIndex];
    passwordEl.textContent+=lowerCase[thirdlowerIndex];
    passwordEl.textContent+=lowerCase[fourthlowerIndex];
}
else if(lowerEl.checked && lenghtEl.value==5){
    passwordEl.textContent+=lowerCase[seclowerIndex];
    passwordEl.textContent+=lowerCase[thirdlowerIndex];
    passwordEl.textContent+=lowerCase[fourthlowerIndex];
    passwordEl.textContent+=lowerCase[fourthlowerIndex];
}
else if(lowerEl.checked && lenghtEl.value==6){
    passwordEl.textContent+=lowerCase[seclowerIndex];
    passwordEl.textContent+=lowerCase[thirdlowerIndex];
    passwordEl.textContent+=lowerCase[fourthlowerIndex];
    passwordEl.textContent+=lowerCase[fourthlowerIndex];
    passwordEl.textContent+=lowerCase[fithlowerIndex];
}
else if(lowerEl.checked && lenghtEl.value==7){
    passwordEl.textContent+=lowerCase[seclowerIndex];
    passwordEl.textContent+=lowerCase[thirdlowerIndex];
    passwordEl.textContent+=lowerCase[fourthlowerIndex];
    passwordEl.textContent+=lowerCase[fourthlowerIndex];
    passwordEl.textContent+=lowerCase[fithlowerIndex];
    passwordEl.textContent+=lowerCase[sixthlowerIndex]
}
else if(lowerEl.checked && lenghtEl.value==8){
    passwordEl.textContent+=lowerCase[seclowerIndex];
    passwordEl.textContent+=lowerCase[thirdlowerIndex];
    passwordEl.textContent+=lowerCase[fourthlowerIndex];
    passwordEl.textContent+=lowerCase[fourthlowerIndex];
    passwordEl.textContent+=lowerCase[fithlowerIndex];
    passwordEl.textContent+=lowerCase[sixthlowerIndex]
    passwordEl.textContent+=lowerCase[eighthlowerIndex]
}
}





else if(numberEl.checked){
    passwordEl.textContent=number[numbersIndex];

if(numberEl.checked && symmbolEl.checked && lenghtEl.value==4){
    passwordEl.textContent+=symbols[secsymbolsIndex];
    passwordEl.textContent+=number[thirdnumbersIndex];
    passwordEl.textContent+=symbols[thirdsymbolsIndex];
    }
else if(numberEl.checked && symmbolEl.checked && lenghtEl.value==5){
    passwordEl.textContent+=symbols[seventhsymbolsIndex];
    passwordEl.textContent+=symbols[secsymbolsIndex];
    passwordEl.textContent+=number[thirdnumbersIndex];
    passwordEl.textContent+=symbols[thirdsymbolsIndex];
    }
 else if(numberEl.checked && symmbolEl.checked && lenghtEl.value==6){
    passwordEl.textContent+=symbols[seventhsymbolsIndex];
    passwordEl.textContent+=number[fithnumbersIndex];
    passwordEl.textContent+=symbols[secsymbolsIndex];
    passwordEl.textContent+=number[thirdnumbersIndex];
    passwordEl.textContent+=symbols[thirdsymbolsIndex];
        }
else if(numberEl.checked && symmbolEl.checked && lenghtEl.value==7){
    passwordEl.textContent+=symbols[seventhsymbolsIndex];
    passwordEl.textContent+=number[fithnumbersIndex];
    passwordEl.textContent+=symbols[secsymbolsIndex];
    passwordEl.textContent+=number[thirdnumbersIndex];
    passwordEl.textContent+=symbols[thirdsymbolsIndex];
    passwordEl.textContent+=number[secnumbersIndex];
    }
else if(numberEl.checked && lenghtEl.value==4 ){
    passwordEl.textContent+=number[secnumbersIndex];
    passwordEl.textContent+=number[thirdnumbersIndex];
    passwordEl.textContent+=number[fourthnumbersIndex];
}
else if(numberEl.checked && lenghtEl.value==5 ){
    passwordEl.textContent+=number[secnumbersIndex];
    passwordEl.textContent+=number[thirdnumbersIndex];
    passwordEl.textContent+=number[fourthnumbersIndex];
    passwordEl.textContent+=number[fithnumbersIndex];
}
else if(numberEl.checked && lenghtEl.value==6 ){
    passwordEl.textContent+=number[secnumbersIndex];
    passwordEl.textContent+=number[thirdnumbersIndex];
    passwordEl.textContent+=number[fourthnumbersIndex];
    passwordEl.textContent+=number[fithnumbersIndex];
    passwordEl.textContent+=number[sixthnumbersIndex];
}
else if(numberEl.checked && lenghtEl.value==7 ){
    passwordEl.textContent+=number[secnumbersIndex];
    passwordEl.textContent+=number[thirdnumbersIndex];
    passwordEl.textContent+=number[fourthnumbersIndex];
    passwordEl.textContent+=number[fithnumbersIndex];
    passwordEl.textContent+=number[sixthnumbersIndex];
    passwordEl.textContent+=number[seventhnumbersIndex];
}
else if(numberEl.checked && lenghtEl.value==8 ){
    passwordEl.textContent+=number[secnumbersIndex];
    passwordEl.textContent+=number[thirdnumbersIndex];
    passwordEl.textContent+=number[fourthnumbersIndex];
    passwordEl.textContent+=number[fithnumbersIndex];
    passwordEl.textContent+=number[sixthnumbersIndex];
    passwordEl.textContent+=number[seventhnumbersIndex];
    passwordEl.textContent+=number[eighthnumbersIndex];
}
}



else if(symmbolEl.checked){
    passwordEl.textContent+=symbols[symbolsIndex];
if(symmbolEl.checked && lenghtEl.value==4 ){
    passwordEl.textContent+=symbols[secsymbolsIndex];
    passwordEl.textContent+=symbols[thirdsymbolsIndex];
    passwordEl.textContent+=symbols[fourthsymbolsIndex];
}
else if(symmbolEl.checked && lenghtEl.value==5){
    passwordEl.textContent+=symbols[secsymbolsIndex];
    passwordEl.textContent+=symbols[thirdsymbolsIndex];
    passwordEl.textContent+=symbols[fourthsymbolsIndex];
    passwordEl.textContent+=symbols[fithsymbolsIndex];
}
else if(symmbolEl.checked && lenghtEl.value==6){
    passwordEl.textContent+=symbols[secsymbolsIndex];
    passwordEl.textContent+=symbols[thirdsymbolsIndex];
    passwordEl.textContent+=symbols[fourthsymbolsIndex];
    passwordEl.textContent+=symbols[fithsymbolsIndex];
    passwordEl.textContent+=symbols[sixthsymbolsIndex];
}
else if(symmbolEl.checked && lenghtEl.value==7){
    passwordEl.textContent+=symbols[secsymbolsIndex];
    passwordEl.textContent+=symbols[thirdsymbolsIndex];
    passwordEl.textContent+=symbols[fourthsymbolsIndex];
    passwordEl.textContent+=symbols[fithsymbolsIndex];
    passwordEl.textContent+=symbols[sixthsymbolsIndex];
    passwordEl.textContent+=symbols[seventhsymbolsIndex];
}
else if(symmbolEl.checked && lenghtEl.value==8){
    passwordEl.textContent+=symbols[secsymbolsIndex];
    passwordEl.textContent+=symbols[thirdsymbolsIndex];
    passwordEl.textContent+=symbols[fourthsymbolsIndex];
    passwordEl.textContent+=symbols[fithsymbolsIndex];
    passwordEl.textContent+=symbols[sixthsymbolsIndex];
    passwordEl.textContent+=symbols[seventhsymbolsIndex];
    passwordEl.textContent+=symbols[eighthsymbolsIndex];
}

}
}