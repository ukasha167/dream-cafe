# Dream Cafe

## System Overview

The Dream Cafe application is a static, multi-page web ecosystem engineered exclusively with Vanilla HTML5, CSS3, and ES6 JavaScript. The primary architectural objective is to deliver a dynamic, data-driven user interface without the computational overhead, dependency bloat, and build-step requirements characteristic of modern JavaScript frameworks.

## Technical Implementation

### Data Hydration Pipeline

* **How:** Menu configurations and daily specials are decoupled from the structural markup and stored as raw JSON arrays (`menu.json`, `dishes.json`). The asynchronous `Fetch API` is utilized to request this data at runtime, parse the payloads, and dynamically construct DOM nodes via `document.createElement`.
* **Why:** This enforces a strict separation of concerns. Data entities can be manipulated or scaled without altering the rendering logic or HTML structure, establishing a highly maintainable data layer.

### Hardware-Accelerated Rendering

* **How:** Interactive viewports, including the category carousels and testimonial sliders, are controlled by localized JavaScript state machines. These controllers update the `transform: translateX()` CSS properties based on strict index boundaries.
* **Why:** Delegating spatial manipulation to the CSS `transform` property forces the browser rendering engine to push the animation workload to the GPU composite layer. This prevents main-thread layout thrashing and guarantees deterministic 60 FPS transitions.

### Viewport Memory Management

* **How:** The `IntersectionObserver` API monitors the scroll position of the viewport relative to specific DOM nodes. Opacity and translation classes are appended to the node execution stack only upon intersecting the viewport threshold.
* **Why:** Deferring the painting phase of off-screen elements reduces the initial parsing workload on the browser engine and minimizes idle memory consumption during application startup.

### Browser-Level UI Control

* **How:** The implementation injects `<meta name="theme-color">` and `color-scheme` directives into the document head to enforce strict hexadecimal conformity on native browser UI elements.
* **Why:** This configuration prevents underlying OS-level environment variables (such as macOS system-wide Dark Mode) from indiscriminately overriding the application's intended light-theme color palette, ensuring visual consistency across varying client environments.

## Execution Environment

This project contains zero build dependencies. There is no requirement for Node.js, Webpack, or Babel. However, due to Cross-Origin Resource Sharing (CORS) policies enforced by modern browsers, asynchronous `Fetch API` requests will be blocked if the HTML files are executed directly via the local filesystem (`file://` protocol).
