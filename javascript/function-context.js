function User(name, age) {
    this.name = name;
    this.age = age;

    this.getProfile = function() {
        // Outer function context
        console.log(this.constructor.name); // this points to User
        return function() {
            // Inner function context
            console.log(this.constructor.name); // this points to Window aka use an arrow function to continue pointing to User
            console.log("I'm " + this.name + ", " + this.age + " yrs old");
        };
    }
}

var user = new User('John', 25);
var profile = user.getProfile();
profile(); //I'm undefined, undefined yrs old