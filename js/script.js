
$('.open').click( function(){

    let sideBarWidth= $('#mySidenav').innerWidth()

    $('.open').animate({left:`250px`},300)
    $('.header').css('marginLeft','250px')
     $('#mySidenav').animate({left:`0px`})
  

 })




$('.closebtn').click(function(){
    let sideBarWidth= $('#mySidenav').innerWidth()
    $('.open').animate({left:`0px`})
    $('#mySidenav').animate({left:`-${sideBarWidth}`})
    $('.header').css('marginLeft','0px')
    



})



$("a").click(function(){
    
    var href= $(this).attr("href");
    
    var sectionOffset = $(href).offset().top;
    
    $("html , body").animate({scrollTop:sectionOffset},2000);
    
})


$('#acc div').eq(0).css('display','block')
$('#acc h3').click(function(){

    $(this).next().slideToggle(500);
    $("#acc div").not($(this).next()).slideUp(500);

 })


 function countDown(){
 let nowDate = new Date()
let eventDate = new Date(2021, 8, 22);
let nowTime = nowDate.getTime()
let eventTime =  eventDate.getTime()
let remainingTime= eventTime-nowTime

var sec = Math.floor(remainingTime / 1000);
var min = Math.floor(sec / 60);
var hours = Math.floor(min / 60);
var days = Math.floor(hours / 24)-30;


hours %= 24;
min %= 60;
sec %= 60;

hours = (hours < 10) ? "0" + hours : hours;
min = (min < 10) ? "0" + min : min;
sec = (sec < 10) ? "0" + sec : sec;

document.getElementById("days").innerHTML = "<h3>"+  days + " D"+"</h3>";

document.getElementById("hours").innerHTML ="<h3>"+  hours + " h"+"</h3>";
document.getElementById("minutes").innerHTML = "<h3>"+  min + " m"+"</h3>";
document.getElementById("seconds").innerHTML = "<h3>"+  sec + " s"+"</h3>";




 

setTimeout(countDown, 1000);
 }
 countDown()




 const max = 100
$("textarea").keyup(function(){
let length= $('textarea').val().length
var letters= max-length
if(letters<=0)
{
   
    $("#remainingLetter").text("your available character finished");

}
else
{
    $('#remainingLetter').text(letters)
}


})

