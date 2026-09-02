"use strict";

console.log("Inkora JavaScript loaded successfully.");
const featuredPostsContainer = document.querySelector("#featuredPosts");
const latestPostsContainer = document.querySelector("#latestPosts");
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
const featuredPosts = posts.filter(post => post.featured);

featuredPostsContainer.innerHTML = featuredPosts
    .map(post => createPostCard(post))
    .join("");

const latestPosts = posts.filter(post => !post.featured);

latestPostsContainer.innerHTML = latestPosts
    .map(post => createPostCard(post))
    .join("");


    