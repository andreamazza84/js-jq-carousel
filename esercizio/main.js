  var img = [];
  var i = 0;

  //Seleziono tutte le immagini presenti all'interno di "photo-container" e le inserisco in un array.
  do {
  img[i] = $('img:nth-child('+(i+1)+')');
  i++
  } while ($('img:nth-child('+i+')').hasClass('last') === false);

  //Al click della freccia "forward" sposto la classe "view" all'immagine successiva
  $('a.forward').click(function(){
    //console.log("forward");
    for (var i = 0; i < img.length; i++) {
      //Se l'immagine che ha classe "view" cooincide con l'immagine che ha classe "last", resetto il contatore e assegno nuovamente la classe "view"
      if(img[i].hasClass('view') && img[i].hasClass('last')){
        img[i].removeClass('view');
        i = 0;
        img[i].addClass('view');
        break
      }
      //In alternativa, sposto la classe "view" all'immagine successiva.
      else if (img[i].hasClass('view')) {
        img[i].removeClass('view');
        img[(i+1)].addClass('view');
        break
      }
    }
  });

  //Al click della freccia "previous" sposto la classe "view" all'immagine precedente
  $('a.previous').click(function(){
    console.log("previous");
    for (var i = 0; i < img.length; i++) {
      //Se l'immagine che ha classe "view" cooincide con l'immagine che ha classe "last", imposto il contatore in ultima posizione e assegno nuovamente la classe "view"
      if(img[i].hasClass('view') && img[i].hasClass('first')){
        img[i].removeClass('view');
        i = img.length - 1;
        img[i].addClass('view');
        break
      }
      //In alternativa, sposto la classe "view" all'immagine precedente.
      else if (img[i].hasClass('view')) {
        img[i].removeClass('view');
        img[(i-1)].addClass('view');
        break
      }
    }
  });

  //**************************************************//
  // BONUS
  i = 0;
  var pin = [];
  do {
    pin[i] = $('.pin:nth-child('+(i+1)+')');
    i++
  } while ($('.pin:nth-child('+i+')').hasClass('last') === false);
  //console.log(pin);

  //Quando clicco su un "pin" la funzione deve indicarmi qual è nell'ordine.
  $('.pin').click(function(){
    //console.log(this);
    for (var i = 0; i < pin.length; i++) {
      if (this === pin[i]['0']) {
        //Recupera l'ultima immagine con classe "view" per poterla rimuovere e assegnarla a quella corrispondente al pin.
        for (var j = 0; j < img.length; j++) {
          if (img[j].hasClass('view')) {
            img[j].removeClass('view');
            img[i].addClass('view');
            break
          }
        }
        break
      }
    }
  });



    //  console.log(this); //mi mostra l'elemento che viene cliccato in console


      //$(this).children('p').toggle(); //il figlio dell'elemento che ho appena cliccato,
      //$(this).find('p').toggle();
