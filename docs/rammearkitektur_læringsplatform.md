# RAMME-ARKITEKTUR
```mermaid
flowchart LR
 subgraph s1["Læringsplatform"]
        LMS(("Lærings<br>Styrings<br>System"))
        DOC[("Dokument<br>Delings<br>System")]
        ID("Identitetsmægler")
        ED("Kontorpakke")
        SIS(("Elev<br>Informations<br>System"))
        PORT("Ekstern Kursusportal")
        REP>"Revision &amp; Lovformelighed"]
        n5["Rammer Cirkel"]
        n6(["Klassestyring"])
  end
 subgraph s2["IT Management Platform"]
        n3>"Automatisering og Politik<br>Styring for enheder"]
        n4["Politik<br>Lager"]
  end
    PORT --> EXT[["Eksterne<br>Kursus<br>Systemer"]]
    LMS --> DOC & PORT
    DOC <--> ED
    SIS --> LMS & n6
    EXT ~~~ ED
    ID --> SIS
    IDP2("Identitetsudbyder 2") --> n5
    REP --> DOC
    REP ----> LMS
    Device["Enheder"] ---> n5
    n3 --> Device & n4
    s2 ~~~ s1
    n5 --> ID
    IDP1("Identitetsudbyder 1") --> n5
    n6 --> LMS

    n5@{ shape: fr-circ}
    n4@{ shape: cyl}
    Device@{ shape: procs}
     LMS:::lms
     DOC:::doc
     ID:::id
     ED:::ed
     SIS:::sis
     PORT:::port
     REP:::rep
     n6:::Peach
     n3:::Aqua
     n4:::Ash
     EXT:::ext
     EXT:::Ash
     IDP2:::idp
     IDP2:::Ash
     Device:::Ash
     IDP1:::idp
     IDP1:::Ash
    classDef lms fill:#d0e6f6,stroke:#007bff,stroke-opacity:0.5,stroke-width:1.5px, color:#333
    classDef id fill:#f9d5d3,stroke:#ff4c4c,stroke-opacity:0.5,stroke-width:1.5px, color:#333
    classDef idp fill:#f0e68c,stroke:#d1a800,stroke-opacity:0.5,stroke-width:1.5px, color:#333
    classDef sis fill:#d4edda,stroke:#28a745,stroke-opacity:0.5,stroke-width:1.5px, color:#333
    classDef doc fill:#fff3cd,stroke:#856404,stroke-opacity:0.5,stroke-width:1.5px, color:#333
    classDef ed fill:#e7f1ff,stroke:#007bff,stroke-opacity:0.5,stroke-width:1.5px, color:#333
    classDef ext fill:#e6ffe6,stroke:#28a745,stroke-opacity:0.5,stroke-width:1.5px, color:#333
    classDef port fill:#ffe6cc,stroke:#ff7e00,stroke-opacity:0.5,stroke-width:1.5px, color:#333
    classDef rep fill:#f8d7da,stroke:#dc3545,stroke-opacity:0.5,stroke-width:1.5px, color:#333
    classDef Rose stroke-width:1px, stroke-dasharray:none, stroke:#FF5978, fill:#FFDFE5, color:#8E2236
    classDef Aqua stroke-width:1px, stroke-dasharray:none, stroke:#46EDC8, fill:#DEFFF8, color:#378E7A
    classDef Ash stroke-width:1px, stroke-dasharray:none, stroke:#999999, fill:#EEEEEE, color:#000000
    classDef Peach stroke-width:1px, stroke-dasharray:none, stroke:#FBB35A, fill:#FFEFDB, color:#8F632D
```
