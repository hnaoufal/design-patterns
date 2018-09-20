// Creation
let TestEnv;

(function(TestEnv) {
  let MySingleton = (function() {
    MySingleton._instance = null;

    function MySingleton() {
      this.message = "test";

      if (MySingleton._instance) {
        // you can also throw an error here
        return MySingleton._instance;
      }

      MySingleton._instance = this;
    }

    MySingleton.prototype.setMessage = function(msg) {
      this.message = msg;
    };

    MySingleton.getInstance = function() {
      if (!MySingleton._instance) {
        MySingleton._instance = new MySingleton();
      }

      return MySingleton._instance;
    };

    return MySingleton;
  })();
  TestEnv.MySingleton = MySingleton;
})(TestEnv || (TestEnv = {}));

// Usage
const instance1 = TestEnv.MySingleton.getInstance();
const instance2 = TestEnv.MySingleton.getInstance();

console.log(instance1._instance); // undefined
console.log(instance1 === instance2); // true

instance2.setMessage("successful");

console.log(instance1, instance2); // { message: 'successful'} {message: 'successful'}
