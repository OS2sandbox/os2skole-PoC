# Open Source: What’s the Difference?

> The proprietary software we are all used to offers just one way of accessing the software to its users. Everyone uses it the same way, in the same place. This way of interacting with software is popularized as "Software as a Service".
>
> In open source, the source code, the released versions, and the running instances are decoupled. The core version is stable and governed, but anyone can create forks, propose contributions, and run their own instances, each at their own pace and with their own features. This flexibility allows innovation and stability to coexist, without breaking the main product or other users’ running instances of the software.


_What does all this mean? Let's break it down_...

### The Code

The source code is the heart of any open source project. It is openly available for anyone to view, modify, and enhance. This transparency fosters a collaborative environment where developers can learn from each other, identify and fix bugs, and introduce new features. Open source projects often have multiple versions of the source code coexisting.


- #### The Core 
    The **Core** is the official, stable, and most widely used release of the software. The **Core** must have a core team of maintainers attached to that ensures that this core code is reviewed, tested, and governed to ensure quality and reliability

- #### Forks and Contributions
    **Forks** are isolated copies of the source code. Forks allow independent development, experimentation, and customization without affecting the **Core** code.

    **Contributions** happen when work done in a fork is proposed back to the *Core* version. This way of working is built-in to the way open source is made and is done in the form of fully formalized request method (often shortened as PRs or MRs) which is reviewed by the maintainers before being included in the core. Not all forks are merged back; some remain independent, serving different needs or priorities.

### The Release

Releases are stable software versions made available to the public at regular intervals. These versions are tested and reliable for general use. Open source projects set their own release schedules, with mature projects releasing frequently to provide the latest improvements and security updates.

- #### Versioning
    Versioning is a way to label different versions of software to show how stable and reliable they are. This helps users understand whether a version is safe to use or if it might still have issues.

- #### Maturity Levels
    Managing open source software requires a maturity model to handle multiple copies of the source code in different states. The Cloud Native Computing Foundation uses a simple model based on the "Chasm Theorem," with three maturity states: sandbox, incubating, and graduated. 
    - **Sandbox**: Early test and proof-of-concept projects with few developers.
    - **Incubating**: Projects with a few MvP production instances and more participants.
    - **Graduated**: Fully mature projects with robust infrastructure and an organized user community directing future development.


### The Instance

An instance is the live environment where a release is made available for its users. With open source software, you have the freedom to offer an intance of the software to the users in a way that best suits their needs. This means the same software can exist in many places at once. This flexibility allows the individual instances to be tailored towards specific requirements and to be scaled as needed.




Concepts:


MRs / PRs


# v2

# Open Source: What’s the Difference?

> Proprietary software typically offers a single way for users to access it, with everyone using the same edition of the source code in the same way.

> Open source software, due to its transparent nature, allows the separation of three key concepts: the source code, releases, and instances. 

- **Source Code**: The written instructions of the computer programs that make up the software.
- **Releases**: Stable packaged forms of the software made available at regular intervals.
- **Instances**: Live environments where the software is running and accessed by its users.

The project maintainers share the source publically and anyone can create copies and suggest changes for inclusion in a later release of the software. When the source code is packaged and released in a stable form, anyone has the freedom to run their own versions.  This flexibility enables innovation and stability to coexist without disrupting the main product or other users’ versions. However, it requires a deeper understanding of software best practices to fully leverage these unique advantages.

_What does all this mean? Let's break it down..._


### The Source Code

The source code is the heart of any open source project. It is openly available for anyone to view, modify, and enhance. This transparency fosters collaboration, allowing developers to learn from each other, fix bugs, and introduce new features.

- #### The Core 
    The **Core** is the official, stable, and most widely used update of the software. A core team of maintainers ensures this code is reviewed, tested, and governed for quality and reliability.

- #### Copies and Contributions
    **Copies** are independent versions of the source code, allowing for development and customization without affecting the **Core**. 
    **Contributions** are changes proposed from copies back to the Core, reviewed by maintainers before inclusion. Not all copies are merged back; some remain independent to serve different needs.

### The Release

Releases are stable software updates made available at regular intervals. These updates are tested and reliable for general use. Open source projects set their own release schedules, with mature projects releasing frequently to provide the latest improvements and security updates.

- #### Labeling
    Labeling helps users understand the stability of different updates. For example:
    - **1.0.0**: Stable and ready for use.
    - **2.0.0-beta**: Still being tested and might have issues.

- #### Maturity Levels
    Managing open source software requires a maturity model to handle multiple copies of the source code. The Cloud Native Computing Foundation uses a model with three states:
    - **Sandbox**: Early test projects with few developers.
    - **Incubating**: Projects with initial production instances and more participants.
    - **Graduated**: Fully mature projects with robust infrastructure and an organized user community.

### The Instance

An instance is the live environment where a release is made available to users. Open source software allows multiple instances to exist, tailored to specific needs and scalable as required.
