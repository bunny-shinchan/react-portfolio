# 08_data-structure.md

# Portfolio Data Structure

This document defines the  **data structures used across the portfolio application** .

Using structured data helps keep components:

* Clean
* Reusable
* Easy to update
* Scalable

Instead of hardcoding content directly inside components, the portfolio will use  **JavaScript data objects and arrays** .

---

# 1. Data Organization Strategy

All reusable data should be stored in a dedicated folder.

Recommended structure:

<pre class="overflow-visible! px-0!" data-start="610" data-end="697"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>src/</span><br/><span>  data/</span><br/><span>    projects.js</span><br/><span>    skills.js</span><br/><span>    experience.js</span><br/><span>    socialLinks.js</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

This approach keeps:

* UI components focused on rendering
* Data separated from UI logic

Example component usage:

<pre class="overflow-visible! px-0!" data-start="816" data-end="869"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">import</span><span></span><span class="ͼt">projects</span><span></span><span class="ͼn">from</span><span></span><span class="ͼr">"../../data/projects"</span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 2. Projects Data Structure

The **Projects section** will display selected portfolio projects.

Each project will be represented by an object inside an array.

Example file:

<pre class="overflow-visible! px-0!" data-start="1053" data-end="1081"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>src/data/projects.js</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Example structure:

<pre class="overflow-visible! px-0!" data-start="1103" data-end="1750"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">const</span><span></span><span class="ͼt">projects</span><span></span><span class="ͼn">=</span><span> [</span><br/><span>  {</span><br/><span>    id: </span><span class="ͼq">1</span><span>,</span><br/><span>    title: </span><span class="ͼr">"Automation Workflow Tool"</span><span>,</span><br/><span>    description: </span><span class="ͼr">"Automates repetitive browser tasks and extracts structured data."</span><span>,</span><br/><span>    techStack: [</span><span class="ͼr">"Python"</span><span>, </span><span class="ͼr">"JavaScript"</span><span>, </span><span class="ͼr">"Automation"</span><span>],</span><br/><span>    github: </span><span class="ͼr">"https://github.com/username/project"</span><span>,</span><br/><span>    demo: </span><span class="ͼr">""</span><span>,</span><br/><span>    image: </span><span class="ͼr">"/assets/projects/project1.png"</span><br/><span>  },</span><br/><span>  {</span><br/><span>    id: </span><span class="ͼq">2</span><span>,</span><br/><span>    title: </span><span class="ͼr">"AI Case Law Extractor"</span><span>,</span><br/><span>    description: </span><span class="ͼr">"Intelligent agent for extracting ITAT case law information."</span><span>,</span><br/><span>    techStack: [</span><span class="ͼr">"Python"</span><span>, </span><span class="ͼr">"NLP"</span><span>, </span><span class="ͼr">"AI"</span><span>],</span><br/><span>    github: </span><span class="ͼr">"https://github.com/username/project"</span><span>,</span><br/><span>    demo: </span><span class="ͼr">""</span><span>,</span><br/><span>    image: </span><span class="ͼr">"/assets/projects/project2.png"</span><br/><span>  }</span><br/><span>];</span><br/><br/><span class="ͼn">export</span><span></span><span class="ͼn">default</span><span></span><span class="ͼt">projects</span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 3. Skills Data Structure

The **Skills section** uses a list of technologies.

Example file:

<pre class="overflow-visible! px-0!" data-start="1853" data-end="1879"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>src/data/skills.js</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Example structure:

<pre class="overflow-visible! px-0!" data-start="1901" data-end="2241"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">const</span><span></span><span class="ͼt">skills</span><span></span><span class="ͼn">=</span><span> [</span><br/><span>  {</span><br/><span>    name: </span><span class="ͼr">"JavaScript"</span><span>,</span><br/><span>    icon: </span><span class="ͼr">"SiJavascript"</span><span>,</span><br/><span>    color: </span><span class="ͼr">"#F7DF1E"</span><br/><span>  },</span><br/><span>  {</span><br/><span>    name: </span><span class="ͼr">"React"</span><span>,</span><br/><span>    icon: </span><span class="ͼr">"SiReact"</span><span>,</span><br/><span>    color: </span><span class="ͼr">"#61DAFB"</span><br/><span>  },</span><br/><span>  {</span><br/><span>    name: </span><span class="ͼr">"Python"</span><span>,</span><br/><span>    icon: </span><span class="ͼr">"SiPython"</span><span>,</span><br/><span>    color: </span><span class="ͼr">"#3776AB"</span><br/><span>  },</span><br/><span>  {</span><br/><span>    name: </span><span class="ͼr">"Git"</span><span>,</span><br/><span>    icon: </span><span class="ͼr">"SiGit"</span><span>,</span><br/><span>    color: </span><span class="ͼr">"#F05032"</span><br/><span>  }</span><br/><span>];</span><br/><br/><span class="ͼn">export</span><span></span><span class="ͼn">default</span><span></span><span class="ͼt">skills</span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

