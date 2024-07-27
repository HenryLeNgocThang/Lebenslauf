import { JSXElement, Show, createEffect } from "solid-js";
import FetchedData from "../../shared/handleData";

import "./Cv.scss";

import PrintButton from "../../components/print-button/Print-Button";

const Cv = (): JSXElement => {
  const data = FetchedData();

  createEffect(() => {
    if (data()) {
      // console.log(data());
    }
  });

  return (
    <Show when={!data.loading}>
      <PrintButton></PrintButton>
      <div id="cv">
        <div class={"text-center border-b-2 border-gray-300 px-10 py-6 flex flex-shrink"}>
          <div class="flex-shrink">
            <img class="rounded-full w-28 inline-block" src="/img/henry-le.jpg" alt="Henry Le" />
          </div>
          <div class="flex-grow flex justify-center flex-col">
            <h1 class={""}>{data()?.name.firstname} {data()?.name.middlename}, {data()?.name.lastname}</h1>
            <h2 class={"italic text-gray-300 font-semibold"}>{data()?.jobtitle}</h2>
          </div>
        </div>
        <div class={"flex-grow grid grid-cols-12"}>
          <div class="col-span-4 flex flex-col h-full justify-between">
            <div class={"border-b-2 border-gray-300 p-6 basis-auto"}>
              <h2>Kontakt</h2>
              <br />
              
              <p>
                <a 
                  href={data()?.socialmedia.linkedin}
                  target="_blank" 
                  title={`${data()?.name.firstname} sein Linkedin Profil aufrufen`} 
                  rel="nofollow"
                >
                  <i class="fa fa-linkedin-square" aria-hidden="true"></i> /in/henry-le-14389822b
                </a>
              </p>
              <p>
                <a 
                  href={data()?.socialmedia.github}
                  target="_blank" 
                  title={`${data()?.name.firstname} sein GitHub Profil aufrufen`} 
                  rel="nofollow"
                >
                  <i class="fa fa-github" aria-hidden="true"></i> /HenryLeNgocThang
                </a>
              </p>
              <p>
                <a 
                  href={data()?.socialmedia.netlify}
                  target="_blank" 
                  title={`${data()?.name.firstname} seine Netlify Webseite aufrufen`} 
                  rel="nofollow"
                >
                  <i class="fa fa-globe" aria-hidden="true"></i> henryle.netlify.app
                </a>
              </p>
            </div>
            <div class={"border-b-2 border-gray-300 p-6 basis-auto"}>
              <h2>Fachkenntnisse</h2>
              <p><strong>Tech Stack (Frontend-Tech)</strong><br />HTML, Handlebars, CSS (SCSS), JavaScript, Tailwindcss, Foundation Zurb, jQuery, React, Webpack, Vite</p>
              <br />
              <p><strong>Testing</strong><br />Cypress, Playwright</p>
              <br />
              <p><strong>Tools</strong><br />intellij (Webstorm), Sublime, Visual Studio Code, Git, GitHub, Atlassian (Bitbucket, Jira, Confluence)</p>
            </div>
            <div class={"border-b-2 border-gray-300 p-6 basis-auto"}>
              <h2>Weitere Kenntnisse</h2>
              <p><strong>Tools</strong><br />Talention, Figma, Photoshop, Illustrator</p>
              <br />
              <p><strong>Sprachen</strong><br />Deutsch - Muttersprache<br />Englisch - fließend</p>
            </div>
            <div class={"h-full p-6 basis-auto"}>
              <h2>Interessen</h2>
              <p><strong>Andere Technologien lernen</strong><br />SolidJS, Alpine.js, Angular, Vue.js, Typescript, Bootstrap, node.js, express.js, MySQL, PostgreSQL</p>
              <br />
              <p><strong>Hobbys</strong><br />Fitness</p>
              <br />
            </div>
          </div>
          <div class="col-span-8 flex flex-col h-full justify-between border-l-2 border-gray-300">
            <div class={"border-b-2 border-gray-300 p-6 basis-auto"}>
              <h2>Beruflicher Werdegang</h2>
              <h3>Customer Success Engineer</h3>
              <p>01.11.2023 bis heute | TFI GmbH | Wuppertal</p>
              <br />
              <ul class={"list-disc list-outside ml-4"}>
                <li>Prototypen von Stellenanzeigenvorlagen mit Figma</li>
                <li>Web Komponenten erstellen und warten mit React</li>
                <li>Web Komponenten testen mit Cypress oder Playwright</li>
                <li>1st-, 2nd- und 3rd-Level Support</li>
                <li>Koordinieren von Abläufen, Prozesse verbessern und dokumentieren</li>
                <li>Erstellen und anpassen von E-Mail Layouts, Stellenanzeigenvorlagen, Landingpages und Karriereseiten mit Frontend-Technologien</li>
                <li>Kunden beraten und unterstützen bei der Konfiguration und Integration der Talention Software</li>
                <li>Unterstützen bei der Verbesserung der Talention Software</li>
              </ul>
              <br />
              <h3>Junior Customer Success Engineer</h3>
              <p>27.01.2021 - 31.10.2023 | TFI GmbH | Wuppertal</p>
              <ul class={"list-disc list-outside ml-4"}>
                <li>Web Komponenten testen mit Cypress</li>
                <li>1st-, 2nd- und 3rd-Level Support</li>
                <li>Koordinieren von Abläufen, Prozesse verbessern und dokumentieren</li>
                <li>Erstellen und anpassen von E-Mail Layouts, Stellenanzeigenvorlagen, Landingpages und Karriereseiten mit Frontend-Technologien</li>
                <li>Kunden beraten und unterstützen bei der Konfiguration und Integration der Talention Software</li>
                <li>Unterstützen bei der Verbesserung der Talention Software</li>
              </ul>
            </div>
            <div class={"h-full p-6 basis-auto"}>
              <h2>Berufliche Ausbildung</h2>
              <h3>Fachinformatiker Anwendungsentwicklung</h3>
              <p>01.08.2019 - 26.01.2022 | TFI GmbH | Wuppertal</p>
              <br />
              <ul class={"list-disc list-outside ml-4"}>
                <li>1st- und 2nd-Level Support</li>
                <li>Erstellen und anpassen von Baukasten-E-Mail-Layouts, -Stellenanzeigenvorlagen, -Landingpages und -Karriereseiten oder individuell mit Frontend-Technologien</li>
                <li>Kundenberatung für Webseiten und Integration der Talention Software</li>
                <li>Unterstützen bei der Verbesserung der Talention Software</li>
              </ul>
              <br />
              <h3>Praktikum IT- Installation und Konfiguration</h3>
              <p>01.02.2019 - 31.07.2019 | TFI GmbH | Wuppertal</p>
              <br />
              <ul class={"list-disc list-outside ml-4"}>
                <li>1st-Level Support</li>
                <li>Erstellen und anpassen von Baukasten-Stellenanzeigenvorlagen und -Karriereseiten</li>
                <li>Unterstützen bei der Verbesserung der Talention Software</li>
                <li>Unterstützen und beraten bei der Konfiguration und Integration der Talention Software mit einem Projekt Manager</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Show>
  );
};

export default Cv;