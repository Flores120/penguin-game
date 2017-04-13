function playGame() {
    $(".landingPage").hide(100);
}
 function yetiAlert(){
   var modal = document.getElementById("alert");
   var yeti = document.getElementById("yeti");
   yeti.style.backgroundImage = "url('./img/yeti.png')";
   modal.style.display = "block";
};
function closeAlert(){
  var modal = document.getElementById("alert");
  var yeti = document.getElementById("yeti");
  var penguin1 = document.getElementById("penguin1");
  var penguin2 = document.getElementById("penguin2");
  var penguin3 = document.getElementById("penguin3");
  var penguin4 = document.getElementById("penguin4");
  var penguin5 = document.getElementById("penguin5");
  var penguin6 = document.getElementById("penguin6");
  var penguin7 = document.getElementById("penguin7");
  var penguin8 = document.getElementById("penguin8");
  modal.style.display = "none";
  // yeti.style.backgroundImage = "url('./img/mound_9.png')";
  penguin1.style.backgroundImage = "url('./img/mound_1.png')";
  penguin2.style.backgroundImage = "url('./img/mound_2.png')";
  penguin3.style.backgroundImage = "url('./img/mound_3.png')";
  penguin4.style.backgroundImage = "url('./img/mound_4.png')";
  penguin5.style.backgroundImage = "url('./img/mound_5.png')";
  penguin6.style.backgroundImage = "url('./img/mound_6.png')";
  penguin7.style.backgroundImage = "url('./img/mound_7.png')";
  penguin8.style.backgroundImage = "url('./img/mound_8.png')";
}

function penPop1(){
  var penguin = document.getElementById("penguin1");
  penguin.style.backgroundImage = "url('./img/penguin_1.png')";
}
function penPop2(){
  var penguin = document.getElementById("penguin2");
  penguin.style.backgroundImage = "url('./img/penguin_2.png')";
}

function penPop3(){
  var penguin = document.getElementById("penguin3");
  penguin.style.backgroundImage = "url('./img/penguin_3.png')";
}
function penPop4(){
  var penguin = document.getElementById("penguin4");
  penguin.style.backgroundImage = "url('./img/penguin_4.png')";
}
function penPop5(){
  var penguin = document.getElementById("penguin5");
  penguin.style.backgroundImage = "url('./img/penguin_5.png')";
}

function penPop6(){
  var penguin = document.getElementById("penguin6");
  penguin.style.backgroundImage = "url('./img/penguin_6.png')";
}
function penPop7(){
  var penguin = document.getElementById("penguin7");
  penguin.style.backgroundImage = "url('./img/penguin_7.png')";
}

function penPop8(){
  var penguin = document.getElementById("penguin8");
  penguin.style.backgroundImage = "url('./img/penguin_8.png')";
}
