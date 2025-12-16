# Non-functional requirements

**Note: None of the following requirements have been reviewed or otherwise validated. They serve as a starting point for discussion. I advise caution especially when it comes to the specific numbers in this list.**

### Functionality
**Access, Security, and Auditing**

*   **Authentication:** Authentication is handled by external identity providers. The system must integrate with these providers. Users (students, teachers, parents) are authenticated based on their external identities. When a user logs out in the central IAM, this must be propagated to the individual components.
*   **Authorization:** Roles are assigned based on the class the user belongs to within the school system, and their status as either teacher, student or parent. Changes in roles must be propagated to the individual components within one day. On first creation the role must be propagated immediately.
-> Separation of Duties: different accounts for different kinds of permissions, one user may have multiple accouns
e.g. privileged account may not chnage logging
*   **Encryption:** All data must be encrypted at rest and in transit. This applies to data within a specific provider's boundary and during communication between different systems.
*   **Audit Logging:** The system must provide a broad audit trace. The following actions must be logged with user attribution, time & date:
    *   Creation of new files.
    *   Deletion of files (identifying who deleted them).
    *   Updates to files.
    *   Successful logins and failed login attempts.
    *   Changes to system configurations.
    *   Changes to user roles.
    *   Geographic location of the user during login and file modification (if legally permissible).
    *   Manipulation of data by technical staff
*   **Data Retention:**
    *   Audit logs must be retained for 90 days. (if legally permissible)
    *   Monitoring data (performance monitoring, system load stats) must be retained for 30 days.
* Integration in OS2Skole central CSV surveillance system (which is part of OS2Skole Monitoring)
### Usability
**Environment, Accessibility, and Training**

*   **Device Support:** Users must be able to access the system via laptops and mobile phones.
*   **Browser Support:** The system must function correctly on all modern browsers and comply to the W3C standards.
    *   **Priority:** Support for the Firefox browser on Linux is critical, as this is the standard configuration for school computers.
*   **Mobile Access:** A phone-appropriate user interface must be accessible via the mobile browser. Development of a dedicated native mobile application is not and must not be required.
*   **Visual Design:** All applications must adhere to the provided team style guide and branding. Apps must be configured to appear as a single, cohesive system.
*   **Training Requirements:**
    *   **General Teachers:** Must be able to perform core tasks (LMS and file management) after a 4-hour workshop and review of provided documentation.
    *   **Non-technical Teachers:** Must be able to perform core tasks after a one-day workshop.

### Reliability
**Availability and Recovery**

*   **Uptime Targets:** (based on monthly downtime, maintenance not included)
    *   **Particularly important school hours**: 99.995%
    *   **School Hours (including one hour prior to start):** 99.95%
*   **Maintenance:** Scheduled downtime or maintenance must occur outside of school hours and should be capable of running automatically.
*   **Disaster Recovery (RTO - Recovery Time Objective):** In the event of a critical failure, the system must clearly be restored within a maximum of one day. Vendors must test their backops for integrity once a month.
*   **Data Loss Limits (RPO - Recovery Point Objective):** Maximum data loss of 30 minutes is acceptable.

### Performance
**Responsiveness and Scalability**

*   **Response Times:**
    *   **Standard Operation:** The majority of tasks and navigation should take no longer than **1 second**, even (and especially) under exam conditions.
    *   **High Load (General):** When the load is unexepctedly high, navigation may take up to **10 seconds**.
    *   **LMS Data Lookup:** Lookup of information provided by the Learning Management System should take at most **5 seconds**, even under high load.
*   **Critical Task Performance:** Tasks performed repeatedly during exams or exercises must take at most **1 second**, regardless of system load.
*   **Scalability:** The system is required to **auto-scale** to support the variable demand.
*   **Concurrency:**
    *   The system must handle variable demand (school days vs. off days; class start/end times).
    *   Based on an estimated user base of 400,000 students, if 20% of students are using the system at a given time, there will be approximately **80,000 concurrent users**, distributed throughout various components of the system.
    *   *Requirement Note:* The system must be prepared to handle tremendous load spikes if classes across the commune/country begin at the exact same time.

### Supportability
**Localization, Maintainability, and Operations**

*   **Localization:**
    *   All system components must present in understandable and natural Danish.
    *   Date and currency formats must default to Danish standards.
*   **Deployment Pipeline:**
    *   Providers must expose their system to the external OS2Skole CI/CD pipeline.
    *   The external pipeline must be able to run tests in temporary test environments.
    *   Updates to the production environments must be performed as a slowed rollout.
*   **Update Management:**
    *   It must be possible for a "human in the loop" on the OS2Skole project side to retain control over updates. Vendors must support automatic updates of their system.
*   **Patching Time:** In the event of a major security vulnerability (e.g., similar to Log4j), the system must be capable of being patched with upstream vendor updates within **3 hours**. (TODO: what is the industry strandard here?)
*   **Emergency Control:** It must be possible for OS2Skole to shut down the system if it cannot be operated safely.

### Constraints
**Legal, Compliance, and Architecture**

*   **Regulatory Compliance:** All components must adhere to the **GDPR**, the **Cyber Resiliency Act**, the **NIS-2** directive and the **WCAG 2.2 EU** guidelines.
* (national standards, fællesoffentlige rammearkitektur)
*   **Data Sovereignty:** All data must be processed and stored within the **European Union (EU)**. Data and running processes (TODO: find better words) must not be under the control of any entity falling under the legal jurisdiction of a non-EU country, including but not limited to frameworks like the U.S. CLOUD Act and FISA. (CONSIDER: 'must be in compliance with EU regulatory ...' -- how do we ensure that for example Ukrainian resources can be used if appropriate?)
*   **Vendor Neutrality:**
    *   Vendors must not deploy custom forks of the upstream software. All customizations must be implemented as extensions, which are published and licensed under an OSI-approved license. (note: if change in fork, can be performed by having it be accepted upstream)
    *   If a vendor must add business logic to a deployment, for example to facilitate automatic deployment, this code must be shared with the upstream vendor under an OSI-approved license. (Quality of offer is higher if there is high willingness to fully document deployment configuration)
(NOTE/HUSKELISTEN: Something about a potential future integration into Gaia X? - integration with Gaia X is performed by OS2 Bestyrelsen - but we might make this a NICE TO HAVE for suppliers)
