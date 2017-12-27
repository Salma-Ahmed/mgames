//Slider from scratch

var imgpath = ["images/slide-1.png","images/slide-2.png","images/slide-3.png","images/slide-4.png"]; 
var pages = $(".m-pagination span"); 
var img = $(".slider .img-container img"); 
var i = 0;
var j;

setInterval(function () {
    i++;
    if (i > imgpath.length - 1) {
        i = 0;
    }
    img.fadeOut(400, function () {
            img.attr("src", imgpath[i]);
        })
        .fadeIn(400);

    j = i;
    pages.removeClass("active");
    $(pages[j]).addClass("active");

}, 3000);

$(pages[0]).addClass("active");

$(".m-pagination span").click(function () {
    var j = $(this).index();
    i = j;
    img.attr("src", imgpath[i]);
    pages.removeClass("active");
    $(this).addClass("active");
});