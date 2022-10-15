# departures

First I just want to leave a note. I did read in the task that I should use css/scss/sass/less or css in js but due to time constraints I opted to use windicss. This isn't because I can't use css (I use it in my day to day work along with bootstrap) but I wanted to make sure that I was building this app quickly so I can focus on 1) functionality and 2) testing. I recently picked up windicss and really like it as it makes building UI components really fast. I hope this doesn't knock too many points since windicss is essentially just a different way to access the same css properties I would be using anyway, just without the overhead of adding a class markup. If time weren't an issue, I could employ a naming convention such as BEM (which I generally use at work) to make sure that the markup is semantic and maintainable.

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
