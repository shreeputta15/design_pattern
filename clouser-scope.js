
//todo clouser
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value()); // !o/p 0
counter.increment();
counter.increment();
console.log(counter.value()); // ! o/p 2
counter.decrement();
console.log(counter.value()); // ! o/p 1


////todo scopeing
  var a = 2;
(function foo() {
  var a = 3;
  console.log(a); //! o/p 3
})();
console.log(a); //! o/p 2

//todo  modules

function CoolModule() {
    var something = "cool beans";
    var another = [1, 2, 3];
    function doSomething() {
      console.log(something);
    }
    function doAnother() {
      console.log(another.join( " ! "));
    }
    return {
      doSomething: doSomething,
      doAnother: doAnother
    };
  }

  var foo = coolModule();
  
  foo.doSomething(); //! output "cool beans"
  foo.doAnother(); //! output "1 ! 2 ! 3"


// * There must be an outer enclosing function and it
//  *  must be invoked at least once (each time creates a new module instance).

// *The enclosing function must return back at least one inner function,
//  *so that this inner function has closure over the private scope and can access or modify the state 