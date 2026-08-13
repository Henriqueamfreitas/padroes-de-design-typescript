var Burger = /** @class */ (function () {
    function Burger(name, cheese, bacon, lettuce, tomato) {
        this.name = name;
        this.cheese = cheese;
        this.bacon = bacon;
        this.lettuce = lettuce;
        this.tomato = tomato;
    }
    Burger.prototype.showDetails = function () {
        var details = "This " + this.name + " Burger has: ";
        if (this.cheese) {
            details = details + " Cheese, ";
        }
        if (this.bacon) {
            details = details + " Bacon, ";
        }
        if (this.lettuce) {
            details = details + " Lettuce, ";
        }
        if (this.tomato) {
            details = details + " Tomato ";
        }
        return details;
    };
    return Burger;
}());
var BurgerBuilder = /** @class */ (function () {
    function BurgerBuilder(name) {
        this.cheese = false;
        this.bacon = false;
        this.lettuce = false;
        this.tomato = false;
        this.name = name;
    }
    BurgerBuilder.prototype.addCheese = function () {
        this.cheese = true;
        return this;
    };
    BurgerBuilder.prototype.addBacon = function () {
        this.bacon = true;
        return this;
    };
    BurgerBuilder.prototype.addLettuce = function () {
        this.lettuce = true;
        return this;
    };
    BurgerBuilder.prototype.addTomato = function () {
        this.tomato = true;
        return this;
    };
    BurgerBuilder.prototype.build = function () {
        return new Burger(this.name, this.cheese, this.bacon, this.lettuce, this.tomato);
    };
    return BurgerBuilder;
}());
// Usage
function builderClient() {
    // Everything Burger 
    var everythingBurgerBuilder = new BurgerBuilder('everything');
    everythingBurgerBuilder.addCheese().addBacon().addLettuce().addTomato();
    var everythingBurger = everythingBurgerBuilder.build();
    var test = new Burger('everything2', true, true, true, true);
    console.log(111, everythingBurger.showDetails());
    console.log(222, test.showDetails());
    // Cheese Burger
    var cheeseBurgerBuilder = new BurgerBuilder('cheese');
    cheeseBurgerBuilder.addCheese();
    var cheeseBurger = cheeseBurgerBuilder.build();
    console.log(333, cheeseBurger.showDetails());
}
builderClient();
