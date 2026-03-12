# React Portfolio Setup

This repository contains the setup and development of my personal portfolio built using **React + Vite**.

The purpose of this documentation is to record the setup process and Git workflow used during the project.

---

# 1. Project Initialization

A new project folder was created:

```
portfolio
```

Navigate into the folder:

```bash
cd portfolio
```

---

# 2. Create React Project using Vite

Run the following command to initialize a React project using Vite:

```bash
npm create vite@latest
```

During the setup prompts:

```
Project name: .
Use Vite 8 beta: No
Framework: React
Variant: JavaScript
```

Using `.` installs the project inside the current folder.

---

# 3. Install Dependencies

After the project files are generated, install the required dependencies:

```bash
npm install
```

---

# 4. Start Development Server

Run the development server:

```bash
npm run dev
```

The terminal will display a local development URL similar to:

```
http://localhost:5173
```

Open this URL in a browser to view the React application.

---

# 5. Basic React Project Structure

The generated folder structure will look like:

```
portfolio
│
├── node_modules
├── public
│
├── src
│   ├── assets
│   ├── App.jsx
│   ├── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

Important files:

| File               | Purpose              |
| ------------------ | -------------------- |
| `index.html`     | Root HTML file       |
| `src/main.jsx`   | React entry point    |
| `src/App.jsx`    | Main React component |
| `vite.config.js` | Vite configuration   |

---

# 6. Testing the React Setup

Open:

```
src/App.jsx
```

Modify the heading:

```jsx
<h1>Sudhanshu Portfolio</h1>
```

Save the file and the browser will automatically reload due to **Vite Hot Module Reloading (HMR)**.

---

# 7. Initialize Git Repository

Initialize Git in the project directory:

```bash
git init
```

Add project files:

```bash
git add .
```

Create the first commit:

```bash
git commit -m "Initial React portfolio setup"
```

---

# 8. Create GitHub Repository

Go to GitHub and create a new repository.

Repository settings:

```
Repository name: react-portfolio
Visibility: Public
```

Important:
Do **not** initialize with README, `.gitignore`, or license since the project already exists locally.

---

# 9. Connect Local Repository to GitHub

Add the remote origin:

```bash
git remote add origin https://github.com/YOUR_USERNAME/react-portfolio.git
```

Verify the remote:

```bash
git remote -v
```

---

# 10. Push Project to GitHub

Rename the default branch to main:

```bash
git branch -M main
```

Push the repository to GitHub:

```bash
git push -u origin main
```

After pushing, the project files will appear in the GitHub repository.

---

# 11. Future Workflow

For future updates, use the following Git workflow:

```bash
git add .
git commit -m "Describe your changes"
git push
```

---

# 12. Running the Project Later

To run the project again:

```bash
cd portfolio
npm run dev
```

Open:

```
http://localhost:5173
```

---

# Tech Stack

- React
- Vite
- JavaScript
- Node.js
- Git
- GitHub

---

# Project Goal

Build a personal portfolio website showcasing:

- Projects
- Technical skills
- Experience
- Contact information
