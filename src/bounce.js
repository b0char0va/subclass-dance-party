var makeBouncingDancer = function(top, left, timeBetweenSteps, color, border) {
  makeDancer.call(this, top, left, timeBetweenSteps, color, border);
  this.counter = 0;
  this.$node.addClass('bounce');
  $(this.$node).append('<img src="bounce.gif">');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeBouncingDancer.prototype = Object.create(makeDancer.prototype);
makeBouncingDancer.prototype.constructor = makeLeftToRightDancer;


makeBouncingDancer.prototype.oldStep = makeDancer.prototype.step;
makeBouncingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};