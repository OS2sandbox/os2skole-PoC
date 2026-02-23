# Iterative Development Strategy

**Executive Summary:** We propose a risk-driven, iterative development strategy designed to validate success early and minimize failure points. Instead of developing component-by-component, the project will proceed in four "sprints," each resulting in a runnable, cross-sectional functional prototype. This approach ensures that high-risk requirements—such as IAM integration and deployment infrastructure—are addressed immediately.

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

In our meeting today, we were unable to write user stories for the entire project; we only had time to focus on the IAM integration, as it is the highest risk area.
You can see our user stories attached as sub-issues to this issue.

Ideally, we would take the time to write user stories for the entire project. For example, calendar integration requires early feedback because it is high-risk; read-only Outlook calendars might cause unexpected issues. We should also identify which parts of the test suite integration are riskiest. Ideally, we would identify high-risk requirements across the entire project. This would then determine which features go into the first "Amsterdam" prototype.

Better yet, if we have the resources, we would do this in collaboration with student and teacher representatives. Identifying requirements as user stories is collaborative. By asking "Why do we need this?" and "What exactly do users need?", we uncover many open problems.
This process is fairly time-consuming, however. For reference, just the 7 items linked in this issue took us 2 hours. If we map the entire OS2Skole program like we did for IAM, I expect it to take at least 10 hours.

We need to determine what to specify during procurement to ensure the kind of cooperation we desire. We can find examples in documentation from other public projects that used iterative development. See: https://github.com/OS2sandbox/os2skole-PoC/issues/33

We might take inspiration from the technical oversight committee used by the CNCF (https://github.com/cncf/toc).
