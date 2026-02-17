## Planlagt arkitektur compliance 
_Med moderne Open Source Software Delivery Life Cycle (SDLC)_

<br>

> <br>
>
> ### _What if we found ourselves building something that nobody wanted?_
> ### _In that case, what did it matter if we did it on time and on budget?_
> -- [Eric Ries, The Lean Startup](https://en.wikipedia.org/wiki/The_Lean_Startup)
>
>#####  <p align="right">© Scaled Agile, Inc.</p>

 

### **Introduktion**

Strategien er at implementere en moderne, iterativ Open Source SDLC med **[OpenGitOps](https://opengitops.dev)** og **[Platform Engineering](https://platformengineering.org/)** metoder, designet til at sikre **kontinuerlig og granulær compliance** med **[TOGAF ADM](http://www.togaf.com/admref/)**. Governance og projektstyring er her ikke separate processer, men er **indlejret** i udviklingsprocessen og udviklingsværktøjerne for at kunne erstatte langvarige prædefinerede faser med hurtige, transparente kontrolpunkter. 

---

### **Kobling til TOGAF-Governance**

Den planlagte SDLC-metodeimplementering skal sikre gennemsigtighed via følgende direkte koblinger:

* **Arkitekturvision (Fase A)**
    * **Standardisering af Epic Definition:** *Epics* i et issue-tracking system bliver det obligatoriske startpunkt for scoping og forretningsmål.

* **Arkitekturudvikling (Fase B, C, D)**
    * **Krav om C4-visualisering:** Vi vil benytte **[C4-modellen](https://c4model.com)** for at sikre en klar målarkitektur, der let kommunikeres på tværs af tekniske og forretningsmæssige målgrupper. 

* **Implementeringsgovernance (Fase G)**
    * **Obligatoriske PR-reviews:** Hver ændring indlejres i en Pull Request (PR), der kræver **godkendelse** af en arkitekt for at sikre compliance.

* **Arkitekturændringsstyring (Fase H)**
    * **Automatisering via CI/CD:** Implementering af CI/CD, der reagerer på ovennævnte godkendte ændringer, vil fungere som automatisk og sporbar governance compliance.

### **Konklusion**

Implementeret korrekt kan denne tilgang levere hurtigere og mere robust governance, via løbende arkitektonisk audit i udviklingsforløbet.