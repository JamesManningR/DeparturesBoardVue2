# Departures technical test

I've setup automatic deployment to github pages so you don't have to do any building. Just go to [This deployed app page](https://jamesmanningr.github.io/DeparturesBoardVue2/) and you'll see the latest version of the app.

## Development notes (written before starting)

First I just want to leave a note. I did read in the task that I should use css/scss/sass/less or css in js but due to time constraints I opted to use windicss. This isn't because I can't use css (I use it in my day to day work along with bootstrap) but I wanted to make sure that I was building this app quickly so I can focus on 1) functionality and 2) testing. I recently picked up windicss and really like it as it makes building UI components really fast. I hope this doesn't knock too many points since windicss is essentially just a different way to access the same css properties I would be using anyway, just without the overhead of adding a class markup. If time weren't an issue, I could employ a naming convention such as BEM (which I generally use at work alongside bootstrap) to make sure that the markup is semantic and maintainable.

## Post Task Notes

I almost decided to call it a day on this project and submit unfinished because I was having trouble with Vue2, fo fun, this repo has the readne from that [this version](https://github.com/JamesManningR/DeparturesBoardVue2/blob/64ec519bb7e226b999fc15387ae09b7697df4395/README.md) has my thoughts before I decided to push through and not give up. I decided that I wanted to at give myself the most chance of at least getting to the stage where I get the oppertunity to talk through it and get some feedback!

I might take some time in the week to just upgrade this for fun since the foundation is there and I think it's worth adding to every now and again... I'll probably update it with whatever feedback I recieve and add some features that I think would be nice to have.

### What I think went well

- I'm happy with a lot of the UI elements, I think they look good and match the design pretty well.
- I think the code is fairly clean and easy to follow: with good comenting and a good naming convention.
- I am happy that I was able to get the accessibility benefits of using a table element, and finding a way around matching the design with what without some css trickery, would have been fairly different to the design
- On the same note with the table, I'm happy that I was able to get the table to be responsive and still look good.
- I think my testing on a good chunk of the project is solid, but I was unable to get the testing to work with some of the vue components. This is something I would have liked to have done, but the differences between the vue 2 and vue 3 testing tools were more stark than I'd anticipated.
- The environment generally works well, I'm happy with the setup and the way that the project is structured on a boilerplate level.
- I think on the styling front, I developed skills using windicss (which I hadn't touched before) and I think I did a good job of using it to build the UI. I also think it helped speed up the development process
- I followed a mostly TDD approach to this project, even at times when it was a bit of a pain to do so. I think this broke down the project into smaller chunks and made it easier to work on, even if at times it caused a blockage in progress.
- I liked the inferStatusType functionality and think it works well when you interact with it in the free-text option. I think it could be improved by adding more options to the resolver, but I think it's a good start.
- I almost gave up on the project at one point, but I took an hour break and came back to it, determined to solve the problem. While I'm not proud of the fact that I almost just submitted it and hoped that I'd get a pass, I'm glad that I have an internal drive to see things through to the end.
- I added an infinite scrolling feature to the table so fewer elements have to be rendered to the screen on initial load. I would like to develop this further for some more edge cases as well as expanding it into fetching more results from the API (Rather than just handling the ones that are already loaded into the store) but that wasn't ever called for in the task. Though thinking about it, maybe the API does have that functionality... I better not get too into this because before you know it, there will be anotehr readme version with that feature implemented...

### What I think could be improved

- I wish my tests worked with the vue components, I think that would have been a good way to test the functionality of the app. I tried using different methods for instance using the `computed.call` method, but this still gave me issues. If I had more time I would have tried to figure this one out.
- I had a lot in mind for improving the performance of the app (such as using a virtual list to render the table, using a web worker to handle the sorting, lazy loading components, etc.) but with the core functionality not being there, I didn't want to go too far down that rabbit hole.
- I think the note to say *may* use nuxt might have been more of a possitive nudge than a negative one, but I think I would have been better off using nuxt to get the app up and running faster, as well as handling ssr. I initially read the *may* as a suggestion to not use nuxt but I think that was a misinterpretation on my part (and of course I would clarify this by sending a messege).
- My editor setup didn't pan out so well, which was a shame as it is something I've never really had much of an issue with in the past. For some reason my tsconfig isn't interacting with VSCode as I might have expected. I'm sure it's some simple config issue since it works periodically in the editor (and works fine when running)
- The page layout could do with some work. I think the layout doesn't make use of screen space very well and could be improved.
- Now that I think about it, I don't think that an `aside` is a good element to put the form into...
- Add a more screen-reader friendly interaction for selecting a departure status

### Notable differences from day to day

There were a few things that I wanted to note as a difference from how this project worked and how I might work in a real world scenario.

- I noticed on the spec that the spec didn't fully reflect what was in the design. I think in a real world scenario I would have asked for clarification on this: specifically relating to the status types. I used the status types in the spec and matched the colours to make the implementation go faster, but looking back I think it would have been better to ask for clarification on this and possibly just add more types anyway based on what was in the design.
- I would have concidered different approaches to the libraries used to make sure that the rest of the team would be comfortable maintaining those codebases. I opted to use what I was used to and what I thought would work best (again, regrettably this didn't actually work out)

### Planned features which I didn't get to

- A timer on the reset button to prevent excessive calls to the api.
- Using the destinations to show the flag of the country to make information much easier to parse.
- Status to flash when it changes to make it easier to see when it changes.
- Handle the demounting of the form more eligantly (I think it's a bit janky at the moment, it'd be nice to scroll to the updated row when it has been updated)
- Diverted status change would render the new destination bellow the original destination - I chose this as a solution to the problem as people use the city names as an identifier for the flight (rather than the number). I would have done this if I got the update method working.
- Use a more consistent method for scrolling to the form when the user clicks on a row, I have a method now but it doesn't actually work in build. I think this is because the element isn't rendered yet when the method is called. I'll look into this more if I get the chance.
- Pretty up the page layout a bit more, I think at the moment it puts too much emphasis on the table and not enough on the form. I'd like to make it a little more balanced especially on desktop. Maybe on mobile I could use a card flip style to make it a but more frictionless, but again I think this is a bit of a nice to have.

### Conclusion

I was able to complete the task and I think the product fits the brief. I am aware there are some rough patches (mainly to do with scrolling behaviour and some interaction) but I think that even though I did kind of shoot myself in the foot by overcomplicating things, I delivered a functional app which will show some of the more advanced concepts that I have learned in my time working with Vue.



## External Packages used

I've listed out all of the packages that I thought would require a choice to be made. I've also included a short description of why I chose to use them. I've excluded some packages that I thought didn't require much desciption (If you'd like to know more about any of the packages I've used, please let me know and I'll be happy to explain my reasoning).

### Base

- [vue](https://vuejs.org/) - Used as it was the framework specified in the task (I generally use vue 3 but I used vue 2 for this task)
- [vite](https://vitejs.dev/) - Used as it is the fastest way to get a vue app up and running and I am farmiliar with it

### Code quality

- [eslint](https://eslint.org/) - Standard linting for standard code formatting
- [prettier](https://prettier.io/) - Same as above

### Testing

- [vitest](https://vitest.dev/) - I'm a big fan of this new framework and find it intergrates really well with vite, it's basically just jest but (in my experience) a lot faster
- [vue-test-utils@v1](https://vue-test-utils.vuejs.org/) - Used for testing vue components (this is standard for vue and I wouldn't test without it but I thought it's worth mentioning) v1 used becuase it's the version that supports vue 2
- [@vitest/coverage-c8] - Used to generate code coverage reports, there's no real reason that I could thing of to use this over [istanbul](https://istanbul.js.org/) was just an arbitrary choice. I'm sure there are pros and cons to each (as well as other options) but I didn't want to spend too much time lulling on this one.
- [@pinia/testing] - Required to unit test pinia stores if they are used in components

### UI

- [windicss](https://windicss.org/) - Looking at this list, I'm inexplicably loyal to [Anthony Fu](https://github.com/antfu) but as outlined above, I used this because I wanted to get this app up and running quickly and I prefer windicss over tailwind jit. I'd also like to investigate the possibility of using unocss as it seems to be a really interesting project which is picking up tracking... And I've just realised that is also by Anthony Fu... 😐

### Vue Plugins

- [pinia](https://pinia.vuejs.org/) - I opted to use a state management library mainly because I wanted to show I can. For an app of this size, it's probably overkill but it's representative of how I'd work on a larger project. I've used [vuex](https://vuex.vuejs.org/) before but 1) it's no longer the reccomended state management library 2) is a lot more verbose than pinia 3) and takes a lot more effort to get working elegantly with typescript.

### Misc

- [typescript](https://www.typescriptlang.org/) - Makes code MUCH more maintainable and readable
- [axios] - I floated the idea of using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) but axios is 1) more browser compatible and 2) it works with typescript typing (without workarounds) so I went with that
- [VueUse](https://vueuse.org/) - I used this to get the `useInfiniteLoading` function. I could have implemented this myself but for some functionality I think it's worth using the library that has been maintained and tested heavily, rather than re-inventing the wheel (oh.. and look.. it's another Anthony Fu maintained project 🤷)

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

I've used Yarn for this project, you can use npm if you prefer but I'd recommend using yarn as it's a lot faster.

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)
Bare in mind these tests will fail for all of the component files

```sh
yarn test
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
