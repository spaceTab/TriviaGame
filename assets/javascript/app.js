/*Triva game logic */
$(function () {

    //var _t = this;

    //Game questions ands answers (multichoice format)
    var quiz = [
        {
            question:"What do you do with potatoes?",
            answer: ["Boil 'um! Mash 'um!, stick 'em in a stew!", "Idk I'm smeagle", "Give them away"],
            correct: 0,
            img:    './assets/images/potaytoes.gif'
        }, {
            question: "What was was gollums name before he got weird?",
            answer: ["Smeagle", "Fabio", "Bilbo"],
            correct: 0,
            img:    './assets/images/gollumEars.gif'
        }, {
            question: "What was Gandalfs name became Galdaf the White",
            answer: ["Gandalf the Grey", "Laquisha", "Gandalf"],
            correct: 0,
            img: './assets/images/sassygandalf1.gif'
        }, {
            question: "Where is Frodo from?",
            answer: ["Rohan", "The Shire, like us!",  "New York"],
            correct: 1,
            img: './assets/images/theshire.gif'
        }, {
            question: "Who Came in at the last minute to save Frodo & Sam",
            answer: ["Gothmog", "The Eagles", "Pippin"],
            correct: 1,
            img: './assets/images/eagles.gif'
        }, {
            question: "Who is the Leads the Orcs",
            answer: ["Sauromon", "Witch King of Angmar", "Balrog"],
            correct: 0,
            img: './assets/images/sarumon1.gif'
        }, {
            question: "Shall I pass?",
            answer: ["Sure, by all means", "YOU SHALL NOT PASS!"],
            correct: 1,
            img: './assets/images/nopass.gif'
        }, {
            question: "Who is the real Heroes of this story",
            answer: ["SamWise Gange", "Frodo", "Sauromon"],
            correct: 0,
            img: './assets/images/samwise.gif'
        }, {
            question: "What role does Frodo play?",
            answer: ["Head master at Hogwarts", "Chef of second breakfasts", "bearer of the Ring"],
            correct: 2,
            img: './assets/images/frodolol.gif'
        }, {
            question: "Who is the funnest of the fellowship?",
            answer: ["Gimly, Obviously", "Legolas of the Woodland Elves", "Martha Stewart"],
            correct: 0,
            img: './assets/images/gimli.gif'
        }];


    //Question possibilities, incorrect, correct, & unanswered
    var incorrectAns = 0, correctAns = 0, unanswered = 0;
    var currQuestion = 0;
    var imgCount = 0;

    //variables for timer--> meaningful variable names maybe hardest part of coding
    var time = 20;
    var counter;
    var timeStart = false;

    var usrChoice = "";
    var correctIndx = quiz[currQuestion].correct;        //correct index, to check if answer picked matches the correct ans index.
    $('.start-image').fadeIn("slow");
    $('.answers').hide();
    $('.questions').hide();
    $('.restart').hide();
    $('.incorrGuess').hide();
    $('.corrGuess').hide();

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
            //timer_stop();
            currQuestion++;
            show_question();
            time = 20;
        }
    };

    //clears time interval -> makes changes to HTML   
    var timer_stop = function () {
        !timeStart;
        clearInterval(counter);
    }

   // console.log(quiz[currQuestion].question);
$('.answer').slideDown("slow");
    //brings up the current question, and it's answer.
    var show_question = function () {
        
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
                //$('.answer').fadeIn(5000);
                $('.answer').fadeIn("slow");
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
            $('.timer').hide();
            $('.correct').html('Correct Answers: ' + correctAns);
            $('.wrong').html('Wrong Answers: ' + incorrectAns);
            $('.unanswered').html('Unanswered: ' + unanswered);
           // reset_game();
           timer_stop();
        }
        else if (usrChoice !== correctIndx) {
            get_image();  
            usrChoice = "";
            currQuestion++;
            incorrectAns++;
            imgCount++;
            $('.answer').empty();
            $('.timer').hide();
            $('.question').hide();    
            $('.incorrGuess').show();
            setTimeout(function(){
                $('#img').remove();   
                $('.timer').show();
                $('.question').show();
                $('.incorrGuess').hide();
                time = 20;
                show_question(); 
            }, 4000, count_down());
            $('.answer').slideUp("slow"); 
            time = 20;
        }
        else {
            console.log('question count: ' + currQuestion); 
            get_image();
            correctAns++;
            currQuestion++;
            imgCount++;
            $('.timer').hide();
            $('.answer').empty();
            $('.question').hide();
            $('.corrGuess').show();

            setTimeout(function(){   //function to set time for gif display
                $('#img').remove();
                $('.timer').show();  
                $('.question').show();
                $('.corrGuess').hide();
                time = 20; 
                show_question();
            }, 4500, count_down());
            $('.answer').slideUp("slow");
        }
    }


    var get_image = function () {

        var quizImage = quiz[currQuestion].img;

       // $('.img').show();
        $('.timer').empty();  //appends image to div -> dk why had yo use ID's but it worked.
        $('.img').append('<img id="img" src=' + quizImage + '></img');
        console.log('IMG YES');
    }

    // calling the timer once before on click for smoother start.
    //for start button to question transition.
    $('.timer').hide();
    setTimeout(count_down, 1);
        

    $('.start').on('click', function () {
        $(this).hide();
       // $('.question').show();
        $('.start-image').fadeOut(200);
        $('.question').slideDown();
        //$('.answers').show()
        //calling sleep so that when answers pop up, the image is already gone.
        sleep(250).then(() => {
            
           $('.timer').show("fast"); 
           $('.answer').fadeIn("slow");  
            show_question();
            begin_timer();
            time = 20;
        });
    });

    //event for answer click
    $('.answer').on('click', '.button', function () {
        usrChoice = parseInt($(this).attr('data-value')); //Checks the string input to the index of answer
        check_answer();
        console.log(correctIndx);
        console.log(usrChoice);
    });

    $('.restart').on('click', function () {
        //next_round();
        location.reload();      //hope this is alright to use.
    });                        //my next round function was wonky. 


    //JS equivalent to sleep() -- Allowing for smoother animation
    //found this after a long night, I realize now it's pretty much just set timeout
    //Gonna keep cause it looks fancy
    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

});




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