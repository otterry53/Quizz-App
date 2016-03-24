//Challenge requirements
//Create an interactive quiz that:
//Requires the user to answer at least 5 questions, one at a time
//Prevents the user from skipping questions
//Gives some way for the user to answer
//Compares the user answer, and the correct answer to determine a score
//When all the questions are answered, display the user score.
//Allow the user to start a new game.
//Use JavaScript objects to represent the questions.
//*Hint: You may want to store the question objects in an array
//Advanced
//Let the user know where in the quiz they are at each step (i.e. "Question 3 of 5")
//Let the user know their score so far Let the user know if their previous response was correct
//Display the correct answer if the user guessed incorrectly
//Display some information related to the correct answer

$(document).ready(function () {

    /*--- Questions Variable ---*/
    var questions = [
//Question 1
        {
            question: 'Which is not the title of a play written by William Shakespeare?',
            choices: ['Much Ado About Nothing', 'King Lear', 'Othello', 'Two Gentlemen of Venice', 'Richard the III'],
            correct: 3,
            correctDetails: 'The actual title is "Two Gentlemen of Verona".'
        },
//Question 2
        {
            question: 'Which is not the subtitle of a movie based on J.R. Tolkiens "The Hobbit" and "Lord of the Rings" books?',
            choices: ['The Desolation of Smaug', 'The Fellowsihp of the Ring', 'The Brotherhood', 'The Two Towers', 'The Return of the King'],
            correct: 2,
            correctDetails: 'The Brotherhood was not a subtitle in this series.'
        },
//Question 3
        {
            question: 'Which is not the title of a book or poem written by Edgar Allen Poe?',
            choices: ['The Raven', 'The Oblong Box', 'The Pit and the Pendulum', 'The Mockingjay', 'The Tell-Tale Heart'],
            correct: 3,
            correctDetails: 'Mockingjay is a title in "The Hunger Games" Trilogy.'
        },
//Question 4
        {
            question: 'Which is not a title in the "Song of Ice and Fire" series by George R.R.Martin?',
            choices: ['A Game of Thrones', 'Death of Kings and Princes', 'A Storm of Swords', 'A Feast for Crows', 'A Clash of Kings'],
            correct: 1,
            correctDetails: '"A Mother of Dragons" is not a title in this series.'
        },

//Question 5
        {
            question: 'Which is not the second half of a "Harry Potter and the ..."  series book title?',
            choices: ['Chamber of Secrets', 'Prison of Askaban', 'Chalice of Gold', 'Order of the Phoenix', 'Half-Blood Prince'],
            correct: 2,
            correctDetails: '"Harry Potter and the Chalice of Gold" is not a title in the series.'
        },
//Question 6
        {
            question: 'Which is not the title of a book "The Girl ..." series by Steig Larsson?',
            choices: ["...with the Dragon Tattoo", "...Who Played with Fire", "...Who Danced with Demons", "...Who Kicked the Hornet's Nest", "The Girl in the Spider's Web"],
            correct: 2,
            correctDetails: "'The Girl who Danced with Demons' is not a title in this series.'"
        },
//Question 7
        {
            question: 'Which title was not a book written by Theodore Seuss Geisel a-k-a Dr.Seuss?',
            choices: ['Maybe You Could Get a Pet', 'Green Eggs and Ham', "Daisy Headed Maisy", "Oh, the Places You'll Go", "The Lorax"],
            correct: 2,
            correctDetails: "The actual title item 0 is 'Maybe You Could Be a Vet.'"
        },
//Question 8
        {
            question: 'Which of these titles is not an actual title in the Robert Ludlum Jason Bourne Series?',
            choices: ['The Bourne Identity', 'The Bourne Supremacy', 'The Bourne Ultimatum', 'The Bourne Killer', 'The Bourne Betrayal'],
            correct: 3,
            correctDetails: 'Natural Born Killers is the title of a screenplay by Quentin Tarantino.'
        },
//Question 9
        {
            question: 'Which of these is not the title of a book written by Ernest Hemingway?',
            choices: ['Moby Dick', 'A Farewell to Arms', 'For Whom the Bell Tolls', 'A Moveable Feast', 'To Have and Have Not'],
            correct: 0,
            correctDetails: 'Moby Dick is a novel written by Herman Melville. Hemingway wrote "The Old Man and the Sea".'
        },

//Question 10
        {
            question: '',
            choices: [''],
            correct: 0,
            correctDetails: ''
        }
    ];


    /*--- Result Message Variable ---*/
    var feedback = "Well Done";


    /*--- Variables ---*/
    var questionNum = 0;
    var questionTotal = questions.length;
    var correctTotal = 0;



    /*--- Hide quiz and result section on load ---*/
    $('.quiz-section').hide();
    $('.result-section').hide();

    /*--- Display Questions Function ---*/
    function questionDisplay() {
        //displays the current question
        $('#questionNum').text("Question " + (questionNum + 1) + " of " + questionTotal);
        $('#question').text(questions[questionNum].question);
        $('#choices').empty();
        var choiceTotal = questions[questionNum].choices.length;
        for (var i = 0; i < choiceTotal; i++) {
            //loop thru the answer choices and create an dynamically generated row for each of them
            $('#choices').append("<input type='radio' class='option' name='option' value=" + i + ">" + questions[questionNum].choices[i] + "<br>");
        }
    }


    /*--- On start quiz ---*/

    $('#startQuizButton').click(function () { //start the quiz and show the first question
        $('.result-section').hide();
        $('.start-section').hide();
        $('.quiz-section').show();
        //empty the result details container
        $('#result_msg').empty();
        questionDisplay();
    });


    /*--- Show quiz questions ---*/
    $('.quiz-section').on('click', '.option', function () {

        var answer = $("input[class='option']:checked").val();
        var correctAnswer = questions[questionNum].correct;
        if (answer == correctAnswer) {
            //if correct answer was selected
            correctTotal++;
            //console.log(correctTotal);
        }
        $('#result_msg').append("<h3>Q: " + questions[questionNum].question + "</h3>");
        $('#result_msg').append("<h4>A: " + questions[questionNum].correctDetails + "</h4>");


        //quiz is finished, show result-section
        if ((questionNum + 1) == questionTotal) {

            $('#finalScore').text(correctTotal + "/" + questionTotal);

            $('start-button').show();
            //hide other "screens"
            $('.quiz-section').hide();
            $('.start-section').hide();
            $('.result-section').show();
        } else {
            //continue to next question
            questionNum++;
            questionDisplay();
        }

    });




    /*--- Load the start section from the result section ---*/
    $('.result-section').on('click', '#tryagain', function () {
        $('.start-section').show();
        $('.quiz-section').hide();
        $('.result-section').hide();
        //reset variables to start quiz again
        questionNum = 0;
        correctTotal = 0;
    });

});
