# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Product preview card component solution](#frontend-mentor---product-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
      - [Active states](#active-states)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [AI Collaboration](#ai-collaboration)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Mobile screenshot](./screenshot/mobile.png)

![Tablet screenshot](./screenshot/tablet.png)

![Desktop screenshot](./screenshot/desktop.png)

#### Active states

![Mobile active screenshot](./screenshot/mobile-active.png)

![Tablet active screenshot](./screenshot/tablet-active.png)

![Mobile active screenshot](./screenshot/desktop-active.png)

### Links

- Solution URL: [https://github.com/chiaminchen/product-preview-card-component](https://github.com/chiaminchen/product-preview-card-component)
- Live Site URL: [https://chiaminchen.github.io/product-preview-card-component/](https://chiaminchen.github.io/product-preview-card-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (Variables)
- CSS Modules
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Frontend Tooling

### What I learned

During this project, I focused on building a responsive card component using React and CSS Modules. I learned how to:

- Structure a React application with reusable components (`ProductCard`, `ProductInfo`, `ProductImage`, etc.).
- Use CSS Variables for consistent theming and easier maintenance.
- Implement responsive images using the `<picture>` element to serve different images for mobile and desktop.
- Ensure accessibility by using `sr-only` classes for screen readers to announce original and discounted prices correctly, and providing meaningful `alt` text for images.

```jsx
<picture>
  <source media="(min-width: 768px)" srcSet={desktopSrc} />
  <img className={styles.productImage} src={mobileSrc} alt={alt} />
</picture>
```

### Continued development

In future projects, I want to continue focusing on:

- Writing automated tests using Vitest and React Testing Library to ensure component reliability.
- Further exploring React's ecosystem and more advanced state management.
- Deepening my knowledge of Web Accessibility (WCAG) guidelines.

### AI Collaboration

- **Tools used:** Gemini (Antigravity AI Assistant)
- **How they were used:** Code reviews, refactoring suggestions, and accessibility improvements. The AI helped identify missing screen-reader text for prices, avoid redundant `aria-label` tags, and suggested extracting hardcoded data into component props for better reusability.
- **What worked well:** The AI's code review provided actionable feedback and explained the "why" behind the best practices (like the 3A pattern for testing), which was fantastic for learning and understanding the reasoning behind the code changes.

## Author

- Website - [https://github.com/chiaminchen](https://github.com/chiaminchen)
- Frontend Mentor - [@chiaminchen](https://www.frontendmentor.io/profile/chiaminchen)
