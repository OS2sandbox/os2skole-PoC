# OS2Skole Architecture Communication Canvas
*System: OS2Skole | Created by: @0xf1e | Date/Iteration: February 24th, 2026*

## Value Proposition 💼

- Provide a school workspace for students in Danish elementary schools.
- Replace current closed-source applications (Google Workspace, Microsoft Office).
- Ensure EU sovereignty and avoid power imbalances towards global software corporations.

## Core Functions 📋

- Unified platform for documents and classroom communication.
- Exercise/Homework assignment and submission.
- Digital communication between teachers and students.
- Access to calendars, address books, and email management.
- Unified login for both internal components and externally supplied platforms.

## Key Stakeholder 🧑‍🧑‍🧒

- **Value for:** Students, teachers, and school administrators.
- **Development financed by:** OS2 (member municipalities).
- **Operations financed by:** Municipalities.
- **Customers:** 23 Danish municipalities, the largest of them being Aarhus, Aalborg, and Odense.
- **Contributors:** Multiple suppliers (selected on a per-component basis).

## Quality Requirements ⭐️

- [Security](https://quality.arc42.org/qualities/security) (*Why?* Student data must be safe. Actions in the sytem must be accountable without repudiation.)
- [Composability](https://quality.arc42.org/qualities/composability) (*Why?* We do not want to get locked into providers' integrated or bespoke solutions.)
- Ease-of-use ([Learnability](https://quality.arc42.org/qualities/learnability)) (*Why?* End-users must be able to use the system with only little external support.)
- [Elasticity](https://quality.arc42.org/qualities/elasticity) (*Why?* The system must stay responsive under exam situations.)
- [Accessibility](https://quality.arc42.org/qualities/accessibility) (*Why?* All students in a class must be able to use the system.)
- [Operability](https://quality.arc42.org/qualities/operability) (*Why?* We want to run this project for a long time, with changing staff and changing modules.)

## Business Context 🔗

Users access the system via web browsers. The system interfaces with Identity Providers (EasyIQ, UniLogin, etc.) and Skolegrunddata. The main portal redirects to external user-facing applications, while internal components (like the classroom management system) pull data from these external applications via APIs.

```mermaid
graph LR
    Users((Users)) -->|"uses (via Web Browser)"| Portal[OS2Skole Portal]
    Portal -->|"authenticates via"| IdPs["Identity Providers<br/>EasyIQ, UniLogin, etc"]
    Portal -->|"queries user data from"| SkoleData[Skolegrunddata]
    Portal -->|"redirects to (via OIDC)"| ExtApps[External User-Facing Apps]
    Portal -->|"redirects to (via OIDC)"| IntApps["Internal User-Facing Apps<br/>e.g. Classroom Mgmt"]
    IntApps -->|"pulls data from (via API)"| ExtApps
```

## Core Architectural Decisions 🚦

- We replace non-EU-sovereign components in the current student workspace infrastructure with open-source alternatives.  (*Why?* We consider open source components to be the best strategical fit.)
- We design our system to coexist and integrate with existing school workspace components specific to the Danish market. (*Why?* Users and decision makers are very satisfied with existing Danish solutions.)
- The project is developed as a Multi-provider setup, where specific components are handled by specialized providers. (*Why?* We want to foster a competitive landscape of specialized providers.
- The connection between components in this project follows a microservices architectural style. (*Why?* It saves the trouble of developing a bespoke "OS2Skole API", and allows every provider to interface with known standardised APIs.)
- We leave the individual implementation of the components up to the providers, as long as they meet the quality requirements. (*Why?* We want providers to be able to reuse parts of their existing technological stack.)
- We follow an agile development style, where we regularly incorporate feedback from test users and providers. (*Why?* It is the most likely to lead to a successful project outcome with a small team and budget.)

## Technologies 🛠️

- Specific technologies are to be determined through cooperation with component suppliers.
- **Key Patterns:**
    - Communication between components through APIs.
    - Whenever possible, backing services are accessed through open protocols rather than app-specific APIs.
    - Continuous Integration and Continuous Deployment (CI/CD).
    - Use of observability technologies.
    - For identity brokering, we use OIDC and OIDC Claims.

## Components / Modules 🧊

Envisioned Logical Components: 

- Application access portal
- Document sharing
- Document editing
- Video calling
- Calendar viewing
- Email client
- Address book viewing
- Teacher exercise assignment
- Student exercise submission

Envisioned Infrastructure Component Groups:

- Observability (like Auditing, Monitoring, Metrics, Incidents)
- Test Suite (like End2End, Integration, Load, Accessibility)
- Delivery Management (like CI/CD, Rollouts, Version Control)

## Technical Challenges and Risks ❓

- Can we identify the unknown unknowns behind this project as soon as they become relevant?
- Can we continuously incorporate end-user feedback in an effective way?
- Can we efficiently incorportate the experiences of the different infrastructure/module suppliers?
- How do we ensure that costs for technical end-user support can be kept low?

<img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png" alt="CC BY-SA License" style="height: 20px;"/> Software Architecture Canvas is licensed under Attribution-ShareAlike 4.0 International. 
[https://canvas.arc42.org](https://canvas.arc42.org)
