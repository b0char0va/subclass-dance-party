var makeBouncingDancer = function(top, left, timeBetweenSteps, color) {
  makeDancer.call(this, top, left, timeBetweenSteps, color);
  this.counter = 0;

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
  if(this.counter % 2 === 0) {
    this.$node.animate({top: this.top+'50px'});
    this.counter++;
  } else{
    this.$node.animate({top: '+=50px'});
    this.counter++;
  } 
  console.log('test');
};