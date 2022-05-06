numbers = document.querySelectorAll('.one,.two,.three,.four,.five,.six,.seven,.eight,.nine');
operators = document.querySelectorAll('.add,.subtract,.multiply,.divide,.perc');
clear = document.querySelector('.C');
backspace = document.querySelector('.B');

userNum1 = [];
userNum2 = [];

numbers.forEach(element => {
    
    element.addEventListener('click',()=>{
        
        userNum1.push('element.textcontent');
        userNum1 = userNum1.join('');
    })
});

console.log(userNum1);



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