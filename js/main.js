"use strict";

console.log("Inkora JavaScript loaded successfully.");
const featuredPostsContainer = document.querySelector("#featuredPosts");
const latestPostsContainer = document.querySelector("#latestPosts");

const categoryButtons = document.querySelectorAll(".category-btn");
const loadMoreButton = document.querySelector("#loadMoreBtn");

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

    if (visiblePosts >= filteredPosts.length) {
        loadMoreButton.style.display = "none";
    } else {
        loadMoreButton.style.display = "inline-flex";
    }
}
const featuredPosts = posts.filter(post => post.featured);

featuredPostsContainer.innerHTML = featuredPosts
    .map(post => createPostCard(post))
    .join("");

renderLatestPosts();

loadMoreButton.addEventListener("click", () => {
    visiblePosts += 3;

    renderLatestPosts();
});

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




