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
}*/