/*Triva game logic */

/*                To whom it may concern
* 1. Time often takes a second or two to reload -> unsure why.
* 2. Do not answer to quickly after time is loaded. can cause it to hang.
* 3. Spamming answers can also cause the timer to hang.
* 4. Well pretty much spamming anything seems to cause some issues.
*    So like they say, patience is a virtue. Give it like 1 second to load
*    after each ' stage ' & all should be good */
$(function () {

    var _t = this;

    //Game questions ands answers (multichoice format)
    var quiz = [
        {
            question: "What does Jon Snow know?",
            answer: ["Jon Snow knows nothing ", " Jon Snow knows theoretical physics"],
            correct: 0
            //img
        }, {
            question: "What's Sansa Starks favorite thing?",
            answer: ["King Joffrey", "Lemon Cakes, tasty Lemon Cakes!", "Being married off to psychos"],
            correct: 1
            //img
        }, {
            question: "What is Tyrion Lannisters Favorite god?",
            answer: ["God of tits & wine", "The old gods & the new"],
            correct: 0
        }, {
            question: "What's Danaerys Stormborn's full name?",
            answer: ["Nobody knows, its to darn long!", "Mother of dragons"],
            correct: 0
        }, {
            question: "How many characters have died so far?",
            answer: ["4", "Almost all of them", "150,966"],
            correct: 2
        }, {
            question: "What's Cersai Lannister favourite past-time?",
            answer: ["Plotting the destruction of the Red keep", "Going to the opera", "getting a mani-pedi"],
            correct: 0
        }, {
            question: "Who said Chaos is a ladder?",
            answer: ["Petyr Balish", "Ned Stark", "old nan"],
            correct: 0
        }, {
            question: "Who is the real heros of the series",
            answer: ["Samwell Tarly & Tyrion Lannister", "Ramsey Snow & Joffrey Lannister", "your mum"],
            correct: 0
        }, {
            question: "What role does Frodo play?",
            answer: ["Cersei and Jamie's brother", "Chef of second breakfasts", "Frodo isn't in this show"],
            correct: 2
        }, {
            question: "What is Tyrion's body guard & friend",
            answer: ["Harry Potter", "Legolas of the Woodland Elves", "Bran"],
            correct: 0
        }];


    //Question possibilities, incorrect, correct, & unanswered
    var incorrectAns = 0;
    var correctAns = 0;
    var unanswered = 0;
    var currQuestion = 0;

    //variables for timer--> meaningful variable names maybe hardest part of coding
    var time = 20;
    var counter;
    var timeStart = false;

    var usrChoice = "";
    var correctIndx = quiz[currQuestion].correct;        //correct index, to check if answer picked matches the correct ans index.
    $('.start-image').fadeIn(3000);
    $('.answers').hide();
    $('.questions').hide();
    $('.restart').hide();

    //conditional to check if time is started - Sets time.
    var begin_timer = function () {
        if (timeStart != true) {
            counter = setInterval(count_down, 1000);
            timeStart = true;
        }
    };

    //begins time counter.
    var count_down = function () {
        $('.timer').html('<h2> Time Remaining: ' + time + '</h2>');
        time--;
        console.log(time);

        if (time <= 0) {
            $('.answer').empty();
            unanswered++;
            timer_stop();
            currQuestion++;
            show_question();
        }
    };

    //clears time interval -> makes changes to HTML   
    var timer_stop = function () {
        !timeStart;
        clearInterval(counter);
    }

    //DISREGARD -> Trying to see how to pull from quiz. 
    console.log(quiz[currQuestion].question);

    //brings up the current question, and it's answer.
    var show_question = function () {
        //time = 20;
        
        var qQuest = quiz[currQuestion].question;
        var answer = quiz[currQuestion].answer;
        $('.question').html(qQuest);

        if (currQuestion === quiz.length) {
            $('.restart').show();
            reset_game();
        }
        else {
            for (var i = 0; i < answer.length; i++) {
                console.log(answer[i]);
                //Like to thank Josh for this
                var addAnswer = $('<div>');
                addAnswer.text(answer[i]);
                addAnswer.addClass('button');
                addAnswer.attr('data-value', i);
                $('.answer').append(addAnswer);
            }
        }
    }

    //conditional to check if userChoice is of correct/incorrectly
    var check_answer = function () {
        //Had to add + 1, as its count was 1 behind. (due to being post inc? would a preInc have fixed this?)
        if (currQuestion + 1 === quiz.length) {
            $('.answer').hide();
            $('.question').hide();
            $('.restart').show();
            $('.correct').html('Correct Answers: ' + correctAns);
            $('.wrong').html('Wrong Answers: ' + incorrectAns);
            $('.unanswered').html('Unanswered: ' + unanswered);
           // reset_game();
           timer_stop();
        }
        else if (usrChoice !== correctIndx) {
            usrChoice = "";
            currQuestion++;
            incorrectAns++;
            $('.answer').empty();    
            show_question();
           // timer_stop();
            console.log(currQuestion);
            time = 20;
        }
        else {
           // timer_stop();
            time = 20;
            correctAns++;
            currQuestion++;
            $('.answer').empty();
            show_question();
            
        }
    }

    /*function to reset the game from beginning
    var reset_game = function () {
        $('.timer').empty();
        $('.question').empty();
        $('.timer').hide();
        $('.correct').show();
        $('.wrong').show();
        $('.unanswered').show();
        $('.correct').html('Correct Answers: ' + correctAns);
        $('.wrong').html('Wrong Answers: ' + incorrectAns);
        $('.unanswered').html('Unanswered: ' + unanswered);
        //clearInterval(counter);

        clean_stats();
        return true;
    }

    //Function for a new game round, empty/hiding/showing neccisary selectors
    var next_round = function () {
        $('.answer').empty();
        $('.answer').show();
        $('.correct').hide();
        $('.wrong').hide();
        $('.unanswered').hide();
        $('.restart').hide();
        $('.start-image').show();
        $('.start').show();
        //timer_stop();
        //begin_timer();
        //count_down();
        //$('.timer').show();
    }

    //Sets all counted variables back to Zero for new round
    var clean_stats = function () {
        currQuestion = 0;
        unanswered = 0;
        correctAns = 0;
        incorrectAns = 0;
    }*/

    var get_image = function () {
        var quizImage = game[currQuestion].gif
        $('.image').append('<img> class="image" src=" + quizImage + "></img');
        $('.timer').empty();
    }

    // calling the timer once before on click for smoother start.
    //for start button
    $('.start').on('click', function () {
    
       $(this).hide();
       // $('.question').show();
        $('.start-image').fadeOut(200);
        $('.question').slideDown();
        $('.answers').show()
        //calling sleep so that when answers pop up, the image is already gone.
        sleep(250).then(() => {
            
           $('.timer').show("fast"); 
            time = 20;
            begin_timer();
            
            $('.answer').fadeIn("slow");  
            show_question();
        });
    });


    //event for answer click
    $('.answer').on('click', '.button', function () {
        usrChoice = parseInt($(this).attr('data-value'));
        check_answer();
        console.log(correctIndx);
        console.log(usrChoice);
    });

    $('.restart').on('click', function () {
        //next_round();
        location.reload();
    });


    //JS equivalent to sleep() -- Allowing for smoother animation
    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

});