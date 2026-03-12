# 02 — Project Structure

This document explains the **directory structure of the React portfolio project** and the recommended steps to proceed with development.

---

# Portfolio Project Structure

The project follows a  **component-based folder structure** , where each component has its own folder containing its JSX file and CSS file.

This keeps the project  **organized, scalable, and easy to maintain** .

Portfolio
│
src
│
├── components
│   ├── Navbar
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   │
│   ├── Hero
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   │
│   ├── About
│   │   ├── About.jsx
│   │   └── About.css
│   │
│   ├── Skills
│   │   ├── Skills.jsx
│   │   └── Skills.css
│   │
│   ├── Projects
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   └── Projects.css
│   │
│   ├── Contact
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   │
│   └── Footer
│       ├── Footer.jsx
│       └── Footer.css
│
├── data
│   └── portfolioData.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx

index.html
vite.config.js
eslint.config.js
package.json
README.md

# Explanation of Key Directories

## components

This directory contains all UI components used in the portfolio.

Each component is placed inside its own folder along with its CSS file.

Example:

Navbar/
   Navbar.jsx
   Navbar.css


This approach improves readability and keeps related files together.

---

## Projects Component

The `Projects` folder contains an additional reusable component:

ProjectCard.jsx

This component renders individual project cards inside the `Projects` section.

Example usage

<ProjectCard />
<ProjectCard />
<ProjectCard />



This helps keep the `Projects.jsx` component clean and reusable.

---

## data

This folder stores reusable project data.

Example file:

<pre class="overflow-visible! px-0!" data-start="1966" data-end="1990"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>portfolioData.js</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Example structure:

<pre class="overflow-visible! px-0!" data-start="2012" data-end="2207"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">export</span><span></span><span class="ͼn">const</span><span></span><span class="ͼt">projects</span><span></span><span class="ͼn">=</span><span> [</span><br/><span>  {</span><br/><span>    title: </span><span class="ͼr">"Project Name"</span><span>,</span><br/><span>    description: </span><span class="ͼr">"Short project description"</span><span>,</span><br/><span>    tech: [</span><span class="ͼr">"React"</span><span>, </span><span class="ͼr">"JavaScript"</span><span>, </span><span class="ͼr">"CSS"</span><span>],</span><br/><span>    github: </span><span class="ͼr">"GitHub link"</span><br/><span>  }</span><br/><span>];</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Using a data file keeps UI components cleaner and easier to maintain.

---

# App Layout

The `App.jsx` file imports all the main sections and renders them in order.

Example structure:

<pre class="overflow-visible! px-0!" data-start="2396" data-end="2940"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">import</span><span></span><span class="ͼt">Navbar</span><span></span><span class="ͼn">from</span><span></span><span class="ͼr">"./components/Navbar/Navbar"</span><span>;</span><br/><span class="ͼn">import</span><span></span><span class="ͼt">Hero</span><span></span><span class="ͼt">fr</span><span class="ͼn">om</span><span></span><span class="ͼr">"./components/Hero/Hero"</span><span>;</span><br/><span class="ͼn">import</span><span></span><span class="ͼt">About</span><span></span><span class="ͼn">from</span><span></span><span class="ͼr">"./components/About/About"</span><span>;</span><br/><span class="ͼn">import</span><span></span><span class="ͼt">Skills</span><span></span><span class="ͼn">from</span><span></span><span class="ͼr">"./components/Skills/Skills"</span><span>;</span><br/><span class="ͼn">import</span><span></span><span class="ͼt">Projects</span><span></span><span class="ͼn">from</span><span></span><span class="ͼr">"./components/Projects/Projects"</span><span>;</span><br/><span class="ͼt">imp</span><span class="ͼn">ort</span><span></span><span class="ͼt">Contact</span><span></span><span class="ͼn">from</span><span></span><span class="ͼr">"./components/Contact/Contact"</span><span>;</span><br/><span class="ͼn">import</span><span></span><span class="ͼt">Footer</span><span></span><span class="ͼn">from</span><span></span><span class="ͼr">"./components/Footer/Footer"</span><span>;</span><br/><br/><span class="ͼn">function</span><span></span><span class="ͼt">App</span><span>() {</span><br/><span></span><span class="ͼt">retur</span><span class="ͼn">n</span><span> (</span><br/><span></span><span class="ͼv"><></span><br/><span></span><span class="ͼv"><Navbar</span><span></span><span class="ͼv">/></span><br/><span></span><span class="ͼv"><Hero</span><span> /</span><span class="ͼv">></span><br/><span></span><span class="ͼv"><About</span><span></span><span class="ͼv">/></span><br/><span></span><span class="ͼv"><Skills</span><span></span><span class="ͼv">/></span><br/><span></span><span class="ͼv"><Projects</span><span></span><span class="ͼv">/></span><br/><span></span><span class="ͼv"><Contact</span><span></span><span class="ͼv">/></span><br/><span></span><span class="ͼv"><Footer</span><span></span><span class="ͼv">/></span><br/><span></span><span class="ͼv"></></span><br/><span>  );</span><br/><span>}</span><br/><br/><span class="ͼn">export</span><span></span><span class="ͼn">default</span><span></span><span class="ͼt">App</span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# Global Styles

