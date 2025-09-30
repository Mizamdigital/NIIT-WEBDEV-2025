//GLOBAL VARIABLE
function calcArea() {
    var PI = 3.14;
    var radius;
    var result;
    radius = parseInt(document.getElementById("radius").value); //parseInt() function convert string to integer while parsefloat() convert string to decimal

    //calculate area of circle + function declaration
    var result = PI * radius * radius;

    var displayResult = document.getElementById("displayResult");
    
    displayResult.innerHTML = `Area: ${result}`;

    return result;
}


//document.write
function myFunction (name) {
    document.write(`My name is ${name}<br>`);
    console.log("My name is" + " " + name +".")
}

myFunction("Mariam");


//console.log
function students (name, age) {
    console.log("My name is"+" "+name+"."+" "+"My age is:"+" "+age);
    
    document.write(`My name is ${name}. I am:${age}years <br>`);
}

//call the function I.E INVOKING THE FUNCTION
students("sola",25);
students("tola",30);
students("bola",35);
students("kola",45);


//example of Global and local variables

var PI = 3.142;
function areaCircle (r) {
    var area = PI * r * r;
    document.write (`Area of circle ${area} <br>`)
}

function areaCone (r,h) {
    var areaCone = 1/3 * PI * r * r * r * h;
    document.write(`Area of cone ${areaCone} <br>`); 
}

function areaSphere (r) {
    var areaSphere = 4/3 * PI * r * r;
    document.write("Area of sphere:" + areaSphere);
}

//invoking the function:

areaCircle(7);
areaCone(10,20);
areaSphere(15);


//Weight

var displayDiv = document.getElementById("displayDiv");
var output = 0;
function  convertWeight(weight){
    var weight = document.getElementById("weight").value;
    var gram = weight * 1000;
    output = gram;
    displayDiv.innerHTML = `<b> ${output}g<b>`;
    return gram;
}

function convertWeight() {
    var weight = document.getElementById("wight").value;
    var gram = weight * 1000;
    document.getElementById("displayDiv").innerHTML =`<b> ${gram}g <b>`;
}