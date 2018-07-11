/*Triva game logic */
$(function () {

    var _this = this;           

    var quiz = [   //Game questions ands answers (True/False format)
        {
            question:  "What does Jon Snow know?",
            answer:    "Jon Snow knows nothing",
            incorrect: "Jon Snow knows theoretical physics"
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

    var time = 20;
    var counter;
    var timeStart = false;
    
    var chosenQuestion = [];

    console.log(quiz[chosenQuestion]._this.question)
    
    $('.answers').hide();
    $('.questions').hide();
    $('.reset').hide();
    
    var begin_timer = function() {
        if (timeStart != true){
            counter = setInterval(count_down, 1000);
            timeStart = true;
        }
    };

    function count_down() {
        $('.timer').html('<h2> time Remaining: ' + time + '</h2>');
        time--;
        console.log(time);
    }
   // begin_timer();
    count_down();

    
    






});