const CV_DOWNLOAD_PATH = "/cv/Sulay-Ramos-CV.pdf";
const cvDownloadLinks = document.querySelectorAll("[data-cv-download]");
const siteHeader = document.querySelector(".site-header");
const navToggle = document.querySelector("[data-nav-toggle]");
const primaryNav = document.querySelector("#primary-nav");
const caseButtons = document.querySelectorAll("[data-case]");
const caseGrid = document.querySelector("#case-grid");
const caseCarouselButtons = document.querySelectorAll("[data-case-carousel]");
const caseCarouselIndicator = document.querySelector(".mobile-carousel-hint span:last-child");
const caseModal = document.querySelector("#case-modal");
const modalPanel = document.querySelector(".case-modal-panel");
const modalTitle = document.querySelector("#case-modal-title");
const modalKicker = document.querySelector("#case-modal-kicker");
const detailSummary = document.querySelector("#case-detail-summary");
const factsContainer = document.querySelector("#case-facts");
const visualStage = document.querySelector("#case-visual-stage");
const visualControls = document.querySelector(".visual-controls");
const dotsContainer = document.querySelector("#case-dots");
const prevVisual = document.querySelector("#case-prev");
const nextVisual = document.querySelector("#case-next");
const openImage = document.querySelector("#case-open-image");
const tabButtons = document.querySelectorAll(".case-tab");
const tabPanel = document.querySelector("#case-tab-panel");
const imageLightbox = document.querySelector("#image-lightbox");
const lightboxTitle = document.querySelector("#image-lightbox-title");
const lightboxImg = document.querySelector("#image-lightbox-img");
const lightboxCaption = document.querySelector("#image-lightbox-caption");

cvDownloadLinks.forEach((link) => {
  link.href = CV_DOWNLOAD_PATH;
  link.setAttribute("download", "Sulay-Ramos-CV.pdf");
});

function syncNavMenuAccessibility(isOpen = siteHeader?.classList.contains("nav-open")) {
  if (!primaryNav) return;

  const isCompact = window.innerWidth <= 1040;
  const shouldHide = isCompact && !isOpen;
  primaryNav.setAttribute("aria-hidden", String(shouldHide));
  primaryNav.querySelectorAll("a").forEach((link) => {
    if (shouldHide) {
      link.setAttribute("tabindex", "-1");
      return;
    }

    link.removeAttribute("tabindex");
  });
}

function closeNavMenu() {
  if (!siteHeader || !navToggle) return;

  siteHeader.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigatiemenu");
  syncNavMenuAccessibility(false);
}

function toggleNavMenu() {
  if (!siteHeader || !navToggle) return;

  const isOpen = siteHeader.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Sluit navigatiemenu" : "Open navigatiemenu");
  syncNavMenuAccessibility(isOpen);
}

navToggle?.addEventListener("click", toggleNavMenu);

primaryNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNavMenu);
});

syncNavMenuAccessibility();

const caseFramework = {
  factLabels: ["Context", "Focus", "Resultaat"],
  tabKeys: ["challenge", "approach", "result", "expertise"]
};

