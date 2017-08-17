// scroll to different sections
$(".home-link").click(function(){
    $('html,body').animate({
    scrollTop: $('body').offset().top},
    'slow');
});
$(".about-link").click(function() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top},
        'slow'); 
    closeSideNav();
});
$(".projects-link").click(function(){
    $('html,body').animate({
    scrollTop: $('.projects').offset().top},
    'slow');
    closeSideNav();
});
$(".hobbies-link").click(function(){
    $('html,body').animate({
    scrollTop: $('.hobbies').offset().top},
    'slow');
    closeSideNav();
});
$(".resume-link").click(function(){
    $('html,body').animate({
    scrollTop: $('.resume').offset().top},
    'slow');
    closeSideNav();
});
$(".contact-link").click(function(){
    $('html,body').animate({
    scrollTop: $('.contact').offset().top},
    'slow');
    closeSideNav();
});
//calls setHeaderAndNavHeight on every window resize event
$(window).resize(function(){
    setHeaderAndNavHeight();
});

// calls windowBelowContent on every scroll event
$(window).scroll(function() {
    windowBelowContent();
});
// calls windowBelowContent and setHeaderAndNavHeight when page is ready
$(document).ready(function() {
    windowBelowContent();
    setHeaderAndNavHeight();
    tallyTraffic();
});
// toggle right nav open/closed
$("#nav-icon").click(function(e){
    e.stopPropagation();
    $("#right-nav").toggleClass("open");
    $("#nav-icon").toggleClass("open");
});
$("#right-nav, navbar").click(function(e){
    e.stopPropagation();
});
$("html,body").click(function(){
    closeSideNav();
});
function closeSideNav() {
    $('#right-nav').removeClass('open');
    $("#nav-icon").removeClass("open");
}
// Submit contact form
$("#message-form").submit(function(event){
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var url = "https://hooks.slack.com/services/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"
    var payload={"channel": "#portfolio-page", "username": email , "text": name + ': ' + message, "icon_emoji": ":ghost:"};
    $.post(url,JSON.stringify(payload), function(data){
    console.log(data);
    $("#message-form").trigger("reset");
    });
    event.preventDefault();
});
// measures traffic on webpage
function tallyTraffic(){
    var url = "https://hooks.slack.com/services/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"
    var payload={"channel": "#portfolio-traffic", "text": "viewed", "icon_emoji": ":ghost:"}
    $.post(url,JSON.stringify(payload), function(data){
    console.log(data);
    });
}

// checks if the top of the window is below the content and changes classes accordingly
function windowBelowContent(){
    var top = $(".about-cta").offset().top;
    if ($(this).scrollTop() >= top) {
    $("#navbar").addClass("black-nav");
    } else {
    $("#navbar").removeClass("black-nav");
    }
}
function setHeaderAndNavHeight(){
    $(".header").css({
    height: $(window).height()
    });
    $("#right-nav").css({
    height: $(".header").height()
    });
}