/**
 * Attaches the calendar behavior to all required fields.
 */

(function ($) {
Drupal.behaviors.date_multiselect = {
  attach: function (context) {
    for (var id in Drupal.settings.dateMultiselect) {
      var input = $('input#' + id);
      if (!input.hasClass('date-multiselect-init')) {
        settings = Drupal.settings.dateMultiselect[id].settings;
        if (input.val()) {
          settings.addDates = input.val().split(', ');
          settings.minDate = getMinDate(settings.minDate, settings.addDates[0], settings.dateFormat);
        }
        input
          .addClass('date-multiselect-init')
          .wrap('<div id="' + id + '-wrapper" />')
          .parent().multiDatesPicker(settings)
        input.hide();
      }
    }
  }
};
})(jQuery);

/**
 * Return the minimum date, either the minDate or the firstDate.
 *
 * minDate is either an offset of the current date in days.
 */
function getMinDate(minDate, firstDate, format) {
  if (typeof minDate == 'string') {
    var minDateObj = jQuery.datepicker.parseDate(format, minDate);
  } else if (typeof minDate == 'number') {
    var minDateObj = new Date();
    minDateObj.setDate(minDateObj.getDate() + minDate);
  }

  var firstDateObj = jQuery.datepicker.parseDate(format, firstDate);

  return (firstDateObj > minDateObj) ? minDate : firstDate;
}
