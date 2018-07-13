/*Triva game logic */
$(function () {

    var _t = this;       

    //Game questions ands answers (multichoice format)
    var quiz = [   
        {
            question:  "What does Jon Snow know?",
            answer:    ["Jon Snow knows nothing "," Jon Snow knows theoretical physics"],
            correct:   0
            //img
        }, {
            question:  "What's Sansa Starks favorite thing?",
            answer:    ["King Joffrey", "Lemon Cakes, tasty Lemon Cakes!","Being married off to psychos"],
            correct:   1
            //img
        }, {
            question:  "What is Tyrion Lannisters Favorite god?",
            answer:    ["God of tits & wine","The old gods & the new"],
            correct:   0
        }, {
            question:  "What's Danaerys Stormborn's full name?",
            answer:    ["Nobody knows, its to darn long!","Mother of dragons"],
            correct:   0
        }, {
            question:  "How many characters have died so far?",
            answer:    ["4","Almost all of them", "150,966"],
            correct:   2
        }, {
            question:  "What's Cersai Lannister favourite past-time?",
            answer:    ["Plotting the destruction of the Red keep", "Going to the opera", "getting a mani-pedi"],
            correct:   0
        }, {
            question:  "Who said Chaos is a ladder?",
            answer:    ["Petyr Balish","Ned Stark", "old nan"],
            correct:   0
        }, {
            question:  "Who is the real heros of the series",
            answer:    ["Samwell Tarly & Tyrion Lannister","Ramsey Snow & Joffrey Lannister", "your mum"],
            correct:   0
        }, {
            question:  "What role does Frodo play?",
            answer:    ["Cersei and Jamie's brother","Chef of second breakfasts","Frodo isn't in this show"],
            correct:   2
        },{
            question:  "What is Tyrion's body guard & friend",
            answer:    ["Harry Potter", "Legolas of the Woodland Elves", "Bran"],
            correct:   0
        }];
    

    //Question possibilities, incorrect, correct, & unanswered
    var incorrectAns = 0;
    var correctAns   = 0;
    var unanswered   = 0;
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
    var begin_timer = function() {
        if ( timeStart != true ){
            counter = setInterval(count_down, 100);
            timeStart = true;
        }
    };

    //begins time counter.
    var count_down = function() {
        $('.timer').html('<h2> Time Remaining: ' + time + '</h2>');
        time--;
        console.log(time);

        if ( time <= 0 ) {
            $('.answer').empty();
           unanswered++;
           timer_stop();
           currQuestion++;
           show_question();    
        }
    };

    //clears time interval -> makes changes to HTML   
    var timer_stop = function() {
        !timeStart;
        time = 20;
        clearInterval(time);        
    }

    //DISREGARD -> Trying to see how to pull from quiz. 
    console.log( quiz[currQuestion].question );
    
    var show_question = function() {
        var qQuest = quiz[currQuestion].question;   
        var answer = quiz[currQuestion].answer;
        $('.question').html(qQuest);

        for ( var i=0; i < answer.length; i++ ){
            console.log(answer[i]);

            //Like to thank Josh for this
            var addAnswer = $('<div>'); 
            addAnswer.text(answer[i]);
            addAnswer.addClass('button');
            addAnswer.attr('data-value', i);
            $('.answer').append(addAnswer);
        }
    }

    var check_answer = function() {
        if (usrChoice !== correctIndx){
            usrChoice = "";
            currQuestion++;
            show_question();
        }
        else {
            timer_stop();

            correctAns++;
            currQuestion++;
            
            $('.answer').empty();
            setTimeout(show_question, 1000)
            
        }
    }

    var reset = function() {

    }
    //JS equivalent to sleep() -- Allowing for smoother animation
    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    $('.start').on('click', function(){
        $(this).hide();
        $('.question').show();
        $('.start-image').fadeOut(200);
        $('.answers').fadeIn("slow");
       // $('.answers').show();
        
        //calling sleep so that when answers pop up, the image is already gone.
        sleep(400).then(() => {
        show_question(); 
        begin_timer();
        });
    });
    $('.answer').on('click', '.button', function(){
        usrChoice = parseInt($(this).attr('data-value'));
        check_answer();
        console.log(correctIndx);
        console.log(usrChoice);
    });

});