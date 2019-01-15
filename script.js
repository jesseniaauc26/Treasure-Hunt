
$("#second").click(function() {
    $("#second").text("click on the chest");
    
});
$("#click").click(function() {
    $("#click").text("click the word hunt");
    $("#clue").text("yay, one step closer to the final trasure ! keep going");
});


$(".image").click(function(){
 $(".imagetwo").fadeIn();
 $("#third").show();
 $("#clue").hide();
});

$(".imagetwo").click(function() {
    $("#second").slideUp();
    $("#imagetwo").fadeOut();
    $("#third").text("CLICK THE TITLE! :)");
});

$("#finish").click(function() {
    $("#finish").text("you did it!");
    $("#second").text("congrats");
    $("#imagetwo").fadeOut();
    $("#third").hide();
    $("img").attr("src","https://previews.123rf.com/images/lucian3d/lucian3d1704/lucian3d170400110/76238458-3d-illustration-of-cartoon-heart-inside-of-treasure-chest-the-chest-is-shiny-with-golden-outlines-.jpg");
    $("#imagetwo").fadeOut();
    $("#click").text("now go on with your day");
    $("#clue").text("ThE gIfT oF lOvE");
});