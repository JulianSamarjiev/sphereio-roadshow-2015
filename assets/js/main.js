var selector = '.day-toggle .timeline-btn';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

