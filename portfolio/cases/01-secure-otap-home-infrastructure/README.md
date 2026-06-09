# Secure OTAP Home Infrastructure

## Korte samenvatting

Secure OTAP-ontwikkelomgeving voor development, testing en validatie van automation- en infrastructuurconcepten.

## Analyse uit Home Office Network Blueprint v1.12

De blueprint beschrijft geen losse homelab, maar een volwassen mini-platform met duidelijke scheiding tussen netwerkperimeter, compute, storage, ingress, monitoring, DNS en remote access. Dat maakt deze case waardevol voor telecom/IT-opdrachtgevers: hij laat zien dat de omgeving vanuit security, beheerbaarheid en schaalbaarheid is ontworpen.

Sterke bewijspunten:

- Firewall als centrale router, DHCP, NAT, logging, security perimeter en VPN gateway.
- Bridge-mode WAN-opzet en vermijden van double NAT.
- LAN-segmentatie met reserveringen voor infrastructure, clients en future use.
- NAS met RAID, snapshot reserve, LAN-only exposure, 2FA en disabled default admin.
- Firewall hardening: WAN management uit, geen DMZ, geen UPnP, default deny en attack defense.
- Rocky Linux compute node met duidelijk principe: firewall = perimeter, server = compute, NAS = storage.
- Rootless Podman runtime en gescheiden OTAP-directorystructuur.
- Container-netwerken voor proxy, dev, test, acc, monitoring, DNS en management.
- NGINX reverse proxy met TLS termination en interne wildcard routing.
- SSH-hardening met key-based auth, password/root login uit en toegang alleen via LAN/VPN.
- Monitoring via Prometheus, Grafana, Node Exporter en NGINX Exporter.
- Internal DNS via AdGuard Home en wildcard DNS.
- WireGuard VPN met gesegmenteerd developer/tester access model.

Publieke positionering:

Deze case moet niet voelen als "ik heb thuis een server", maar als: "ik ontwerp en beheer een secure OTAP-platform waarin ik development, testing, automation en infra-concepten realistisch kan valideren."

## Context om later aan te vullen

- Aanleiding:
- Doel van de omgeving:
- Belangrijkste architectuurkeuzes:
- Jouw bijdrage:
- Stack/tools:
- Resultaat/impact:

## Screenshots

Plaats geanonimiseerde beelden in `screenshots/`.

Nu gebruikt in de UI:

- `Portainer-redacted.webp` - Container/platformbeheer: actieve containers, images, volumes en netwerken.
- `Adguard-redacted.webp` - Internal DNS/filtering: DNS-query volume, block-rate en filtering-dashboard.
- `Grafana-redacted.webp` - Observability: Node Exporter dashboard met CPU, memory, network en disk metrics.

Originelen bewaard buiten de publiceerbare portfolio-map:

- `case-sources-private/01-secure-otap-home-infrastructure/screenshots-originals/Portainer.png`
- `case-sources-private/01-secure-otap-home-infrastructure/screenshots-originals/Adguard.png`
- `case-sources-private/01-secure-otap-home-infrastructure/screenshots-originals/Grafana.png`

Nog aanbevolen als later beschikbaar:

- `01-architecture-overview-redacted.png` - Hoog-niveau diagram: internet, bridge modem, firewall, switch, compute, NAS en AP. Geen IP's of exacte poorten.
- `04-vpn-access-model-redacted.png` - Diagram of tabel met developer/tester access model. Toon rollen en toegangsprincipes, geen peer keys, subnets of AllowedIPs.
- `05-dns-proxy-routing-redacted.png` - Schematisch beeld van internal DNS, reverse proxy en TLS termination. Gebruik generieke service-namen.

Conceptuele placeholders die bewaard blijven als fallback of later voor diagrammen:

- `01-architecture-overview.svg`
- `02-access-security-model.svg`
- `03-observability-platform.svg`

De huidige modal gebruikt de drie echte redacted screenshots. De SVG's kunnen later worden gebruikt voor een extra architectuur- of security-diagram als dat de case nog duidelijker maakt.

## Niet publiek delen

- Private IP-adressen
- Interne hostnames en DNS-routes
- VPN-subnets en peer details
- Accounts, AllowUsers-regels en beheerinterfaces
- Firewall/NAT-regels die toegangspaden onthullen
