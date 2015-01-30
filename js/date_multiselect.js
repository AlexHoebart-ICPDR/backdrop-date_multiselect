/**
 * Attaches the calendar behavior to all required fields
 */
(function ($) {
Drupal.behaviors.date_multiselect = {
  attach: function (context) {
  for (var id in Drupal.settings.dateMultiselect) {
    var input = $('input#'+ id);
    if (!input.hasClass('date-multiselect-init')) {
      dateMultiselect = Drupal.settings.dateMultiselect[id].settings;
      input
        .addClass('date-multiselect-init')
        .wrap('<div id="' + id + '-wrapper" />')
        .parent().multiDatesPicker(dateMultiselect)
      input.hide();
    }
  }
  }
};
})(jQuery);
