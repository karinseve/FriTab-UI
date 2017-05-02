$(document).ready(function(){

	$(".menu-btn").sideNav();

  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('#crea-att').modal();

  $('#rate-act').modal();

  $('#modifica').modal();

  $('#crea-gruppo').modal();

  $('#edit-group').modal();

  $('#person-det').modal();

  $('#edit-dashboard').modal();

  $('#crea-lista').modal({
    ready : function(modal, trigger){

      $('.chips-autocomplete').material_chip({
        autocompleteOptions: {
          data: {
           'Angela':  'img/girl.png',
           'Mario': 'img/man.png',
           'Elena': 'img/girl-2.png',
           'Martino': 'img/boy.png',
           'Alessandro': 'img/man.png',
           'Antonia': 'img/girl-3.png',
           'Elisa': 'img/girl.png',
           'Valentina': 'img/girl-2.png'
          },
          limit: Infinity,
          minLength: 1
        }
      });


    }
  })


  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 3 // Creates a dropdown of 15 years to control year
  });

  $('select').material_select();

  $('input.autocomplete').autocomplete({
    data: {
      "Christian": null,
      "Carlo": null,
      "Alberto": null,
      "Giorgio": null,
      "Marina": null,
      "Erica": null,

    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });

  $('.next').slider('next');


});