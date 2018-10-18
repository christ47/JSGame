document.addEventListener('DOMContentLoaded', function(wordGen) { // var myString = " "

  // name what u wanna store
  document.getElementById("answerArea").disabled = true;
  var word = {
    wordData: [{
        name: "yellow",
        value: "pink"
      },
      {
        name: "Kangeroo",
        value: "white"
      },
      {
        name: "Spartacus",
        value: "purple"
      },
      {
        name: "Green",
        value: "black"
      },
      {
        name: "Cream",
        value: "yellow"
      },
      {
        name: "pink",
        value: "blue"
      },

      {
        name: "black",
        value: "grey"

      },
      {
        name: "Violet",
        value: "white"
      },

      {
        name: "Royal Blue",
        value: "green"
      },
      {
        name: "Orange",
        value: "brown"
      },
      {
        name: "blue",
        value: "blue"
      },
      //
      {
        name: "white",

        value: "white"
      },
      {
        name: "Pigs are...",
        value: "pink"
      },
      //
      {
        name:"Paprika is ORANGE",
       value:"white"
     },
     {
       name: "apples are...",
       value:"red"

     },
     {
       name: "chalk is...",
       value: "green"

     }

    ]
  };
  var playerScore = 0;
  // document.getElementById('pointStatus').innerHTML = playerScore
  var correctAnswer = 0;
  var wordValue;
  var topscoringplayer = JSON.parse(localStorage.getItem("Name"));
  var highestScore = JSON.parse(localStorage.getItem("Scores"));
  console.log(highestScore);
    document.getElementById('topScore').innerHTML = "Name:  "+ topscoringplayer + "   Score:  "+ highestScore;

  function wordGen() {
    var randomNum = Math.floor(Math.random() * 9);
    var numberPick = word.wordData[randomNum];
    var randomWord = numberPick.name;
    correctAnswer = numberPick.value;
    console.log(correctAnswer);

    document.getElementById('typeLine').innerHTML = randomWord;


    $('#typeLine').addClass(correctAnswer);
    wordValue = numberPick.value;
  }
  // function wordColor() {
  //   document.getElementById('inGame').innerHTML = "red";
  //
  var gameStart = document.getElementById('startBtn');
  // wordColor!=randomColorBg
  // CREATE
  gameStart.addEventListener('click', function(event) {
    wordGen();
    playerScore = 0;
    var count = 9;
    document.getElementById('scorePlace').innerHTML = playerScore;
    document.getElementById("answerArea").disabled = false;
    document.getElementById('answerArea').value = "";
    var timer = setInterval(function() {
      $("#counter").html(count--);
      // $('#typeLine').addClass(correctAnswer);
      // wordValue = numberPick.value;

      // $("#show").click(function(){
      // $("#answerArea").show();
      if (count == -1) {
        document.getElementById("startBtn").disabled = false;
        // playerScore = 0;
        clearInterval(timer);
        document.getElementById('typeLine').innerHTML = "Game over!";
        playerScore = parseInt(document.getElementById("scorePlace").innerHTML);
        document.getElementById("answerArea").disabled = true;
        console.log(playerScore);
        $("#typeLine").removeClass();
        if (playerScore>highestScore) {
          highestScoreName = prompt('WOAH! You got the highest score! Whats your name?')
          localStorage.setItem("Name", JSON.stringify(highestScoreName));
          localStorage.setItem("Scores", JSON.stringify(playerScore));

        //       $("#typeLine").removeClass();
        }
        // $("#answerArea").keypress(function keyClick(event) {
        //   if (event.keyCode === 13.) {
        //     // $(this).hide();
        //     // console.log(count);
        //     // document.getElementById('pointStatus').innerHTML = "Game over";
        //   }
        //   // alert("please restart");
        // });

      } else if (count > -1) {
        document.getElementById("startBtn").disabled = true;

      }
    }, 1000);
  });

  // keydown addlistener

  // points = 0;

  // random word generator


  // random colour generation
  function randomColorBg() {
    var colorLetters = '0123456789ABCDEF';
    var hash = '#';
    for (var i = 0; i < 6; i++) {
      hash += colorLetters[Math.floor(Math.random() * 16)];
    }
    return hash;
  }
  randomColorBg();

  function setBackground() {
    $(".inGame").css("background-color", randomColorBg());
  }
  setBackground();
  // $('#answerArea').keypress(keyClick);
  $("#answerArea").keypress(function keyClick(event) {
    if (event.keyCode === 13.) {
      // $("#typeLine").click();
      // alert("button clicks");
      var playersAnswer = document.getElementById('answerArea').value;

      console.log(playersAnswer);
      if (playersAnswer == correctAnswer) {
        // function pointGained (){
        // playerScore++;
        playerScore = playerScore + 1;
        document.getElementById('answerArea').value = ""
        randomColorBg();
        setBackground();
        $("#typeLine").removeClass();
        wordGen();


        document.getElementById('scorePlace').innerHTML = playerScore;
        // $('typeLine').removeClass(wordValue);

        return document.getElementById('pointStatus').innerHTML = "well done!!";

        document.getElementById('typeLine').innerHTML = randomWord;

        // console.log(document.getElementByI d('answerArea').innerHTML);
      } else {
        document.getElementById('pointStatus').innerHTML = "Not quite! Try again"
        document.getElementById('answerArea').value = ""
        console.log(document.getElementById('answerArea').innerHTML);
      }
    }
  })

  $('#hardMode').click(function() {
    loop();


    function loop() {

      $('#typeLine').animate({
        // opacity: 0.25,
        // top: '+=1400',
        height: 'toggle',
      }, 3000, 'linear', function() {
        loop();
      });
    }
  });

  $("#easyMode").click(function() {
    location.reload();
  });


  $("#wackyMode").click(function() {

    wackOut();

    function wackOut() {
      //       $('.button').click(function() {
      $('#typeLine').animate({
        deg: 18000
      }, {
        duration: 150000,
        step: function(now) {
          $(this).css({
            transform: 'rotate(' + now + 'deg)',
            wackOut
          })

        }
      })

    }
  })
  // reverseWackout();
})
// function reverseWackout() {
//   $('#typeLine').animate({
//
//         deg: 1800
//       },
//       {
//         duration: 15000,
//         step: function(now) {
//           $(this).css({
//             transform: 'rotate(' + now + 'deg)'
//             // wackOut();
//           })
//         }
//       })
//   }
// }


// });
// })

// // });

// $("#img").rotate({bind:{
//   click: function(){
//     $(this).rotate({
//       angle: 0,
//       animateTo:180,
//       callback: function(){   alert(1)  }
//       })
//     }
//   }
// });

// time intervals first 15 secs x happens if time >30 at 15secs ...

// ANIMATIONS
//
// location.reload();
// $("#img").stopRotate();
