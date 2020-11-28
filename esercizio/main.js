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
/*
  $('a.previous').click(function(){
    console.log("previous");
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
*/
