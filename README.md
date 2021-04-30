# THIS ISSUE HAS BEEN FIXED

in `single-spa-layout@v1.5.2` https://github.com/single-spa/single-spa-layout/issues/126

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

NOTE: The problem is not visible in the UI, but if chrome devtools is open one can see that the dom is re-rendered when clicking the sub-routes.

## how to start it locally

install yarn if you don't already have it. `curl -o- -L https://yarnpkg.com/install.sh | bash`

run `yarn`

then run `yarn start`

open http://localhost:9000 in your browser

## compare with root-config that does not run with layout-engine

run `yarn start:no-issue`

open http://localhost:8000
