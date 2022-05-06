numbers = document.querySelectorAll('.zero,.one,.two,.three,.four,.five,.six,.seven,.eight,.nine');
operators = document.querySelectorAll('.add,.subtract,.multiply,.divide,.perc');
clear = document.querySelector('.C');
backspace = document.querySelector('.B');
output = document.querySelector('.viewport .top');




let userInput = [];
let storedNumber = [];
let answer = [];

numbers.forEach(element => {
    
    element.addEventListener('click',()=>{
        let a = Number(element.textContent);
        userInput.push(a);
        userInput= [Number(userInput.join(''))];
        console.log(a,userInput);
        output.textContent = userInput;
    })
});




function add(a=[],b=[]){

    a=Number(a.join(''));
    b=Number(b.join(''));

    return a+b;
}

function subtract(a=[],b=[]){

    a=Number(a.join(''));
    b=Number(b.join(''));

    return a-b;
}

function multiply(a=[],b=[]){

    a=Number(a.join(''));
    b=Number(b.join(''));

    return a*b;
}

function divide(a=[],b=[]){

    a=Number(a.join(''));
    b=Number(b.join(''));

    return a/b;
}

add();