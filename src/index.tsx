/* @refresh reload */
import { render } from "solid-js/web"
import { lazy } from "solid-js";
import { Router, Route } from "@solidjs/router";
import "./index.scss";

/** Routes */
const Home = lazy(() => import("./routes/home/Home"));
const Cv = lazy(() => import("./routes/cv/Cv"));
const NotFound = lazy(() => import("./routes/notfound/NotFound"));

/** Components */
const Nav = lazy(() => import("./components/nav/Nav"));
const Loader = lazy(() => import("./components/loader/Loader"));

/** App */
const root = document.getElementById("root");

render(() => 
    <>
        <Nav></Nav>
        <Loader
            duration={1000}
        >
            <Router>
                <Route path="/" component={Home}></Route>
                <Route path="/cv" component={Cv}></Route>
                <Route path="*" component={NotFound}></Route>
            </Router>
        </Loader>
    </>
, root as HTMLElement);