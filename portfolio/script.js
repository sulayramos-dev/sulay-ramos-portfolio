const filters = document.querySelectorAll(".filter");
const capabilityItems = document.querySelectorAll(".skill-filter-item");
const copyEmail = document.querySelector("#copy-email");
const email = "sulayramos@gmail.com";
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

const cases = {
  otap: {
    title: "Secure OTAP Home Infrastructure",
    kicker: "Infrastructure praktijkcase",
    summary:
      "Eigen secure OTAP-lab om concept development, dummy-data prototypes en pipeline-achtige testomgevingen sneller te kunnen opzetten, opschalen en afbreken.",
    facts: [
      ["Focus", "Secure OTAP platform"],
      ["Platform", "Firewall, compute, storage, ingress, monitoring"],
      ["Stack", "Rocky Linux, Podman, NGINX, WireGuard"],
      ["Security", "LAN/VPN-only access, WAN management disabled"],
      ["Observability", "Prometheus, Grafana, exporters"],
      ["Publicatie", "Details geabstraheerd en privacy-safe"]
    ],
    visuals: [
      [
        "Container platform management",
        "Portainer dashboard als visualisatie van beheerbare Podman/container-runtime met actieve containers, images, volumes en netwerken.",
        "cases/01-secure-otap-home-infrastructure/screenshots/Portainer-redacted.webp"
      ],
      [
        "Internal DNS & filtering",
        "AdGuard Home dashboard als veilige visual voor DNS-resolutie, filtering en interne netwerkcontrole. Clientdetails zijn geredigeerd.",
        "cases/01-secure-otap-home-infrastructure/screenshots/Adguard-redacted.webp"
      ],
      [
        "Observability platform",
        "Grafana Node Exporter dashboard met CPU, memory, network en disk-metrics. Targets en hostcontext zijn geredigeerd.",
        "cases/01-secure-otap-home-infrastructure/screenshots/Grafana-redacted.webp"
      ]
    ],
    tabs: {
      challenge: [
        "Enterprise-achtige conceptontwikkeling loopt vaak traag wanneer elke test afhankelijk is van meerdere afdelingen, domeineigenaren of gedeelde omgevingen.",
        "Er was een eigen, veilige labomgeving nodig om automation, dummy-data oplossingen en infrastructuurconcepten snel te kunnen toetsen.",
        "Remote access, monitoring, DNS, TLS en container-netwerken moesten beheersbaar zijn zonder publieke beheerinterfaces of onnodige WAN-exposure."
      ],
      approach: [
        "Firewall, compute, storage, containers, reverse proxy en monitoring als platformlagen ontworpen.",
        "Rootless Podman en gescheiden netwerken gebruikt voor proxy, OTAP, monitoring, DNS en management.",
        "WireGuard, SSH-hardening en LAN/VPN-only access toegepast voor gecontroleerde toegang.",
        "Platform zo opgezet dat tijdelijke testomgevingen sneller gebouwd, opgeschaald en weer afgebroken kunnen worden."
      ],
      impact: [
        "Maakt automation, CI/CD-achtige flows en infra-concepten veilig testbaar buiten productieomgevingen.",
        "Verkort de route van idee naar werkend prototype doordat minder afhankelijkheid ontstaat van formele enterprise-omgevingen.",
        "Laat zien dat ik niet alleen requirements analyseer, maar ook technische randvoorwaarden kan organiseren om sneller te leveren."
      ],
      next: [
        "Verder uitbouwen met veilige architectuurvisuals, backupstrategie en CI/CD-flow.",
        "Alle private IP's, hostnames en toegangsregels blijven buiten publicatie."
      ]
    }
  },
  aiops: {
    title: "AI-driven Operations Readiness",
    kicker: "Operations praktijkcase",
    summary:
      "NSOC-processen, datakwaliteit en automationkansen geinventariseerd en vertaald naar haalbare AI-readiness, organisatiebrede aandacht en dummy-data prototypes.",
    facts: [
      ["Focus", "NSOC data management & AI-readiness"],
      ["Werkveld", "Telecom operations"],
      ["Methode", "Procesanalyse, datastromen, use-case discovery"],
      ["Prototyping", "Dummy-data PoC/MVP/Pilot-denken"],
      ["Automation", "Dashboards, workflow automation, n8n"],
      ["Scope", "Readiness en privacy-safe prototypes"]
    ],
    visuals: [
      [
        "PoC naar pilot route",
        "Visual voor het stapsgewijs toetsen van ideeen: eerst proof of concept, daarna prototype, MVP en pas daarna pilot.",
        "cases/02-ai-driven-operations-readiness/screenshots/PoC-vs-Prototyp-vs-MVP-vs-Pilot.webp"
      ]
    ],
    tabs: {
      challenge: [
        "Binnen de NSOC-afdeling was veel potentieel voor AI en automation, maar waarde ontstaat pas wanneer proces, data en eigenaarschap duidelijk zijn.",
        "Operationele kennis zat verspreid over teams, dashboards, tickets en overdrachten.",
        "Management en operatie hadden een concreet verhaal nodig: welke use cases zijn haalbaar, welke data ontbreekt en waar moet commitment ontstaan?"
      ],
      approach: [
        "Processen, overdrachten, beslismomenten en datastromen zichtbaar gemaakt.",
        "Datavraagstukken uitgewerkt rond definities, bronkwaliteit, eigenaarschap en privacy.",
        "Met dummy data prototypes gebouwd om ideeen veilig te toetsen zonder interne klant- of incidentdata.",
        "Per use case bepaald of AI, dashboarding, workflow automation of processtandaardisatie de beste stap was.",
        "Als aanjager de brug gelegd tussen operatie, management en bredere organisatiebrede AI/OASE-initiatieven."
      ],
      impact: [
        "Duidelijker onderscheid tussen AI-kansen, datamanagementwerk en procesautomation.",
        "Betere prioritering op waarde, haalbaarheid, privacy en operationele adoptie.",
        "AI-readiness werd niet als losse hype gepositioneerd, maar als praktisch verbeterprogramma voor operatie, data en tooling."
      ],
      next: [
        "Later uitbreiden met een interactieve readiness checklist en extra dummy-data dashboards.",
        "Interne incidentdata, klantdetails en bedrijfsdocumentatie blijven buiten publicatie."
      ]
    }
  },
  oase: {
    title: "OASE Innovatieplatform",
    kicker: "Full-stack praktijkcase",
    summary:
      "Organisatiebreed innovatieplatform om NSOC- en afdelingsinitiatieven te structureren, beoordelen en opvolgen via een role-based full-stack oplossing.",
    facts: [
      ["Focus", "Idee-intake, beoordeling en opvolging"],
      ["Frontend", "React 18, TypeScript, Vite"],
      ["UX", "Role-based routes, dashboards, forms"],
      ["Integraties", "REST API, JWT, Google OAuth"],
      ["Validatie", "React Hook Form, Zod"],
      ["Visualisatie", "AG Grid, maps, analytics"]
    ],
    visuals: [
      [
        "Role-based entry flow",
        "Startscherm waarin manager- en team member-routes duidelijk gescheiden worden voordat gebruikers het innovatieproces ingaan.",
        "cases/03-oase-innovatieplatform/screenshots/01-oase-role-selection.webp"
      ],
      [
        "Innovation information model",
        "Conceptueel model van gekoppelde innovatiedomeinen zoals capabilities, epics, OKRs, teams, people en applications.",
        "cases/03-oase-innovatieplatform/screenshots/02-oase-information-architecture.webp"
      ],
      [
        "Innovation discovery wheel",
        "Visuele taxonomy voor innovatiegebieden en intake-context, bruikbaar als navigatie- of categorisatiemodel.",
        "cases/03-oase-innovatieplatform/screenshots/03-oase-innovation-wheel.webp"
      ]
    ],
    tabs: {
      challenge: [
        "Na de AI-readiness inventarisatie ontstond de behoefte om innovatie en automation niet alleen binnen NSOC, maar breder binnen Delta Fiber te structureren.",
        "Verbeterideeen raakten verspreid over e-mail, spreadsheets en losse initiatieven.",
        "Management en teams hadden een centrale werkwijze nodig voor intake, beoordeling, eigenaarschap, status en besluitvorming."
      ],
      approach: [
        "React/TypeScript Single Page Application opgezet met role-based routes.",
        "Intakeflows ontworpen met validatie, contextvelden en duidelijke gebruikersrollen.",
        "Dashboards, analytics, tabellen en visualisaties toegevoegd voor stuurinformatie.",
        "Requirements opgehaald vanuit operatie en management en vertaald naar schermen, rollen, datavelden en opvolglogica.",
        "Frontend/API-scheiding toegepast met auth-flows en omgevingsgestuurde configuratie."
      ],
      impact: [
        "Vervangt losse innovatie-opvolging door een centraal en traceerbaar proces.",
        "Geeft managers zicht op ideeen, teams, voortgang, trends en portfolio-informatie.",
        "Laat zien hoe ik projectmatig, analytisch en full-stack werk: van vraagstuk en stakeholdercommunicatie naar werkende oplossing."
      ],
      next: [
        "Verder verrijken met extra geanonimiseerde productschermen en API/datamodel-visuals.",
        "Demo-URLs, gebruikersnamen, tokens en echte organisatiedata blijven buiten publicatie."
      ]
    }
  },
  crm: {
    title: "CRM / Operations Platform",
    kicker: "Product praktijkcase",
    summary:
      "Uit de hand gelopen opdracht in de Caribbean lottery branche: fraudegevoelige handmatige administratie gedigitaliseerd naar een transparante multi-tenant operations suite.",
    facts: [
      ["Focus", "Operations, Risk & Treasury"],
      ["Rollen", "Player, Front Office, Back Office, Main Office"],
      ["Backend", "Node.js, Express, REST APIs"],
      ["Data", "PostgreSQL, immutable ledger"],
      ["Finance", "Double-entry, settlements, payouts"],
      ["Governance", "Hub-based processing model"]
    ],
    visuals: [
      [
        "Player results & payout flow",
        "Player Office scherm voor resultaten, winnende inzet en bijschrijving naar wallet. Balansen en IDs zijn geredigeerd.",
        "cases/04-crm-systeem/screenshots/01-player-results-redacted.webp"
      ],
      [
        "Front Office wallet settlement",
        "Wallet-overzicht voor verkooppunt/Front Office met weekafrekening, overdracht, commissie en settlementflow.",
        "cases/04-crm-systeem/screenshots/02-front-office-wallet-redacted.webp"
      ],
      [
        "Main Office treasury position",
        "Main Office wallet met organisatiebreed kanaaloverzicht, treasurypositie en settlementstatus over hubs heen.",
        "cases/04-crm-systeem/screenshots/03-main-office-wallet-redacted.webp"
      ],
      [
        "Week insights & risk performance",
        "Management dashboard voor overdrachttrend, high-stake kosten, prijzen en nettoresultaat per week.",
        "cases/04-crm-systeem/screenshots/04-week-insights-redacted.webp"
      ]
    ],
    tabs: {
      challenge: [
        "Binnen de Caribbean lottery branche waren administratie, controles en afstemming sterk handmatig en daardoor fout- en fraudegevoelig.",
        "Losse spreadsheets, lokale databases en handmatige afstemming maakten verkoop, risico en uitbetaling kwetsbaar.",
        "Er was een transparante bron van waarheid nodig voor verkoop, exposure, treasurypositie, audittrail en operationele werkvoorraad."
      ],
      approach: [
        "Multi-application suite ontworpen voor Player, Front Office, Back Office en Main Office.",
        "Hub-based processingmodel uitgewerkt voor operationele risicolagen.",
        "Risk Engine, wallet/treasury en immutable ledger gecombineerd in een server-side platform.",
        "Met stakeholders requirements scherp gemaakt en vertaald naar role-specific workflows voor operators en management.",
        "Dashboards en controles gebouwd voor transparantie, opvolging en managementinformatie."
      ],
      impact: [
        "Handmatige administratie vervangen door een volwassen multi-tenant operations en CRM-suite.",
        "Centrale bron van waarheid voor verkoop, risk, treasury en operationele verwerking.",
        "Meer grip op risk governance, settlementstatus en walletposities over meerdere rollen.",
        "Sterke demonstratie van projectmatig werken, operations-denken en full-stack engineering in een complex domein."
      ],
      next: [
        "Verder verrijken met veilige visuals voor Risk Engine, Data Management Center en settlementflows.",
        "Productie-URLs, testgebruikers, externe partijen en financiele testdata blijven buiten publicatie."
      ]
    }
  }
};

