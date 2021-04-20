## Micro Frontend Prototype

A micro frontend application using single-spa

There are 7 sub-projects in this repo

- container "The main container application that runs micro frontend applications"
- navbar "A UI for the navigation bar at the top" written in React typescript
- sidebar "A UI for a side panel" written in React javascript
- home "Home page route" written in React javascript
- admin "Admin UI route" written in Svelte
- chartlib "A chart library that can render a barchart into an element" typescript
- styleguide "loads basic css into the html page"

Theese UIs should typically be developed in their own git repos with their own CI flow.

The idea is that each micro frontend ui application is delivered and hosted as its own web application. The main container loads the micro frontend application and mounts them into the dom. It also handles basic routing of main routes.

## how to start it locally

install yarn if you don't already have it. `curl -o- -L https://yarnpkg.com/install.sh | bash`

run `yarn`

then run `yarn start`

open `http://localhost:9000` in your browser
