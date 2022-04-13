var myString;
var myNumber = 5;
var myBoolean;
myString = myNumber.toString();
if (myString == 'Sam') {
    myBoolean = true;
}
else {
    myBoolean = false;
}
if (myBoolean == true) {
    myNumber = 1 / 0;
}
else {
    myNumber = 1 / 0;
}
console.log(myBoolean, myString, myNumber);
console.log(typeof (myNumber));
