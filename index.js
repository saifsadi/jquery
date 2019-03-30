$("h1").click(function(){
  $("h1").text("Good Bye Boss !");
});

$("h1").addClass("big-title");

$("button").click(function(){
  alert("Button is clicked");
});

$(".second").click(function(){
  alert("Second Button clicked");
});

$("body").keypress(function(event){
  $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
  $("h1").animate({margin: 30});
});

$("h1").on("mouseout", function(){
  $("h1").animate({margin: 0});
});

$("button").click(function(){
  $("h1").slideUp().slideDown().animate({margin:20})
});
