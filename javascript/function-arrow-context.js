function User(name, age) {
    this.name = name;
    this.age = age;

    this.getProfile = function() {
        // Outer function context
        console.log(this.constructor.name); // User
        return () => {
            // Inner function context
            console.log(this.constructor.name); // User(Get it from the outer context)
            console.log("I'm " + this.name + ", " + this.age + " yrs old");
            //using an arrow function helps with 'this' scoping
        };
    }
}

let user = new User('John', 25);
//create an instance of User where name is John and age is 25 and set it to user

let profile = user.getProfile();
//pull the getProfile function from this instance of User called user and have profile point to it

profile(); 
//now profile is pointing to user's instance of getProfile and when executed will console.log "I'm John, 25 yrs old"