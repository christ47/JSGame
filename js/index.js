document.addEventListener('DOMContentLoaded', function(wordGen) { // var myString = " "
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
      // {name:"", value=""};
      // {name:"", value=""};
      // {name:"", value=""};

    ]
  };
  var playerScore = 0;
  // document.getElementById('pointStatus').innerHTML = playerScore
  var correctAnswer = 0;
  var wordValue;

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
    var count = 9;
    document.getElementById("answerArea").disabled = false;
    var timer = setInterval(function() {
        $("#counter").html(count--);

        document.getElementById('scorePlace').innerHTML = playerScore;
        // $("#show").click(function(){
        // $("#answerArea").show();
        if (count == -1) {
          clearInterval(timer);
          document.getElementById('typeLine').innerHTML = "Game over. Please press the Start Button to retry";
          playerScore = 0;
          document.getElementById("answerArea").disabled = true;

          $("#answerArea").keypress(function keyClick(event) {
            if (event.keyCode === 13.) {
              // $(this).hide();
              // console.log(count);
              document.getElementById('pointStatus').innerHTML = "Game over";
            }
            // alert("please restart");
          });

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
    $("#typeLine").stop();
    $('#typeLine').css('height:','4000px');
    // $('.myElementClass').css('text-align','center');
  });
});
// })
//
//   }
// })
// ANIMATIONS
// $(document).ready(function(){

// }


// function hardloop() {
//     $('#typeLine').css({right:0});
//     $('#typeLine').animate ({
//         right: '+=1400',
//     }, 3000, 'linear', function() {
//         hardloop();
//     });
// }
// hardloop();
//   });
//       $(document).ready(function() {
//
// })
// $(document).ready(function() {
//     function loop() {
//         $('#clouds').css({right:0});
//         $('#clouds').animate ({
//             right: '+=1400',
//         }, 5000, 'linear', function() {
//             loop();
//         });
//     }
//     loop();
// });
//
// $(document).ready(function(){
// reslide();
// });
// function reslide(){
// $(‘.slide-right’).css({width:’0′}).animate({width:’100%’}, 400, reslide);
// }


//       // color of text
//     // points +1
//       // then count a point
//       return document.getElementById('pointStatus').innerHTML = "Correct"
//       // points +1
//     }
//     else {
//       // retry return not quite
//
//       return document.getElementById('pointStatus').innerHTML = "Not quite! Try again"


//     if (answerArea==) {

//       // color of text
//     // points +1
//       // then count a point
//       return document.getElementById('pointStatus').innerHTML = "Correct"
//       // points +1
//     }
//     else {
//       // retry return not quite
//
//       return document.getElementById('pointStatus').innerHTML = "Not quite! Try again"


//
// keydown center
//

// document.addEventListener('DOMContentLoaded',function(){
//   document.getElementById("typeLine").addEventListener("ke", displayDate);
//
// function displayDate() {
//     document.getElementById("demo").innerHTML = Date();
//



// });

//     }
//

//
//
//



// wordGen();

// COUNTER
// var count =  function setInterval(function(t) {
//   for (var t = 90; t < 1; t--) {
//     document.getElementById('timeSlot').innerHTML= t;
//
//     if (t<1) { clearInterval(count);
//       document.getElementById('timeSlot').innerHTML = "Game over!";
//     }
//
//     else {};
//   }
// }, 1000)
//
// count();







// var deadline = new Date("Jan 5, 2018 15:37:25").getTime();
// var deadline = new Date("Jan 5, 2018 15:37:25").getTime();
// var x = setInterval(function() {
// var now = new Date().getTime();
// var t = deadline - now;
// var days = Math.floor(t / (1000 * 60 * 60 * 24));
// var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
// var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((t % (1000 * 60)) / 1000);
// document.getElementById("demo").innerHTML = days + "d "
// + hours + "h " + minutes + "m " + seconds + "s ";
//     if (t < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "EXPIRED";
//     }
// }, 1000);
// //
// // function startTimer(duration, display) {
// //     var timer = duration, minutes, seconds;
// //     setInterval(function () {
// //         minutes = parseInt(timer / 60, 10)
// //         seconds = parseInt(timer % 60, 10);
// //
// //         minutes = minutes < 10 ? "0" + minutes : minutes;
// //         seconds = seconds < 10 ? "0" + seconds : seconds;
// //
// //         display.textContent = minutes + ":" + seconds;
// //
// //         if (--timer < 0) {
// //             timer = duration;
// //         }
// //     }, 1000);
// // }
//
// //
// // <!-- Display the countdown timer in an element -->
// // <p id="demo"></p>
// //
// // <script>
// // // Set the date we're counting down to
// // var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();
// //
// // // Update the count down every 1 second
// // var x = setInterval(function() {
// //
// //   // Get todays date and time
// //   var now = new Date().getTime();
// //
// //   // Find the distance between now and the count down date
// //   var distance = countDownDate - now;
// //
// //   // Time calculations for days, hours, minutes and seconds
// //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// //
// //   // Display the result in the element with id="demo"
// //   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
// //   + minutes + "m " + seconds + "s ";
// //
// //   // If the count down is finished, write some text
// //   if (distance < 0) {
// //     clearInterval(x);
// //     document.getElementById("demo").innerHTML = "EXPIRED";
// //   }
// // }, 1000);
// // </script>
// //
// //
// // var deadline = new Date("Jan 5, 2018 15:37:25").getTime();
// // var deadline = new Date("Jan 5, 2018 15:37:25").getTime();
// // var x = setInterval(function() {
// // var now = new Date().getTime();
// var t = deadline - now;
// var days = Math.floor(t / (1000 * 60 * 60 * 24));
// var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
// var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((t % (1000 * 60)) / 1000);
// document.getElementById("demo").innerHTML = days + "d "
// + hours + "h " + minutes + "m " + seconds + "s ";
//     if (t < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "GAMME OVER. Your Scored "+  " points";
//     }
// }, 1000);

// Operation to make words changed
// var count = 90;

// function startCount() {

// for (var i = 90; i >=0; i--) {
//   setTimeout(function() {
//     document.getElementById('counter').innerHTML = count;
// } ,1000)}

// function startCounter() {
//   var count = 90, timer = setInterval(function() {
//       $("#counter").html((count++)+1);
//       if(count == 59) clearInterval(timer);
//   }, 1000);
// }

// keyloging

// var data  = {
// lessons: [
// {topic: "Business Skills", description:"Soft skills for making people not hate you."},
// {topic: "HTML", description:"help to make lasagne."},
// {topic: "CSS", description:"Concise Signage System."},
// {topic: "JS", description:"Jumbo Shrimp."}
// ]
// }
// var rand = Math.ceil(Math.random()*3);
// console.log(data.lessons[rand].topic);
// console.log(data.lessons[1].description);

// location.reload();
