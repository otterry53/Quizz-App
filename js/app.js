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
            question: 'Which is not the subtitle of a movie based on J.R. Tolkiens "The Hobbit/Lord of the Rings" trilogy?',
            choices: ['The Desolation of Smaug', 'The Fellowsihp of the Ring', 'The Brotherhood', 'The Two Towers', 'The Return of the King'],
            correct: 2,
            questionImage: "https://i.ytimg.com/vi/0B8C2MkkEqI/maxresdefault.jpg",
            alt: '../images/lordrings.jpg',
            correctDetails: '"The Brotherhood" was not a subtitle in the movie version of The Hobbit/Lord of the Rings triology.'
        },
        //Question 2
        {
            question: 'Which is not the title of a play written by William Shakespeare?',
            choices: ['Perseus', 'Much Ado About Nothing', 'King Lear', 'Othello', 'Richard the III'],
            correct: 0,
            questionImage: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Title_page_William_Shakespeare's_First_Folio_1623.jpg",
            alt: '../images/Shakespeare.jpg',
            correctDetails: 'Shakespeare wrote a play entitle "Pericles". Perseus is the son of Zeus in Greek Mythology.'
        },
        //Question 3
        {
            question: 'Which is not the title of a book or poem written by Edgar Allen Poe?',
            choices: ['The Raven', 'The Oblong Box', 'The Pit and the Pendulum', 'The Mockingjay', 'The Tell-Tale Heart'],
            correct: 3,
            questionImage: "http://images.fineartamerica.com/images-medium-large/the-ravens-edgar-allen-poe-thomas-pearce.jpg",
            alt: '../images/EAPoe.jpg',
            correctDetails: 'Mockingjay is a title in "The Hunger Games" Trilogy, not an Edgar Allen Poe novel.'
        },
        //Question 4
        {
            question: 'Which is not a title in the "Song of Ice and Fire" series by George R.R.Martin?',
            choices: ['A Game of Thrones', 'A Mother of Dragons', 'A Storm of Swords', 'A Feast for Crows', 'A Clash of Kings'],
            correct: 1,
            questionImage: "https://i.kinja-img.com/gawker-media/image/upload/lfk6awzsbwti0et0rglx.jpg",
            alt: '../images/thrones.jpg',
            correctDetails: "'A Mother of Dragons' is not a title in George R.R. Martin's 'Song of Ice and Fire' series."
        },

        //Question 5
        {
            question: 'Which is not the second half of a "Harry Potter and the. . ."  series book title?',
            choices: ['Chamber of Secrets', 'Prison of Askaban', 'Chalice of Gold', 'Order of the Phoenix', 'Half-Blood Prince'],
            correct: 2,
            questionImage: "http://vignette2.wikia.nocookie.net/harrypotter/images/a/a0/The_Stone.png/revision/latest?cb=20150115120607",
            alt: '../images/Sorcerersstone.png',
            correctDetails: 'Chalice of Gold is not a title in the Harry Potter series.'
        },
        //Question 6
        {
            question: 'Which is not part of the title of a book in "The Girl . . ." Millenium Triology by Steig Larsson?',
            choices: ['...with the Dragon Tattoo', '...who Played with Fire', '...who Leapt Through Time', '...who Kicked the Hornets Nest', '...in the Spiders Web'],
            correct: 2,
            questionImage: "https://lmiall.files.wordpress.com/2014/01/girl_with_the_dragon_tattoo.jpg",
            alt: '../images/dragontattoo.jpg',
            correctDetails: 'The Girl Who Leapt Through Time is a science fiction novel by Yasutaka Tsutsui.'
        },
        //Question 7
        {
            question: 'Which title was not a book written by Theodore Seuss Geisel a-k-a Dr.Seuss?',
            choices: ['Your Parachute is Red & Blue', 'Green Eggs and Ham', 'Daisy Headed Maisy', 'Oh, the Places Youll Go', 'The Lorax'],
            correct: 0,
            questionImage: "http://img02.deviantart.net/e4f0/i/2012/059/b/d/the_cat_in_the_hat_by_odogg31-d4rbrmf.jpg",
            alt: '../images/Cat-in-the-hat.jpg',
            correctDetails: 'The actual title of the Dr. Seusss book about life passions is "Maybe You Could Be a Vet".'
        },
        //Question 8
        {
            question: 'Which of these is not the title of a book written by Ernest Hemingway?',
            choices: ['A Farewell to Arms', 'For Whom the Bell Tolls', 'A Moveable Feast', 'To Have and Have Not', 'Moby Dick'],
            correct: 0,
            questionImage: "http://3.bp.blogspot.com/-RAdqjKCAJlY/UdDYPg5nQ-I/AAAAAAAAA1M/1jLj00VA5v4/s900/old-mans-battle-carey-chen.jpg",
            alt: '..images/oldmansea.jpg',
            correctDetails: 'Moby Dick is a novel written by Herman Melville. Hemingway wrote "The Old Man and the Sea".'
        }
        ];
    /*--- Result Message Variable ---*/
    var feedback = "Well Done";

    /*--- Variables ---*/
    var imageNum = 0;
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
        $('#image_wrapper').empty();
        $('#image_wrapper').append("<img src=" + questions[questionNum].questionImage + " class='question-image'>");
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
        }
        //console.log(correctTotal);
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
