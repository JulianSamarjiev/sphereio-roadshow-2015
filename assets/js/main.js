// Add .active on click 

var selector = '.day-toggle .timeline-btn';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

// Close hamburger menu on click

$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

// Close hamburger when clicking outside of it


