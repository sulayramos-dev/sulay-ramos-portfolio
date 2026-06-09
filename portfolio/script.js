const filters = document.querySelectorAll(".filter");
const capabilityItems = document.querySelectorAll(".skill-filter-item");
const copyEmail = document.querySelector("#copy-email");
const email = "sulayramos@gmail.com";
const caseButtons = document.querySelectorAll("[data-case]");
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
    kicker: "Infrastructure case study",
    summary:
      "Secure OTAP-lab waarin netwerk, containers, ingress, DNS/TLS, monitoring en VPN-toegang als een beheerbaar platform zijn ingericht.",
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
        "Portainer dashboard als bewijs van beheerbare Podman/container-runtime met actieve containers, images, volumes en netwerken.",
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
        "Een realistische labomgeving nodig om automation- en infrastructuurconcepten veilig te testen.",
        "Remote access moest werken zonder publieke beheerinterfaces of onnodige WAN-exposure.",
        "Monitoring, DNS, TLS en container-netwerken moesten als een platform beheerd kunnen worden."
      ],
      approach: [
        "Firewall, compute, storage, containers, reverse proxy en monitoring als platformlagen ontworpen.",
        "Rootless Podman en gescheiden netwerken gebruikt voor proxy, OTAP, monitoring, DNS en management.",
        "WireGuard, SSH-hardening en LAN/VPN-only access toegepast voor gecontroleerde toegang."
      ],
      impact: [
        "Toont praktisch begrip van netwerkarchitectuur, security boundaries en platformbeheer.",
        "Maakt automation, CI/CD- en infra-concepten veilig testbaar buiten productieomgevingen.",
        "Sterke case voor opdrachten waar betrouwbaarheid, beheerbaarheid en segmentatie belangrijk zijn."
      ],
      next: [
        "Verder uitbouwen met veilige architectuurvisuals, backupstrategie en CI/CD-flow.",
        "Alle private IP's, hostnames en toegangsregels blijven buiten publicatie."
      ]
    }
  },
  aiops: {
    title: "AI-driven Operations Readiness",
    kicker: "Operations case study",
    summary:
      "NSOC-processen, datakwaliteit en automationkansen vertaald naar haalbare AI-readiness en dummy-data prototypes.",
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
        "AI en automation zijn pas waardevol wanneer proces, data en eigenaarschap duidelijk zijn.",
        "Operationele kennis zat verspreid over teams, dashboards, tickets en overdrachten.",
        "Use cases moesten worden getoetst op datakwaliteit, privacy, impact en beheerbaarheid."
      ],
      approach: [
        "Processen, overdrachten, beslismomenten en datastromen zichtbaar gemaakt.",
        "Datavraagstukken uitgewerkt rond definities, bronkwaliteit, eigenaarschap en privacy.",
        "Met dummy data prototypes gebouwd om ideeen veilig te toetsen zonder interne klant- of incidentdata.",
        "Per use case bepaald of AI, dashboarding, workflow automation of processtandaardisatie de beste stap was."
      ],
      impact: [
        "Duidelijker onderscheid tussen AI-kansen, datamanagementwerk en procesautomation.",
        "Betere prioritering op waarde, haalbaarheid, privacy en operationele adoptie.",
        "Een praktisch verhaal over AI-readiness zonder productie-AI te claimen."
      ],
      next: [
        "Later uitbreiden met een interactieve readiness checklist en extra dummy-data dashboards.",
        "Interne incidentdata, klantdetails en bedrijfsdocumentatie blijven buiten publicatie."
      ]
    }
  },
  oase: {
    title: "OASE Innovatieplatform",
    kicker: "Full-stack case study",
    summary:
      "Role-based innovatieplatform voor idee-intake, beoordeling, teamopvolging en portfolio-inzicht.",
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
        "Verbeterideeen raakten verspreid over e-mail, spreadsheets en losse initiatieven.",
        "Daardoor ontbrak zicht op kwaliteit, eigenaarschap, status, impact en besluitvorming.",
        "Teams en managers hadden één centrale werkwijze nodig voor intake, beoordeling en opvolging."
      ],
      approach: [
        "React/TypeScript Single Page Application opgezet met role-based routes.",
        "Intakeflows ontworpen met validatie, contextvelden en duidelijke gebruikersrollen.",
        "Dashboards, analytics, tabellen en visualisaties toegevoegd voor stuurinformatie.",
        "Frontend/API-scheiding toegepast met auth-flows en omgevingsgestuurde configuratie."
      ],
      impact: [
        "Vervangt losse innovatie-opvolging door een centraal en traceerbaar proces.",
        "Geeft managers zicht op ideeen, teams, voortgang, trends en portfolio-informatie.",
        "Laat full-stack productdenken zien: UX, data, API-integratie en schaalbare frontend."
      ],
      next: [
        "Verder verrijken met extra geanonimiseerde productschermen en API/datamodel-visuals.",
        "Demo-URLs, gebruikersnamen, tokens en echte organisatiedata blijven buiten publicatie."
      ]
    }
  },
  crm: {
    title: "CRM / Operations Platform",
    kicker: "Product case study",
    summary:
      "Multi-office operationsplatform voor risk governance, wallet/treasury, settlements en auditbare transacties.",
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
        "Losse spreadsheets, lokale databases en handmatige afstemming maakten verkoop, risico en uitbetaling kwetsbaar.",
        "Er was één bron van waarheid nodig voor verkoop, exposure, treasurypositie en operationele werkvoorraad.",
        "Walletmutaties, settlements en high-risk flows moesten auditbaar verwerkt worden."
      ],
      approach: [
        "Multi-application suite ontworpen voor Player, Front Office, Back Office en Main Office.",
        "Hub-based processingmodel uitgewerkt voor operationele risicolagen.",
        "Risk Engine, wallet/treasury en immutable ledger gecombineerd in één server-side platform.",
        "Dashboards en role-specific workflows gebouwd voor operators en management."
      ],
      impact: [
        "Centrale bron van waarheid voor verkoop, risk, treasury en operationele verwerking.",
        "Meer grip op risk governance, settlementstatus en walletposities over meerdere rollen.",
        "Sterke demonstratie van productontwikkeling, operations en full-stack engineering."
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
