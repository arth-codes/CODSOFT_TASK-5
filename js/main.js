"use strict";

const themeToggle = document.querySelector("#themeToggle");
const featuredPostsContainer = document.querySelector("#featuredPosts");
const latestPostsContainer = document.querySelector("#latestPosts");

const categoryButtons = document.querySelectorAll(".category-btn");
const loadMoreButton = document.querySelector("#loadMoreBtn");
const menuButton = document.querySelector("#menuBtn");
const navbar = document.querySelector("#navbar");
const navbarLinks = document.querySelectorAll(".navbar-link");

let selectedCategory = "All";
let visiblePosts = 3;

function createPostCard(post) {
    return `
        <article class="post-card">
            <a href="post.html?id=${post.id}" class="post-card-image">
                <img src="${post.image}" alt="${post.title}">
            </a>

            <div class="post-card-content">
                <div class="post-meta">
                    <span>${post.category}</span>
                    <span>•</span>
                    <span>${post.date}</span>
                </div>

                <h3 class="post-title">
                    <a href="post.html?id=${post.id}">
                        ${post.title}
                    </a>
                </h3>

                <p class="post-excerpt">
                    ${post.excerpt}
                </p>

                <div class="post-tags">
                    ${post.tags.map(tag => `<span>${tag}</span>`).join("")}
                </div>
            </div>
        </article>
    `;
}

function renderLatestPosts() {
    if (!latestPostsContainer) return;

    let filteredPosts = posts.filter(post => !post.featured);

    if (selectedCategory !== "All") {
        filteredPosts = filteredPosts.filter(
            post => post.category === selectedCategory
        );
    }

    const postsToDisplay = filteredPosts.slice(0, visiblePosts);

    latestPostsContainer.innerHTML = postsToDisplay
        .map(post => createPostCard(post))
        .join("");

    if (loadMoreButton) {
        if (visiblePosts >= filteredPosts.length) {
            loadMoreButton.style.display = "none";
        } else {
            loadMoreButton.style.display = "inline-flex";
        }
    }
}

if (featuredPostsContainer && typeof posts !== "undefined") {
    const featuredPosts = posts.filter(post => post.featured);
    featuredPostsContainer.innerHTML = featuredPosts
        .map(post => createPostCard(post))
        .join("");
}

if (latestPostsContainer) {
    renderLatestPosts();
}

if (loadMoreButton) {
    loadMoreButton.addEventListener("click", () => {
        visiblePosts += 3;
        renderLatestPosts();
    });
}

if (categoryButtons && categoryButtons.length > 0) {
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            selectedCategory = button.dataset.category;
            visiblePosts = 3;

            categoryButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            renderLatestPosts();
        });
    });
}

const savedTheme = localStorage.getItem("inkora-theme");

if (savedTheme === "dark" && themeToggle) {
    document.documentElement.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark-mode");
        const isDarkMode = document.documentElement.classList.contains("dark-mode");

        if (isDarkMode) {
            localStorage.setItem("inkora-theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("inkora-theme", "light");
            themeToggle.textContent = "🌙";
        }
    });
}

if (menuButton && navbar) {
    menuButton.addEventListener("click", () => {
        navbar.classList.toggle("active");
        const isMenuOpen = navbar.classList.contains("active");
        menuButton.setAttribute("aria-expanded", isMenuOpen ? "true" : "false");
    });
}

if (navbarLinks) {
    navbarLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (navbar) {
                navbar.classList.remove("active");
            }
            if (menuButton) {
                menuButton.setAttribute("aria-expanded", "false");
            }
        });
    });
}

const newsletterForm = document.querySelector("#newsletterForm");
if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const emailInput = document.querySelector("#newsletterEmail");
        if (emailInput && emailInput.value) {
            alert(`Thank you for subscribing! We have sent a confirmation to ${emailInput.value}.`);
            newsletterForm.reset();
        }
    });
}