Two CSS files are used for styling.

## index.css

Contains global styles such as:

* font family
* body styling
* CSS reset
* base typography

## App.css

Contains layout styling such as:

* section spacing
* container width
* layout structure

---

# Recommended Steps to Proceed

Follow the steps below to continue building the portfolio project.

---

# Step 1 — Create the Folder Structure

Inside the `src` directory create:

<pre class="overflow-visible! px-0!" data-start="3396" data-end="3419"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>components</span><br/><span>data</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Inside the `components` folder create:

<pre class="overflow-visible! px-0!" data-start="3461" data-end="3517"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>Navbar</span><br/><span>Hero</span><br/><span>About</span><br/><span>Skills</span><br/><span>Projects</span><br/><span>Contact</span><br/><span>Footer</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# Step 2 — Create Component Files

Inside each component folder create two files:

<pre class="overflow-visible! px-0!" data-start="3607" data-end="3650"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>ComponentName.jsx</span><br/><span>ComponentName.css</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Example:

<pre class="overflow-visible! px-0!" data-start="3662" data-end="3699"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>Hero/</span><br/><span>   Hero.jsx</span><br/><span>   Hero.css</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# Step 3 — Create Placeholder Components

Add simple placeholder components first to confirm everything works.

Example:

<pre class="overflow-visible! px-0!" data-start="3828" data-end="3963"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">function</span><span></span><span class="ͼt">Hero</span><span>() {</span><br/><span></span><span class="ͼn">return</span><span> (</span><br/><span></span><span class="ͼv"><section</span><span></span><span class="ͼu">id</span><span class="ͼn">=</span><span class="ͼr">"hero"</span><span class="ͼv">></span><br/><span></span><span class="ͼv"><h1></span><span>Hero Section</span><span class="ͼv"></h1></span><br/><span></span><span class="ͼv"></section></span><br/><span>  );</span><br/><span>}</span><br/><br/><span class="ͼn">export</span><span></span><span class="ͼn">default</span><span></span><span class="ͼt">Hero</span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

This confirms that the project structure works correctly.

---

# Step 4 — Connect Components in App.jsx

Import all components into `App.jsx` and render them in order.

<pre class="overflow-visible! px-0!" data-start="4135" data-end="4191"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>Navbar</span><br/><span>Hero</span><br/><span>About</span><br/><span>Skills</span><br/><span>Projects</span><br/><span>Contact</span><br/><span>Footer</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

This will form the  **basic skeleton of the portfolio website** .

---

# Step 5 — Run the Development Server

Start the development server.

<pre class="overflow-visible! px-0!" data-start="4333" data-end="4352"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>npm run dev</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Open the local server in your browser and confirm that all sections render correctly.

---

# Step 6 — Add Section IDs

Add IDs to sections so that the Navbar can scroll to them.

Example IDs:

<pre class="overflow-visible! px-0!" data-start="4548" data-end="4595"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>#hero</span><br/><span>#about</span><br/><span>#skills</span><br/><span>#projects</span><br/><span>#contact</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Example section:

<pre class="overflow-visible! px-0!" data-start="4615" data-end="4646"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼv"><section</span><span></span><span class="ͼu">id</span><span class="ͼn">=</span><span class="ͼr">"about"</span><span class="ͼv">></span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

This allows anchor navigation from the navbar.

---

# Step 7 — Add Portfolio Content

Start filling sections with actual content.

## Hero Section

Include:

* Name
* Role or title
* Short tagline
* GitHub link
* LinkedIn link
* Resume button

---

## Skills Section

Include:

* Programming languages
* Frameworks
* Tools
* Databases

Example:

<pre class="overflow-visible! px-0!" data-start="4995" data-end="5029"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>Python</span><br/><span>SQL</span><br/><span>React</span><br/><span>Git</span><br/><span>MySQL</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

## Projects Section

Display project cards with:

* project title
* short description
* technologies used
* GitHub link
* demo link (optional)

---

# Step 8 — Style the Components

Gradually add styling to each component.

Focus on:

* layout
* spacing
* readability
* responsiveness

Each component should use its own CSS file.

---

# Final Goal

The final result will be a **single-page developer portfolio** with the following structure:

<pre class="overflow-visible! px-0!" data-start="5480" data-end="5536"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>Navbar</span><br/><span>Hero</span><br/><span>About</span><br/><span>Skills</span><br/><span>Projects</span><br/><span>Contact</span><br/><span>Footer</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

This structure is clean, scalable, and widely used for modern developer portfolios.

---
