# How do we ensure our system can handle high load situations, like exams? (Elasticity)

## Collabora investigation

### Network requests

- Multiple requests are sent from collabora to nextcloud when a file is opened
- One of the requests is a request to switch to Websocket -> during the entirety of the document editing session, a websocket between nextcloud and collabora is open. however, when the user idles fo ra longe rimte, the connection is closed. it is then take nup again, when the user goes back to interacting.
* While using nextcloud (whether collabora is open or not) The webbrowser sents requests every second or so to a nextcloud "/sync" endpoint

###  CPU and RAM use
CPU use of nextcloud and collabora, while collabora docs are open:

![](./_resources/cpu_prometheus_collabora_edited.png)

Nextcloud use spikes at the start, but that might just be a fluke.
Otherwise, while collabora, nextcloud CPU use is consistent, but a little higher than during idle.

Collabora's CPU use is variable, and highly dependent on the amount of data (or maybe units of data) that is being sent to collabora.
CPU use is higher when I hold down a key for a longer time, as compared to human-like typing behavior. If I idle on the screen, the resource use goes down drastically.

RAM use:

![](./_resources/ram_prometheus_collabora_edited.png)

RAM use for both collabora and nextcloud increases during document editing, but it says consistent while the application is open. Collabora RAM use goes up by about 50MB while I am editing the document, whereas nextcloud RAM use goes up by about 10MB.

### Chaos testing

If collabora goes down while one is working, it freezes, showing "reconnecting" until a connection has been established again.

If nextcloud goes down whoole one is working, nothing happens, and the user can continue working. If nextcloud is up when the user closes the file, the file is stored as expected.

However, if nextcloud is down through the entire process, any student work since the loss of nextcloud connection is loss, without warning ot the student.


## Challenges

