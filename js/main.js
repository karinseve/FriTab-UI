  var curr_chip_auto;

$(document).ready(function(){

  $('#name').modal();

	$(".menu-btn").sideNav();

  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered

  $('#rate-act').modal();

  $('#person-det').modal();

  $('#edit-dashboard').modal();

  $('.sfide-tabs').tabs('select_tab', 'chall-act');

  var  peopleData = {
    'Angela': {
      tag:'Angela', image :  'img/girl.png'
    },
    'Mario': {
      tag: 'Mario', image: 'img/man.png'
    },
    'Elena': {
      tag: 'Elena', image: 'img/girl-2.png'
    },
    'Martino': {
      tag: 'Martino', image: 'img/boy.png'
    },
    'Alessandro': {
      tag: 'Alessandro', image: 'img/man.png'
    },
    'Antonia': {
      tag: 'Antonia', image: 'img/girl-3.png'
    },
    'Elisa': {
      tag: 'Elisa', image: 'img/girl.png'
    },
    'Valentina': {
      tag:'Valentina',  image: 'img/girl-2.png'
    }
  }

  var groupData = {
    'Familiari' : {
      tag: 'Familiari', image: 'img/grandparents.png'
    },
    'Amici più stretti': {
      tag: 'Amici più stretti', image: 'img/transfer.png'
    },
    'Conoscenti': {
      tag: 'Conoscenti', image: 'img/network.png'
    },
    'Professionisti': {
      tag: 'Professionisti', image: 'img/surgeon.png'
    },
    'Passeggiate all\'aperto': {
      tag: 'Passeggiate all\'aperto', image: 'img/sneakers.png'
    },
    'Film in bianco e nero': {
      tag: 'Film in bianco e nero', image: 'img/film-reel.png'
    },
    'Funghi che passione': {
      tag: 'Funghi che passione', image: 'img/mushrooms.png'
    }
  }

  $('#crea-lista').modal({
    ready : function(modal, trigger){

     curr_chip_auto = $('.chips-autocomplete').material_chip({
          data: [{
            tag:'Angela', image :  'img/girl.png'
          }],

        autocompleteOptions: {
          data: peopleData,
          limit: Infinity,
          minLength: 1
        }
      });
     console.log(curr_chip_auto)
    }
  })


  $('#invite-friends').modal ({
    ready:function(modal, trigger){
      curr_chip_auto =$('.chips-autocomplete').material_chip({
        autocompleteOptions: {
          data: peopleData,
          limit: Infinity,
          minLength: 1
        }
      });
    }
  })


  $('#crea-att').modal({
    ready:function(modal, trigger){
      curr_chip_auto = $('.chips-autocomplete').material_chip({
        autocompleteOptions: {
          data: peopleData,
          limit: Infinity,
          minLength: 1
        }
      });
    }
  })

  $('#invite-group').modal({
    ready:function(modal, trigger){
      curr_chip_auto =$('.chips-autocomplete').material_chip({
        autocompleteOptions: {
          data: groupData,
          limit: Infinity,
          minLength: 1
        }
      });
    }
  })

  $('#crea-gruppo').modal({
    ready:function(modal, trigger){
      curr_chip_auto =$('.chips-autocomplete').material_chip({
        autocompleteOptions: {
          data: peopleData,
          limit: Infinity,
          minLength: 1
        }
      });
    }
  })

  $('#chall-create').modal({
    ready:function(modal, trigger){
      $('.chips-autocomplete').material_chip({
        autocompleteOptions: {
          data: peopleData,
          limit: Infinity,
          minLength: 1
        }
      });
    }
  })

  $('#add-person').modal({
    ready:function(modal, trigger){
      $('.chips-autocomplete').material_chip({
        autocompleteOptions: {
          data: peopleData,
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

  $('input.autocomplete.activities-autocomplete').autocomplete({
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


  $('input.autocomplete.groups-autocomplete').autocomplete({
    data: {
      "Camminate in montagna": null,
      "Nati nel 1950": null,
      "Gruppo di Trento": null,
      "Amici del liceo": null,
      "Bocce che passione": null
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  })



  if($('.slider').length > 0){

    $('.slider').slider();

    $('.next').click(function(e){
      e.preventDefault();
      $('.slider').slider('next');
    })
    $('.prev').click(function(e){
      e.preventDefault();
      $('.slider').slider('prev');
    })


  }

var actDetailsData = {
        'id2' : {
          'details-day' : '23',
          'details-month' : 'MAGGIO',
          'details-title' : 'Film Titanic',
          'details-datetime' : 'Domenica 23 Maggio 2017 alle ore 20:30',
          'details-loc' : 'Argentario di Cognola'
        },
        'id3' : {
          'details-day' : '29',
          'details-month' : 'MAGGIO',
          'details-title' : 'Giro del Lago',
          'details-datetime' : 'Lunedì 29 Maggio 2017 alle ore 14:30',
          'details-loc' : 'Lago di Levico'
        },
        'id4' : {
          'details-day' : '10',
          'details-month' : 'MAGGIO',
          'details-title' : 'Appuntamento al Cinema',
          'details-datetime' : 'Mercoledì 10 Maggio 2017 alle ore 21:00',
          'details-date': 'Mercoledì 10 Maggio 2017',
          'details-time': '21:00',
          'details-loc' : 'Cinema Astra'
        },
        'id5' : {
          'details-day' : '16',
          'details-month' : 'MAGGIO',
          'details-title' : 'Visita al castello di Soave',
          'details-datetime' : 'Martedì 16 Maggio 2017 alle ore 11:15',
          'details-date': 'Martedì 16 Maggio 2017',
          'details-time': '11:15',
          'details-loc' : 'Soave, VR'
        },
        'id6' : {
          'details-day' : '8',
          'details-month' : 'GIUGNO',
          'details-title' : 'Visita parco Natura Viva',
          'details-datetime' : 'Giovedì 8 Giugno 2017 alle ore 08:30',
          'details-date': 'Giovedì 8 Giugno 2017',
          'details-time': '08:30',
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
        }
      }

  if(window.location.pathname === "/act-details.html"){


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

  if(window.location.pathname === "/past-act-details.html"){
    var actDetailsData = {
      'id10' : {
          'past-details-day' : '10',
          'past-details-month' : 'APRILE',
          'past-details-title' : 'Appuntamento al Cinema',
          'past-details-datetime' : 'Lunedì 10 Aprile 2017 alle ore 21:00',
          'past-details-loc' : 'Cinema Astra'
        },
        'id11' : {
          'past-details-day' : '2',
          'past-details-month' : 'APRILE',
          'past-details-title' : 'Giro di Bassano del Grappa',
          'past-details-datetime' : 'Domenica 2 Aprile 2017 alle ore 10:00',
          'past-details-loc' : 'Bassano del Grappa, VI'
        },
        'id12' : {
          'past-details-day' : '23',
          'past-details-month' : 'MARZO',
          'past-details-title' : 'Biciclettata',
          'past-details-datetime' : 'Giovedì 23 Marzo 2017 alle ore 08:00',
          'past-details-loc' : 'Ora, BZ'
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


  function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
  }

  function readCookie(name) {
      var nameEQ = encodeURIComponent(name) + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
      }
      return null;
  }

  function eraseCookie(name) {
      createCookie(name, "", -1);
  }

  var myName = readCookie('name');
  var mySesso = readCookie('sesso');
  console.log(myName)
  if(myName != null  && $('#slide-out').length > 0){
        myName = readCookie('name');
        mySesso = readCookie('sesso');
        $('#user-name').text(myName);
        $('#user-email').text(myName + '@gmail.com');
        if (mySesso === 'male'){
          $('#user-image').attr("src", "img/man.png");
        }
  }




  $('#entra').click(function(e){
      if( myName === undefined || myName === null ){
        e.preventDefault();
        var name = $('#name-user').val()
        var sesso = $("input[type=radio][name=group1]:checked" ).val()
        console.log(name);
        console.log(sesso);
        createCookie('name', name, 1);
        createCookie('sesso', sesso, 1);
        myName = readCookie('name');
        window.location = 'http://localhost:8000/activities.html'
      }
  });

  $('#logout').click(function(e) {
    console.log(myName)
    if(myName != null &&  myName != undefined){
      e.preventDefault();
      eraseCookie('name');
      eraseCookie('sesso');
      myName=null;
      window.location = 'http://localhost:8000/intial.html'
    }
  });

  if($('#dashboard-page').length > 0){
  var mySteps=$("#daily-steps").text();
  var myKm=$("#daily-km").text();
  var myMin=$("#daily-min").text();
  $('#edit-dashboard').modal({
    ready: function(modal, trigger) {
      if (mySteps!=null || myKm!=null || myMin!=null) {
        console.log(mySteps);
        $('#steps').val(mySteps)
        $('#km').val(myKm)
        $('#active-hours').val(myMin)
      }
      Materialize.updateTextFields();
    }
  });
  }

  $('#add-fine').click(function(e){
      e.preventDefault();
      $('#row-fine').fadeIn();
  })

  $('#remove-fine').click(function(e){
      e.preventDefault();
      $('#row-fine').fadeOut();
  })


  $('#add-fine2').click(function(e){
      e.preventDefault();
      $('#row-fine2').fadeIn();
  })

  $('#remove-fine2').click(function(e){
      e.preventDefault();
      $('#row-fine2').fadeOut();
  })

  if($('#groups-page').length>0){

    $('.pers-name').click(function(e){
        e.preventDefault();
        var person_name=$(this).text();
        var person_cat=$(this).closest('.collection-item').find('.title.category').text();
        var person_img=$(this).closest('.chip').find('.pers-img').attr('src');
        $('#person-det').data('name',person_name)
        $('#person-det').data('cat',person_cat)
        $('#person-det').data('img',person_img)

    });

    var group_title=$("#gdet-title").text();
    var group_descr=$("#gdet-descr").text();


    $('#edit-group').modal({
      ready: function(modal, trigger) {
        $('.chips-autocomplete').material_chip({
          data: [{
            tag:'Angela', image :  'img/girl.png'
          },{
            tag: 'Alessia', image : 'img/girl-2.png'
          },{
            tag: 'Marco', image: 'img/boy.png'
          }, {
            tag: 'Arturo', image: 'img/man.png'
          }, {
            tag: 'Maria', image: 'img/girl-3.png'
          }, {
            tag: 'Annamaria', image: 'img/girl-4.png'
          }],
          autocompleteOptions: {
            data: peopleData,
            limit: Infinity,
            minLength: 1
          }
        });
        if (group_title != null || group_descr != null) {
          $('#group-title').val(group_title);
          $('#group-descr').val(group_descr);
        }
        Materialize.updateTextFields();
      }
    });

    $('#person-det').modal({
      ready: function(modal, trigger) {
        var person_name =$('#person-det').data('name')
        var person_cat =$('#person-det').data('cat')
        var person_img=$('#person-det').data('img')

        if(person_name!=null || person_cat!=null) {
          $('#pimg').attr("src", person_img);
          $('#pname').text(person_name);
          $('#cat').text(person_cat);
          $('#pmail').text(person_name);
        }
        Materialize.updateTextFields();
      }
    });
  }

  if ($('#activities-page').length > 0){

    $('.edit-activity-modal').click(function(e){
      e.preventDefault();
      $('#modifica').data('act-id', $(this).data('activity'));
    });

    $('#modifica').modal({
      ready: function(modal, trigger) {

        $('.chips-autocomplete').material_chip({
        autocompleteOptions: {
          data: peopleData,
          limit: Infinity,
          minLength: 1
        }
      });

        var ida = $('#modifica').data('act-id');

        data = actDetailsData[ida];
        if(data != undefined){
          $('#mod-titolo').val(data[ 'details-title']);
          $('#mod-descrizione').val("Un'attività per stare tutti insieme in compagnia!");
          $('#mod-luogo').val(data[ 'details-loc']);
          $('#mod-data').val(data[ 'details-date']);
          $('#mod-ora').val(data[ 'details-time']);
          // TODO: selezione di questi
          //$('#mod-group-invite').val(act_group);
          //$('#mod-people-invite').val(act_people);
        }
        Materialize.updateTextFields();
      }

    })
  }

  $('.card-closer').click(function(e) {
    e.preventDefault();
    $(this).closest('.card').fadeOut();
    Materialize.toast('L\'attività è stata rimossa', 3000, 'rounded')
  });

  $('.collection-closer').click(function(e) {
    e.preventDefault();
    $(this).closest('.collection').fadeOut();
    Materialize.toast('Il gruppo è stato rimosso', 3000, 'rounded')
  });

  $('.person-card-closer').click(function(e) {
    e.preventDefault();
    $(this).closest('.collection').fadeOut();
    Materialize.toast('La persona è stata rimossa', 3000, 'rounded')
  });

  $('.chip.add-friend').click(function(e){
    $('.chips-autocomplete').find('input').val($(this).text().trim());
    $('.chips-autocomplete').trigger('keydown.chips-add', '.chips input');

    console.log("SS")
  });


  $("#nav-interno-start").click(function(e){
    e.preventDefault();
    $("#mappa-nav").fadeOut( "slow" ,function(){
      $('#mappa-nav-int').fadeIn( "slow");
    });

  });


});


