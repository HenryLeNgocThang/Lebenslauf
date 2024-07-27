// import { A } from "@solidjs/router";
import { JSX } from "solid-js";

import "./Nav.scss";

const Nav = (): JSX.Element => {
    return (
        <nav>
            <a href="/">Übersicht</a>
            <a href="/cv">Mein Profil als CV</a>
        </nav>
    );
};

export default Nav;