- Known unknown: Which situations occur, that will cause the load in a system to ber diffverent than otherwise?
  * scenario 1: exams, but maybe that's actually easy because everyone's working solitarily
  * scenario 2: spikes at the start and end of classes -> I have looked this up, and it appears that schools and lessons start staggered in municipalities. combined with teachers not starting the software at the same time when lessons start, this should even out the use spikes
  * scenario 3: maybe specific seasons where there's more group work than usual
  * scenario 4: a situation where an applicaiton that is otherwise just rarely used, suddenly becomes much used -> if it runs in isolated environment, it doesn't help that all the other servers are idle.
  * scenario 5: it's the evening before the new school year starts. all teachers are trying to upload documents
  * scenario 6: an "emneuge" takes place, and students are using collaborative features much more than usual (-> but, do they really? there's already a lot of group lessons, and lessons can be around a theme without being in a group setting)

First, let's look at our four scenarios. **I need data to predict exam loads**, starting with the number of students. **I must check if primary schools administer exams simultaneously** to identify patterns. 

[This exam plan shows a special exam season from dec 1 to dec 9](https://uvm.dk/grundskole/folkeskolen/folkeskolens-proever/aarsplan-og-proeveplaner/proeveplan-vinter-2025-2026) 

More information about the students' requirements:
<https://uvm.dk/grundskole/folkeskolen/folkeskolens-proever/proevetilrettelaeggelse/adgang-tilmelding-og-booking/semesterproever/>

I am unsure whether those exams would use our system, but I can do some estimates for what happens if they do.

The goal is simply to estimate where these patterns lie. **I can ask my brother if there are specific times of day or month with higher exam activity.**

Next, regarding the start and end of classes, **we can run a simple simulation.** **I need to determine if schools in Denmark start at different times within municipalities**. If start times are staggered, this won't be a major issue. However, simultaneous starts would create a traffic spike.

> Here it says the schools and municipalities are free to choose as long as its between 8 and 16: <https://uvm.dk/grundskole/folkeskolen/lovgivning-og-politiske-aftaler/politiske-aftaler/folkeskolens-kvalitetsprogram/frisaettelse-af-folkeskolen/eksisterende-frihedsgrader/spoergsmaal-og-svar-om-frihedsgrader-og-fleksibilitet-i-folkeskolen/#accordion-er-der-krav-om-at-skolerne-skal-anvende-laringsplatforme>
> timetables I could find also indicate that the actual start of lessons in schools is quite staggered

Then, specific seasons. Regarding group work, I am less concerned about exams than initially thought. Exams usually use isolated programs with client-side computation. Group work, however, involves frequent data exchange. High volumes of group tasks could pose a challenge. These varying scenarios highlight the need for a flexible system to handle real-world workloads, particularly during early development. **I can ask my brother if group work increases later in the year.**

Next, rarely used applications. Consider a video app that usually accounts for only 1% of the load. If usage suddenly rises to 3%, that represents a 300% increase. We cannot expect suppliers to prepare for such sudden surges.

Finally, we should consider shared infrastructure. Distributing workloads is much easier if we use shared servers across applications.

## Load testing

This section focuses on visibility. Achieving perfect elasticity on day one is unrealistic. Instead, we must actively monitor actual student behavior. Even after consulting teachers, there is a limit to what we can predict. For example, unpredictable interactions may occur between student behavior and our system setup.

We need full visibility into system metrics and stability. This includes uptime, response time, and other relevant metrics.

We must understand real-world usage. We can also create load tests to see how the application behaves under hypothetical scenarios. This is crucial to ensure infrastructure updates do not cause regressions that might only surface during exams.

Therefore, load testing will be part of our test suite, and applications must be developed to support it. We may need to develop new load tests from scratch. Additionally, deployment must be flexible. We need automated deployments to make load testing feasible. Without automation, the process would be too manual.

**I will examine the load tests in the Nextcloud suite, categorize them, and determine which tests we need for our entire system.** **I can also look for best practices on writing load tests.**

## Considerations

### Envisioned requirements

We do not yet fully know what end-user experience students and teachers expect.

Emphasizing user interaction in our development process is crucial. We do not need to design for perfect availability and reliability if users do not expect it. If a students network adds seconds of load time, there is no value in optimizing for microseconds. Furthermore, if users view certain features as nice-to-haves rather than necessities, we could disable them during peak loads.

Regarding response times, we must distinguish between remote processes and UI interactions. Users should not wait a second to bold text, but they are likely more forgiving if text written on one computer takes a moment to appear on another.

In high-load scenarios, I suspect users will tolerate significant delays as long as communication is clear and they are assured of a successful outcome.

Ultimately, it is crucial to listen to user feedback regarding system behavior under stress.

### Fixed hardware infrastructure

Next, I will explain how our microservice architecture tackles the elasticity problem. Unlike a modular monolith, microservices are connected through an isolation layer, a concept central to domain-driven design. This ensures that if one component fails, others remain unaffected. For instance, if the office suite crashes, the file drive continues to function, though it may not open certain file types.

Another advantage is individual scalability. If load targets a specific component, such as the database, we can scale that resource independently without duplicating front-end or business logic components. This optimizes resource allocation.

Load shedding is another method for managing high load. Consider the end of an exam when all students save their files simultaneously. Without load shedding, this creates a surge of requests that causes a bottleneck. Users reacting by refreshing the page or clicking again worsens the congestion, potentially crashing the system.

If an immediate save response is not strictly necessary, we can combine load shedding with back-off periods to manage requests. When a student clicks save during peak load, the request may be rejected initially but retried automatically. This converts a chaotic traffic jam into an orderly queue, causing a delay rather than a crash. With proper communication, this delay should be acceptable during an exam.

Finally, we must address single points of failure. While distributing services helps balance load, we must ensure no single component failure halts the system, which is critical for routers and shared services. Overloading a single router or identity and access management (IAM) system could stop all operations. Therefore, we need redundancy and abstraction. Instead of relying on static IPs for load balancing, we should use virtual IPs. Furthermore, services should not depend on real-time IAM lookups; for example, the file drive should cache user role assignments rather than requesting them for every operation.

### Temporary expansion of hardware infrastructure

The other question is: how can we move services easily between data centers? Here, the key design pattern involves decoupling our software modules from the hardware. We plan to use portable application artifacts. This means the application expects specific API endpoints. Any system serving these endpoints can deploy our application. Applications do not call operating system resources directly; instead, an abstraction layer sits between the OS and the application calls. This allows us to run the same workload under different hardware and network conditions.

A risk we face when spreading workloads across multiple data centers is data consistency. A user added to a group in a database at Data Center A will not be visible to users at Data Center B until the data synchronizes. This means our information is eventually consistent. We cannot guarantee that different copies of our data across our infrastructure are identical at any given moment. However, they are guaranteed to match eventually.
