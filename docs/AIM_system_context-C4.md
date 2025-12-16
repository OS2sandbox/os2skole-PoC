# 🎒 Os2Skole
## Identity and Acess Management

The Os2Skole Identity and Access Management (IAM) architecture is engineered to deliver a secure, scalable, and operationally efficient platform that underpins all applications in the stack. Leveraging the globally recognized C4 model, this diagram illustrates the System Context, emphasizing the core components and their strategic relationships within the broader Os2Skole ecosystem and external services provided by STIL 


The core architecture is built on **six strategic pillars** to ensure longevity, security, and low operational cost:

| Strategic Pillar | Implementation Detail | Benefit |
| :--- | :--- | :--- |
| **Modularity** | Keycloak acts as a **separate, centralized Identity Provider**. | Loose Coupling of applications from identity logic. |
| **Vendor Neutrality** | Utilizes Keycloak, a **best of breed Open Source solution**. | Reduced licensing costs and elimination of vendor lock-in. |
| **Open Source Value** | Focus on **reuse** and potential **upstream contributions** |  Fosters community involvement and improves core platform quality. |
| **Exit Strategy** | Standard **OpenID Connect** is the interface contract. | Insulation from technology change risks; low-cost provider transition. |
| **Security** | **Security by Design** enforced via centralized IAM controls. | Consistent authentication and authorization across all applications. |
| **Maintenance** | Configuration via **ConfigMaps**  | Simplified deployments and highly effective low-cost maintenance. |

This architecture delivers a **secure, adaptable, and sustainable** IAM platform by prioritizing standards, openness, and strategic separation of concerns.

---


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
      Container_Boundary(Keycloak, "Identity & Acess Management") {
        Container(keycloak_core, Identity & Access Management, "Keycloak", "Manages authentication, authorization, and security")
        %% Component definition inside the Container for visual grouping
        Component(spi, "Skolegrunddata Adapter", "Keycloak SPI - skolegrundata.jar", "Fetches attributes via SOAP and maps to OIDC claims")
      }
      System_Boundary(configmaps, "ConfigMaps") {
        Component(config, "UniLogin IDP config", "ConfigMap - realm.json", "Realm & broker configuration")
      }
    }
  }


Enterprise_Boundary(STILBoundary, "STIL") {
    System_Ext(unilogin, "UniLogin", "OIDC Idp")
    System_Ext(skolegrundata, "Skolegrundata", "SOAP/XML Metadata attributes/roles.")
}
  
  
  %% --- Relationships (The Flow) ---

  %% Identity Brokering
  Rel(keycloak_core, config, "Read config")
  Rel(keycloak_core, unilogin, "OIDC Identity Lookup")
  Rel(keycloak_core, spi,"Provide user context")
  Rel(spi, skolegrundata, "Metadata Lookup", "SOAP/XML over HTTPS")
  Rel(keycloak_core, appA, "Authentication", "OpenID Connect")
  Rel(keycloak_core, appC, "Authenticated User", "OpenID Connect")
  Rel(keycloak_core, appD, "Authenticated User", "OpenID Connect")
  
  UpdateLayoutConfig($c4ShapeInRow="2")
```
