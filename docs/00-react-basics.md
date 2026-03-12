# React Basics Guide

This document contains the core fundamentals required to start working with **React**.
It assumes basic knowledge of **HTML, CSS, and JavaScript**.

---

# 1. What is React

React is a **JavaScript library used to build user interfaces**.

It is mainly used for building **Single Page Applications (SPA)** where content updates without reloading the page.

Key characteristics:

- Component-based architecture
- Declarative UI
- Virtual DOM for performance
- Reusable UI components

Example:

```javascript
function App() {
  return <h1>Hello World</h1>;
}
```


# 2. JSX (JavaScript XML)

JSX allows writing** ** **HTML inside JavaScript** .

Example:

<pre class="overflow-visible! px-0!" data-start="806" data-end="861"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">const</span><span></span><span class="ͼt">element</span><span></span><span class="ͼn">=</span><span></span><span class="ͼv"><h1></span><span>Hello React</span><span class="ͼv"></h1></span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

JSX is converted internally into:

<pre class="overflow-visible! px-0!" data-start="898" data-end="963"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼt">React</span><span class="ͼn">.</span><span>createElement(</span><span class="ͼr">"h1"</span><span>, </span><span class="ͼq">null</span><span>, </span><span class="ͼr">"Hello React"</span><span>);</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Important JSX rules:

* Only** ****one parent element** must be returned
* Use** ****className instead of class**
* Use** ****curly braces {} to embed JavaScript**

Example:

<pre class="overflow-visible! px-0!" data-start="1128" data-end="1188"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">const</span><span></span><span class="ͼt">name</span><span></span><span class="ͼn">=</span><span></span><span class="ͼr">"Sid"</span><span>;</span><br/><br/><span class="ͼv"><h1></span><span>Hello {</span><span class="ͼt">name</span><span>}</span><span class="ͼv"></h1></span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 3. Components

React applications are built using** ** **components** .

A component is a reusable piece of UI.

## Functional Component

<pre class="overflow-visible! px-0!" data-start="1329" data-end="1398"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">function</span><span></span><span class="ͼt">Header</span><span>() {</span><br/><span></span><span class="ͼn">return</span><span></span><span class="ͼv"><h1></span><span>My Website</span><span class="ͼv"></h1></span><span>;</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

## Using a Component

<pre class="overflow-visible! px-0!" data-start="1422" data-end="1512"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">function</span><span></span><span class="ͼt">App</span><span>() {</span><br/><span></span><span class="ͼn">return</span><span> (</span><br/><span></span><span class="ͼv"><div></span><br/><span></span><span class="ͼv"><Header</span><span></span><span class="ͼv">/></span><br/><span></span><span class="ͼv"></div></span><br/><span>  );</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 4. Props (Properties)

Props allow passing** ** **data from one component to another** .

Example:

<pre class="overflow-visible! px-0!" data-start="1615" data-end="1699"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">function</span><span></span><span class="ͼt">Greeting</span><span>(</span><span class="ͼt">props</span><span>) {</span><br/><span></span><span class="ͼn">return</span><span></span><span class="ͼv"><h1></span><span>Hello {</span><span class="ͼt">props</span><span class="ͼn">.</span><span>name}</span><span class="ͼv"></h1></span><span>;</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Usage:

<pre class="overflow-visible! px-0!" data-start="1709" data-end="1750"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼv"><Greeting</span><span></span><span class="ͼu">name</span><span class="ͼn">=</span><span class="ͼr">"Sid"</span><span></span><span class="ͼv">/></span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Props are** ** **read-only** .

---

# 5. State

State stores** ** **dynamic values inside components** .

React provides the** **`useState` hook to manage state.

Example:

