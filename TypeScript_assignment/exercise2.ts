let myString : string;
let myNumber: number = 5;
let myBoolean: boolean;

myString=myNumber.toString();

if(myString == 'Sam'){
    myBoolean = true
}else{
    myBoolean = false
}

if(myBoolean == true){
    myNumber = 1/0;
}else{
    myNumber = 1/0;
}

console.log(myBoolean, myString, myNumber);
