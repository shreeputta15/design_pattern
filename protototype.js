var myCar = {

  name: "Ford Escort",

  drive: function () {
    console.log( "Weeee. I'm driving!" );
  },

  panic: function () {
    console.log( "Wait. How do you stop this thing?" );
  }

};

// Use Object.create to instantiate a new car
var yourCar = Object.create( myCar );
  myCar.age="24";
  // yourCar.name="shree";
// Now we can see that one is a prototype of the other
console.log( yourCar.name );//!output  ford Escort
console.log(yourCar.age);

  
  //*The Prototype design pattern relies on the JavaScript 
  //*prototypical inheritance. The prototype model is used mainly for creating objects in performance-intensive situations.
  //*Specify the kind of objects to create using a prototypical instance, and create new objects by copying this prototype.