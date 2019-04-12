


var Exposer = (function() {
  

  var privateMethod = function() {
    console.log('Inside a private method!');
    privateVariable++;
  }

  var methodToExpose = function() {
    console.log('This is a method I want to expose!');
  }

  var otherMethodIWantToExpose = function() {
    privateMethod();
  }

  return {
      first: methodToExpose,
      second: otherMethodIWantToExpose
  };
})();

Exposer.first();        //! Output: This is a method I want to expose!
Exposer.second();       // !Output: Inside a private method!
Exposer.methodToExpose; // !undefined