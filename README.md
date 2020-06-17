# My Perfect Cookie

Generate the recipe for _your_ perfect cookie.

## Built with:

- [https://svelte.dev/](Svelte)
- [https://sapper.svelte.dev/](Sapper)
- [https://github.com/hperrin/svelte-material-ui](Svelte Material UI) (SMUI)
- [https://jestjs.io/](Jest)

## Background

Why I made it
How I made it

## Credits & References

Inspiration
Recipe sources

## Help / Contribute

I would love to have an image or illustration at the top of the page which depicts what the cookie might look like, based on the selected properties. I'm imagining a top-down view and a cross section that shows the color, mouthfeel, surface quality, texture, and thickness. Given how many permutations there are, sourcing images and loading/updating them each time any slider is changed might not be feasible. I thought about animating SVGs or drawing something with canvas that can be manipulated by the code might work, but not sure how to implement it. If anyone has any idea then please [mailto:darryl@darrylsnow.com](get in touch with me).

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
