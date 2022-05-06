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




let userInputState = 0
numbers.forEach(element => {
    
    element.addEventListener('click',()=>{

        let a = Number(element.textContent);

        if (userInputState === 0){

        userSelection.userInput1.push(a);
        userSelection.userInput1= [Number(userSelection.userInput1.join(''))];
        console.log(userSelection.userInput1);
        }
        else{

        userSelection.userInput2.push(a);
        userSelection.userInput2= [Number(userSelection.userInput2.join(''))];
        console.log(userSelection.userInput2);   

        }

        display();

    })
});


let operationState = 0
operators.forEach(element =>{

    element.addEventListener('click', ()=>{

        let a = element.textContent;
        userInputState = 1;
        
        console.log(a);

        if(operationState === 1){
            userSelection.userOperation.splice(0,1);
            userSelection.userOperation.push(a);
            
        }
        else{
            userSelection.userOperation.push(a);
            operationState = 1;
            
        }

        display();
      

    })
})

equal.addEventListener('click', ()=>{

    if(userSelection.userInput1.length != 0 && userSelection.userOperation.length != 0 && userSelection.userInput2.length != 0){
                
        switch (true){
            case (userSelection.userOperation == '+'):

                console.log(typeof(userSelection.userInput1))
                add(userSelection.userInput1,userSelection.userInput2);
                break;

            case (userSelection.userOperation == '-'):

                subtract(userSelection.userInput1,userSelection.userInput2);
                break;

            case (userSelection.userOperation == '*'):

                multiply(userSelection.userInput1,userSelection.userInput2);
                break;

            case (userSelection.userOperation == '/'):
                if(userSelection.userInput2 == 0){
                    console.log(1);
                    answerWindow.textContent  = "Error, can't divide by 0";
                    break;
                }

                divide(userSelection.userInput1,userSelection.userInput2);
                break;

            default: console.log(1);

        }
    };
})



function display(){

    outputWindow.textContent = `${userSelection.userInput1} ${userSelection.userOperation} ${userSelection.userInput2}`;

}

function add(a=[],b=[]){

    console.log(typeof(a));
    answerWindow.textContent = Number(a)+Number(b);

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