var BouncingDancer = function(top, left, timeBetweenSteps, color, border) {
  Dancer.call(this, top, left, timeBetweenSteps, color, border);
  this.$node.addClass('bounce');
  console.log(this.$node[0]);
  $(this.$node).append('<img src="bounce.gif" class="bouncey">');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

BouncingDancer.prototype = Object.create(Dancer.prototype);
BouncingDancer.prototype.constructor = BouncingDancer;

BouncingDancer.prototype.oldStep = Dancer.prototype.step;
BouncingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.addClass('bouncey');
};