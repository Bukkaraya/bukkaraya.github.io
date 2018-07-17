$('.navbar-burger').click(function(x) {
    $('.navbar-menu').toggleClass('is-active');
});

$('.show-project').click(function(x){
    $(this).closest('.project-col').children('.project-modal').addClass('is-active');
});

$('.modal-close, .modal-background').click(function(x){
    $('.project-modal').removeClass("is-active");
});