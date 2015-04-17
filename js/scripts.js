//Prototype
var PizzaType = {
	calculatePrice: function() {

		if (this.name === "cheese") {
			return "You ordered" + this.name + ". Your total is" + this.cost;
		} else if (this.name === "pepperoni") {
				return "You ordered" + this.name + ". Your total is" + this.cost;
		}

	},//Ends calculatePrice

	init: function() {
		this.cost = 0;
		this.name = "";
	}//Ends init

};//Ends PizzaType Object


//Objects that inherit method from PizzaType prototype and have name & cost properties
var cheese = Object.create(PizzaType);
	cheese.init();
	cheese.cost = 10.00;
	cheese.name  = "cheese";
	cheese.calculatePrice();

var pepperoni = Object.create(PizzaType);
	pepperoni.init();
	pepperoni.cost = 15.00;
	pepperoni.name = "pepperoni";
	pepperoni.calculatePrice();


