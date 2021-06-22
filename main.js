
var holder ="";
var meal =[
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
	image:'./images/Keto-Vegetarian-Breakfast-719x1024.jpg',
	mealName:'Keto Vegetarian',
	ingredients:'2 eggs,2 cups spinach,½ avocado,½ cup sliced mushrooms,1½ tbsp. olive oil,1 tsp. salt,1 tsp. black pepper'
},
{
	image:'./images/Scrambled eggs with veggies & feta cheese and roasted mini potatoes seasoned in olive oil.jpg',
	mealName:'Extreme Veggie Scrambled Eggs',
	ingredients:'¼ cup sliced fresh mushrooms,¼ cup chopped onions,¼ cup chopped green bell peppers,6 eggs,¼ cup milk,¼ cup chopped fresh tomato,¼ cup shredded Cheddar cheese'
},
{
 image:'./images/Cumin Quinoa.jpg',
 mealName:'Cumin Quinoa',
 ingredients:'1 Cup Quinoa,2 Cups Filtered Water,2 Cloves Minced Garlic ,1 Tablespoon Cumin,1/4 Teaspoon Dried Thyme,1/2 Teaspoon Maldon Sea Salt,1/4 Teaspoon Black Pepper,1/4 Teaspoon Cayenne Pepper,1/2 Fresh Squeezed Lemon,1 Tablespoon Avocado Oil or Olive Oil'
},
{
	image:'./images/Avocado-Strawberry-Spinach-Salad-1.jpg',
	mealName:'Avocado Strawberry Spinach Salad',
	ingredients:'1 bag of fresh, organic spinach,1 carton of organic strawberries,2 large Hass avocados, sliced into cubes,1/3 cup of raw walnuts or slivered almonds,1/3 cup of crumbled goat feta or goat cheese,1 tsp of sumac to season'
},
{
	image:'./images/gallery-1510947859-radicchio-salad-roasted-fennel-shrimp-ghk-1217.jpg',
	mealName:'Radicchio Salad with Roasted Fennel and Shrim',
	ingredients : '2 lemons, 1 medium head radicchio, about 8 ounces,1 bulb fennel,1 red onion,6 slices bacon,3/4 lb. medium peeled and deveined shrimp,2 tbsp. balsamic vinegar,1 tsp. sugar,1 c. fresh flat-leaf parsley leaves,4 thick slices sourdough or country bread,Manchego cheese'
},
{
	image:'./images/vegetable-ramen-mushrooms-and-bok-choy-ghk-1534278449.jpg',
	mealName:'Vegetable Ramen With Mushrooms and Bok Choy',
	ingredients:'3 scallions,1 or 3-oz piece ginger, peeled and very thinly sliced,5 tbsp. low-sodium tamari or soy sauce,6 oz. ramen noodles,6 oz. shiitake mushroom caps, thinly sliced,2 heads baby bok choy, stems thinly sliced and leaves halved lengthwise,4 oz.  snow peas, thinly sliced lengthwise snow peas, thinly sliced lengthwise,1 tbsp. rice vinegar,2 soft-medium boiled eggs, peeled and halved,1/2 c. cilantro sprigs Thinly sliced red chile, to taste'	
},
{
	image:'./images/pastrami-hash.jpg',
	mealName:'Pastrami hash',
	ingredients:'2 tbsp vegetable oil,430g Maris Piper potatoes, cut into 2cm cubes,40g pastrami, torn,30g emmental, grated,2 medium eggs,sliced gherkins, to serve,American mustard, to serve (optional)'
},
{
	image:'./images/coriander-salmon-with-curried-quinoa-pomegranate-1.jpg',
	mealName:'Coriander salmon with curried quinoa & pomegranate',
	ingredients:'120g quinoa, rinsed,320g fine green beans, trimmed and cut into thirds,15g pack coriander,15g fresh ginger, peeled and chopped,1 lemon, juiced,½ tsp ground cumin,1 green or red chilli, seeds removed and chopped,1 tsp ground coriander,4 wild skinless salmon steaks (460g),1 tbsp extra virgin olive oil,2-3 courgettes (320g), halved and sliced,2 red onions, finely chopped,2 tsp garam masala,2 tsp vegetable bouillon powder,400g can chickpeas, drained,150g pomegranate seeds'
},
{
	image:'./images/Garlic-Butter-Meatballs-recipe-02.jpg',
	mealName:'Garlic Butter Turkey Meatballs with Lemon Zucchini Noodles',
	ingredients:'1/2 lb (220g) ground turkey meat,1/2 lb (220g) ground pork meat (optional, see recipe notes),1/2 cup shredded mozzarella (or cheddar, provolone…),4 cloves garlic, grated + 2 cloves garlic, minced,1 teaspoon Italian seasoning,1/2 teaspoon red crushed chili pepper flakes, optional,1 crumbled bouillon cube, optional Salt and fresh cracked black pepper, to taste,1 cup fresh chopped cilantro (or parsley), divided,3 tablespoons butter,4 medium zucchini, spiralized Juice of 1/2 lemon,1 tablespoon hot sauce of your choice (we used Sriracha)'
},
{
	image:'./images/cream-cheese-dessert-1.jpg',
	mealName:'Blueberry & Strawberry Creamy Mousse',
	ingredients:'8 ounces (225g) cream cheese or mascarpone,1 cup whipping cream,1/4 cup low carb sweetener (or honey for non-keto),3/4 teaspoon vanilla extract,2 cups berries (we used blueberries and strawberries)'
},
{
	image:'./images/chile lime tilapia.jpg',
	mealName:'Chile-Lime Tilapia with Corn Sauté',
	ingredients:'4 4-5 ounces fresh or frozen skinless white firm-fleshed fish fillets, such as tilapia, catfish, sole, flounder, or cod,1 tablespoon lime juice,1½ teaspoons ground ancho chile pepper or chili powder,¼ teaspoon salt,1 tablespoon canola oil,2 0.667 cups frozen whole kernel roasted or regular corn, thawed,¼ cup finely chopped red onion,2 teaspoons finely chopped seeded fresh jalapeño chile pepper,2 cloves garlic, minced,1 tablespoon snipped fresh cilantro Lime wedges and/or additional jalapeño slices (optional)'
},{
image:'./images/BakedPineappleSalmon.jpg',
mealName:'Baked Pineapple Salmon',
ingredients:'17 pineapple rings, fresh or canned, 1 large salmon fillet (about 3 lbs.),Kosher salt, Freshly ground black pepper,3 tbsp. melted butter,3 tbsp. sweet chili sauce,2 tbsp. freshly chopped cilantro,3 cloves garlic, minced,2 tsp. freshly grated ginger,2 tsp. toasted sesame oil,1/2 tsp. crushed red pepper flakes, Toasted sesame seeds, for garnish,Thinly sliced green onions, for garnish ,Lime wedges, for serving'
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
holder = fixIndex;

}
var mealHolder=addmeal
$( "#btn" ).click(addmeal);
var favorite=[]
 function addfavorite(){
 		console.log("img",holder)
	return favorite.push(holder)

}
$("#btn2").click(addfavorite)

 function displayFavorite(){
  for (var i=0;i<favorite.length;i++){
  	var timplate=`<div>
  	<img src= ${favorite[i].image}/>
  	<p>${favorite[i].mealName}</p>
    <p>${favorite[i].ingredients}</p>
  	</div>`
  	$('body').append(timplate)
  }
}
$("#btn3").click(displayFavorite)
