## Layout Engine Issue

This is a a micro frontend application using single-spa showing an issue with single-spa-layout-engine

There are 4 sub-projects in this repo

- container "The main container application that runs micro frontend applications"
- navbar "A UI for the navigation bar at the top" written in React typescript
- home "Home page route" written in React javascript
- settings "Settings UI route" written in Svelte

The problem shows in the home view where there is a sub-router implemented. When that one is modifying
the route something is causing the react shadow-dom to break and the whole react tree is re-rendering.
This is not the case if the app was built without the layout-engine.

## how to start it locally

install yarn if you don't already have it. `curl -o- -L https://yarnpkg.com/install.sh | bash`

run `yarn`

then run `yarn start`

open `http://localhost:9000` in your browser
