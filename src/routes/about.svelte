<svelte:head>
  <title>About The Cookie Website</title>
</svelte:head>

<div class="mdc-layout-grid">

  <Button class="home-button" data-testid="navigation" on:click={() => { goto('/'); }} variant="outlined">
    <Label>Back</Label>
  </Button>

  <div class="grid mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2"></div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8">

      <h1 class="mdc-typography--headline2 u-centered">
        The Cookie Website
        <span class="mdc-typography--subtitle1 subtitle u-centered">Generate the perfect recipe for your perfect cookie.</span>
      </h1>

      <h2 class="mdc-typography--headline4 u-centered">How do you use this?</h2>

      <ul>
        <li>Drag the sliders to describe your perfect cookie; sometimes changing one slider might affect another - just keep making adjustments until it looks right</li>
        <li>Each time you update any of the sliders, the list of ingredients, the ingredients amounts, and the recipe steps may be updated</li>
        <li>Specify how many cookies you want to make (of course, your yield will depend on how much dough you place on the baking sheet for each cookie&hellip;)</li>
        <li>Against each ingredient there's a checkbox you can use to help you track ingredients you have/don't have, or ingredients you've used while making the recipe - it's up to you how you use the checkboxes because they don't do anything</li>
        <li>Don't forget to leave feedback - if the cookies don't turn out perfect then click the thumbs-down button to let me know how they turned out</li>
        <li>Feel free to buy me a coffee to go with my cookies by clicking the donation button at the bottom of the page</li>
      </ul>

      <h2 class="mdc-typography--headline4 u-centered">Who made this?</h2>

      <p>
        <a href="https://darrylsnow.com" class="u-centered u-display--block" title="Go to my website">Darryl Snow</a>
      </p>

      <h2 class="mdc-typography--headline4 u-centered">Why was this made?</h2>

      <p>Like many people, during the Covid-19 lockdown I did a lot of baking. I tried making cookies several times. The first few times I tried different recipes I found online. However, none of them turned out quiiiiite right. I searched for recipes that specifically described the kind of cookies I wanted to make and still they weren't right. I researched more about how different ingredients and methods impact the different qualities of the cookies - the color, the cragginess, the chewiness, the texture, the uniformity, etc. and eventually came up with my own secret recipe. My perfect cookie. That gave me the idea to make an app that could generate the recipe for you, without needing to do all that recipe searching and research.</p>

      <p>I also wanted to play around with Svelte and Sapper, so this seemed like a nice little app I could throw together as a learning project.</p>

      <h2 class="mdc-typography--headline4 u-centered">How was this made?</h2>

      <p>Updating any slider triggers an "update recipe" function that runs all the calculations to determine the required ingredients, the ingredient amounts, and the steps to make it. The calculations are based on linear equations that relate the 5 qualities to the possible ingredients and steps. Those equations were derived from personal assessment from 35 trial bakes.</p>

      <h3 class="mdc-typography--headline5">Technology Stack:</h3>

      <ul>
        <li>
          <a href="https://svelte.dev/" title="Check out Svelte">Svelte</a>
        </li>
        <li>
          <a href="https://sapper.svelte.dev/" title="Check out Sapper">Sapper</a>
        </li>
        <li>
          <a href="https://github.com/hperrin/svelte-material-ui" title="Check out Svelte Material UI">Svelte Material UI (SMUI)</a>
        </li>
        <li>
          <a href="https://jestjs.io/" title="Check out Jest">Jest</a>
        </li>
        <li>
          <a href="https://netlify.com" title="Check out Netlify">Netlify</a>
        </li>
      </ul>

      <h3 class="mdc-typography--headline5">The Science & Inspiration:</h3>

      <p>I was inspired and took guidance from 2 articles listed below on what what experiments to try and ratios to measure.</p>

      <ul>
        <li>
          <a href="https://sweets.seriouseats.com/2013/12/the-food-lab-the-best-chocolate-chip-cookies.html" title="Go to this article">The Food Lab: The Best Chocolate Chip Cookies</a>
        </li>
        <li>
          <a href="https://www.insider.com/chocolate-chip-cookies-common-baking-mistakes-photos" title="Go to this article">Chocolate chip cookies: Common Baking Mistakes</a>
        </li>
      </ul>

      <h3 class="mdc-typography--headline5">Trial Recipes:</h3>

      <p>I tried each of the recipes below and assessed them based on my 5 criteria.</p>

      <ul>
        <li>
          <a href="https://basicswithbabish.co/basicsepisodes/2017/10/23/baressentials-7xwwz" title="Check out this recipe">Basics with Babish</a>
        </li>
        <li>
          <a href="https://www.foodnetwork.com/recipes/food-network-kitchen/crispy-cakey-chocolate-chip-cookies-recipe-2107267" title="Check out this recipe">Food Network: Crispy Cakey Chocolate Chip Cookies</a>
        </li>
        <li>
          <a href="https://www.marthastewart.com/354939/cakey-chocolate-chip-cookies" title="Check out this recipe">Martha Stewart: Cakey Chocolate Chip Cookies</a>
        </li>
        <li>
          <a href="https://sallysbakingaddiction.com/chocolate-chip-cookies/" title="Check out this recipe">Sally's Baking Addiction: Chocolate Chip Cookies</a>
        </li>
        <li>
          <a href="https://sallysbakingaddiction.com/chewy-chocolate-chip-cookies/" title="Check out this recipe">Sally's Baking Addiction: Chewy Chocolate Chip Cookies</a>
        </li>
        <li>
          <a href="https://www.lifeloveandsugar.com/best-soft-and-chewy-sugar-cookies/" title="Check out this recipe">Life, Love, and Sugar: Best Soft and Chewy Sugar Cookies</a>
        </li>
        <li>
          <a href="https://www.allrecipes.com/recipe/9870/easy-sugar-cookies/" title="Check out this recipe">Easy Sugar Cookies</a>
        </li>
        <li>
          <a href="https://www.allrecipes.com/recipe/9827/chocolate-chocolate-chip-cookies-i/" title="Check out this recipe">All Recipes: Chocolate Chip Cookies</a>
        </li>
        <li>
          <a href="https://www.allrecipes.com/recipe/10813/best-chocolate-chip-cookies/" title="Check out this recipe">All Recipes: Best Chocolate Chip Cookies</a>
        </li>
        <li>
          <a href="https://www.allrecipes.com/recipe/15004/award-winning-soft-chocolate-chip-cookies/" title="Check out this recipe">All Recipes: Award-Winning Soft Chocolate Chip Cookies</a>
        </li>
        <li>
          <a href="https://sugarspunrun.com/easy-sugar-cookie-recipe/" title="Check out this recipe">Sugar Spun Run: Easy Sugar Cookies</a>
        </li>
        <li>
          <a href="https://www.bbcgoodfood.com/user/596087/recipe/chewy-chocolate-chip-cookies" title="Check out this recipe">BBC Good Food: Chewy Chocolate Chip Cookies</a>
        </li>
        <li>
          <a href="https://tasty.co/recipe/the-best-chewy-chocolate-chip-cookies" title="Check out this recipe">Tasty.co: The Best Chewy Chocolate Chip Cookies</a>
        </li>
        <li>
          <a href="https://www.seriouseats.com/recipes/2013/12/the-food-lab-best-chocolate-chip-cookie-recipe.html" title="Check out this recipe">Serious Eats: The Food Lab: Best Chocolate Chip Cookies</a>
        </li>
        <li>
          <a href="https://www.hellomagazine.com/cuisine/2020033187218/how-to-bake-chocolate-chip-cookies/" title="Check out this recipe">Hello Magazine: How to Bake Chocolate Chip Cookies</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=P1gqm9CG8sw&t=6s" title="Check out this recipe">Cup Cake Jemma: NYC Cookie Recipe</a>
        </li>
        <li>
          <a href="https://www.thejakartapost.com/life/2020/04/12/doubletree-shares-its-signature-chocolate-chip-cookie-recipe.html" title="Check out this recipe">The Jakarta Post: Doubletree Signature Chocolate Chip Cookie Recipe</a>
        </li>
        <li>
          <a href="https://americacoffeeco.com/blogs/recipes/crunkies-espresso-infused-cookies-recipe" title="Check out this recipe">America Coffee Co: Crunkies Espresso-Infused Cookies</a>
        </li>
        <li>
          <a href="https://www.jocooks.com/recipes/classic-shortbread-cookies/" title="Check out this recipe">Jo Cooks: Classic Shortbread Cookies</a>
        </li>
        <li>
          <a href="https://preppykitchen.com/shortbread-cookies-recipe/" title="Check out this recipe">Preppy Kitchen: Shortbread Cookies</a>
        </li>
        <li>
          <a href="https://www.cuisinefiend.com/331/crunchy-biscuits" title="Check out this recipe">Cuisine Fiend: Crunchy Biscuits</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=uJwekkbGPns" title="Check out this recipe">Oh Yum with Anna Olsen: Professional Baker's Best Chocolate Chip Cookies</a>
        </li>
        <li>
          <a href="https://www.greatbritishchefs.com/recipes/ginger-snaps-recipe" title="Check out this recipe">Great British Chefs: Ginger Snaps</a>
        </li>
        <li>
          <a href="https://www.stayathomemum.com.au/recipes/old-school-ginger-snap-biscuits/" title="Check out this recipe">Stay At Home Mum: Old School Ginger Snap Biscuits</a>
        </li>
        <li>
          <a href="https://chocolatecoveredkatie.com/2019/02/04/crispy-cookies-recipe-how-to/" title="Check out this recipe">Chocolate Covered Katie: Crispy Cookies</a>
        </li>
      </ul>

      <h2 class="mdc-typography--headline4 u-centered">Can I contribute?</h2>

      <p>I would happily accept pull requests.</p>

      <p>I would love to have an image or illustration at the top of the page which depicts what the cookie might look like, based on the selected properties. I'm imagining a top-down view and a cross section that shows the color, mouthfeel, surface quality, texture, and thickness. Given how many permutations there are, sourcing images and loading/updating them each time any slider is changed might not be feasible. I thought about animating SVGs or drawing something with canvas that can be manipulated by the code might work, but not sure how to implement it. If anyone has any idea then please <a href="mailto:darryl@darrylsnow.com" title="Email me">get in touch with me</a>.</p>

      <p>If there are any Math geniuses who want to help out, right now I'm just using linear equations in the calculations, but they don't exactly fit the model from my data...</p>

    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2"></div>
  </div>
</div>

<script>
  import Button, { Label } from '@smui/button/bare.js'
  import '@smui/button/bare.css'
  import { goto } from '@sapper/app'
</script>

<style>
  .subtitle {
    display: block;
  }

  * :global(.home-button) {
    border-radius: 999px;
    left: 1rem;
    position: absolute;
    top: 1rem;
  }
</style>
