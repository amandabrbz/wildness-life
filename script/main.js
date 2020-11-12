import initTab from "./modules/tab.js";
import Scroll from "./modules/scroll-suave.js";
import initAnimaAoScroll from "./modules/scroll-animacao.js";
import Accordion from "./modules/accordion.js";
import initModal from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropdown from "./modules/dropdown.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchApi from "./modules/fetchAPI.js";
import initBitcoin from "./modules/fetchBitcon.js";

const scrollSuave = new Scroll('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initTab();
initAnimaAoScroll();
initModal();
initToolTip();
initDropdown();
initFuncionamento();
initFetchApi();
initBitcoin()
