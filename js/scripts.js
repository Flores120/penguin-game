 function yetiAlert(){
   var modal = document.getElementById("alert");
   var yeti = document.getElementById("yeti");
   yeti.style.backgroundImage = "url('./img/yeti.png')";
   modal.style.display = "block";
};

function closeAlert(){
  var modal = document.getElementById("alert");
  var yeti = document.getElementById("yeti");
  modal.style.display = "none";
  yeti.style.backgroundImage = "url('./img/mound_9.png')";
}
