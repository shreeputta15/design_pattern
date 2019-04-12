
var Singleton = (function () {
  var instance;

  function createInstance() {
      var object = new Object("I am the instance");
      return object;
  }

  return {
      getInstance: function () {
          if (!instance) {
              instance = createInstance();
          }
          return instance;
      }
  };
})(); // todo self invoking function

function run() {

  var instance1 = Singleton.getInstance();
  var instance2 = Singleton.getInstance();

  console.log("Same instance? " + (instance1 === instance2));  
}  //!Same instance? true 
run();


//*Ensure a class has only one instance and provide a global point of access to it.
//*  The Singleton Pattern limits the number of instances of a particular object
//* to just one. This single instance is called the singleton.