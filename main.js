// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione
// una decina di dischi musicali.Servendoci di handlebars stampiamo
// tutto a schermo.In questo momento non è importante la parte grafica.
$(document).ready(function() {
  // creo variabile che corrisponde a ciò che mi ritorna la mia api

  $.ajax({//chiamata ajax alla mia api
      url:"https://flynn.boolean.careers/exercises/api/array/music",
      method:"GET",
      success:function(data){//in caso di successo
        var disco = (data.response);
        console.log(disco);
        var element;
        var source = $("#template").html();
        console.log(source);
        var template = Handlebars.compile(source);
        // creo ciclo for per stampare tutti i cd presenti nella mia api
        for(var i = 0 ; i < disco.length ; i++){
          // verifico il genere del mio oggetto e lo assegno ad una variabile
          switch (disco[i].genre) {
            case "Rock":
              element = "rock";
              break;
            case "Pop":
              element = "pop";
              break;
            case "Jazz":
              element = "jazz";
              break;
            default:
              element = "metal";
              break;
          }

          var context = {
            attributo: element,
            image: disco[i].poster,
            title: disco[i].title,
            autor: disco[i].author,
            year: disco[i].year
          };

          var html = template(context);
          $(".cds-container.container").append(html);

        }//chiusura ciclo for
      },//chiusura funzione success

      error : function (richiesta,stato,error) {//in caso di errore nella chiamata
        alert("E' avvenuto un errore. "+error);
      }//chiusura funzione errore
    });//chiusura chiamata ajax

    // creo evento click per la mia icona menu
    $(".menu .menu-icon i").click(
      // funzione per far apparire e scomparire menu a tendina
      function(){
        $(".menu-in").toggle();
      });

    // creo evento click per il li con id 'pop'
    $(".menu-in li#pop").click(
      // creo funzione per far apparire solo i div con attr[rif=pop]
      function(){
        $("div.cd").hide();
        $("div.cd[rif='pop']").show();
      });

    // creo evento click per il li con id 'rock'
    $(".menu-in li#rock").click(
      // creo funzione per far apparire solo i div con attr[rif=rock]
      function(){
        $("div.cd").hide();
        $("div.cd[rif='rock']").show();
      });

    // creo evento click per il li con id 'metal'
    $(".menu-in li#metal").click(
      // creo funzione per far apparire solo i div con attr[rif=metal]
      function(){
        $("div.cd").hide();
        $("div.cd[rif='metal']").show();
      });

    // creo evento click per il li con id 'jazz'
    $(".menu-in li#jazz").click(
      // creo funzione per far apparire solo i div con attr[rif=jazz]
      function(){
        $("div.cd").hide();
        $("div.cd[rif='jazz']").show();
      });

    // creo evento click per il li con id 'all'
    $(".menu-in li#all").click(
      // creo funzione per far apparire tutti i div con classe.cd
      function(){
        $("div.cd").show();
      });
});
