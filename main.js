var meal =
[
{
 image :"./images/chicken-and-asparagus-skillet-recipe-2.jpg",
 mealName:'chicken-and-asparagus',
 ingredients : "1 Table3 boneless, skinless chicken breasts cut into bite-sized chunks 2 bunch of asparagus, rinsed and trimmed1/2 cup butter, softened1 teaspoon olive oil2 teaspoons minced garlic1 teaspoon Italian seasoning or Herbes de Provence1 tablespoon hot sauce, optional (we used Sriracha)1/2 cup low-sodium chicken brothJuice of 1/2 lemon1 tablespoon minced parsleyCrushed red chili pepper flakes, optionalSlices of lemon, for garnish"
},
{
image:'./images/image.jpg',
mealName:'Taco Bowls',
ingredients :'2 tablespoons oil1 red bell pepper, sliced 1 yellow bell pepper, sliced 1 large red onion, sliced1 teaspoon salt 1 teaspoon pepper 100 ground turkey (455 g) ,1 tablespoon taco seasoning, 1 packet28 oz diced tomato (795 g), 1 can, drained 2 cups rice (460 g), cooked1 can black beans, drained, rinsed 1 can corn 1 jar salsa 1 lime, sliced into wedges,cheddar cheese,fresh cilantro, for garnish'
},
{
	image: './images/Apple-Almond-Feta-Spinach-Salad-Recipe.jpg',
	mealName : 'Apple Feta Spinach Salad',
	ingredients:"3 – 4 cups baby spinach, rinsed,1 Royal Gala apple, diced 1 handful dried cranberries,3 tablespoons chopped almonds,1/2 cup feta cheese, crumbled,1/4 cup olive oil,1 tablespoon honey,1/4 cup apple cider vinegar,2 teaspoons mustard (Dijon or whole-grain)"
},
{
	image :'./images/DAIRY FREE GREEK PASTA and Spicy SRIRACHA CHICKEN_n.jpg',
	mealName:'DAIRY FREE GREEK PASTA and Spicy SRIRACHA CHICKEN',
	ingredients:'2 pieces chicken breast marinated in 1/4 cup sriracha,1/2 teaspoon salt,,1/2 teaspoon pepper,1 teaspoon garlic powder,2 tablespoons lemon juice,1 tablespoon coconut aminos,seared the top for 3 minutes and then baked on 375 for about 15 minutes'
},
{
image:'./images/teriyaki-salmon-8-768x1152.jpg',
mealName:'Teriyaki Salmon Recipe - Cooking Classy',
ingredients:'4 (6 oz) skinless salmon fillets,1 green onion, chopped (optional),1/2 tsp sesame seeds, for serving (optional),6 - 8 Tbsp low-sodium soy sauce, depending on how salty you like it,8 Tbsp water divided,3 Tbsp honey,2 Tbsp packed light brown sugar,1 Tbsp minced garlic (3 cloves),1 Tbsp minced peeled fresh ginger,1 or 1/2 Tbsp fresh lemon juice,1 Tbsp cornstarch'
},
{
 image: './images/Garlic-Butter-flank-Steak.jpg',
 mealName:'Garlic Butter Steak and Potatoes Skillet',
 ingredients:'1 1/2 lb (650g) flank steak, sliced against the grain (or ribeye steak, tenderloin, strip loin, strip steak…),1 or 1/2 lb (650g) baby yellow potatoes, quartered,1 tablespoon olive oil,3 tablespoons butter, divided,5 garlic cloves, minced,1 teaspoon fresh thyme, chopped,1 teaspoon fresh rosemary, chopped,1 teaspoon fresh oregano, chopped,Salt and fresh cracked pepper,Crushed red chili pepper flakes, optional'
},
{
	image:'./images/unnamed.jpg',
	mealName:'Garlic Herb Roasted Potatoes Carrots and Green Beans',
	ingredients:'1 1/4 pounds baby red potatoes (halved and larger ones quartered),1 pound medium carrots (scrubbed clean, cut into 2-inch pieces and thicker portions halved),3 tablespoons olive oil (divided),1 tablespoon fresh thyme (minced),1 tablespoon fresh rosemary (minced)saltfreshly ground black pepper,12 ounces green beans (ends trimmed, halved),1 or 1/2 tablespoons minced garlic (4 cloves'
},
{
	image:'/images/Keto-Vegetarian-Breakfast-719x1024.jpg',
	mealName:'Keto Vegetarian',
	ingredients:'2 eggs,2 cups spinach,½ avocado,½ cup sliced mushrooms,1½ tbsp. olive oil,1 tsp. salt,1 tsp. black pepper'
}
]
randomIndex = function(array){
var randomIndex = Math.floor(Math.random()*array.length)
return array[randomIndex]
}
var fixIndex=null
function addmeal(){
	 fixIndex=randomIndex(meal)
$("#pic").attr("src",fixIndex.image)+$("#name").text(fixIndex.mealName)+$( "#para" ).text(fixIndex.ingredients)
}
var mealHolder=addmeal
$( "#btn" ).click(addmeal);
var favorite=[]
function addfavorite(){
	return favorite.push(fixIndex)
}
 function displayFavorite(){
           return addfavorite()
      }

$("#btn2").click(addfavorite)