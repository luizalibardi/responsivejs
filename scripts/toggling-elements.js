	$("#hide").click(function(){
  $(".hideshow").hide();
 });
 
 $("#show").click(function(){
  $(".hideshow").show();
 });

 $("#hidespeed").click(function(){
  $(".hideshowspeed").hide(1000);
 });
 
 $("#showspeed").click(function(){
  $(".hideshowspeed").show(1000);
 });

 $("#togglebt").click(function(){
  $(".togglecontent").toggle();
 });