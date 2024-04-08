var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');


var app={
        questions:[
            {
                  q: "Which country is known as the 'Land of the Rising Sun?'",
              
                options: ['China', 'Japan', 'South Korea', 'Thailand'],
                answer:2
            },
            {
                q:'Which country is the largest producer of coffee in the world?',
                options: ['Colombia', 'Brazil', ' Ethiopia', 'Vietnam'],
                answer:2
            },
            {
                q:'What is the capital city of France?',
                options: ['London', 'Paris', 'Rome', 'Berlin'],
                answer:2
            },
            {
                q:'What is the chemical symbol for water?',
                options: ['O', 'HO2', 'W ', 'H2O'],
                answer:4
            },
            {
                q:'What is the largest planet in our solar system?',
                options: ['Mars', 'Saturn', 'Jupiter', 'Earth'],
                answer:3
            },
            {
                q:'What is the tallest mountain in the world?',
                options: ['Mount Kilimanjaro', 'Mount Fuji', ' Mount McKinley', ' Mount Everest'],
                answer:4
            }
        ],
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.score+"/"+this.questions.length ;
         
        }
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}



