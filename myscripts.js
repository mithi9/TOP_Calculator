numbers = document.querySelectorAll('.zero,.one,.two,.three,.four,.five,.six,.seven,.eight,.nine');
operators = document.querySelectorAll('.add,.subtract,.multiply,.divide,.perc');
equal = document.querySelector('.equal');
clear = document.querySelector('.C');
backspace = document.querySelector('.B');
outputWindow = document.querySelector('.viewport .top');
answerWindow = document.querySelector('.viewport .bottom');


let userSelection = {
    userInput1:     [],
    userInput2:     [],
    userOperation:  [],
    storedNumber:   [],
    answer:         []
}




let eventState = 0;
let userInputState = 0;
let operationState = 0;
let answerState = 0;


numbers.forEach(element => {


    element.addEventListener('click',()=>{

        if(operationState === 3){
            console.log(1);
            userInputState = 0;
            operationState = 0;
            answerState = 0;
            userSelection.userInput1 = [];
            userSelection.userInput2 = [];
            userSelection.userOperation = [];
            answerWindow.textContent = ``;
            display();
        }
      

        let a = Number(element.textContent);

        if (userInputState === 0){

        eventState = 1;
        userSelection.userInput1.push(a);
        //userSelection.userInput1= [Number(userSelection.userInput1.join(''))];
        console.log(userSelection.userInput1);
        }
        else{
        
        eventState = 3;
        userSelection.userInput2.push(a);
        //userSelection.userInput2= [Number(userSelection.userInput2.join(''))];
        console.log(userSelection.userInput2);   

        }

        display();

    })
});



operators.forEach(element =>{

    element.addEventListener('click', ()=>{

        eventState = 2;
        let a = element.textContent;
        userInputState = 1;
        
        console.log(a);

        if(answerState === 0){

            if(operationState === 1){
                userSelection.userOperation.splice(0,1);
                userSelection.userOperation.push(a);
            
            }
            else{
                userSelection.userOperation.push(a);
                operationState = 1;
            
            }
        }
        else{

            userSelection.userInput2 = [];
            answerWindow.textContent = ``;
            userSelection.userOperation.splice(0,1);
            userSelection.userOperation.push(a);
            operationState = 1;

        }

        display();
      

    })
})


equal.addEventListener('click', ()=>{

    if(userSelection.userInput1.length != 0 && userSelection.userOperation.length != 0 && userSelection.userInput2.length != 0){
        
        console.log(answerState);

        if(answerState === 0){
            userSelection.storedNumber = compute(userSelection.userInput1,userSelection.userInput2,userSelection.userOperation);
            operationState = 3;
            
        }
        else{
            userSelection.storedNumber = compute(userSelection.storedNumber,userSelection.userInput2,userSelection.userOperation);
            operationState = 3;
        }

       


    };
})

clear.addEventListener('click', ()=>{

    console.log(1);
    userInputState = 0;
    operationState = 0;
    answerState = 0;
    eventState = 0;
    userSelection.userInput1 = [];
    userSelection.userInput2 = [];
    userSelection.userOperation = [];
    answerWindow.textContent = ``;
    display();

})

backspace.addEventListener('click',()=>{

    if(eventState === 1){
        
        userSelection.userInput1.pop();
    }
    else if(eventState === 2){
        
        userSelection.userOperation.pop();
        if( userSelection.userOperation.length === 0){
            eventState = 1;
            userInputState = 0;
        }
    }
    else if(eventState === 3){

        userSelection.userInput2.pop();
        if( userSelection.userInput2.length === 0){
            eventState = 2;
        }
    }

    display();

});



function display(){

    let a = userSelection.userInput1;
    let b = userSelection.userInput2;

    if(answerState === 0){

        outputWindow.textContent = `${a.join("")} ${userSelection.userOperation} ${b.join("")}`;
    }
    else{
        outputWindow.textContent = `${userSelection.answer} ${userSelection.userOperation} ${b.join("")}`;
    
    }
}

function add(a=[],b=[]){

    console.log(a,b);

    answerWindow.textContent = Number(a)+Number(b);

    return Number(a)+Number(b);
}

function subtract(a=[],b=[]){

    answerWindow.textContent = Number(a)-Number(b);

    return Number(a)-Number(b);
}

function multiply(a=[],b=[]){

    answerWindow.textContent = Number(a)*Number(b);

    return Number(a)*Number(b);
}

function divide(a=[],b=[]){

    answerWindow.textContent = Number(a)/Number(b);

    return Number(a)/Number(b);
}

function compute(a=[],b=[],c=[]){
    console.log(typeof(a));
    a = a.join("");
    b = b.join("");

    switch (true){
        case (c == '+'):

            userSelection.answer = [add(a,b)];
            break;

        case (c == '-'):

            userSelection.answer = [subtract(a,b)];
            break;

        case (c == '*'):

            userSelection.answer = [multiply(a,b)];
            break;

        case (c == '/'):
            if(b == 0){
                console.log(1);
                answerWindow.textContent  = "Error, can't divide by 0";
                break;
            }

            userSelection.answer = [divide(a,b)];
            break;

        default: console.log(1);

    }

        answerState = 1;
        return [userSelection.answer];

}




    //answerState = 1;
    //userSelection.storedNumber = userSelection.answer;