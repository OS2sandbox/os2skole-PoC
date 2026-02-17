# 🎓  Os2Skole
## Arkitekturprodukter

Dette dokument adresserer, hvordan en formaliseret rammearkitektur – som den fællesoffentlige Digital Arkitektur (FDA), kan implementeres pragmatisk i en iterativ open source udviklingsproces.

Arkitekturprodukter udstilles i et **åbent, versionsstyret repositorie**. Dokumentationen følger principperne i `FDA arkitekturreolen` og realiseres ved at beskrive diagrammer vha. `C4-modellen` og levere dem direkte i åbne versionstyrbare standard-formater som f.eks `Mermaid` i `Markdown`. Denne tilgang sikrer, at arkitekturbeskrivelserne er tæt integreret med koden og understøtter en hurtig, iterativ udvikling.

_En mere dybdegående beskrivelse af strategien for arkitekturcompliance er beskrevet seperat her: [Planlagt arkitektur compliance](./docs/arkitektur_compliance.md)_

<br>

## Arkitekturprodukter
Modeleret efter [FDA Arkitekturreolen](https://arkitektur.digst.dk/metoder/arkitekturmetoder/introduktion-til-retningslinjer-formidling-og-dokumentation-af-0#arkitekturreol)

<br>

🔍: Items identified for further discussion.

💡: Items with ongoing or started discussions.

|                                              | Konceptuel (Overbliksniveau)                                                                                                                                        | Logisk (Designniveau)                                                                                                                                                                                                                                          | Fysisk (Realiseringsniveau)                                                                                                                                                     |
| :------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Styring**                                  | **Styringsrammer:** <br> - Governancemodel <br> - Forretningsmål <br> - Interessentanalyse <br> - Kvalitetsplan                                                     | **Fremgangsmåde:** <br> - Gevinstmodel <br> - Metodeanvendelse                                                                                                                                                                                                 | **Relaliseringsforløb:** <br> - Ændringsanmodningslog <br> - Arkitekturbeslutningslog <br> - [💡[1] _Deployment-/stagingplan_](#1-deployment-stagingplan)                       |
| **Strategi**                                 | **Vision og mål:** <br> - Vision / målbillede: <br> - Stretegiske kapabiliteter <br> - Udfordringer                                                                 | **Målearkitektur (resumé):** <br> - [✅ Pricipper](https://github.com/OS2sandbox/os2skole-PoC/blob/main/docs/udviklings.manual_dk.md#principper) <br> - Arkitekturprincipper <br> - Arkitekturcompliance <br> - Målarkitektur-resumé <br> - Migreringsstrategi | **Løsningsarkitektur (resumé):** <br> - [💡[2] _Løsningsarkitektur-resumé_](#2-løsningsarkitektur-resumé)                                                                       |
| **Jura**                                     | **Juridiske rammer:** <br> - Juridiske bindinger                                                                                                                    | **Juridisk fortolkning:** <br> - Krav(samling)                                                                                                                                                                                                                 | **Juridisk praksis:** <br> - Databehandleraftaler <br> - [💡[3] _Serviceaftaler (SLA)_](#3-serviceaftaler-sla)                                                                  |
| [🔍[1] **Sikkerhed**](#1-security-workflows) | **Sikkerhedsstandard:** <br> - [💡[4] _Sikkerhedsstrategi / -mønstre_](#4-sikkerhedsstrategi-mønstre) <br> - [🔍[2] Trussels- og risikokatalog](#2-threat-modeling) | **Sikkerhedsmodeller og regler:** <br> - Sikkerhedsmodel                                                                                                                                                                                                       | **Sikkerhedskontrol:** <br> - [💡[5] _Sikkerhedskontroller_](#5-sikkerhedskontroller)                                                                                           |
| **Opgaver**                                  | **Forretningsstruktur:** <br> - Opgave- / servicekatalog <br> - Domænekatalog <br> - Proceslandskab                                                                 | **Processer:** <br> - Aktør / roller <br> - [💡[6] _Use case / user story_](#6-use-case-user-story) <br> - [💡[7] _Brugerrejse_](#7-brugerrejse)                                                                                                               | **Arbejdstilrettelæggelse:** <br> - [💡[8] _Arbejdsgang / -beskrivelse_](#8-arbejdsgang-beskrivelse)                                                                            |
| **Information**                              | **Forretningsobjekter og begreber:** <br> - Centrale forretningsobjekter <br> - Begrebsliste / model                                                                | **Logiske datamodeller:** <br> - [💡[12] _Informationsmodel_](#12-informationsmodel) <br> - Logisk datamodel <br> - Masterdata <br> - Datakvalitet                                                                                                             | **Fysiske datamodeller:** <br> - Datasæt <br> - Dataudvekslingsformat                                                                                                           |
| **Applikation**                              | **Applikationsstruktur og integrationsmønstre:** <br> - Systemlandskab / kontekstdiagram                                                                            | **Applikationslandskab og integrationer:** <br> - [💡[9] _Applikationslandskab / +integration_](#9-applikationslandskab-integration) <br> - Applikationer mappet til forretning og information                                                                 | **Applikationsdesign og konfiguration:** <br> - Snitfladebeskrivelser <br> - Applikationsdesign <br> - [💡[10] _Løsningskomponent_](#10-løsningskomponent) <br> - Testscenarier |
| **Infrastruktur**                            | **Infrastrukturmønstre:** <br> - Infrastrukturkoncept og mønstre                                                                                                    | **Infrastrukturlandskab:** <br> - Infrastrukturlandskab                                                                                                                                                                                                        | **Infrastrukturkonfiguration:** <br> - [💡[11] _Infrastrukturopsætning_](#11-infrastrukturopsætning)                                                                            |

---

### 💡[1] Deployment-/stagingplan

- Ad hoc discussion starter: [https://github.com/0xf1e/os2skole-PoC/blob/updated-architecture-progress/docs/deployment.md](https://github.com/0xf1e/os2skole-PoC/blob/updated-architecture-progress/docs/deployment.md) (draft of the deployment process in the second diagram, draft of the different environments in the first diagram)
- Ongoing discussion: https://github.com/OS2sandbox/os2skole-PoC/pull/44

### 💡[2] Løsningsarkitektur-resumé

- Ad hoc discussion starter: [https://github.com/0xf1e/os2skole-PoC/blob/updated-architecture-progress/docs/architecture.md#automated-testing-and-cicd](https://github.com/0xf1e/os2skole-PoC/blob/updated-architecture-progress/docs/architecture.md#automated-testing-and-cicd) (description of the architecture)
- Ongoing discussion: https://github.com/OS2sandbox/os2skole-PoC/pull/46

### 💡[3] Serviceaftaler (SLA)

- Ad hoc discussion starter: [https://github.com/0xf1e/os2skole-PoC/blob/updated-architecture-progress/docs/non_functional_requirements.md](https://github.com/0xf1e/os2skole-PoC/blob/updated-architecture-progress/docs/non_functional_requirements.md) (text about non-technical requirements)
- Ongoing discussion: [http://example.com/#TODO](http://example.com/#TODO)

### 💡[4] Sikkerhedsstrategi / -mønstre

- Ad hoc discussion starter: [https://github.com/0xf1e/os2skole-PoC/blob/updated-architecture-progress/docs/deployment.md#infrastructure-architecture](https://github.com/0xf1e/os2skole-PoC/blob/updated-architecture-progress/docs/deployment.md#infrastructure-architecture) (some of the requirements in the diagram describe security controls)
- Ongoing discussion: https://github.com/OS2sandbox/os2skole-PoC/pull/42

### 💡[5] Sikkerhedskontroller

- Ad hoc discussion starter: [https://github.com/0xf1e/os2skole-PoC/blob/updated-architecture-progress/docs/deployment.md#infrastructure-architecture](https://github.com/0xf1e/os2skole-PoC/blob/updated-architecture-progress/docs/deployment.md#infrastructure-architecture) (some of the requirements in the diagram describe security controls)
- Ongoing discussion: [http://example.com/#TODO](http://example.com/#TODO)

### 💡[6] Use case / user story

- Work in progress: [https://github.com/OS2sandbox/os2skole-PoC/issues/23](https://github.com/OS2sandbox/os2skole-PoC/issues/23) (one internal user story session has been held)

### 💡[7] Brugerrejse

- Ongoing discussion: [http://example.com/#TODO](http://example.com/#TODO) (currently in private document)

### 💡[8] Arbejdsgang / -beskrivelse

- Ongoing discussion: [http://example.com/#TODO](http://example.com/#TODO) (summary of meeting about iterative work, and open questions: [https://github.com/OS2sandbox/os2skole-PoC/issues/23#issuecomment-3596994415](https://github.com/OS2sandbox/os2skole-PoC/issues/23#issuecomment-3596994415), [https://github.com/OS2sandbox/os2skole-PoC/issues/33](https://github.com/OS2sandbox/os2skole-PoC/issues/33), [https://github.com/OS2sandbox/os2skole-PoC/issues/34](https://github.com/OS2sandbox/os2skole-PoC/issues/34), [https://github.com/OS2sandbox/os2skole-PoC/issues/36](https://github.com/OS2sandbox/os2skole-PoC/issues/36))

### 💡[9] Applikationslandskab / -integration

- Ad hoc discussion starter: [https://github.com/0xf1e/os2skole-PoC/blob/updated-architecture-progress/docs/architecture.md#os2skole-infrastructure-overview](https://github.com/0xf1e/os2skole-PoC/blob/updated-architecture-progress/docs/architecture.md#os2skole-infrastructure-overview) (information collected for cost estimate, including component interactions)
- Ongoing discussion: https://github.com/OS2sandbox/os2skole-PoC/pull/43 (refining cost estimates and component interactions)

### 💡[10] Løsningskomponent

- Ad hoc discussion starter: [internal spreadsheet] (a list of desired components which has been created and shared for the purpose of having Zangenberg estimate our cost)
- Ongoing discussion: [http://example.com/#TODO](http://example.com/#TODO) (Zangenberg's assessment of the components and work required)

### 💡[11] Infrastrukturopsætning

Specific infrastructure decisions will be made in cooperation and exchange with suppliers.

- Ad hoc discussion starter: [https://github.com/0xf1e/os2skole-PoC/blob/updated-architecture-progress/docs/diagrams/files_deployment_from_vendors_perspective.png](https://github.com/0xf1e/os2skole-PoC/blob/updated-architecture-progress/docs/diagrams/files_deployment_from_vendors_perspective.png), [https://github.com/0xf1e/os2skole-PoC/blob/updated-architecture-progress/docs/diagrams/architecture.png](https://github.com/0xf1e/os2skole-PoC/blob/updated-architecture-progress/docs/diagrams/architecture.png) (diagrams showing infrastructure concerns)
- Ongoing discussion: [http://example.com/#TODO](http://example.com/#TODO) (conversations are taking place and infrastructure specifications are being discussed internally)

### 💡[12] Informationsmodel

- Ongoing discussion: [https://github.com/OS2sandbox/os2skole-PoC/issues/32](https://github.com/OS2sandbox/os2skole-PoC/issues/32) (discussion on information model)
- Ad hoc discussion starter: [https://github.com/0xf1e/os2skole-PoC/blob/updated-architecture-progress/docs/diagrams/architecture.png](https://github.com/0xf1e/os2skole-PoC/blob/updated-architecture-progress/docs/diagrams/architecture.png) (high-level view of information flow)

### 🔍[1] Security Workflows

This issue explores the need for security workflows, such as regular penetration testing and processes to verify supplier compliance with NIS2 and CRA: [https://github.com/OS2sandbox/os2skole-PoC/issues/41](https://github.com/OS2sandbox/os2skole-PoC/issues/41)

### 🔍[2] Threat Modeling

This issue asks how to introduce regular threat modeling into the project's sprints: [https://github.com/OS2sandbox/os2skole-PoC/issues/40](https://github.com/OS2sandbox/os2skole-PoC/issues/40)
