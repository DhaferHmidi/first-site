var meal =
[
{
 image :"./images/chicken-and-asparagus-skillet-recipe-2.jpg",
 ingredients : "1 Table3 boneless, skinless chicken breasts cut into bite-sized chunks 2 bunch of asparagus, rinsed and trimmed1/2 cup butter, softened1 teaspoon olive oil2 teaspoons minced garlic1 teaspoon Italian seasoning or Herbes de Provence1 tablespoon hot sauce, optional (we used Sriracha)1/2 cup low-sodium chicken brothJuice of 1/2 lemon1 tablespoon minced parsleyCrushed red chili pepper flakes, optionalSlices of lemon, for garnish"
},
{
image:'./images/image.jpg',
ingredients :'2 tablespoons oil1 red bell pepper, sliced 1 yellow bell pepper, sliced 1 large red onion, sliced1 teaspoon salt 1 teaspoon pepper 100 ground turkey (455 g) ,1 tablespoon taco seasoning, 1 packet28 oz diced tomato (795 g), 1 can, drained 2 cups rice (460 g), cooked1 can black beans, drained, rinsed 1 can corn 1 jar salsa 1 lime, sliced into wedges,cheddar cheese,fresh cilantro, for garnish'
}
]

function addImage(){
	for(var i = 0;i<meal.length;i++){
$("#pic").attr("src",meal[i].image);
$( "#para" ).text( meal[i].ingredients)
}
}
$( "#btn" ).click(addImage);

