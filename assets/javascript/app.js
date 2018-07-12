/*Triva game logic */
$(function () {

    var _t = this;       

    //Game questions ands answers (True/False format)
    var quiz = [   
        {
            question:  "What does Jon Snow know?",
            answer:    ["Jon Snow knows nothing "," Jon Snow knows theoretical physics"],
            correct:   "Jon Snow Knows nothing"
            //img
        }, {
            question:  "What's Sansa Starks favorite thing?",
            answer:    "Lemon Cakes, tasty Lemon Cakes!",
            incorrect: "Being married off to psychos"
            //img
        }, {
            question:  "What is Tyrion Lannisters Favorite god?",
            answer:    "God of tits & wine",
            incorrect: "The old gods & the new"
        }, {
            question:  "What's Danaerys Stormborn's full name?",
            answer:    "Nobody knows, its to darn long!",
            incorrect: "Mother of dragons"
        }, {
            question:  "How many main characters have died so far?",
            answer:    "Almost all of them",
            incorrect: "4"
        }, {
            question:  "What's Cersai Lannister favourite past-time?",
            answer:    "Plotting the destruction of the Red keep",
            incorrect: "Going to the Opera"
        }, {
            question:  "Who said Chaos is a ladder?",
            answer:    "Petyr Balish",
            incorrect: "Ned Stark"
        }, {
            question:  "Who is the real heros of the series",
            answer:    "Samwell Tarly & Tyrion Lannister",
            incorrect: "Ramsey Snow & Joffrey Lannister"
        }, {
            question:  "What role does Frodo play?",
            answer:    "Frodo isn't in this show",
            incorrect: "Chef of second breakfasts"
        }];
    

    //Question possibilities, incorrect, correct, and unanswered
    var incorrectAns = 0;
    var correctAns   = 0;
    var unanswered   = 0;
    var currQuestion = 0;

    //variables for timer--> meaningful variable names maybe hardest part of coding
    var time = 20;
    var counter;
    var timeStart = false;
    
    for ( var i = 0; i < quiz.length; i++ ){
        console.log(quiz[i]);
        console.log(this[i]);
    }

    
    $('.answers').hide();
    $('.questions').hide();
    $('.reset').hide();
    
    //conditional to check if time is started - Sets time.
    var begin_timer = function() {
        if ( timeStart != true ){
            counter = setInterval(count_down, 1000);
            timeStart = true;
        }
    };

    //begins time counter.
    var count_down = function() {
        $('.timer').html('<h2> Time Remaining: ' + time + '</h2>');
        time--;
        console.log(time);

        if ( time < 0 ) {
           unanswered++;
           timer_stop();
        }
    };

    //clears time interval -> makes changes to HTML   
    var timer_stop = function() {
        !timeStart;
        clearInterval(counter);
        $('.timer').html(' <h2> You\'re not a \n stable Genius </h2>');        
    }

    var begin_quiz = function() {
        $('.start').on('click', function(){
            console.log( 'button clicked -> Timer begins');
            begin_timer();
            $('.timer').html('<h2> Time Remaining: ' + time + '</h2>');
        });
        }
// begin_quiz();
// begin_timer();
// count_down();

    //DISREGARD -> Trying to see how to pull from quiz. 
    console.log( quiz[currQuestion].question );
    console.log( quiz[currQuestion].answer );
    
    var get_question = function() {
        $('.question').html(quiz[currQuestion].question);
        
        var answer = quiz[currQuestion].answer;

        for ( var i=0; i <= answer.length; i++ ){
            console.log(answer[i]);

            var addAnswer = $('<div>');
            addAnswer.text(answer[i])
            //$('.answer').html(quiz[currQuestion].answer);
            $('.answer').append(addAnswer);
        }
    }();
    






});