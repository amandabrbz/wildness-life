import initTab from "./modules/tab.js";
import Scroll from "./modules/scroll-suave.js";
import initAnimaAoScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initModal from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropdown from "./modules/dropdown.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchApi from "./modules/fetchAPI.js";
import initBitcoin from "./modules/fetchBitcon.js";

const scrollSuave = new Scroll('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initTab();
initAnimaAoScroll();
initAccordion();
initModal();
initToolTip();
initDropdown();
initFuncionamento();
initFetchApi();
initBitcoin()