## Why Include Colors?

The color field allows:

Hover behavior where icons reveal  **their original brand colors** .

Example logic:

* Default → monochrome
* Hover → brand color

---

# 4. Experience Data Structure

The **Experience section** will display professional history.

Example file:

<pre class="overflow-visible! px-0!" data-start="2542" data-end="2572"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>src/data/experience.js</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Example structure:

<pre class="overflow-visible! px-0!" data-start="2594" data-end="3415"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">const</span><span></span><span class="ͼt">experience</span><span></span><span class="ͼn">=</span><span> [</span><br/><span>  {</span><br/><span>    id: </span><span class="ͼq">1</span><span>,</span><br/><span>    role: </span><span class="ͼr">"SDE Intern"</span><span>,</span><br/><span>    company: </span><span class="ͼr">"Astraea"</span><span>,</span><br/><span>    duration: </span><span class="ͼr">"Dec 2025 — Present"</span><span>,</span><br/><span>    location: </span><span class="ͼr">"New Delhi, India"</span><span>,</span><br/><span>    highlights: [</span><br/><span></span><span class="ͼr">"Developed browser automation scripts using Python and JavaScript"</span><span>,</span><br/><span></span><span class="ͼr">"Building an intelligent agent for ITAT case law extraction"</span><span>,</span><br/><span></span><span class="ͼr">"Contributing to backend services and database design"</span><span>,</span><br/><span></span><span class="ͼr">"Using Git/GitHub for collaborative development"</span><br/><span>    ]</span><br/><span>  },</span><br/><span>  {</span><br/><span>    id: </span><span class="ͼq">2</span><span>,</span><br/><span>    role: </span><span class="ͼr">"Desktop Administrator"</span><span>,</span><br/><span>    company: </span><span class="ͼr">"Leon's Furniture"</span><span>,</span><br/><span>    duration: </span><span class="ͼr">"Aug 2022 — Nov 2025"</span><span>,</span><br/><span>    location: </span><span class="ͼr">"Toronto, Canada"</span><span>,</span><br/><span>    highlights: [</span><br/><span></span><span class="ͼr">"Maintained enterprise desktop environments"</span><span>,</span><br/><span></span><span class="ͼr">"Provided technical support across departments"</span><span>,</span><br/><span></span><span class="ͼr">"Managed system updates and troubleshooting"</span><br/><span>    ]</span><br/><span>  }</span><br/><span>];</span><br/><br/><span class="ͼn">export</span><span></span><span class="ͼn">default</span><span></span><span class="ͼt">experience</span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 5. Social Links Data Structure

The **Contact section and Footer** will use social links.

Example file:

<pre class="overflow-visible! px-0!" data-start="3530" data-end="3561"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>src/data/socialLinks.js</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Example structure:

<pre class="overflow-visible! px-0!" data-start="3583" data-end="4021"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">const</span><span></span><span class="ͼt">socialLinks</span><span></span><span class="ͼn">=</span><span> [</span><br/><span>  {</span><br/><span>    name: </span><span class="ͼr">"GitHub"</span><span>,</span><br/><span>    url: </span><span class="ͼr">"https://github.com/username"</span><span>,</span><br/><span>    icon: </span><span class="ͼr">"FaGithub"</span><br/><span>  },</span><br/><span>  {</span><br/><span>    name: </span><span class="ͼr">"LinkedIn"</span><span>,</span><br/><span>    url: </span><span class="ͼr">"https://linkedin.com/in/username"</span><span>,</span><br/><span>    icon: </span><span class="ͼr">"FaLinkedin"</span><br/><span>  },</span><br/><span>  {</span><br/><span>    name: </span><span class="ͼr">"Email"</span><span>,</span><br/><span>    url: </span><span class="ͼr">"mailto:email@example.com"</span><span>,</span><br/><span>    icon: </span><span class="ͼr">"FaEnvelope"</span><br/><span>  },</span><br/><span>  {</span><br/><span>    name: </span><span class="ͼr">"Instagram"</span><span>,</span><br/><span>    url: </span><span class="ͼr">"https://instagram.com/username"</span><span>,</span><br/><span>    icon: </span><span class="ͼr">"FaInstagram"</span><br/><span>  }</span><br/><span>];</span><br/><br/><span class="ͼn">export</span><span></span><span class="ͼn">default</span><span></span><span class="ͼt">socialLinks</span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Icons can be imported from:

