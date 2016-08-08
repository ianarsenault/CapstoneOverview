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



$(document).ready(function () {
    /*$('.carousel').carousel({
        interval: false
    });*/
    /* Fade out overlay and loading screen */
    $(".loading-overlay").show().delay(5000).fadeOut(2500);
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



    // Scrollspy init and target - offset
    $('body').scrollspy({
        target: '#spy-scroll-id',
        offset: 200
    });


    /**  Scrollspy Functionality **/
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