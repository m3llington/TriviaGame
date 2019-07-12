// console.log(triviaQuestions);
let counter = 15;
// keeps track of current question. Starts at 0 because thats the first index an a array
let currentQuestion = 0;
let correct = 0;
let incorrect = 0;
// this holds the value of the counter
let timer;

//Display question and choices into the html
function stop(){
    clearInterval(timer);
}

function increment(){
    
    counter--;
    $("#timer").html(`Time remaining: ${counter}`);

    if(counter === 0){
        stop();
    }
}

function displayQuestion() {
    counter = 15;
    timer = setInterval(increment, 1000);

  const question = triviaQuestions[currentQuestion].question;  //create new variable to hold the current question
  const options = triviaQuestions[currentQuestion].options;  //create new variable to hold the current option(answer)

    $("#timer").html("Time remaining: " + counter);
    $("#game").html(`
        <h4>${question}</h4>
        ${displayOptions(options)}
    `);
    // $("#game").html(` <h4>${question}</h4> `);
    
}

function displayOptions(options){
    //
    let result = "";

    for (let i = 0; i < options.length; i++){
        //creates p tags in html stores the option in an attribute as data-answer, and then actually displays the options.
        result += `<p class="choice" data-answer="${options[i]}">${options[i]}</p>`;  
    }

    return result;

}

displayQuestion();
// displayOptions();
