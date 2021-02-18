$(document).ready(function(){
    alert("wellcome to jquery practics");
    $('button').click(function(){
        // alert("wellcome to jquery practics")
        
    });
    // show 
    $('#show').click(function(){
        $('h2').show(1000);

    });
    // hide 
    $('#hide').click(function(){
       $('h2').hide(1000);

    });

// toggle
$('#toggle').click(function(){
    $('h2').toggle(1000);
})
// fadein
$('#fadein').click(function(){
    $('h3').fadeIn(2000);

});
//fadeout 
$('#fadeout').click(function(){
   $('h3').fadeOut(2000);

});
// fadetoggle
$('#fadetoggle').click(function(){
    $('h3').fadeToggle(3000);
});

$( "#draggable" ).draggable();

$( "#draggable1" ).draggable();
    $( "#droppable1" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
    $( "#resizable" ).resizable();
    $( "#slider" ).slider();
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
    $( "#tabs" ).tabs();

});