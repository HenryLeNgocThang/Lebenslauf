import { JSXElement, Show } from "solid-js";
// import solidLogo from "./assets/solid.svg"

import Loader from "../../components/loader/Loader";

function Home(): JSXElement {
  return (
    <Show when={true} fallback={<Loader></Loader>}>
      {/* <img src={viteLogo} class="logo" alt="Vite logo" /> */}
      <main class={`container grid grid-cols-12 gap-12`}>
        <div class={`col-span-12 mb-12 text-center`}>
          <h1>Willkommen <span class={`font-handwriting font-bold text-right text-base`}>(˵¯͒〰¯͒˵)</span></h1>
          <br />
          <p>Reinklicken zum Starten</p>
        </div>
      </main>
      <iframe class={`mx-auto`} src="/pages/pong/pong.html" width="100%" height="657px"></iframe>
    </Show>
  )
}

export default Home