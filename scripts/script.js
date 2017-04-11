$(document).ready(function(){

  //generating the start 16x16 grid
  var $grid = $('.grid');
  for (i=0; i < 16; i++){
    var row = '<div>';
    for (j=0; j < 16; j++){
      row = row + '<div class="pixel"></div>';
       }
    row = row + '<div>';
    $grid.append(row);
  }

  //resizing on the button click
  $('#resize').on('click', function(){
    $('.pixel').detach();
   var grid_size = prompt ('Enter the desired grid size between 1 = 1x1 and 100 = 100x100 cells');

    var $grig = $('.grid');
   for (i = 0; i < grid_size; i++){
     row = "<div>";
     for (j = 0; j < grid_size; j++){
        row = row + '<div class="pixel"></div>';
     }

     row = row + "</div>";
     $grid.append(row);
   }

    //assigning poroportional height and width, to preserve the initial size of the grid's container
    var width = 100 / grid_size + "%";
     var height = 100 / grid_size + "vh";
     $('.pixel').css({"width": width, "height": height});


    // random color on mouseenter after the resize
    $('.pixel').on('mouseenter', function(){
      var color = ('#' + Math.floor(Math.random()*16777215).toString(16));
      $(this).css({"background-color": color});
    });

  });

  // clear the grid function
  $('#clear').on('click', function(){
    $('.pixel').css({"background-color": "white"});
  });

  //random color at the starting grid stage
  $('.pixel').on('mouseenter', function(event){
   event.preventDefault()
      var color = ('#' + Math.floor(Math.random()*16777215).toString(16));
      $(this).css({"background-color": color});
    });

});
