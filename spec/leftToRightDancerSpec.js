describe('leftRightDancer', function() {

  var leftRightDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    leftRightDancer = new LeftToRightDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(leftRightDancer.$node).to.be.an.instanceof(jQuery);
  });
  
  it('should have a counter property which counts to tell whether to move left or right', function() {
    expect(leftRightDancer.counter).to.be.equal(0);
  });
  
  it('should have a counter property whose count increases', function() {
    leftRightDancer.step();
    expect(leftRightDancer.counter).to.be.equal(1);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(leftRightDancer, 'step');
      expect(leftRightDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(leftRightDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(leftRightDancer.step.callCount).to.be.equal(2);
    });
  });
});