<pre class="overflow-visible! px-0!" data-start="1910" data-end="2121"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">import</span><span> { </span><span class="ͼt">useState</span><span> } </span><span class="ͼn">from</span><span></span><span class="ͼr">"react"</span><span>;</span><br/><br/><span class="ͼn">function</span><span></span><span class="ͼt">Counter</span><span>() {</span><br/><br/><span></span><span class="ͼn">const</span><span> [</span><span class="ͼt">count</span><span>, </span><span class="ͼt">setCount</span><span>] </span><span class="ͼn">=</span><span></span><span class="ͼt">useState</span><span>(</span><span class="ͼq">0</span><span>);</span><br/><br/><span></span><span class="ͼn">return</span><span> (</span><br/><span></span><span class="ͼv"><button</span><span></span><span class="ͼu">onClick</span><span class="ͼn">=</span><span>{() => </span><span class="ͼt">setCount</span><span>(</span><span class="ͼt">count</span><span></span><span class="ͼn">+</span><span></span><span class="ͼq">1</span><span>)}</span><span class="ͼv">></span><br/><span>      {</span><span class="ͼt">count</span><span>}</span><br/><span></span><span class="ͼv"></button></span><br/><span>  );</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Key idea:

<pre class="overflow-visible! px-0!" data-start="2134" data-end="2193"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>When state changes → React re-renders the component</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 6. Event Handling

React events are similar to JavaScript DOM events.

Example:

<pre class="overflow-visible! px-0!" data-start="2283" data-end="2464"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">function</span><span></span><span class="ͼt">Button</span><span>() {</span><br/><br/><span></span><span class="ͼn">function</span><span></span><span class="ͼt">handleClick</span><span>() {</span><br/><span></span><span class="ͼt">alert</span><span>(</span><span class="ͼr">"Button clicked"</span><span>);</span><br/><span>  }</span><br/><br/><span></span><span class="ͼn">return</span><span> (</span><br/><span></span><span class="ͼv"><button</span><span></span><span class="ͼu">onClick</span><span class="ͼn">=</span><span>{</span><span class="ͼt">handleClick</span><span>}</span><span class="ͼv">></span><br/><span>      Click Me</span><br/><span></span><span class="ͼv"></button></span><br/><span>  );</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Common events:

* onClick
* onChange
* onSubmit
* onMouseOver

---

# 7. Conditional Rendering

Rendering components based on conditions.

Example:

<pre class="overflow-visible! px-0!" data-start="2615" data-end="2765"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">function</span><span></span><span class="ͼt">LoginStatus</span><span>({ isLoggedIn }) {</span><br/><br/><span></span><span class="ͼn">if</span><span> (</span><span class="ͼt">isLoggedIn</span><span>) {</span><br/><span></span><span class="ͼn">return</span><span></span><span class="ͼv"><h1></span><span>Welcome Back</span><span class="ͼv"></h1></span><span>;</span><br/><span>  }</span><br/><br/><span></span><span class="ͼn">return</span><span></span><span class="ͼv"><h1></span><span>Please Login</span><span class="ͼv"></h1></span><span>;</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Alternative using ternary operator:

