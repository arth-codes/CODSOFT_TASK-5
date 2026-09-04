# Inkora

Inkora is a responsive editorial blog website built using **HTML5, CSS3, and JavaScript (ES6+)**. It is developed as part of a Web Development practice project.

The project includes a clean homepage, featured articles, responsive blog cards, dynamic category filtering, real-time search functionality, individual blog detail pages, dark mode theme persistence, and interactive newsletter subscription.

---

## 🌟 Features

* **Responsive Homepage**: Clean editorial layout that scales smoothly across mobile, tablet, and desktop screens.
* **Featured Blog Posts**: Dynamic rendering of curated, featured stories.
* **Category Filtering**: Filter latest posts by categories (*Technology*, *Design*, *Lifestyle*, *Business*, *All*).
* **Load More Pagination**: Dynamic article expansion for latest posts.
* **Live Search Overlay**: Instant live filtering as you type, keyboard accessibility (`ESC` key to close), and high-contrast overlay typography.
* **Individual Article Detail Pages**: Full post view (`post.html?id=X`) with related articles grid.
* **Dark Mode Theme Persistence**: Instant theme switching (`☀️` / `🌙`) saved in `localStorage` across page navigations.
* **Responsive Mobile Navigation**: Dropdown hamburger menu (`☰`) with ARIA accessibility attributes.
* **Interactive Newsletter Form**: Form validation with user subscription feedback.

---

## 🛠️ Technologies Used

* **HTML5**: Semantic tags (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`)
* **CSS3**: Custom CSS Variables, Flexbox, CSS Grid, media queries, dark mode variables
* **JavaScript (ES6+)**: Dynamic DOM manipulation, `localStorage` API, array methods (`filter`, `map`), event listeners
* **Responsive Web Design**: Mobile-first media queries (<767px, 768px-991px, >991px)

---

## 📁 Project Structure

```text
Inkora/
│
├── index.html           # Homepage layout & main blog sections
├── post.html            # Article detail page layout
│
├── css/
│   └── style.css        # Core styles, CSS variables, dark mode & responsive media queries
│
├── js/
│   ├── main.js          # Core app initialization, dark mode, mobile menu & newsletter
│   ├── posts.js         # Blog posts dataset & metadata
│   ├── post.js          # Article detail rendering & related posts logic
│   └── search.js        # Live search modal, instant filtering & ESC key binding
│
├── assets/
│   └── images/          # High-resolution post images (post-1.png to post-8.png)
│
└── README.md            # Project documentation & overview
```

---

## 🎓 Internship Information

This project was developed as part of my **Virtual Internship at CODSOFT**.

* **Task Number:** Task 5
* **Project Name:** Inkora – Blog Website
* **Developer:** Arth

---

## 🚀 Status

✅ **Completed & Fully Functional**

All features, search overlays, dark mode persistence, and responsive layouts have been tested and verified across mobile, tablet, and desktop viewports.

---

**Made with ❤️ by Arth**


