$(document).ready(function() {

var marker = "x";
$(".reset").click ( function() {
  $(".box").html("");
});
//var reset = function () {

//};

$(".box").click( function () {
  if ($(this).text() === "x" || $(this).text() === "o") { // user playing a box more than once
    return;
  }
  $(this).text(marker); // update board
// switch maker
  if (marker === "x") {
    marker = "o";
  } else {
    marker = "x";
  }


  var one = $(".one").html();
  var two = $(".two").html();
  var three = $(".three").html();
  var four = $(".four").html();
  var five = $(".five").html();
  var six = $(".six").html();
  var seven = $(".seven").html();
  var eight = $(".eight").html();
  var nine = $(".nine").html();

  


  if ((one === two && two === three && three === one) && (one === "x" || one === "o") ) {
     swal("You Won!", "You clicked the button", "success");
     $(".box").html("");
  }
  else if ((four === five && five === six && four === six) && (four === "x" || four === "o") ) {
    swal("You Won!", "You clicked the button", "success");
    $(".box").html("");
  }
  else if ((seven === eight && eight === nine && seven === nine) && (seven === "x" || seven === "o") ) {
    swal("You Won!", "You clicked the button", "success");
    $(".box").html("");
  }
  else if ((one === four && four === seven && one === seven) && (one === "x" || one === "o")) {
    swal("You Won!", "You clicked the button", "success");
    $(".box").html("");
  }
  else if ((two === five && five === eight && two === eight) && (two === "x" || two === "o") ) {
    swal("You Won!", "You clicked the button", "success");
    $(".box").html("");
  }
  else if ((three === six && six === nine && three === nine) && (three === "x" || three === "o")) {
    swal("You Won!", "You clicked the button", "success");
    $(".box").html("");
  }
  else if ((one === five && five === nine && one === nine) && (one === "x" || one === "o") ) {
    swal("You Won!", "You clicked the button", "success");
    $(".box").html("");
  }
  else if ((three === five && five === seven && three === seven) && (three === "x" || three === "o") ) {
    swal("You Won!", "You clicked the button", "success");
    $(".box").html("");
  }
});



});
