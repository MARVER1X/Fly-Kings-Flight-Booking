# Fly Kings: 3D UI & Animation Architecture

## 📌 Overview
A high-fidelity frontend architecture prototype for a flight search application. This repository focuses heavily on mastering the browser's rendering engine through complex CSS3 mathematics, Intersection Observers, and modern glassmorphism UI patterns.

## 🛠️ Tech Stack
* **Frontend:** HTML5, Advanced CSS3, Vanilla JavaScript (ES6)
* **Typography:** Google Fonts (Roboto)

## 🚀 Core Features
* **3D Orb Transformation:** Utilizes `preserve-3d`, `rotateX/Y`, and conic gradients to render complex orbital animations entirely in raw CSS.
* **Scroll-Triggered Reveals:** Implements the JavaScript `IntersectionObserver` API paired with CSS cubic-bezier curves for highly performant, scroll-triggered DOM mounting.
* **Responsive Glassmorphism:** Features a fully fluid layout with a fixed, pure-CSS mesh gradient background, overlaid with frosted-glass (`backdrop-filter`) UI components.
* **Mobile-First Navigation:** A custom-built hamburger menu overlay architecture that recalculates the 3D translation matrix for optimal mobile viewport rendering.
* **Asynchronous API Mocking:** Vanilla JS event listeners manage UI state changes to simulate network latency for an asynchronous GDS flight search.

## 🧠 Engineering Focus
The primary goal of this MVP was mastering **Browser Rendering, CSS Mathematics, and Viewport State Management**, proving that production-grade, highly responsive UX interactions can be built from scratch without relying on heavy animation libraries.

## 🗺️ Future Roadmap (V2.0)
To scale this visual prototype into a fully functional flight booking platform:
* **Live GDS API Integration:** Connecting to the Amadeus or Skyscanner API to pull real-time global flight data.
* **Search Engine Logic:** Building the form validation and asynchronous fetch requests to handle origin/destination queries.
* **Component Refactoring:** Migrating the raw HTML/CSS into a modular React.js structure for better state management.
