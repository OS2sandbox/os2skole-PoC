# Identity and Access Management: C4 System Diagram

The Os2Skole Identity and Access Management (IAM) architecture is engineered to deliver a secure, scalable, and operationally efficient platform. This C4 system diagram illustrates the core components and their strategic relationships within the broader Os2Skole ecosystem and external services.

## Context

```mermaid
C4Context
  title System Context diagram - UniLogin Authentication and Skolegrunddata
  
  %% --- The Entire Enterprise Context ---
  Enterprise_Boundary(OrgBoundary, "Os2Skole") {

    %% APPLICATION DOMAIN
    System_Boundary(Application, "Application Domain") {
      System(appA, "Application A", "")
      System(appC, "Application C", "")
      System(appD, "Application D", "")
    }
          
    %% PLATFORM DOMAIN
    System_Boundary(platform, "Platform Service Domain") {
      Container_Boundary(Keycloak, "Identity & Access Management") {
        Container(keycloak_core, Identity & Access Management, "Keycloak", "Manages authentication, authorization, and security")
        %% Component definition inside the Container for visual grouping
        Component(spi, "Skolegrunddata Adapter", "Keycloak SPI - skolegrundata.jar", "Fetches attributes via SOAP and maps to OIDC claims")
      }
      System_Boundary(configmaps, "ConfigMaps") {
        Component(config, "External IdP config", "ConfigMap - realm.json", "Realm & broker configuration")
      }
    }
  }


Enterprise_Boundary(STILBoundary, "External person data providers") {
    System_Ext(idp, "External IdP", "OIDC IdP")
    System_Ext(skolegrundata, "Skolegrundata", "SOAP/XML Metadata attributes/roles.")
}
  
  
  %% --- Relationships (The Flow) ---

  %% Identity Brokering
  Rel(keycloak_core, config, "Read config")
  Rel(keycloak_core, idp, "OIDC Identity Lookup")
  Rel(keycloak_core, spi,"requests user context from")
  Rel(spi, skolegrundata, "fetches updated data from", "SOAP/XML over HTTPS")
  Rel(keycloak_core, appA, "redirects to, provides authenticaiton for", "OpenID Connect")
  Rel(keycloak_core, appC, "redirects to, provides authenticaiton for", "OpenID Connect")
  Rel(keycloak_core, appD, "redirects to, provides authenticaiton for", "OpenID Connect")
  
  UpdateLayoutConfig($c4ShapeInRow="2")
```

## Context
**Date**: Dec 17, 2025, **Author:** [@janhalen](https://github.com/janhalen), [@0xf1e](https://github.com/0xf1e)  
**Discussion Participants:** original diagram by @janhalen, minor adjustments by @0xf1e, https://github.com/OS2sandbox/os2skole-PoC/pull/42

**Originally intended Audience and Purpose:**

* Our own team: "We want to identify and manage potential challenges in Identity & Access Management at an early stage, and we want to be able to seek vendor feedback on whether our design is viable."

## Implied Decisions

The core architecture is built on **six strategic pillars** to ensure reliability, security, and low operational cost:

| Strategic Pillar | Implementation Detail | Benefit |
| :--- | :--- | :--- |
| **Modularity** | An IAM service **implementing standard OpenID Connect** acts as a **separate, centralized Identity Provider** for the applications. | Loose Coupling of applications from identity logic. Reduced vendor lock-in. |
| **Vendor Neutrality** | Utilizes a **best of breed Open Source solution**. | Reduced licensing costs and reduced risk of vendor lock-in. |
| **Open Source Value** | Focus on **reuse** of existing open source solutions and potential **upstream contributions** |  Fosters community feedback and improves core platform quality. |
| **Exit Strategy** | *TBD* | Insulation from technology change risks; low-cost provider transition. |
| **Security** | **Security by Design** enforced via centralized IAM controls. | Consistent authentication and authorization across all applications. |
| **Maintainability** | Declaratively configured components.  | Simplified deployments and low-cost maintenance. |

This architecture delivers a **secure, adaptable, and sustainable** IAM platform by prioritizing standards, openness, and strategic separation of concerns.
