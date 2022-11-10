

//factory function

function createCircle(radius) {
  return {
    radius, //raius: radius
    draw: function() {
      console.log('draw');
    }
  }
}
const circle = createCircle(1);

// constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw =  function() {
    console.log('draw')
  }
}
const another = new Circle(1);
//another.constructor == Circle(radius)