<pre class="overflow-visible! px-0!" data-start="4052" data-end="4071"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>react-icons</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Example:

<pre class="overflow-visible! px-0!" data-start="4083" data-end="4147"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">import</span><span> { </span><span class="ͼt">FaGithub</span><span>, </span><span class="ͼt">FaLinkedin</span><span> } </span><span class="ͼn">from</span><span></span><span class="ͼr">"react-icons/fa"</span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 6. Navigation Data Structure

Navbar links can also be stored as data.

Example file:

<pre class="overflow-visible! px-0!" data-start="4243" data-end="4273"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>src/data/navigation.js</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Example structure:

<pre class="overflow-visible! px-0!" data-start="4295" data-end="4609"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">const</span><span></span><span class="ͼt">navigation</span><span></span><span class="ͼn">=</span><span> [</span><br/><span>  { label: </span><span class="ͼr">"Home"</span><span>, target: </span><span class="ͼr">"hero"</span><span> },</span><br/><span>  { label: </span><span class="ͼr">"About"</span><span>, target: </span><span class="ͼr">"about"</span><span> },</span><br/><span>  { label: </span><span class="ͼr">"Skills"</span><span>, target: </span><span class="ͼr">"skills"</span><span> },</span><br/><span>  { label: </span><span class="ͼr">"Projects"</span><span>, target: </span><span class="ͼr">"projects"</span><span> },</span><br/><span>  { label: </span><span class="ͼr">"Experience"</span><span>, target: </span><span class="ͼr">"experience"</span><span> },</span><br/><span>  { label: </span><span class="ͼr">"Contact"</span><span>, target: </span><span class="ͼr">"contact"</span><span> }</span><br/><span>];</span><br/><br/><span class="ͼn">export</span><span></span><span class="ͼn">default</span><span></span><span class="ͼt">navigation</span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

This allows the Navbar component to render links dynamically.

---

# 7. Benefits of Structured Data

Using structured data provides many advantages.

### Cleaner Components

Components only focus on rendering UI.

### Easy Updates

Content can be modified in one place.

Example:

Add a new project by updating `projects.js`.

### Reusability

Data can be reused across multiple components.

Example:

Social links used in:

* Contact section
* Footer

### Scalability

Future features become easier to implement.

Example:

* Project filtering
* Skills categories
* Experience sorting

---

# 8. Example Usage in a Component

Example: using project data inside a component.

<pre class="overflow-visible! px-0!" data-start="5288" data-end="5574"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">import</span><span></span><span class="ͼt">projects</span><span></span><span class="ͼn">from</span><span></span><span class="ͼr">"../../data/projects"</span><span>;</span><br/><br/><span class="ͼn">function</span><span></span><span class="ͼt">Projects</span><span>() {</span><br/><span></span><span class="ͼn">return</span><span> (</span><br/><span></span><span class="ͼv"><section></span><br/><span>      {</span><span class="ͼt">projects</span><span class="ͼn">.</span><span>map(</span><span class="ͼt">project</span><span> => (</span><br/><span></span><span class="ͼv"><div</span><span></span><span class="ͼu">key</span><span class="ͼn">=</span><span>{</span><span class="ͼt">project</span><span class="ͼn">.</span><span>id}</span><span class="ͼv">></span><br/><span></span><span class="ͼv"><h3></span><span>{</span><span class="ͼt">project</span><span class="ͼn">.</span><span>title}</span><span class="ͼv"></h3></span><br/><span></span><span class="ͼv"><p></span><span>{</span><span class="ͼt">project</span><span class="ͼn">.</span><span>description}</span><span class="ͼv"></p></span><br/><span></span><span class="ͼv"></div></span><br/><span>      ))}</span><br/><span></span><span class="ͼv"></section></span><br/><span>  );</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

This pattern keeps components simple and readable.

---

# Summary

The portfolio uses structured data files to manage content.

Main data files include:

<pre class="overflow-visible! px-0!" data-start="5731" data-end="5803"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>projects.js</span><br/><span>skills.js</span><br/><span>experience.js</span><br/><span>socialLinks.js</span><br/><span>navigation.js</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Benefits include:

* cleaner components
* centralized content
* easier updates
* better scalability

Using this approach ensures the portfolio remains **organized and maintainable** as it grows.

---
