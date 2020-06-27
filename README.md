# My Perfect Cookie

Generate the recipe for _your_ perfect cookie.

## Built with:

- [Svelte](https://svelte.dev/)
- [Sapper](https://sapper.svelte.dev/)
- [Svelte Material UI (SMUI)](https://github.com/hperrin/svelte-material-ui)
- [Jest](https://jestjs.io/)

## Background

Like many people, during the Covid-19 lockdown I did a lot of baking. I tried making cookies several times. The first few times I tried different recipes I found online. However, none of them turned out quiiiiite right. I searched for recipes that specifically described the kind of cookies I wanted to make and still they weren't right. I researched more about how different ingredients and methods impact the different qualities of the cookies - the color, the cragginess, the chewiness, the texture, the uniformity, etc. and eventually came up with my own secret recipe. My perfect cookie. That gave me the idea to make an app that could generate the recipe for you, without needing to do all that recipe searching and research.

I also wanted to play around with Svelte and Sapper, so this seemed like a nice little app I could throw together as a learning project.

I gathered lots of recipes (below) and read some articles about how the properties are impacted by the methods and ingredients. I scored each recipe from 0-100 on each of the 5 properties and then plotted charts with linear trend lines for how each property is impacted by certain ingredients. This gave me basic formulae for calculating ingredient amounts based on the slider values.

## How it Works

The updating the slider triggers an "update recipe" function that runs all the calculations. The properties you select, and the recipe generated, are saved to local storage so you can get your same recipe next time in case you want to try again or iterate on it.

## Credits & References

### The Science

* https://sweets.seriouseats.com/2013/12/the-food-lab-the-best-chocolate-chip-cookies.html
* https://www.insider.com/chocolate-chip-cookies-common-baking-mistakes-photos

#### Tips

* Butter keeps cookies tender because it inhibits the formation of gluten
* A higher proportion of butter to flour will result in cookies that spread more
* Using shortening instead of butter will result in softer, denser cookies because it doesn't add to the water content
* Creaming butter with sugar introduces air and helps leaven the cookies
* Using softer or melted butter results in denser cookies
* Butter is the most flavorful fat in baking because the milk proteins brown as they bake
* Using browned butter adds no moisture, and so the cookies may not taste quite as sweet
* Using browned butter adds no moisture, and less moisture means less gluten, and so the cookies will have a softer texture
* Eggs are the main source of water in cookies
* Additional egg yolks will result in denser, softer, fudgier cookies
* Additional egg whites will result in taller cookies
* Brown sugar results in taller cookies because it's slightly acidic and so reacts with the baking soda
* White sugar causes cookies to spread more and become crunchier
* Using caramelized sugar or syrup will result in chewy cookies with a uniform surface
* Using baking powder will result in cakier, taller cookies with a smoother surface
* More dissolved sugar will result in smoother-surfaced cookies with a more uniform texture
* Over-mixing your batter can lead to runny cookies
* If you use baking powder instead of baking soda, the chocolate chips will probably taste a little different
* Too much flour can result in cookies that look like scoops of ice cream
* Not using enough flour will make your cookies crisp and thin
* Loading all the ingredients in the bowl at once may cut down on time, but it compromises the texture of your cookies
* Leaving out eggs makes a huge difference in the texture and flavor, resulting in a dry cookie
* Using too much egg drastically changes the cookies and gives them a spongy, cake-like texture
* When you leave out most of the sugar, cookies will grow upward instead of outward
* Too much butter makes cookies turn out just as you'd expect: very buttery
* Using too little butter will make them lightweight
* Using cake flour will result in very soft cookies
* Bread flour results in chewy cookies
* The more you mix your dry and wet ingredients, the smoother the surface of your cookies will be
* Cookies need more salt than you might think...
* Don't bother with expensive vanilla here - essence will do
* A lower baking temperature leads to flatter, wider cookies
* Baking refrigerated cookie dough results in less spread in the oven
* Resting your cookie dough in the refrigerator overnight before baking will result in a better flavor

### The Recipes

* https://basicswithbabish.co/basicsepisodes/2017/10/23/baressentials-7xwwz
* https://www.foodnetwork.com/recipes/food-network-kitchen/crispy-cakey-chocolate-chip-cookies-recipe-2107267
* https://www.marthastewart.com/354939/cakey-chocolate-chip-cookies
* https://sallysbakingaddiction.com/chocolate-chip-cookies/
* https://www.lifeloveandsugar.com/best-soft-and-chewy-sugar-cookies/
* https://www.allrecipes.com/recipe/9870/easy-sugar-cookies/
* https://www.allrecipes.com/recipe/9827/chocolate-chocolate-chip-cookies-i/
* https://www.allrecipes.com/recipe/10813/best-chocolate-chip-cookies/
* https://www.allrecipes.com/recipe/15004/award-winning-soft-chocolate-chip-cookies/
* https://sugarspunrun.com/easy-sugar-cookie-recipe/
* https://www.bbcgoodfood.com/user/596087/recipe/chewy-chocolate-chip-cookies
* https://tasty.co/recipe/the-best-chewy-chocolate-chip-cookies
* https://sallysbakingaddiction.com/chewy-chocolate-chip-cookies/
* https://www.seriouseats.com/recipes/2013/12/the-food-lab-best-chocolate-chip-cookie-recipe.html
* https://www.hellomagazine.com/cuisine/2020033187218/how-to-bake-chocolate-chip-cookies/
* https://www.youtube.com/watch?v=P1gqm9CG8sw&t=6s
* https://www.thejakartapost.com/life/2020/04/12/doubletree-shares-its-signature-chocolate-chip-cookie-recipe.html
* https://americacoffeeco.com/blogs/recipes/crunkies-espresso-infused-cookies-recipe
* https://www.jocooks.com/recipes/classic-shortbread-cookies/
* https://preppykitchen.com/shortbread-cookies-recipe/
* https://www.cuisinefiend.com/331/crunchy-biscuits
* https://www.youtube.com/watch?v=uJwekkbGPns
* https://www.greatbritishchefs.com/recipes/ginger-snaps-recipe
* https://www.stayathomemum.com.au/recipes/old-school-ginger-snap-biscuits/
* https://chocolatecoveredkatie.com/2019/02/04/crispy-cookies-recipe-how-to/

## Help / Contribute

I would love to have an image or illustration at the top of the page which depicts what the cookie might look like, based on the selected properties. I'm imagining a top-down view and a cross section that shows the color, mouthfeel, surface quality, texture, and thickness. Given how many permutations there are, sourcing images and loading/updating them each time any slider is changed might not be feasible. I thought about animating SVGs or drawing something with canvas that can be manipulated by the code might work, but not sure how to implement it. If anyone has any idea then please [get in touch with me](mailto:darryl@darrylsnow.com).

If there are any Math geniuses who want to help out, right now I'm just using linear equations in the calculations, but they don't exactly fit the model from my data...

## TODO

- [ ] Either remove SMUI or fix it so that events can be tested (See [https://github.com/hperrin/svelte-material-ui/issues/110](issue))
- [ ] Fix tests with Timeouts for waiting for the store to be updated
- [ ] Add a feedback form
- [ ] Add open graph data
- [ ] Share buttons
- [ ] Add rich data (schema.org)
- [ ] Print styles and print buttons
- [ ] Tips & insights on how the ingredients and method affect the cookie properties
- [ ] Donate button (buymeacoffee)
- [ ] About page
- [ ] Rip out Cypress (unused)
- [ ] Image for the header
