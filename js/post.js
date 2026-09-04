"use strict";
const articleContent = document.querySelector("#articleContent");
const urlParams = new URLSearchParams(window.location.search);
const postId = Number(urlParams.get("id"));
const post = posts.find(post => post.id === postId);
if (!post) {
    articleContent.innerHTML = `
        <div class="article-not-found">
            <h1>Article Not Found</h1>
            <p>Sorry, the article you're looking for doesn't exist.</p>
            <a href="index.html" class="btn">
                Back to Home
            </a>
        </div>
    `;
}
else {
    articleContent.innerHTML = `
        <div class="article-header">

            <div class="post-meta">
                <span>${post.category}</span>
                <span>•</span>
                <span>${post.date}</span>
            </div>

            <h1 class="article-title">
                ${post.title}
            </h1>

            <p class="article-excerpt">
                ${post.excerpt}
            </p>

        </div>

        <div class="article-image">
            <img src="${post.image}" alt="${post.title}">
        </div>

        <div class="article-body">
            <p>${post.content}</p>
        </div>

        <div class="article-tags">
            ${post.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>

        <div class="article-footer">
            <a href="index.html" class="btn btn-outline">
                ← Back to Home
            </a>
        </div>
    `;
}