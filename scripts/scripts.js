console.log("Hi there");

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        //This asks the customer what they want to drink, stores the answer in a variable, 
        //and then assigns the value of the variable to the drinkSize key in the order object.
       const drink =  prompt("What size drink would you like: small, medium, or large?")
       meal.drinkSize = drink;
      //This feature asks if the customer wants fries. It then converts it to a boolean 
      //value, and stores the boolean in the fries key.
       const sideFries = prompt("Would you like fries with that?")
       if (sideFries === "yes") {
           meal.fries = true;
       } else (
           meal.fries = false
       )
       this.orders.push(meal);
    }
}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize:""
}

const hamburgerComboMeal = {
    sandwichType: "hamburger",
    fries: true,
    drinkSize:""
}

const tofuDogMeal = {
    sandwichType: "tofu",
    fries: false,
    drinkSize:""
}

// Place an order
restaurant.placeOrder(tofuDogMeal);
console.log(restaurant.orders);