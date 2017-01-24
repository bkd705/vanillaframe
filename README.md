# Vanilla Framework

A insanely simple, and probably insecure, slow, and all kinds of other bad adjectives, component based vanilla JavaScript framework.

## Setup

- Clone Repo

`git clone https://github.com/bkd705/vanillaframework.git`

- Install packages

`yarn OR npm install`

- Run project

`yarn dev OR npm dev`

- Navigate to project in browser

`localhost:8080`

## Layout

Components go in the components folder, and the index.js contains all the information for rendering. Webpack handles the build and deployment of a hot dev server.


### Adding Components & Routes

In the `index.js` file, import your new component to the file, and then add it to the `components` array in an object like;

```
import About from './components/About'

const components = [
    { route: 'about', component: About }
]
```

The `route` must match the name in your routes.

Then, add the `route` from your component, to the routes array like;

```
const routes = ['about']
```

The routes do not need a home route as they default to whatever component you add with a `route` of 'default' like;

```
const components = [
    { route: 'about', component: About },
    { route: 'default', component: Index }
]
```

## Contributions

If for some insane reason you want to contribute (I actually hope you do because this is fun to work on) feel free to;

Follow the fork, clone, branch method of contributing, and submit a pull request to the development branch when finished.

## Todo

3. Add JSX support??
5. Simplify domRender method
6. Add browserHistory routing
7. Lots more...