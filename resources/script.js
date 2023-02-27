$(document).ready(function () {

    //Displays current day
    $('#currentDay').text(moment().format('dddd, MMMM Do,'));

    // Capturing clicks of the save buttons and saving to local storage
    $('.button').on('click', function () {

        var hour = $(this).parent().attr('id');
        var userEntry = $(this).siblings('.cal-entry').val();

        localStorage.setItem(hour, userEntry);
    });

    function rowFormatter() {

        var currentHour = moment().hours();

        // Loop through rows and add classes for formatting
        $('.row').each(function () {

        var rowTime = parseInt($(this).attr('id'));

        if (rowTime < currentHour) {
            $(this).addClass('past');
        } else if (rowTime === currentHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
        });
    }

    rowFormatter();

    // Runs formatting function every 10 seconds
    var interval = setInterval(rowFormatter, 10000);

    // Display values from local storage
    $('#9 .cal-entry').val(localStorage.getItem('9'));
    $('#10 .cal-entry').val(localStorage.getItem('10'));
    $('#11 .cal-entry').val(localStorage.getItem('11'));
    $('#12 .cal-entry').val(localStorage.getItem('12'));
    $('#13 .cal-entry').val(localStorage.getItem('13'));
    $('#14 .cal-entry').val(localStorage.getItem('14'));
    $('#15 .cal-entry').val(localStorage.getItem('15'));
    $('#16 .cal-entry').val(localStorage.getItem('16'));
    $('#17 .cal-entry').val(localStorage.getItem('17'));

});
  
  