const cases = {
  otap: {
    title: "Secure OTAP Home Infrastructure",
    kicker: "Infrastructure praktijkcase",
    summary:
      "Nieuwe ideeën en automatiseringsconcepten zijn pas waardevol wanneer ze veilig en gecontroleerd kunnen worden getest. Deze case laat zien hoe een eigen OTAP-omgeving de afstand tussen idee, experiment en uitvoering verkleint.",
    facts: [
      ["Context", "Eigen OTAP-labomgeving"],
      ["Focus", "Veilig experimenteren en realiseren"],
      ["Resultaat", "Kortere route van idee naar werkende oplossing"]
    ],
    visuals: [
      [
        "OTAP Platformbeheer",
        "Beheerbare containeromgeving voor ontwikkeling, test, services en gecontroleerde uitrol.",
        "cases/01-secure-otap-home-infrastructure/screenshots/Schermafbeelding 2026-06-12 122855 portainer.png"
      ],
      [
        "Netwerkcontrole & DNS",
        "Interne DNS-controle en filtering als onderdeel van een veilige OTAP-labomgeving.",
        "cases/01-secure-otap-home-infrastructure/screenshots/Schermafbeelding 2026-06-12 123817 adguard.png"
      ],
      [
        "Monitoring & Observability",
        "Monitoring van serverprestaties, resources en beschikbaarheid van de OTAP-omgeving.",
        "cases/01-secure-otap-home-infrastructure/screenshots/Schermafbeelding 2026-06-12 123818 grafana.png"
      ]
    ],
    tabVisuals: {
      challenge: 0,
      approach: 1,
      result: 2,
      expertise: 0
    },
    tabs: {
      challenge: [
        "Nieuwe ideeën, automatisering en infrastructuurconcepten waren afhankelijk van gedeelde omgevingen en externe randvoorwaarden.",
        "Hierdoor kostte experimenteren, testen en valideren onnodig veel tijd.",
        "Er was behoefte aan een veilige omgeving waarin concepten zelfstandig konden worden ontwikkeld, getest en beoordeeld."
      ],
      approach: [
        "Een eigen OTAP-omgeving ingericht voor ontwikkeling, testen, monitoring en gecontroleerde uitrol.",
        "Platformlagen voor toegang, netwerk, monitoring en beheer samengebracht in één beheersbare omgeving.",
        "Veiligheidsmaatregelen toegepast zodat experimenten en prototypes gecontroleerd konden worden uitgevoerd.",
        "De omgeving ingericht om nieuwe concepten sneller op te zetten, te toetsen en weer af te bouwen."
      ],
      result: [
        "Nieuwe ideeën en automatiseringsconcepten konden sneller worden gevalideerd buiten productieomgevingen.",
        "Minder afhankelijkheid van gedeelde enterprise-omgevingen voor experimenten en prototyping.",
        "De case laat zien hoe technische randvoorwaarden kunnen bijdragen aan snellere uitvoering en innovatie."
      ],
      expertise: [
        "Veilige infrastructuur: een gecontroleerde omgeving creëren voor ontwikkeling, testen en beheer.",
        "Automatisering & realisatie: randvoorwaarden organiseren waardoor ideeën sneller kunnen worden gevalideerd.",
        "Proces & projectstructuur: technische en operationele afhankelijkheden terugbrengen tot een werkbare ontwikkelomgeving."
      ]
    }
  },
  aiops: {
    title: "AI-driven Operations Readiness",
    kicker: "Operations praktijkcase",
    summary:
      "AI levert pas waarde op wanneer processen, data en eigenaarschap op orde zijn. Deze case laat zien hoe operationele analyse is gebruikt om verbeterkansen te prioriteren en realistische vervolgstappen te bepalen.",
    facts: [
      ["Context", "Delta Fiber NSOC"],
      ["Focus", "AI-readiness, datakwaliteit en procesverbetering"],
      ["Resultaat", "Haalbare AI- en automationkansen met duidelijke prioriteiten"]
    ],
    visuals: [
      [
        "Operationele analyse & patronen",
        "Analyse van operationele signalen, classificaties en geografische patronen om verbeterkansen inzichtelijk te maken.",
        "cases/02-ai-driven-operations-readiness/screenshots/IMG-20250210-WA0003(1).jpg"
      ],
      [
        "Prioritering van initiatieven",
        "Structuur voor het beoordelen van verbeterinitiatieven op impact, volwassenheid en strategische waarde.",
        "cases/02-ai-driven-operations-readiness/screenshots/IMG-20250512-WA0009.jpg"
      ],
      [
        "Van idee naar validatie",
        "Gefaseerde aanpak om verbeterideeën gecontroleerd te toetsen voordat implementatie plaatsvindt.",
        "cases/02-ai-driven-operations-readiness/screenshots/PoC-vs-Prototyp-vs-MVP-vs-Pilot.webp"
      ]
    ],
    tabVisuals: {
      challenge: 0,
      approach: 1,
      result: 2,
      expertise: 1
    },
    tabs: {
      challenge: [
        "Binnen operations bestond veel interesse in AI en automatisering, maar niet iedere verbetering vraagt om een AI-oplossing.",
        "Proceskennis, data en eigenaarschap waren verspreid over teams, systemen en werkwijzen.",
        "Er was behoefte aan een duidelijke aanpak om te bepalen welke verbeterinitiatieven haalbaar, waardevol en uitvoerbaar waren."
      ],
      approach: [
        "Processen, overdrachten, beslismomenten en informatiestromen zijn in kaart gebracht.",
        "Per verbeterinitiatief is beoordeeld of procesverbetering, dashboarding, automatisering of AI de meest logische vervolgstap was.",
        "Verbeterideeën zijn veilig en gecontroleerd getoetst met prototypes en voorbeelddata.",
        "Analyse, operatie en management zijn samengebracht om draagvlak en prioriteiten gezamenlijk vast te stellen."
      ],
      result: [
        "Meer inzicht ontstaan in welke verbeterinitiatieven daadwerkelijk geschikt zijn voor AI of automatisering.",
        "Prioriteiten scherper gemaakt op basis van waarde, haalbaarheid en operationele impact.",
        "AI-readiness gepositioneerd als praktisch verbeterprogramma in plaats van een los technologie-initiatief."
      ],
      expertise: [
        "AI & data-readiness: beoordelen waar AI daadwerkelijk waarde toevoegt en welke randvoorwaarden daarvoor nodig zijn.",
        "Proces & projectstructuur: operationele kennis vertalen naar prioriteiten, eigenaarschap en uitvoerbare verbeterinitiatieven.",
        "Stakeholderafstemming: operatie, management en organisatie verbinden rond haalbare vervolgstappen."
      ]
    }
  },
  oase: {
    title: "OASE Innovatieplatform",
    kicker: "Full-stack praktijkcase",
    summary:
      "Wanneer verbeterideeën verspreid raken over teams, documenten en losse initiatieven ontstaat weinig zicht op eigenaarschap, voortgang en besluitvorming. Deze case laat zien hoe innovatie en automatisering zijn vertaald naar één centrale werkwijze voor intake, beoordeling en opvolging.",
    facts: [
      ["Context", "Delta Fiber – innovatie en automation"],
      ["Focus", "Idee-intake, beoordeling, eigenaarschap en opvolging"],
      ["Resultaat", "Meer structuur en transparantie in innovatieprocessen"]
    ],
    visuals: [
      [
        "Idee Intake & Opvolging",
        "Centrale werkwijze voor het registreren, beoordelen en opvolgen van innovatie- en verbeterinitiatieven.",
        "cases/03-oase-innovatieplatform/screenshots/screenshot8_720.png"
      ],
      [
        "Eigenaarschap & Teams",
        "Teams, verantwoordelijkheden en samenwerking georganiseerd rondom innovatie-initiatieven.",
        "cases/03-oase-innovatieplatform/screenshots/screenshot11_720.png"
      ],
      [
        "Portfolio & Inzichten",
        "Managementinformatie over betrokkenheid, voortgang, ideeën en innovatieprestaties.",
        "cases/03-oase-innovatieplatform/screenshots/screenshot12_720.png"
      ],
      [
        "Platformstructuur & Samenhang",
        "Conceptueel overzicht van de relaties tussen initiatieven, teams, capabilities, doelstellingen en applicaties binnen het innovatieplatform.",
        "cases/03-oase-innovatieplatform/screenshots/02-oase-information-architecture.webp"
      ]
    ],
    tabVisuals: {
      challenge: 0,
      approach: 1,
      result: 2,
      expertise: 3
    },
    tabs: {
      challenge: [
        "Innovatie- en verbeterinitiatieven ontstonden op meerdere plekken binnen de organisatie zonder centrale opvolging.",
        "Ideeën, verbeteracties en automatiseringskansen raakten verspreid over e-mail, documenten en losse initiatieven.",
        "Management en teams hadden behoefte aan een duidelijke werkwijze voor intake, eigenaarschap, statusbewaking en besluitvorming."
      ],
      approach: [
        "Het innovatieproces is vertaald naar een centrale werkwijze voor intake, beoordeling en opvolging.",
        "Rollen, verantwoordelijkheden en eigenaarschap zijn expliciet gemaakt binnen het platform.",
        "Informatie, voortgang en besluitvorming zijn samengebracht in één overzichtelijke omgeving.",
        "De oplossing is opgebouwd vanuit procesanalyse, stakeholderinput en praktische gebruikersflows."
      ],
      result: [
        "Innovatie-initiatieven zijn beter zichtbaar, opvolgbaar en beheersbaar gemaakt.",
        "Teams en management beschikken over één centrale werkwijze voor beoordeling en voortgangsbewaking.",
        "De case laat zien hoe structuur, eigenaarschap en digitalisering kunnen samenkomen in een werkende oplossing."
      ],
      expertise: [
        "Proces & projectstructuur: intake, beoordeling en opvolging vertalen naar een duidelijke en schaalbare werkwijze.",
        "Automatisering & realisatie: een organisatievraagstuk omzetten naar een bruikbaar platform met duidelijke gebruikersflows.",
        "Stakeholderafstemming: belangen en requirements van management en operatie vertalen naar één gezamenlijke werkwijze."
      ]
    }
  },
  crm: {
    title: "CRM / Operations Platform",
    kicker: "Product praktijkcase",
    summary:
      "Binnen de Caribbean lottery branche liepen verkoop, financiële afstemming en operationele controle nog sterk via losse en handmatige werkwijzen. Deze case laat zien hoe procesinzicht, rolverdeling en platformontwikkeling samenkomen in één centrale digitale operatie.",
    facts: [
      ["Context", "Caribbean Lottery digitaliseringstraject"],
      ["Focus", "Operationele digitalisering en financiële stromen"],
      ["Resultaat", "Een centrale werkwijze voor verkoop, treasury en settlements"]
    ],
    visuals: [
      [
        "Week insights",
        "Week insights met overdracht, prijzen, high-stakes kosten en nettoresultaat voor operationele sturing.",
        "cases/04-crm-systeem/screenshots/Schermafbeelding 2026-06-12 102011.png"
      ],
      [
        "Wallet-overzicht",
        "Organisatiebreed wallet- en settlementoverzicht voor verkoop, saldo en overdrachtstromen.",
        "cases/04-crm-systeem/screenshots/Schermafbeelding 2026-06-12 101809.png"
      ],
      [
        "MO/BO structuur",
        "Structuurbeheer voor Main Offices, Back Offices, verkooppunten en toegangsmodellen.",
        "cases/04-crm-systeem/screenshots/Schermafbeelding 2026-06-12 102117.png"
      ],
      [
        "Organisatiebeleid",
        "Centrale configuratie van organisatiebeleid, commissies, risico-instellingen en operationele regels.",
        "cases/04-crm-systeem/screenshots/Schermafbeelding 2026-06-12 102329.png"
      ]
    ],
    tabVisuals: {
      challenge: 1,
      approach: 2,
      result: 0,
      expertise: 3
    },
    tabs: {
      challenge: [
        "Verkoop, afstemming en uitbetaling waren afhankelijk van losse bestanden, lokale administraties en handmatige controles.",
        "Daardoor was het lastig om verkoop, risico, treasurypositie en operationele werkvoorraad vanuit één betrouwbaar overzicht te sturen.",
        "Er was behoefte aan een centrale werkwijze waarin rollen, financiële stromen, controles en opvolging duidelijk samenkwamen."
      ],
      approach: [
        "De operationele keten is vertaald naar duidelijke rollen voor Player, Front Office, Back Office en Main Office.",
        "Verkoop, walletposities, settlements, risk en treasury zijn samengebracht in één platformlogica.",
        "Workflows, controles en dashboards zijn ingericht zodat operators en management dezelfde bron van waarheid gebruiken.",
        "De oplossing is stapsgewijs opgebouwd vanuit procesanalyse, datamodellen en role-specific gebruikersflows."
      ],
      result: [
        "Handmatige administratie is vertaald naar een centrale digitale werkwijze voor verkoop, risk, treasury en settlements.",
        "Rollen, controles en financiële stromen zijn beter traceerbaar en operationeel opvolgbaar gemaakt.",
        "De case laat zien hoe een complex operationeel domein kan worden gestructureerd naar een schaalbaar platformfundament."
      ],
      expertise: [
        "Proces & projectstructuur: complexe operationele en financiële stromen terugbrengen naar rollen, prioriteiten en duidelijke opvolging.",
        "Automatisering & realisatie: workflows, datamodellen en platformlogica vertalen naar een bruikbare digitale operatie.",
        "Operationele digitalisering: handmatige werkwijzen omzetten naar controleerbare processen met inzicht voor operators en management."
      ]
    }
  }
};

