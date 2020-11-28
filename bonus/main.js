  // Script con BONUS
  var img = [];
  var pin = [];
  var i = 0;
  var j = 0;

  //Seleziono tutte le immagini presenti all'interno di "photo-container" e le inserisco in un array.
  do {
    img[i] = $('img:nth-child('+(i+1)+')');
    i++
  } while ($('img:nth-child('+i+')').hasClass('last') === false);

  // BONUS
  //Seleziono tutti i pin presenti e li inserisco in una array.
  do {
    pin[j] = $('.pin:nth-child('+(j+1)+')');
    j++
  } while ($('.pin:nth-child('+j+')').hasClass('last') === false);
  // /BONUS

  //Al click della freccia "forward" sposto la classe "view" all'immagine successiva
  $('a.forward').click(function forward(){
    //console.log("forward");
    for (var i = 0; i < img.length; i++) {
      //Se l'immagine che ha classe "view" cooincide con l'immagine che ha classe "last", resetto il contatore e assegno nuovamente la classe "view"
      if(img[i].hasClass('view') && img[i].hasClass('last')){
        img[i].removeClass('view');
        pin[i].removeClass('active'); //BONUS
        i = 0;
        img[i].addClass('view');
        pin[i].addClass('active'); //BONUS
        break
      }
      //In alternativa, sposto la classe "view" all'immagine successiva.
      else if (img[i].hasClass('view')) {
        img[i].removeClass('view');
        pin[i].removeClass('active'); //BONUS
        img[(i+1)].addClass('view');
        pin[(i+1)].addClass('active'); //BONUS
        break
      }
    }
  }); // /forward

  //Al click della freccia "previous" sposto la classe "view" all'immagine precedente
  $('a.previous').click(function previous(){
    //console.log("previous");
    for (var i = 0; i < img.length; i++) {
      //Se l'immagine che ha classe "view" cooincide con l'immagine che ha classe "last", imposto il contatore in ultima posizione e assegno nuovamente la classe "view"
      if(img[i].hasClass('view') && img[i].hasClass('first')){
        img[i].removeClass('view');
        pin[i].removeClass('active'); //BONUS
        i = img.length - 1;
        img[i].addClass('view');
        pin[i].addClass('active'); //BONUS
        break
      }
      //In alternativa, sposto la classe "view" all'immagine precedente.
      else if (img[i].hasClass('view')) {
        img[i].removeClass('view');
        pin[i].removeClass('active'); //BONUS
        img[(i-1)].addClass('view');
        pin[(i-1)].addClass('active'); //BONUS
        break
      }
    }
  }); // /previous


  //BONUS
  //Quando clicco su un "pin" la funzione deve indicarmi qual è nell'ordine.
  $('.pin').click(function pinPointer(){
    //console.log(this);
    for (var i = 0; i < pin.length; i++) {
      if (this === pin[i]['0']) {
        //Recupera l'ultima immagine con classe "view" per poterla rimuovere e assegnarla a quella corrispondente al pin.
        for (var j = 0; j < img.length; j++) {
          if (img[j].hasClass('view')) {
            img[j].removeClass('view');
            img[i].addClass('view');

            //GRAFICA: Stessa cosa per la classe "active" del pin.
            pin[j].removeClass('active');
            pin[i].addClass('active');
            break
          }
        }
        break
      }
    }
  });
  // /BONUS
