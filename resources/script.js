$(document).ready(function () {

    //Displays current day
    $('#currentDay').text(moment().format('dddd, MMMM Do,'));

    // Capturing clicks of the save buttons and saving to local storage
    $('.button').on('click', function () {

        var hour = $(this).parent().attr('id');
        var userEntry = $(this).siblings('.cal-entry').val();

        localStorage.setItem(hour, userEntry);
    });

});
  
  