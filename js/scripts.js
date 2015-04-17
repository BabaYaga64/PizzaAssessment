//Prototype
var PizzaType = {
	calculatePrice: function() {
		if (this.name === "cheese") {
			return "You ordered" + this.name + ". Your total is 10.00";
		} else if (this.name === "pepperoni") {
			return "You ordered" + this.name + ". Your total is 15.00";
		}

	}//Ends calculatePrice

	init: function() {
		this.cost = 0;
		this.name = "";
	}//Ends init

};//Ends PizzaType


//Objects that inherit method from prototype and have name property
var cheese = Object.create(PizzaType);
	cheese.init();
	cheese.cost(10);
	cheese.name = "cheese";
	cheese.calculatePrice();

var pepperoni = Object.create(PizzaType);
	pepperoni.init();
	pepperoni.cost(15);
	pepperoni.name = "pepperoni";
	pepperoni.calculatePrice();

//Program steps

//User submits what kind of pizza they want, cheese or pepperoni

//Form input is submitted
