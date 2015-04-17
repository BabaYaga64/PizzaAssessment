//Prototype
var PizzaType {

	calculatePrice: function() {
		//Enter code here for determining price if/else statement?
	};
};

//Objects that inherit method from prototype and have name property
var cheese = Object.create(PizzaType);
	cheese.name = "Cheese Attack";
	cheese.calculatePrice();

var pepperoni = Object.create(PizzaType);
	pepperoni.name = "Meat Beast";
	pepperoni.calculatePrice();