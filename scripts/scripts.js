// Open and close side nav

$(".toggle-btn").click(function () {
    $(".overlay").show();

    // check if width < 768
    if (window.matchMedia('(max-width: 767px)').matches) {
        $(".side-nav").css("min-width", "250px");
    } else {
        $(".side-nav").css("min-width", "25%");
    }
});
$(".overlay").click(function () {
    $(this).hide();
    $(".side-nav").css("min-width", "0");
});


//Drag categories

$(".category").draggable({
    axis: "x",
    containment: "parent",
    cursor: "move",
});