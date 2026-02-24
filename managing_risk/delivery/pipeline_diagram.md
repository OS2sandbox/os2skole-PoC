# CI/CD Pipeline: C4 System Diagram

This diagram illustrates the automated test and delivery pipeline from OS2Skole administration's perspective, showing the workflow for patches and minor updates within the system.

![CI/CD Pipeline Diagram](./diagram_data/pipeline_dynamic_diagram.svg)

## Context
**Date:** Dec 17, 2025, **Author:** [@0xf1e](https://github.com/0xf1e)  
**Discussion Participants:** Input from [@janhalen](https://github.com/janhalen), https://github.com/OS2sandbox/os2skole-PoC/pull/44

**Originally intended Audience and Purpose:**

* Our own team: "We want to understand and document the automated test and delivery pipeline for patches and minor updates, so that we can identify potential risks and ensure reliable deployments."
* Vendors: "We want to provide clarity on how their software configurations are tested and deployed in the OS2Skole system."

**Scope:** This pipeline displays the workflow for patches and minor-level updates within the system. Workflows for feature changes are not described yet.

## Implied Decisions

The pipeline is organized into **three main steps** to ensure safe and reliable deployment of vendor configurations:

| Step | Purpose | Key Activities |
| :--- | :--- | :--- |
| **1. Test Preparation** | Coordinate test environment setup | Vendors push configuration notifications; negotiate deployment of test environments |
| **2. Testing & Outcome** | Validate configuration changes | Run comprehensive test suite (Integration, System, Load, Accessibility tests); update Production Declaration if successful |
| **3. Production Rollout** | Deploy to production | Administrator approval; negotiate rollout with vendors; perform production deployment |

**Test Coverage:** The test suite currently includes Integration Tests, System Tests, Load Tests, and Accessibility Tests. End2End tests are planned to be added to ensure comprehensive validation.

**Risk Management:** The pipeline incorporates multiple checkpoints and approval mechanisms to minimize deployment risks and ensure system stability.
