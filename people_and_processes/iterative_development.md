# Iterative Development Strategy

**Executive Summary:** We propose a risk-driven, iterative development strategy to validate success early and minimize failure points. Instead of developing component-by-component, we will work in four "sprints," each resulting in an end-to-end prototype. This ensures that high-risk items like IAM integration and deployment are handled up front.

## Context

**Date:** Dec 1, 2025 (partially updated on Feb 23, 2026) **Author:** @0xf1e
**Discussion Participants:** In-person workshop with @0xf1e and @janhalen on Dec 1, 2025, see also https://github.com/OS2sandbox/os2skole-PoC/issues/23

**Originally intended Audience and Purpose:**

* Our own team: "We want to shift our vision of the product development from a predictive 'waterfall' approach to an iterative and agile approach. We need a first idea on what this would look like in practice."

---

## Strategy

### Timeline

We envision four "sprint" phases, with each sprint taking two months.

We envision taking the "Product Owner" role for the software development. At the start of a sprint, we work with suppliers to identify the highest-risk open user stories. This is motivated by the need to validate our plan for the project's success. If there are failure points in our project, we want to encounter them as early as possible. Our goal is to tackle the hardest items first by creating a prototype that addresses critical risks.

This means that the release of OS2Skole could be preceded by four sprints and prototypes:

- Prototype "Amsterdam" (envisioned delivery: 2 months after initial development start)
- Prototype "Barcelona" (envisioned delivery: 4 months after initial development start)
- Prototype "Dublin" (envisioned delivery: 7 months after initial development start - accounting for summer holidays)
- Prototype "Frankfurt" (envisioned delivery: 9 months after initial development start)

Each of these prototypes is meant to be reviewed by project coordinators, teachers, and potentially students.

### Sprints

At the start of each sprint, we identify the user stories to be addressed. The goal is to choose the user stories carrying the most risk.

Each sprint is designed to handle requirements spanning the entire project. This means that most components should see some level of development during every sprint. For example, the first sprint could touch on the IAM, file drive, and test suite infrastructure. Rather than developing component by component, each prototype represents a cross-section of the entire project.

Each sprint results in deliverable software that we can actually run. This makes it easier to receive feedback and understand potential challenges. A common saying in the software industry is, "If you want to build a car, you need to start by building a skateboard."
You can learn much more from building a skateboard first than by putting all your effort into a feature-rich engine. This skateboard allows us to demonstrate the product, gather feedback, and evaluate our process. Students and teachers can try out the "skateboard" to help us better understand their needs, pointing out which missing features matter most to them.

At the end of each sprint, we document lessons learned from both a technical perspective (e.g., unexpected new challenges) and a user perspective (e.g., feedback suggesting we need to adjust the project design).
A larger review (acceptance test) would take place at the end of each sprint. The results of this review would determine the items to be tackled in the next sprint.

For the sprints to be effective, we are imagining a demo group that can provide continuous feedback throughout the development process, while ensuring this doesn't cause feature creep. See: https://github.com/OS2sandbox/os2skole-PoC/issues/34 - We're currently imagining some form of weekly feedback during development.

Note: This approach requires a larger secretariat than a predictive ("waterfall") approach.

### Progress so far

During our workshop on Dec 1, 2025, we wrote key user stories for the IAM integration. We focused here because it represents a high risk. However, there are other high-risk areas we should examine, such as the calendar integration (read-only Outlook calendars might cause unexpected issues), and the delivery (CI/CD) setup.

However, trying to map out the entire system ahead of time might not be necessary. In Software Engineering, we categorize User Stories by their granularity, from most high-level to most granular: Theme, Epic, User Story, Task (see this [introductory text](https://www.visual-paradigm.com/scrum/theme-epic-user-story-task/)).

We should (and already have) identify themes ahead of time, and we should be identifying epics for the higher-risk themes. For particularly high-risk epics, we might even want to get to the user story level. This would then determine which epics go into the first "Amsterdam" prototype. Meanwhile, for lower-risk themes, it is acceptable (and preferable) to figure out the details as we prepare for each sprint.

Ideally, this would be done in collaboration with student and teacher representatives, provided we have the resources. Identifying requirements as user stories is meant to be collaborative. By asking "Why do we need this?" and "What exactly do users need?", we can uncover many open problems.

This process is fairly time-consuming, however. For reference, the 7 epics associated with the IAM system took us 2 hours. If we invite domain experts on workshops on high-risk epics, we should schedule at least 4 hours per workshop.

Finally, I want to note a challenge we have not been able to address yet: We must determine what to specify during procurement to ensure our desired form of cooperation. We can find examples in documentation from [other public projects that used iterative development](https://github.com/OS2sandbox/os2skole-PoC/issues/33).

We could take inspiration from the CNCF's [technical oversight committee](https://github.com/cncf/toc).
