$(document).ready(function(){
    $(".desativarOverlay").click(function(){
      $("#overlay").css({"display": "none"});
    });
    $("#ativarOverlay").click(function(){
        $("#overlay").css({"display": "flex"})
    })
  });