<pre class="overflow-visible! px-0!" data-start="2804" data-end="2862"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>{</span><span class="ͼt">isLoggedIn</span><span></span><span class="ͼn">?</span><span></span><span class="ͼv"><Dashboard</span><span></span><span class="ͼv">/></span><span></span><span class="ͼn">:</span><span></span><span class="ͼv"><Login</span><span></span><span class="ͼv">/></span><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 8. Rendering Lists

Lists are rendered using** **`map()`.

Example:

<pre class="overflow-visible! px-0!" data-start="2936" data-end="3144"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">const</span><span></span><span class="ͼt">fruits</span><span></span><span class="ͼn">=</span><span> [</span><span class="ͼr">"Apple"</span><span>, </span><span class="ͼr">"Banana"</span><span>, </span><span class="ͼr">"Mango"</span><span>];</span><br/><br/><span class="ͼn">function</span><span></span><span class="ͼt">FruitList</span><span>() {</span><br/><span></span><span class="ͼn">return</span><span> (</span><br/><span></span><span class="ͼv"><ul></span><br/><span>      {</span><span class="ͼt">fruits</span><span class="ͼn">.</span><span>map((</span><span class="ͼt">fruit</span><span>, </span><span class="ͼt">index</span><span>) => (</span><br/><span></span><span class="ͼv"><li</span><span></span><span class="ͼu">key</span><span class="ͼn">=</span><span>{</span><span class="ͼt">index</span><span>}</span><span class="ͼv">></span><span>{</span><span class="ͼt">fruit</span><span>}</span><span class="ͼv"></li></span><br/><span>      ))}</span><br/><span></span><span class="ͼv"></ul></span><br/><span>  );</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Important rule:

Each list element must have a** ** **unique key** .

---

# 9. React Hooks

Hooks allow functional components to use React features like state and lifecycle.

---

## useState

Used for managing state.

<pre class="overflow-visible! px-0!" data-start="3360" data-end="3427"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">const</span><span> [</span><span class="ͼt">value</span><span>, </span><span class="ͼt">setValue</span><span>] </span><span class="ͼn">=</span><span></span><span class="ͼt">useState</span><span>(</span><span class="ͼt">initialValue</span><span>);</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Example:

<pre class="overflow-visible! px-0!" data-start="3439" data-end="3495"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">const</span><span> [</span><span class="ͼt">count</span><span>, </span><span class="ͼt">setCount</span><span>] </span><span class="ͼn">=</span><span></span><span class="ͼt">useState</span><span>(</span><span class="ͼq">0</span><span>);</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

## useEffect

Handles side effects such as:

* API calls
* timers
* subscriptions

Example:

<pre class="overflow-visible! px-0!" data-start="3595" data-end="3674"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼt">useEffect</span><span>(() => {</span><br/><span></span><span class="ͼt">console</span><span class="ͼn">.</span><span>log(</span><span class="ͼr">"Component Mounted"</span><span>);</span><br/><span>}, []);</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Dependency array behavior:

<pre class="overflow-visible! px-0!" data-start="3704" data-end="3758"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>[] → run once</span><br/><span>[value] → run when value changes</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

## useRef

Used to access DOM elements directly.

Example:

<pre class="overflow-visible! px-0!" data-start="3825" data-end="3899"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">const</span><span></span><span class="ͼt">inputRef</span><span></span><span class="ͼn">=</span><span></span><span class="ͼt">useRef</span><span>(</span><span class="ͼq">null</span><span>);</span><br/><br/><span class="ͼv"><input</span><span></span><span class="ͼu">ref</span><span class="ͼn">=</span><span>{</span><span class="ͼt">inputRef</span><span>} </span><span class="ͼv">/></span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

## useContext

Used for sharing data globally without prop drilling.

Example:

<pre class="overflow-visible! px-0!" data-start="3986" data-end="4047"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">const</span><span></span><span class="ͼt">ThemeContext</span><span></span><span class="ͼn">=</span><span></span><span class="ͼt">React</span><span class="ͼn">.</span><span>createContext();</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 10. Forms in React

Handling user input.

Example:

<pre class="overflow-visible! px-0!" data-start="4108" data-end="4288"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">function</span><span></span><span class="ͼt">Form</span><span>() {</span><br/><br/><span></span><span class="ͼn">const</span><span> [</span><span class="ͼt">name</span><span>, </span><span class="ͼt">setName</span><span>] </span><span class="ͼn">=</span><span></span><span class="ͼt">useState</span><span>(</span><span class="ͼr">""</span><span>);</span><br/><br/><span></span><span class="ͼn">return</span><span> (</span><br/><span></span><span class="ͼv"><input</span><br/><span></span><span class="ͼu">value</span><span class="ͼn">=</span><span>{</span><span class="ͼt">name</span><span>}</span><br/><span></span><span class="ͼu">onChange</span><span class="ͼn">=</span><span>{(</span><span class="ͼt">e</span><span>) => </span><span class="ͼt">setName</span><span>(</span><span class="ͼt">e</span><span class="ͼn">.</span><span>target</span><span class="ͼn">.</span><span>value)}</span><br/><span></span><span class="ͼv">/></span><br/><span>  );</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

This pattern is called a **controlled component** .

---

# 11. Styling in React

There are multiple ways to style React components.

## CSS File

<pre class="overflow-visible! px-0!" data-start="4436" data-end="4473"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">import</span><span></span><span class="ͼr">"./App.css"</span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

## Inline Styling

<pre class="overflow-visible! px-0!" data-start="4494" data-end="4541"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼv"><h1</span><span></span><span class="ͼu">style</span><span class="ͼn">=</span><span>{{ color: </span><span class="ͼr">"red"</span><span> }}</span><span class="ͼv">></span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

## CSS Modules

<pre class="overflow-visible! px-0!" data-start="4559" data-end="4584"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>Button.module.css</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 12. React Router

Used for navigation between pages.

Library:

<pre class="overflow-visible! px-0!" data-start="4657" data-end="4681"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>react-router-dom</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Example:

<pre class="overflow-visible! px-0!" data-start="4693" data-end="4775"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼn">import</span><span> { </span><span class="ͼt">BrowserRouter</span><span>, </span><span class="ͼt">Routes</span><span>, </span><span class="ͼt">Route</span><span> } </span><span class="ͼn">from</span><span></span><span class="ͼr">"react-router-dom"</span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 13. API Calls

React apps often fetch data from APIs.

Example:

<pre class="overflow-visible! px-0!" data-start="4849" data-end="4994"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼt">useEffect</span><span>(() => {</span><br/><span></span><span class="ͼt">fetch</span><span>(</span><span class="ͼr">"https://api.example.com"</span><span>)</span><br/><span></span><span class="ͼn">.</span><span>then(</span><span class="ͼt">res</span><span> => </span><span class="ͼt">res</span><span class="ͼn">.</span><span>json())</span><br/><span></span><span class="ͼn">.</span><span>then(</span><span class="ͼt">data</span><span> => </span><span class="ͼt">console</span><span class="ͼn">.</span><span>log(</span><span class="ͼt">data</span><span>));</span><br/><span>}, []);</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 14. Virtual DOM

React uses a** ****Virtual DOM** to improve performance.

Process:

1. React creates a virtual copy of the DOM
2. Detects changes
3. Updates only necessary parts of the real DOM

This makes React** ** **fast and efficient** .

---

# 15. Component Lifecycle

Components go through different phases:

<pre class="overflow-visible! px-0!" data-start="5310" data-end="5346"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>Mounting</span><br/><span>Updating</span><br/><span>Unmounting</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

In functional components this is handled using:

<pre class="overflow-visible! px-0!" data-start="5397" data-end="5416"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>useEffect()</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 16. Typical React Project Structure

Example structure:

<pre class="overflow-visible! px-0!" data-start="5482" data-end="5614"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>src</span><br/><span> ├── components</span><br/><span> │    ├── Header.jsx</span><br/><span> │    ├── Footer.jsx</span><br/><span> │</span><br/><span> ├── pages</span><br/><span> │    ├── Home.jsx</span><br/><span> │</span><br/><span> ├── App.jsx</span><br/><span> ├── main.jsx</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 17. Useful Tools for React Development

Common tools used with React:

* Vite
* React Developer Tools
* ESLint
* Prettier
* Git

---

# 18. React Learning Order (Recommended)

A beginner should learn React in this order:

1. React introduction
2. JSX
3. Components
4. Props
5. State (useState)
6. Event handling
7. Conditional rendering
8. Lists and keys
9. useEffect
10. Forms
11. React Router
12. API calls

---

# Key Concept

The fundamental principle of React is:

<pre class="overflow-visible! px-0!" data-start="6093" data-end="6114"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>UI = f(state)</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Meaning:

<pre class="overflow-visible! px-0!" data-start="6126" data-end="6175"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>User Interface changes when state changes</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# Next Topics to Learn

After mastering the basics, learn:

State Management

* Redux
* Context API
* Zustand

Styling

* Tailwind CSS
* Styled Components

Frameworks

* Next.js

Testing

* Jest
* React Testing Library

---

# Summary

React simplifies building complex user interfaces using:

* reusable components
* state management
* declarative rendering
* efficient DOM updates

Understanding these basics will allow you to build** ** **modern web applications with React** .

<pre class="overflow-visible! px-0!" data-start="6653" data-end="6958" data-is-last-node=""><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼk ͼy"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><br/><span>---</span><br/><br/><span>If you'd like, I can also create a **much better developer version of this file** that includes:</span><br/><br/><span>- folder structure for your **portfolio project**</span><br/><span>- component naming conventions</span><br/><span>- React best practices</span><br/><span>- common beginner mistakes</span><br/><br/><span>It would fit nicely into your **portfolio documentation folder**.</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

[ ]
