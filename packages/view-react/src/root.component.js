import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  return <h2>Topics</h2>;
}

export default function Root(props) {
  return (
    <div>
      <section>
        This web application is a prototype of a microfrontend architecture.
        This view is the "home" microfrontend and it is a React project.
      </section>
      <section>
        The rest of the application consist of a few other microfrontends:
      </section>
      <ul>
        <li>
          @sspa/container - This is the main container application that loads
          microfrontend apps with SystemJS and mounts them on elements with a
          simple routing mechanism. It also exposes a common store that other
          microfrontends can use for sharing state in the application.
        </li>
        <li>
          @sspa/navbar - Top bar that is always visible and mounted to the
          element on top of the page
        </li>
        <li>
          @sspa/view-react - This particular view that is displayed in the main
          area of the page and only visible if the route is "/", built with
          react
        </li>
        <li>
          @sspa/settings - Another view that is displayed in the main area and
          only visible if the route is "/settings". Built with Svelte
        </li>
      </ul>
      <div>
        The links below demonstrate the issue. When clicking on any of theese
        subroutes there is something that invalidates the whole react tree and
        causes a reload of the entire page.
      </div>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <div>
        If a similiar app is built without the layout engine this issue is not
        present An example can be found{" "}
        <a href="https://qmfe.herokuapp.com/">here</a>
      </div>
    </div>
  );
}
