//Task 1
const userInputAge = prompt('Enter age:', 18);

if(userInputAge==='' ||
userInputAge===null || 
Number.isNaN(Number(userInputAge))||
userInputAge<0 ||
userInputAge>150){
    console.log('error');
}else if(userInputAge>=0 && userInputAge<2){
    console.log('baby');
}else if(userInputAge>=2 && userInputAge<6){
    console.log('kinder');
}else if(userInputAge>=6 && userInputAge<12){
    console.log('child');
}else if(userInputAge>=12 && userInputAge<18){
    console.log('tinager');
}else if(userInputAge>=18 && userInputAge<65){
    console.log('adult');
}else if(userInputAge>=65 && userInputAge<100){
    console.log('old');
}else if(userInputAge>=100 && userInputAge<=150){
    console.log('respect');
}


//Task 2
const number1 = 9;
const number2 = -7;
const sign = '/';

const checkNumber = function(number){
    if(number==='' ||
    number===null || 
    Number.isNaN(Number(number))){
        return false;
    }
        return true;
}
const calc = function(number1, number2, sign){
    if(!checkNumber(number1) || !checkNumber(number2)){
        return NaN;
    }
switch(sign){
case '+':
    return number1+number2;
case '-':
    return number1-number2;
case '*':
    return number1*number2;
case '/':
    return number1/number2;
default:
    return NaN;
}
}
console.log(calc(number1, number2, sign));