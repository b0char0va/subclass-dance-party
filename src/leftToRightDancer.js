var LeftToRightDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('lefty');
  this.counter = 0;
  $(this.$node).append('<img src="lefty.gif">');
  console.log(this.$node);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

LeftToRightDancer.prototype = Object.create(Dancer.prototype);
LeftToRightDancer.prototype.constructor = LeftToRightDancer;


LeftToRightDancer.prototype.oldStep = Dancer.prototype.step;
LeftToRightDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if (this.counter % 2 === 0) {
    this.$node.animate({left: this.left + '50px'});
    this.counter++;
  } else {
    this.$node.animate({left: '+=50px'});
    this.counter++;
  } 
};