class Burger {
    name: string
    cheese: boolean
    bacon: boolean
    lettuce: boolean
    tomato: boolean
    
    constructor(name: string, cheese: boolean, bacon: boolean, 
        lettuce: boolean, tomato: boolean) {
        this.name = name
        this.cheese = cheese
        this.bacon = bacon
        this.lettuce = lettuce
        this.tomato = tomato
    }

    showDetails() : string {
        let details = "This " + this.name  + " Burger has: "

        if(this.cheese) {
            details = details + " Cheese, "
        }

        if(this.bacon) {
            details = details + " Bacon, "
        }

        if(this.lettuce) {
            details = details + " Lettuce, "
        }

        if(this.tomato) {
            details = details + " Tomato "
        }

        return details

    }
}

class BurgerBuilder {

    private name: string
    private cheese: boolean = false
    private bacon: boolean = false
    private lettuce: boolean = false
    private tomato: boolean = false
    
    constructor(name: string) {
        this.name = name
    }
    
    addCheese(): BurgerBuilder {
        this.cheese = true
        return this
    }
    
    addBacon(): BurgerBuilder {
        this.bacon = true
        return this
    }
    
    addLettuce(): BurgerBuilder {
        this.lettuce = true
        return this
    }
    
    addTomato(): BurgerBuilder {
        this.tomato = true
        return this
    }
    
    build(): Burger {
        return new Burger(this.name, this.cheese, this.bacon, 
            this.lettuce, this.tomato)
    }
}

// Usage

function builderClient() {

    // Everything Burger 
    const everythingBurgerBuilder = new BurgerBuilder('everything')
    everythingBurgerBuilder.addCheese().addBacon().addLettuce().addTomato()
    const everythingBurger = everythingBurgerBuilder.build()

    const test = new Burger('everything2', true, true,true, true)
    
    console.log(111, everythingBurger.showDetails())
    console.log(222,test.showDetails())
    // Cheese Burger
    const cheeseBurgerBuilder = new BurgerBuilder('cheese')
    cheeseBurgerBuilder.addCheese()
    const cheeseBurger = cheeseBurgerBuilder.build()
    console.log(333, cheeseBurger.showDetails())
// Builder is not about producing a different result. It is about making object creation easier to understand and harder to misuse.
}
builderClient()