let activeCase = cases.crm;
let activeVisual = 0;
let activeTab = "challenge";
let lastCaseButton = null;

function getCaseCarouselIndex() {
  if (!caseGrid) return 0;

  const cards = [...caseGrid.querySelectorAll(".case-card")];
  if (!cards.length) return 0;

  const gridLeft = caseGrid.getBoundingClientRect().left;
  const closest = cards.reduce(
    (current, card, index) => {
      const distance = Math.abs(card.getBoundingClientRect().left - gridLeft);
      return distance < current.distance ? { distance, index } : current;
    },
    { distance: Number.POSITIVE_INFINITY, index: 0 }
  );

  return closest.index;
}

function updateCaseCarouselIndicator() {
  if (!caseCarouselIndicator || !caseGrid) return;

  const total = caseGrid.querySelectorAll(".case-card").length;
  const current = getCaseCarouselIndex() + 1;
  caseCarouselIndicator.textContent = `${current} / ${total}`;
}

function moveCaseCarousel(direction) {
  if (!caseGrid) return;

  const firstCard = caseGrid.querySelector(".case-card");
  if (!firstCard) return;

  const gap = Number.parseFloat(getComputedStyle(caseGrid).columnGap || "0");
  const step = firstCard.getBoundingClientRect().width + gap;
  caseGrid.scrollBy({ left: direction * step, behavior: "smooth" });
}

