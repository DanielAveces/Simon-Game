// var gamePattern = [];
//
// var buttonColours = ["red", "blue", "green", "yellow"];
//
//
//
// function nextSequence() {
//   var randomNumber = Math.floor((Math.random() * 4));
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//
//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//   audio.play();
// }


var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

nextSequence();




// $("#" + gamePattern[0]).addClass("pressed");
// setTimeout(function() {
//   $("#" + gamePattern[0]).removeClass("pressed");
// }, 300);
//
// $("gamePattern").change(function() {
//     audio.play();ud
//   });
//
//
// //Var for audio
//
// var audio = new Audio("sounds/" + gamePattern[0] + ".mp3");
//
// $(function() {
//   $(".btn").click(function() {
//     audio.play();
//   })
// });

// var audio = new Audio("sounds/" + gamePattern[0] + ".mp3");

// $(function() {
//   $(".btn").click(function() {
//     audio.play();
//   })
// });
