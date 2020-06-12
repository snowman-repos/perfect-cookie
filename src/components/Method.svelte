<div class="mdc-layout-grid">
  <div class="grid mdc-layout-grid__inner">
    <div class="first-column mdc-layout-grid__cell mdc-layout-grid__cell--span-0-phone mdc-layout-grid__cell--span-1-tablet mdc-layout-grid__cell--span-2-desktop">
    </div>
    <div class="first-column mdc-layout-grid__cell mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-6-tablet mdc-layout-grid__cell--span-8-desktop">
      <h3 class="mdc-typography--headline3 u-centered" data-testid="preparationTime">About {timeNeeded} needed before you can eat these babies.</h3>
      <List avatarList data-testid="method" nonInteractive>
        {#each steps as step, index}
          <Item style="height: auto; margin-bottom: 1.5rem;">
            <Graphic style="background-image: url(https://via.placeholder.com/40/f2f2f2/777777?text={index + 1});" />
            <span>{@html step}</span>
          </Item>
        {/each}
      </List>
    </div>
    <div class="first-column mdc-layout-grid__cell mdc-layout-grid__cell--span-0-phone mdc-layout-grid__cell--span-1-tablet mdc-layout-grid__cell--span-2-desktop">
    </div>
  </div>
</div>

<script>
  import List, { Graphic, Item } from '@smui/list/bare.js';
  import '@smui/list/bare.css'
  import { recipe } from '../store.js'

  let steps = []
  let timeNeeded = ''

  const parseTime = (t) => {
    if (t >= 120 ) {
      return `${Math.floor(t/60)} hours, ${t % 60} minutes`
    } else if (t >= 60) {
      return `${Math.floor(t/60)} hour, ${t % 60} minutes`
    } else return `${t} minutes`
  }

  recipe.subscribe(({ method, preparationTime }) => {
    steps = method
    timeNeeded = parseTime(preparationTime)
  })
</script>
