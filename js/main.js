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
      "Giro del lago di Garda": null,
      "Golf": null,
      "Nuoto": null,
      "Sciare ad alta quota": null,
      "Giri in barca a vela": null,
      "Camminate nei boschi": null,

    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });

  $('.next').slider('next');


  if(window.location.pathname === "/act-details.html"){

      var actDetailsData = {
        'id2' : {
          'details-day' : '23',
          'details-month' : 'APRILE',
          'details-title' : 'Film Titanic',
          'details-datetime' : 'Domenica 23 Aprile 2017 alle ore 20:30',
          'details-loc' : 'Argentario di Cognola'
        },
        'id3' : {
          'details-day' : '29',
          'details-month' : 'APRILE',
          'details-title' : 'Giro del Lago',
          'details-datetime' : 'Sabato 29 Aprile 2017 alle ore 14:30',
          'details-loc' : 'Lago di Levico'
        },
        'id4' : {
          'details-day' : '10',
          'details-month' : 'MAGGIO',
          'details-title' : 'Appuntamento al Cinema',
          'details-datetime' : 'Mercoledì 10 Maggio 2017 alle ore 21:00',
          'details-loc' : 'Cinema Astra'
        },
        'id5' : {
          'details-day' : '16',
          'details-month' : 'MAGGIO',
          'details-title' : 'Visita al castello di Soave',
          'details-datetime' : 'Martedì 16 Maggio 2017 alle ore 11:15',
          'details-loc' : 'Soave, VR'
        },
        'id6' : {
          'details-day' : '8',
          'details-month' : 'GIUGNO',
          'details-title' : 'Visita parco Natura Viva',
          'details-datetime' : 'Giovedì 8 Giugno 2017 alle ore 08:30',
          'details-loc' : 'Parco Natura Viva'
        },
        'id7' : {
          'details-day' : '15',
          'details-month' : 'MAGGIO',
          'details-title' : 'Visita Castello del Buonconsiglio',
          'details-datetime' : 'Lunedì 15 Maggio 2017 alle ore 10:00',
          'details-loc' : 'Castello del Buonconsiglio'
        },
        'id8' : {
          'details-day' : '20',
          'details-month' : 'MAGGIO',
          'details-title' : 'Visita a Bolzano',
          'details-datetime' : 'Sabato 20 Maggio 2017 alle ore 08:00',
          'details-loc' : 'Bolzano'
        },
        'id9' : {
          'details-day' : '2',
          'details-month' : 'GIUGNO',
          'details-title' : 'Aperitivo',
          'details-datetime' : 'Venerdì 2 Giugno 2017 alle ore 18:00',
          'details-loc' : 'Piazza Duomo, Trento'
        },
        'id10' : {
          'details-day' : '10',
          'details-month' : 'APRILE',
          'details-title' : 'Appuntamento al Cinema',
          'details-datetime' : 'Lunedì 10 Aprile 2017 alle ore 21:00',
          'details-loc' : 'Cinema Astra'
        },
        'id11' : {
          'details-day' : '2',
          'details-month' : 'APRILE',
          'details-title' : 'Giro di Bassano del Grappa',
          'details-datetime' : 'Domenica 2 Aprile 2017 alle ore 10:00',
          'details-loc' : 'Bassano del Grappa, VI'
        },
        'id12' : {
          'details-day' : '23',
          'details-month' : 'MARZO',
          'details-title' : 'Biciclettata',
          'details-datetime' : 'Giovedì 23 Marzo 2017 alle ore 08:00',
          'details-loc' : 'Ora, BZ'
        }
      }

      if(window.location.hash) {
        // Fragment exists
        console.log(window.location.hash)
        var id = window.location.hash.substring(1)

        var pageData = actDetailsData[id]
        console.log(pageData)
        for (var property in pageData) {
              $('#'+property).html(pageData[property]);
        }

      }

  }




});