# departures

First I just want to leave a note. I did read in the task that I should use css/scss/sass/less or css in js but due to time constraints I opted to use windicss. This isn't because I can't use css (I use it in my day to day work along with bootstrap) but I wanted to make sure that I was building this app quickly so I can focus on 1) functionality and 2) testing. I recently picked up windicss and really like it as it makes building UI components really fast. I hope this doesn't knock too many points since windicss is essentially just a different way to access the same css properties I would be using anyway, just without the overhead of adding a class markup. If time weren't an issue, I could employ a naming convention such as BEM (which I generally use at work) to make sure that the markup is semantic and maintainable.

## Post Task Notes

So I've decided to call it a day on this one. I spent a fair amount of time, and most of it was spent troubleshooting the vue setup. I regret trying so hard to make it work with the new technologies that I'm used to, since it has ultimately caused more annoyance than it was worth. I've decided to submit anyway since it's in a state where I feel like anything other than a rewrite won't fix a lot of the issues that I've had.

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

### What I think could be improved

- Of course I would like the app to actually work as intended, but I think that's a given.
- I wish my tests worked with the vue components, I think that would have been a good way to test the functionality of the app.
- I had a lot in mind for improving the performance of the app (such as using a virtual list to render the table, using a web worker to handle the sorting, lazy loading components, etc.) but with the core functionality not being there, I didn't want to go too far down that rabbit hole.
- I think the note to say *may* use nuxt might have been more of a possitive nudge than a negative one, but I think I would have been better off using nuxt to get the app up and running faster, as well as handling ssr. I initially read the *may* as a suggestion to not use nuxt but I think that was a misinterpretation on my part (and of course I would clarify this by sending a messege).

### Notable differences from day to day

There were a few things that I wanted to note as a difference from how this project worked and how I might work in a real world scenario.

- I noticed on the spec that the spec didn't fully reflect what was in the design. I think in a real world scenario I would have asked for clarification on this: specifically relating to the status types. I used the status types in the spec and matched the colours to make the implementation go faster, but looking back I think it would have been better to ask for clarification on this and possibly just add more types anyway based on what was in the design.
- I would have concidered different approaches to the libraries used to make sure that the rest of the team would be comfortable maintaining those codebases. I opted to use what I was used to and what I thought would work best (again, regrettably this didn't actually work out)

### Planned features which I didn't get to

- I wanted to direct the user to the form when they clicked on a row, but I didn't get to this.
- I wanted to add a loading state to the table, but I didn't get to this.

### Conclusion

I think the project was a good learning experience and looking back I think I can narrow down the issues to a few things:

- Overcomplication of the project by trying to use new technologies without understanding them fully within the context of the project
- Overreliance on the conveniences of vue 3 (such as the composition api) without understanding the differences between how you can interact with them in vue 2 and vue 3
- Lack of time spent to fully understand the requirements of the project and how they would be implemented

I have appreciated the oppertunity to work on this project and I hope that I can continue to improve my skills as a developer. I regret the fact that I wasn't able to get the app functioning correctly, but I think that I have learned a lot from this experience and I hope that I can continue to improve my skills as a developer. If through this process I have been able to show that I am a good fit for the role, I would be happy to continue the process and work on the project further. I'm sure you will recieve many applications for this role, and they will probably include much better functioning attempts at this project, but I hope that you will consider my application as well as I have hunger for learning and have a lot of knowledge in the newer implementations of vue. I hope that you will consider my application and I look forward to hearing from you.

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

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
