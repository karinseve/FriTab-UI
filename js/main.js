$(document).ready(function(){

	$(".menu-btn").sideNav();

    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 3 // Creates a dropdown of 15 years to control year
});

    $('select').material_select();

    $('input.autocomplete').autocomplete({
    data: {
      "Christian": null,
      "Alberto": null
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });

    $('.next').slider('next');

});