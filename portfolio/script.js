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
    title: "Secure Enterprise OTAP Infrastructure",
    kicker: "Infrastructure praktijkcase",
    summary:
      "OTAP staat voor Ontwikkeling, Test, Acceptatie en Productie: een gecontroleerde manier om software en automatisering veilig te ontwikkelen, testen en uitrollen. Deze case laat zien hoe enterprise-infrastructuurprincipes zijn vertaald naar een on-premise en cloud-ready OTAP-omgeving.",
    facts: [
      ["Context", "Enterprise OTAP-omgeving"],
      ["Focus", "On-premise en cloud-ready infrastructuur"],
      ["Resultaat", "Veiliger en sneller van concept naar prototype"]
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
        "Zonder gecontroleerde OTAP-omgeving wordt experimenteren afhankelijk van gedeelde omgevingen, domeineigenaren en lange provisioningroutes.",
        "Nieuwe oplossingen vragen om een veilige omgeving waarin ontwikkeling, testen, beheer en uitrol gecontroleerd kunnen plaatsvinden.",
        "Er was behoefte aan een omgeving waarin concepten zelfstandig konden worden ontwikkeld, getest, beheerd en beoordeeld."
      ],
      approach: [
        "Een beheersbare infrastructuur ingericht voor ontwikkeling, testen, monitoring en gecontroleerde uitrol.",
        "Platformlagen voor toegang, netwerk, containerbeheer, DNS, monitoring en beheer samengebracht in één beheersbare omgeving.",
        "Principes toegepast die relevant zijn voor zowel on-premise als cloudomgevingen zoals Azure: segmentatie, veilige toegang, observability en herhaalbare deployment.",
        "De omgeving ingericht om concepten sneller op te zetten, te toetsen en waar nodig weer af te bouwen."
      ],
      result: [
        "De juiste technische randvoorwaarden maakten het mogelijk om concepten sneller, veiliger en betrouwbaarder te valideren.",
        "Nieuwe ideeën en automatiseringsconcepten konden worden getoetst zonder productieomgevingen te belasten.",
        "Gecontroleerde infrastructuur droeg direct bij aan snellere uitvoering en innovatie."
      ],
      expertise: [
        "Veilige infrastructuur, OTAP-denken, platformbeheer, monitoring en cloud-ready architectuur.",
        "Cloud & on-premise denken: infrastructuurkeuzes maken die zowel self-hosted als Azure/cloud-ready toepasbaar zijn.",
        "Automatisering & realisatie: technische randvoorwaarden organiseren waardoor ideeën sneller gevalideerd kunnen worden."
      ]
    }
  },
  aiops: {
    title: "AI-driven Operations Readiness",
    kicker: "Operations praktijkcase",
    summary:
      "Binnen het NSOC stond operationele informatie verspreid over systemen zoals TOPdesk, CRS en ServiceNow. Door deze data bij elkaar te brengen ontstonden dashboards en inzichten die eerder niet direct zichtbaar waren voor operatie en management.",
    facts: [
      ["Context", "Delta Fiber NSOC"],
      ["Focus", "Data-silo's, dashboards en AI-readiness"],
      ["Resultaat", "Nieuwe NSOC-inzichten en duidelijke verbeterprioriteiten"]
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
        "Operationele data en procesinformatie stonden verspreid over meerdere systemen, waardoor patronen, knelpunten en verbeterkansen niet eenvoudig zichtbaar waren.",
        "Binnen het NSOC was veel operationele kennis aanwezig, maar informatie uit TOPdesk, CRS en ServiceNow stond niet vanzelf in één operationeel beeld.",
        "Er was behoefte aan een concreter beeld van de operatie voordat AI- of automatiseringsinitiatieven verantwoord konden worden geprioriteerd."
      ],
      approach: [
        "Dataflows uit TOPdesk, CRS en ServiceNow zijn geïnventariseerd en samengebracht in een dashboardomgeving voor operationele analyse en prioritering.",
        "Processen, overdrachten, beslismomenten en informatiestromen zijn met elkaar in verband gebracht.",
        "Per verbeterkans is beoordeeld of procesverbetering, dashboarding, workflowautomatisering of AI de meest logische vervolgstap was.",
        "De inzichten zijn gebruikt om operatie en management te helpen prioriteren en de basis te leggen voor bredere innovatie- en automationinitiatieven."
      ],
      result: [
        "Het NSOC kreeg concreter inzicht in operationele patronen, datakwaliteit en verbeterkansen.",
        "AI- en automatiseringsinitiatieven konden beter worden geprioriteerd op basis van data, operationele impact en uitvoerbaarheid.",
        "De aanpak werd een belangrijke aanjager voor het organisatiebredere OASE Innovatieplatform."
      ],
      expertise: [
        "Dataflow-inventarisatie, procesanalyse, dashboarding en het vertalen van operationele data naar haalbare AI- en automatiseringskansen.",
        "AI & data-readiness: beoordelen waar data, automatisering of AI praktisch toepasbaar en waardevol is.",
        "Stakeholderafstemming: operatie, management en technologie verbinden rond prioriteiten en vervolgstappen."
      ]
    }
  },
  oase: {
    title: "OASE Innovatieplatform",
    kicker: "Full-stack praktijkcase",
    summary:
      "Na de AI-readiness inventarisatie ontstond de behoefte om innovatie- en automatiseringsinitiatieven organisatiebreed te structureren. OASE bracht ideeën, beoordeling, eigenaarschap en opvolging samen in één centrale werkwijze.",
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
        "Innovatie- en automatiseringsideeën ontstonden op verschillende plekken binnen de organisatie, vaak via losse documenten, e-mails en initiatieven zonder centrale opvolging.",
        "De AI-readiness inventarisatie maakte duidelijk dat verbeterideeën, automatiseringskansen en innovatievragen breder speelden dan één afdeling.",
        "Management en teams hadden behoefte aan een organisatiebrede werkwijze om ideeën te registreren, beoordelen, prioriteren en richting realisatie te brengen."
      ],
      approach: [
        "Het proces van idee tot realisatie is vertaald naar een platform voor intake, beoordeling, eigenaarschap, voortgang en besluitvorming.",
        "Als kernteamlid is meegedacht over de vertaling van NSOC-inzichten naar een organisatiebreder programma voor innovatie en automation.",
        "Rollen, verantwoordelijkheden, statusinformatie en besluitvorming zijn samengebracht in één overzichtelijke platformstructuur.",
        "De oplossing is opgebouwd vanuit procesanalyse, stakeholderinput en praktische gebruikersflows."
      ],
      result: [
        "Innovatie-initiatieven werden beter zichtbaar, opvolgbaar en beheersbaar.",
        "Teams en management kregen één centrale werkwijze voor verbetering, automatisering, beoordeling en voortgangsbewaking.",
        "De case laat zien hoe een afdelingsinitiatief kan doorgroeien naar een organisatiebrede oplossing."
      ],
      expertise: [
        "Processtructuur, stakeholderafstemming, productontwikkeling en het vertalen van organisatiebehoeften naar een werkend platform.",
        "Productontwikkeling: organisatiebehoeften omzetten naar gebruikersflows, platformlogica en bruikbare functionaliteit.",
        "Stakeholderafstemming: requirements van management, operatie en teams samenbrengen in één gezamenlijke aanpak."
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
