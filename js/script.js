/**
 * Created by ianarsenault on 7/22/16.
 */

var repositionModal = function () {
    var modal = $(this),
        dialog = modal.find('.modal-dialog');
    modal.css('display', 'block');
    // Dividing by 3 makes it centered slightly above center page
    dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 3));
};

// Enables scrolling after 7.5 seconds -- loading screen 
var switchScroll = function () {
    var body = $("body");
    setTimeout(function () {
        body.removeClass("stop-scrolling");
    }, 7500);
};
// Show main content after landing div loads first
var mainContent = function () {
    var main = $(".main-section");
    setTimeout(function () {
       main.show();
    }, 3300);
    /** Transition background-color of body after
     *  splash div loads first - this stops the blue flash **/
    var body = $("body");
    setTimeout(function () {
       body.css("background-color", "#1f6fb4");
    }, 3100);
};

$(document).ready(function () {
    /*$('.carousel').carousel({
        interval: false
    });*/
    
    $(".main-section").hide();

    // Display main content 3 seconds after landing div
    mainContent();

    /* Fade out overlay and loading screen */
    $(".loading-overlay").fadeIn('slow').show().delay(5000).fadeOut(2500);
    $("#fadediv").show();
    /* Progress Bar animation */
    $(".prog-1, .prog-2, .prog-3 ").animate({
        width: "100%"
    }, 250 ); // start in under a sec
    
    // Popover init
    $('[data-toggle="popover"]').popover();
    // Tooltip Init
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
    });

    $("#show-btn").on('click', function () {
        $(".clear-overlay").hide();
    });

    /* Vertically center Modals so they don't show up at top of screen */
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', repositionModal);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(repositionModal);
    });

    // scroll enable disable function
   switchScroll();

    // Scrollspy init and target - offset
    $('body').scrollspy({
        target: '#spy-scroll-id',
        offset: 200
    });


    /*  Scrollspy Functionality */
    /* Scrollspy Active Navbutton function */
    $('.navbar li').click(function() {
        // removes active class from previous clicked button
        $('.navbar li.active').removeClass('active');
        var $this = $(this); // set click nav-button to variable
        // If the nav btn clicked doesn't have class .active
        if (!$this.hasClass('active')) {
            // add class .active
            $this.addClass('active');
        }
    });




});