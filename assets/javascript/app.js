// console.log(triviaQuestions);
let counter = 10;
// keeps track of current question. Starts at 0 because thats the first index an a array
let currentQuestion = 0;
let correct = 0;
let incorrect = 0;
// this holds the value of the counter
let timer;

//Display question and choices into the html
$("#start").on("click",  function () {

    $(".jumbotron").html("");
//loads the next question, once timer has reached 0 or an answer has been selected
function nextQuestion() {
    //logic that lets function know its on the last question and to not run forever
    //you do -1 to account for how index's work in arrays
    const isQuestionOver = (triviaQuestions.length - 1) === currentQuestion;
    if (isQuestionOver) {
        console.log("game is over");
        displayResult();
    } else {
        currentQuestion++;
        displayQuestion();
    }
    // currentQuestion++;
    // displayQuestion();
}

//stops the timer once it reaches 0
function stop(){
    clearInterval(timer);
    incorrect++;
    nextQuestion();
}
//timer function, the counter increments, the timer is whats displayed
function increment(){
    
    counter--;
    $("#timer").html(`Time remaining: ${counter}`);

    if(counter === 0){
        stop();
    }
}

//loads the first question
function displayQuestion() {
    counter = 10;
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
    //loads the options in function stores the results in let result
    let result = "";

    for (let i = 0; i < options.length; i++){
        //creates p tags in html stores the option in an attribute as data-answer, and then actually displays the options.
        result += `<p class="choice" data-answer="${options[i]}">${options[i]}</p>`;  
    }

    return result;

}
//this is important since you can not eventlisten to something that was created outside of the dom
$("#game").on("click", ".choice", function() {
    clearInterval(timer);
    //stores the value of "this" which is whatever element was clicked
    const selectedAnswer = $(this).attr("data-answer");
    const correctAnswer = triviaQuestions[currentQuestion].answer;

    if (correctAnswer === selectedAnswer){
        correct++;
        console.log("correct");
        nextQuestion();
    } else{
        incorrect++;
        console.log("incorect");
        nextQuestion();
    }
    
    console.log(selectedAnswer);
});
function displayResult() {
    const result  = `
    <p>Correct answers: ${correct}</p>
    <p>Incorrect, or unanswered: ${incorrect}</p>
    <button type="button" class="btn btn-primary" id="reset">Reset Game</button>
    `;

    $("#game").html(result);

}
displayQuestion();

});
// displayOptions();