function renderCase() {
  if (!activeCase) return;

  modalTitle.textContent = activeCase.title;
  modalKicker.textContent = activeCase.kicker;
  detailSummary.textContent = activeCase.summary;
  const frameworkFacts = caseFramework.factLabels
    .map((label) => activeCase.facts.find(([factLabel]) => factLabel === label))
    .filter(Boolean);
  factsContainer.innerHTML = frameworkFacts
    .map(([label, value]) => `<div class="case-fact"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");

  renderVisual();
  renderTab();
}

function renderVisual() {
  const visual = activeCase.visuals[activeVisual];
  const [title, caption, image] = visual;
  const hasMultipleVisuals = activeCase.visuals.length > 1;
  visualStage.classList.toggle("has-image", Boolean(image));
  visualStage.style.setProperty("--visual-index", activeVisual);
  visualStage.dataset.image = image || "";
  visualStage.dataset.title = title || "";
  visualStage.dataset.caption = caption || "";
  visualStage.tabIndex = image ? 0 : -1;
  visualStage.setAttribute("role", image ? "button" : "img");
  visualStage.setAttribute("aria-label", image ? `${title} groot openen` : title);
  openImage.hidden = !image;
  openImage.dataset.image = image || "";
  openImage.dataset.title = title || "";
  openImage.dataset.caption = caption || "";
  visualControls.classList.toggle("single-visual", !hasMultipleVisuals);
  prevVisual.hidden = !hasMultipleVisuals;
  nextVisual.hidden = !hasMultipleVisuals;
  dotsContainer.hidden = !hasMultipleVisuals;
  visualStage.innerHTML = image
    ? `<img src="${image}" alt="${title}" />`
    : `<div><span class="visual-label">Screenshot placeholder</span><strong>${title}</strong><p>${caption}</p></div>`;
  dotsContainer.innerHTML = activeCase.visuals
    .map(
      (_, index) =>
        `<button class="case-dot${index === activeVisual ? " active" : ""}" type="button" data-visual="${index}" aria-label="Toon visual ${index + 1}">${index + 1}</button>`
    )
    .join("");
}

function renderTab() {
  tabButtons.forEach((button) => button.classList.toggle("active", button.dataset.tab === activeTab));
  const tabItems = caseFramework.tabKeys.includes(activeTab) ? activeCase.tabs[activeTab] || [] : [];
  tabPanel.innerHTML = `<ul>${tabItems.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function getMappedVisualIndex(tabKey) {
  const visualIndex = activeCase.tabVisuals?.[tabKey];
  return Number.isInteger(visualIndex) && Boolean(activeCase.visuals[visualIndex]) ? visualIndex : null;
}

function syncVisualToTab(tabKey) {
  const visualIndex = getMappedVisualIndex(tabKey);

  if (visualIndex === null || visualIndex === activeVisual) return;

  activeVisual = visualIndex;
  renderVisual();
}

function openCase(caseKey, trigger) {
  activeCase = cases[caseKey];
  activeTab = "challenge";
  activeVisual = getMappedVisualIndex(activeTab) ?? 0;
  lastCaseButton = trigger;
  renderCase();
  caseModal.hidden = false;
  document.body.classList.add("modal-open");
  modalPanel.focus();
}

function closeCase() {
  caseModal.hidden = true;
  closeLightbox();
  document.body.classList.remove("modal-open");
  lastCaseButton?.focus();
}

function openLightbox() {
  const image = openImage.dataset.image;
  if (!image) return;

  lightboxTitle.textContent = openImage.dataset.title;
  lightboxCaption.textContent = openImage.dataset.caption;
  lightboxImg.src = image;
  lightboxImg.alt = openImage.dataset.title;
  imageLightbox.hidden = false;
}

function closeLightbox() {
  if (!imageLightbox || imageLightbox.hidden) return;

  imageLightbox.hidden = true;
  lightboxImg.removeAttribute("src");
  modalPanel.focus();
}

caseButtons.forEach((button) => {
  button.addEventListener("click", () => openCase(button.dataset.case, button));
});

caseCarouselButtons.forEach((button) => {
  button.addEventListener("click", () => {
    moveCaseCarousel(button.dataset.caseCarousel === "next" ? 1 : -1);
  });
});

caseGrid?.addEventListener("scroll", () => {
  window.requestAnimationFrame(updateCaseCarouselIndicator);
});

window.addEventListener("resize", () => {
  updateCaseCarouselIndicator();

  if (window.innerWidth > 1040) {
    closeNavMenu();
    return;
  }

  syncNavMenuAccessibility();
});
updateCaseCarouselIndicator();

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeCase);
});

prevVisual?.addEventListener("click", () => {
  activeVisual = (activeVisual - 1 + activeCase.visuals.length) % activeCase.visuals.length;
  renderVisual();
});

nextVisual?.addEventListener("click", () => {
  activeVisual = (activeVisual + 1) % activeCase.visuals.length;
  renderVisual();
});

openImage?.addEventListener("click", openLightbox);

visualStage?.addEventListener("click", () => {
  if (visualStage.dataset.image) openLightbox();
});

visualStage?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  if (visualStage.dataset.image) openLightbox();
});

document.querySelectorAll("[data-close-lightbox]").forEach((button) => {
  button.addEventListener("click", closeLightbox);
});

dotsContainer?.addEventListener("click", (event) => {
  const dot = event.target.closest("[data-visual]");
  if (!dot) return;
  activeVisual = Number.parseInt(dot.dataset.visual, 10);
  renderVisual();
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeTab = button.dataset.tab;
    syncVisualToTab(activeTab);
    renderTab();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNavMenu();
  }

  if (event.key === "Escape" && imageLightbox && !imageLightbox.hidden) {
    closeLightbox();
    return;
  }

  if (event.key === "Escape" && !caseModal.hidden) {
    closeCase();
  }
});
