import AOS from "aos";
import "aos/dist/aos.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

import ExternalAppender from "@/plugins/ExternalAppender.js";
import ContextMenuItem from "add-context-menu";
import ContextMenu from "add-context-menu";
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

AOS.init();

const app = createApp(App);
app.use(router);
app.use(ContextMenu);
app.use(ContextMenuItem);

localStorage.setItem("color", "brew");
const colors = {
  brew: "347AEB",
  valencia: "D44A4A",
  amethyst: "A14AD4",
  royal: "FE8C52",
  emerald: "4AD45A",
};

let tag = document.createElement("style");
tag.innerHTML = `
::-webkit-scrollbar {
    width: 7px;
}
::-webkit-scrollbar-thumb {
    background-color: #${colors[localStorage.color]};
}
`;

document.head.appendChild(tag);
app.mount("#app");