let activeCase = cases.otap;
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

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filters.forEach((item) => item.classList.toggle("active", item === button));
    capabilityItems.forEach((item) => {
      const categories = item.dataset.category.split(" ");
      const visible = selected === "all" || categories.includes(selected);
      item.classList.toggle("is-hidden", !visible);
    });
  });
});

copyEmail?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyEmail.textContent = "Gekopieerd";
    window.setTimeout(() => {
      copyEmail.textContent = "Kopieer e-mail";
    }, 1600);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

function renderCase() {
  if (!activeCase) return;

  modalTitle.textContent = activeCase.title;
  modalKicker.textContent = activeCase.kicker;
  detailSummary.textContent = activeCase.summary;
  factsContainer.innerHTML = activeCase.facts
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
  openImage.hidden = !image;
  openImage.dataset.image = image || "";
  openImage.dataset.title = title || "";
  openImage.dataset.caption = caption || "";
  visualControls.classList.toggle("single-visual", !hasMultipleVisuals);
  prevVisual.hidden = !hasMultipleVisuals;
  nextVisual.hidden = !hasMultipleVisuals;
  dotsContainer.hidden = !hasMultipleVisuals;
  visualStage.innerHTML = image
    ? `<img src="${image}" alt="${title}" /><div class="visual-copy"><span class="visual-label">Case visual</span><strong>${title}</strong><p>${caption}</p></div>`
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
  tabPanel.innerHTML = `<ul>${activeCase.tabs[activeTab].map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function openCase(caseKey, trigger) {
  activeCase = cases[caseKey];
  activeVisual = 0;
  activeTab = "challenge";
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

window.addEventListener("resize", updateCaseCarouselIndicator);
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
    renderTab();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageLightbox && !imageLightbox.hidden) {
    closeLightbox();
    return;
  }

  if (event.key === "Escape" && !caseModal.hidden) {
    closeCase();
  }
});
