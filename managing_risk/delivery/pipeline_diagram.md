# CI/CD Pipeline: C4 System Diagram

This diagram illustrates the automated test and delivery pipeline from OS2Skole administration's perspective. It shows the workflow for patches and minor updates within the system.

```plantuml
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml

title CI/CD Pipeline: From OS2Skole administration's perspective

' --- External Actors ---
Person_Ext(vendor_a, "Vendor A")
System_Ext(delivery_vendor_a, "Delivery (Vendor A)", "")

Rel(vendor_a, delivery_vendor_a, "pushes new configuration of their software to")

' --- Step 1: Test Preparation ---
Boundary(step1, "1. Test Preparation", $type="Step") {
    System_Ext(delivery_all_vendors_nego, "Delivery (All Vendors)", "")
    System(os2skole_2_test_prep, "Delivery (OS2Skole)")
}
    note left of os2skole_2_test_prep
    Delivery refers to the version control system, the CI/CD platform, and any related logic.
    end note

Rel(delivery_vendor_a, os2skole_2_test_prep, "pushes notification about new configuration")
BiRel(delivery_all_vendors_nego, os2skole_2_test_prep, "negotiate deployment of test environment(s)")

' --- Step 2: Testing & Outcome ---
Boundary(step2, "2. Testing & Outcome", $type="Step") {
    System(os2skole_3_update, "Delivery (OS2Skole)", "Runs test suite, which could comprise End2End Tests, Integration Tests, Load Tests, Accessibility Tests, etc.")
    System_Ext(delivery_all_vendors_outcome, "Delivery (All Vendors)", "")
    ContainerDb(prod_decl, "OS2Skole Production Declaration", "System Declaration", "Declaration that describes all expected components of the OS2Skole system")
}

Rel(os2skole_2_test_prep, os2skole_3_update, "requests run of test suite on test environments")
Rel(os2skole_3_update, delivery_all_vendors_outcome, "sends test outcome to")
Rel(os2skole_3_update, prod_decl, "if successful, updates")

' --- Step 3: Production Rollout ---
Boundary(step3, "3. Production Rollout", $type="Step") {
    System(os2skole_4_rollout, "Delivery (OS2Skole)")
    Person(admin, "Administrator", "")
    System(prod_env, "OS2Skole Production\nEnvironment")
    System_Ext(delivery_vendor_a_prod, "Delivery (Vendor A)", "")
}

Rel(os2skole_3_update, os2skole_4_rollout, "if successful, requests rollout of new configuration")
Rel(admin, os2skole_4_rollout, "confirms approval of update to")
BiRel(delivery_vendor_a_prod, os2skole_4_rollout, "negotiate rollout of new configuration")
Rel(os2skole_4_rollout, prod_env, "performs rollout of new configuration of")


@enduml
```

## Context
**Date:** Dec 17, 2025, **Author:** [@0xf1e](https://github.com/0xf1e)  
**Discussion Participants:** Diagram has been presented in https://github.com/OS2sandbox/os2skole-PoC/pull/44

**Originally intended Audience and Purpose:**

* Fie (architect role): "I want to be sure that the rollout of updates can be done the way I am envisioning, so that the components that I recommend make sense. I want other CI/CD experts to be able to give their input."
* Our team: "We want hypothetical suppliers to be able to determine, if they can integrate with our delivery system. We want to give them the chance to give feedback so we can adjust to their needs."

## Implied Decisions

(todo)
