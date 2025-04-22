# Open Source: What are the Differences?

 Proprietary software typically offers a single way for users to access it, with everyone using the same edition of the source code in excactly the same way. 

 Open source software, due to its transparent nature and built in freedoms, allows for the separation of three key concepts normally hidden behind the walls of the supplier: the source code, releases, and running instances. 


- **Source Code**: The written instructions of the computer programs. This is the raw state of the software fit for developers and security specialists, before it is packaged for the end-users.
- **Releases**: Stable packaged forms of the software ready to be shipped and made available for the users. Mature projects release frequently to provide end-users with the latest improvements and security updates.
- **Instances**: Live environments where the software is running and accessed by its users.

_Let's break these down..._



### The Source Code

The source code is the heart of any open source project. It is openly available for anyone to view, copy, modify and an option to suggest these as improvements to the original code. This transparency fosters a collaboration mindset, allowing developers to learn from each other, fix bugs, and suggest new features.

- #### The Core 
    The **Core** is the official, stable, released distribution of the software and the one used by the big majority of the users. A core team of maintainers ensures this code is reviewed, tested, and governed for quality and reliability.

- #### Copies and Contributions
    **Copies** known as "Forks" are independent distributions of the source code, allowing for development and customization without affecting the **Core**. 
    **Contributions** are changes proposed from these forks back to the Core. These proposals are then reviewed by the core maintainers before it is decided whether they are fitting for inclusion. Not all forks are merged back; some remain independent to serve different needs, some are just archived, after the experiment has ended.

### The Releases

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



Concepts:


MRs / PRs