// console.log("hello this is my first line in js code!!")

// data types
// bollean values
/*let my_name=true;
console.log(my_name);

// typeof
console.log(typeof true);//boolean
console.log(typeof "hello");//string
console.log(typeof my_name);//boolean
console.log(typeof 123);//number
console.log(typeof saif_ali);//undefined

my_name="saif_ali";//changed the data-type to striing
console.log(my_name);
console.log(typeof my_name);//string


let name;//undefined
console.log(name);
console.log(typeof name);

name="saif";//given the value to undefined
console.log(typeof name);//string now!!

// variable's 
// three types [ let, var, const]
// let veriable can be changed later
let age=31;//first assigned 31
age=40;//then changed to 40

//constant variable can not be changed once it is assigned
const birthyear=2003;//once assigned can't be changed
birthyear=2004;//error
const job;//constant variable can't be empty

// var variable
// var is same as let variable but not recommended to use
var first_name="md";
first_name="saif";
console.log(first_name)

// operators
const now_year=2024;
const age_saif=now_year-2003;
const age_sufiyan=now_year-2006;
console.log(age_saif,age_sufiyan);

console.log(age_saif*2 , age_saif/2 , age_saif**3 )//**means "to the power[age_saif to the power 3"

// "+"to joints the strings
const first_name="Md ";
const last_name="saif";
console.log(first_name+last_name);

// assignment operatop
 let x=10+5;//x=15
 x += 10;//x=x + 10 =25
 x *=4;// x= x*4
 x++ //x= x+1
 x-- //x= x-1
 console.log(x);

//  comperison operators
console.log(age_saif>age_sufiyan);//true
console.log(age_saif>=18);//true
console.log(age_saif<=18);//false
console.log(age_saif<age_sufiyan)//false

//operators's precedence
console.log(age_saif - 12 > age_sufiyan-5);//js will first perform the "-"operation and 
// then the comperation operation [ go to MDN web sit for more] 

let a,y;
a=y=20-10-5; //a=5 and y=5
console.log(a,y);

const average_age=(age_saif+age_sufiyan)/2;
console.log(age_saif,age_sufiyan ,average_age);

// first challange
// to calculate BMI[BMI= mass/(height*height)]
const massMark =78;
const heightMmark =1.69 ;
const massJohn =92;
const heightJohn=1.95;
const BMImark = massMark/(heightMmark*heightMmark);
const BMIjohn = massJohn/(heightJohn*heightJohn);
console.log(BMIjohn,BMImark);
console.log (BMIjohn>BMImark);//false
console.log (BMIjohn<BMImark);//true

//strings anad template literals//

const fullName="MD saif ali";
const job="student";
let currnt_year=2024;
const birth_year=2003;
const saif="I'm "+fullName+ " a " +(currnt_year - birth_year) + " year old "+job;
console.log(saif);

// templet literals [ use a back tick which is above the tab key ``]
//use doller sign "$"
const saifNew=`I'm ${fullName} a ${(currnt_year-birth_year)} year student`;
console.log(saifNew);

console.log(`just a normal string....`);

//it can b also be used to create multi line string
console.log(`string 
multiline
program`);

//taking decision [if/else statement]//

const age=15;
const oldEnough=age>=18;

if(oldEnough){
    console.log(`congrass you can get your driving licence 🫡`);
}else{
    console.log(`sorry , but you can't get the licence at current age`);
}

//other way to write
const secondAge=15;
if(secondAge>=18){
    console.log(`congrass you can get your driving licence 🫡`);
}else{
    const need_to_wait =18-secondAge;
    console.log(`you still need to wait for ${need_to_wait} years`)
}

//second challenge

const massMark =78;
const heightMmark =1.69 ;
const massJohn =92;
const heightJohn=1.95;
const BMImark = massMark/(heightMmark*heightMmark);
const BMIjohn = massJohn/(heightJohn*heightJohn);

if (BMImark>BMIjohn){
    console.log(`mark BMI is higher than jhon`);
}else{
    console.log(`john BMI is greater than marks`);
}
if(BMImark>BMIjohn){
    console.log(`mark BMI ${BMImark} is grater than john's BMI ${BMIjohn}`)
}else{
    console.log(`john's BMI ${BMIjohn} is grater than mark's BMI ${BMImark}`)
}


//type convertion and corecion//

const inputYear='2003';//string
console.log(inputYear+7);//it takes the number 7 as a string value and just palce after 2003
console.log(Number(inputYear)+7);//the string "2003" is converted to a number and added with 7 
const name = 'saif';
console.log(Number(name));// the letters cant be converted to number so the o/p will be "NaN"
const age=21;
console.log (String(age));//number can be converted to a string

//type corecion[auto converction by JS]

console.log('I am ' + 21 + 'years old !!');//the number 21 is auto converted to string
console.log('21'-'20'-5);//the string is converted to number and the output is -4
console.log('21'+30-'10');//the 21 and 30 is converted to string anfd then sub by 10 and the o/p is 2120
console.log('10'/'2');//converted to number, o/p is 5

let x='1'+1;//1 and one is convered to string which is 11
x=x-1;//x is converted to number and sub with 1 which is 10
console.log(x)

let y=2+3+4+'5';//2,3,4 are the number and added gives 9 and 5 is a string addded with 9
// gives 95
console.log(y);

//truthy and falsy values//
//any value that can't be converted to boolean value is called falsy value
//5 falsy values :- 0,'',undefined,nul,NaN;
console.log(Boolean(0));//falsy
console.log(Boolean());//falsy
console.log(Boolean(undefined));//falsy
console.log(Boolean());//falsy
console.log(Boolean("saif"));//trythy

const money = 0;//zero is a falsy value so the else statement will get exicuted
if(money){
    console.log(`don't spend all your money`);
}else{
    console.log(`you need to get a job`);
}

const money2 = 100;//100 is a true value so the if statement wikk get exicuted
if(money2){
    console.log(`don't spend all your money`);
}else{
    console.log(`you need to get a job`);
}
 
let height;//as height is undefined so the else statement is executed
if(height){
    console.log(`height is defined`);
}else{
    console.log(`height is undefined`);
}

//equality operators == vs ===//
//always try to use strict equal sign [===]
 const age=18;
 if (age===18){//the tripal equal is used for a strict conversion where both the compared valu should be same
    console.log(`you are good to go`);
 }
 if (age=='18'){//the dubble equals is used for a lose comparaion where one can be a number and other can be a string 
    //the string will be converted to a number
    console.log(`you are good to go`);
 }


const first_name= Number(prompt("what is your favourite number :)"))//gives a pop-up window to enter the name
console.log(first_name);//name that is stored in first_name will be displayed
alert("hello there!!!");//just for fun
if (first_name>=0){
    console.log(`${first_name} is a greate number`);
}

if( first_name != 0){
    console.log(`enter the number starting from 0`);
}

//boolean logic//
// AND,OR & NOT OPERATORS//

const age=true;
const can_drive=true;

if(can_drive && age){//both the conduction needs to be true for answer to be true
    console.log(`yes you can drive the car!!`)
}else{
    console.log(`sorry, you can't drive the car..!`)
}

const age1=true;
const can_drive1=false;

if(can_drive1 || age1){//if any one conduction is true answer is true
    console.log(`yes you can drive the car!!`)
}else{
    console.log(`sorry, you can't drive the car..!`)
}

const age_3=true;
console.log(!age_3);//true is inverted to faalse

// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times.
//  The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data included below. 
// The average score for Dolphins should be assigned to the scoreDolphins variable,
//  and the average score of Koalas should be assigned to the scoreKoalas variable.
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print to the console:
// "Dolphins win the trophy" if Dolphins win, or
// "Koalas win the trophy" if Koalas win, or
// "Both win the trophy" if their average scores are equal.

const scoreDolphins =(96+108+89)/3;
const scoreKoalas=(88+91+110)/3;

if(scoreDolphins>scoreKoalas){
    console.log ('Dolphins win the trophy')
}else if(scoreDolphins === scoreKoalas){
    console.log('Both win the')
}else if(scoreKoalas>scoreDolphins){
    console.log('Koalas win the triophy')
}


//SWITCH STATEMENT//

const day='thursday'
switch(day){
    case 'monday':
        console.log('plan course');
        console.log('its not monday');
        break;
    case 'tuesday':
        console.log('only one class');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('full day collage !!:/')
        break
    case 'friday':
        console.log('take bath :))');
        break;
    case 'suturday':
        console.log('hollyday');
        break;
    default:
        console.log('go to hell :(');
}

if(day === 'monday'){
    console.log('its monday');
}else if (day==='tuesday'){
    console.log('its teuesday')
}else if(day === 'wednesday' || day==='thursday'){
    console.log ('go to collage');
}else if(day=== 'friday'){
    console.log('its friday');
}else{
    console.log('its suturday');
}*/

//THE CONDUCTIONAL (TERNARY)OPERATOR
//it is same as a if else but writen in a single line
const age=23;
age>=18 ?console.log('i like to dring milk')://conduction is given with "?"
console.log ("i like to dring water");

const drink = age>=18?'milk':'water';//this is an expresion
console.log(drink);

//same code in if else

let drink2;
if(age>18){
    drink2='milk';
}else{
    drink2='water';
}
console.log(drink2);

//it can also be used in the string
console.log(`i like to dring ${age>=18?'milk':'water'}`);

//challenge//
const bill =5;
console.log(`tip is ${(bill>=50 && bill<=300)?'tip is 15%':'tip is 12%'}`);
const tip=(bill>=50 && bill<=300)?(0.15*bill):(0.12*bill);
console.log(`The bill was ${bill} and the tip was ${tip} and the total bill is ${bill+tip}`);