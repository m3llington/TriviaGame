//Create an onclick function for start button. Attach to html div.

var correctcount = 0;
var incorrectcount = 0;
var unanswered = 0;
var timer = 60;
var interval;

var correctAnswers =['A', 'B', 'C', 'D'];
var checkingAnswers =[];

//on submit push all values of the selected class into the checkingAnswers array .push

//this is a loop
//looping through your div with the class of question
//var loopthru = $(.questions)
//for var i, i <loopthru.length; i++
//var userAnswers = $(".selected").val();
//push to array
// end loop


    var questionholder = [
        {
            question :"Who has the most NBA championship rings?",
            A: "A: Bob Cousy",
            B: "B: Bill Russell",
            C: "C: Michael Jordan",
            D: "D: Lebron James",
            Answer : "B"
        },
        {
            question :"Which NBA team did not 3 peat(win 3 titles in a row)?",
            A: "A: Bulls",
            B: "B: Celtics",
            C: "C: Lakers",
            D: "D: Warriors",
            Answer : "D",
        },
        {
            question :"What is the name of the NBA team based out of Atlanta, Georgia?",
            A: "A: Hawks",
            B: "B: Falcons",
            C: "C: Braves",
            D: "D: Bucks",
            Answer : "A",
        },
        {
            question :"What NBA team is Anthony Davis currently signed to?",
            A: "A: Warriors",
            B: "B: Raptors",
            C: "C: Pelicans",
            D: "D: Lakers",
            Answer : "A",
        },
        {
            question :"What 3 NBA teams will Kawhi Leonard have played for at the end of the next basketball season?",
            A: "A: Lakers, Clippers, Spurs",
            B: "B: Raptors, Clippers, Spurs",
            C: "C: Raptors, Lakers, Spurs",
            D: "D: Lakers, Raptors, Spurs",
            Answer : "B",
        },

    ];

    // .append to add html tags under easily

    console.log(questionholder[0].Answer);


//Hide button after onclick function, then populate screen and html with quiz questions.

//potentially make function that loops through object, and populates the html with that

$("#start").on("click", function() {
    
    $("#start").html("");
    $("#timer").html("<h3>Begin!</h3>")

    console.log(questionholder[0].question);

    function questionGet(){
        $("#question1").html("<h4>" + questionholder[0].question + "</h4>");
        $("#answer-A1").html("<h4>" + questionholder[0].A);
        $("#answer-B1").html("<h4>" + questionholder[0].B);
        $("#answer-C1").html("<h4>" + questionholder[0].C);
        $("#answer-D1").html("<h4>" + questionholder[0].D);

        $("#question2").html("<h4>" + questionholder[1].question + "</h4>");
        $("#answer-A2").html("<h4>" + questionholder[1].A);
        $("#answer-B2").html("<h4>" + questionholder[1].B);
        $("#answer-C2").html("<h4>" + questionholder[1].C);
        $("#answer-D2").html("<h4>" + questionholder[1].D);

        $("#question3").html("<h4>" + questionholder[2].question + "</h4>");
        $("#answer-A3").html("<h4>" + questionholder[2].A);
        $("#answer-B3").html("<h4>" + questionholder[2].B);
        $("#answer-C3").html("<h4>" + questionholder[2].C);
        $("#answer-D3").html("<h4>" + questionholder[2].D);

        $("#question4").html("<h4>" + questionholder[3].question + "</h4>");
        $("#answer-A4").html("<h4>" + questionholder[3].A);
        $("#answer-B4").html("<h4>" + questionholder[3].B);
        $("#answer-C4").html("<h4>" + questionholder[3].C);
        $("#answer-D4").html("<h4>" + questionholder[3].D);

        $("#question5").html("<h4>" + questionholder[4].question  + "</h4>");
        $("#answer-A5").html("<h4>" + questionholder[4].A);
        $("#answer-B5").html("<h4>" + questionholder[4].B);
        $("#answer-C5").html("<h4>" + questionholder[4].C);
        $("#answer-D5").html("<h4>" + questionholder[4].D);

        $("#answer").on("click", function () {
            
            console.log("test");   
        });

        
        
        
        $("#submit").text("Submit");

      



    } 
    
    for (var i = 0; i < questionholder.length; i++) {
        
        questionGet(i);
        
    };
    
    $("#q1").on("click", function() {
       
        console.log(correctAnswers);
    
       
    });
        

    $("#submit").on("click", function() {
        $("#question-holder").empty();
        stop();
        $("#timer").empty();

        var showcorrect = $("<div>");
        var showincorrect = $("<div>");
       

        showcorrect.text("<p>Correct answers</p>");
        showincorrect.text("<p>Incorrect answers</p>");


        console.log("game over");
    });

    function run() {
        clearInterval(interval);
        interval = setInterval(decrement, 1000);
      }
  
    
      function decrement() {
  
        
        timer--;
  
        $("#timer").html("<h2>" + timer + "</h2>");
  
        if (timer === 0) {
  
          stop();
  
          alert("Time is up!");

        //   results();
        }
      }
  
     
      function stop() {
  
       
        clearInterval(interval);
      }
  
      
      run();
  

    

});

// Create 4 buttons, and answers for each question. Create some loop that checks if only
// store answer on click, and erase previous answer click.



//Create timer that ends trivia quiz if a certain amount of time has passed.

//Find a way to constantly update timer in the html as well

//Create html that populates screen after all answers have been completed, or when timer is up


//It should have the amount of questions answered correctly, incorrectly, and unanswered.