import Tab from "./modules/tab.js";
import Scroll from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/tooltip.js";
import Dropdown from "./modules/dropdown.js";
import Funcionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetchAPI.js";
import fetchBitcoins from "./modules/fetchBitcon.js";
import ScrollAnima from "./modules/scroll-animacao.js";
import MenuMobile from "./modules/menu-mobile.js";

const scrollSuave = new Scroll('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tab = new Tab('[data-tab="menu"] li', '[data-tab="content"] section');
tab.init();

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new ToolTip("[data-tooltip]");
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdown = new Dropdown("[data-dropdown]", ["touchstart", "click"]);
dropdown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento("[data-week]", 'open', 'closed');
funcionamento.init();

fetchAnimais("./animaisapi.json", ".numbers-grid");
fetchBitcoins("https://blockchain.info/ticker", ".btc-price");