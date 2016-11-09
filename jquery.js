$(document).ready(function(){

  $("li").mouseenter(function(){
    $(this).fadeTo("slow", 0.25);
  });

  $("li").mouseleave(function(){
    $(this).fadeTo("fast", 1.0);
  });

  // $(".linkName").click(function(){
  //   $(this).css({
  //     "background-color": "#669999"
  //   });
  //   $(this).replaceWith("<br/><br/>Clicked!<br/><br/>");
  // });

  $(".linkName").click(function(){
    $(this).css({
      "background-color": "#669999"
    });
    $(this).replaceWith("<li>Clicked!</li>");
  });

});
