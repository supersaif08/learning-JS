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
console.log (BMIjohn<BMImark);//true*/

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
program`)
