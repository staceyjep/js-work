//variables
let student_name = 'Kibichii'
let firstName = 'Emmanuel';
let secondName = 'Kibichi';
let age = 30 ;
console.log(student_name, firstName, secondName)
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
let myVar;
console.log(myVar)
let myDar='null';
console.log(myDar);
console.log(typeof age );
//obejcts
let person = {
    sname : 'Stacey',
    age : 18
};
console.log (person);
person.sname= 'Jepchumba';
console.log(person.sname);
person['sname']='Rutto';
console.log(person['sname']);
let selection = 'sname';
person [selection] = 'tarei';
console.log(person.sname);
//arrays
let selectedColors =['red', 'blue'];
selectedColors[2]= 1;
console.log(selectedColors.length);

//functions
function greet(tname, sname){
    console.log ('Hello' +tname+ sname);
} 
greet ('Kibichii', 'Emmanuel');
greet ('Jepchumba', 'Stacey');

function square (number){
     return number*number;
    
}
 console.log (square(2));
 
 function call(aname, bname){
    return `Hello ${aname} ${bname}` ;
}
let call1 =call('Jeremy', 'Ngwono');
console.log(call1);


