$(document).ready(function() {
  window.dancers = [];
  window.dancingStyles = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make dancer at random position
    var randomHeight = Math.random()*(0.5-0.2)+0.2;
    var randomWidth = Math.random()*(0.8-0.1)+0.1;
    var dancer = new dancerMakerFunction(
      $('body').height() * randomHeight,
      $('body').width() * randomWidth,
      Math.random() * 1000
    );
    $('.danceFloor').append(dancer.$node);
  });
  
  $('#lineUpDancer').on('click', function(event) {
    $('.dancer').css('top', '700px');
    $('.bounce').css('top', '700px');
  });
  
  $('#interact').on('click', function(event) {
    $('.dancer').text('Let\'s party').css('color', 'red');
  });

  $('.danceFloor').on('mouseover', '.blinky', function(event) {
    $(this).html('<img src="blinky2.gif">');
  });
  
  $('.danceFloor').on('mouseover', '.lefty', function(event) {
    $(this).html('<img src="lefty2.gif">');
  });

  $('.danceFloor').on('mouseover', '.bounce', function(event) {
    $(this).html('<img src="bouncy2.gif">');
  });
});

