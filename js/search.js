"use strict";

const searchOverlay = document.querySelector("#searchOverlay");
const closeSearchButton = document.querySelector("#closeSearch");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchBtn");
const searchResultsContainer = document.querySelector("#searchResults");

console.log("Search button:", searchButton);
console.log("Search overlay:", searchOverlay);


// Open search overlay
if (searchButton && searchOverlay) {

    searchButton.addEventListener("click", () => {

        searchOverlay.classList.add("active");

        if (searchInput) {
            searchInput.focus();
        }

    });

}


// Close search overlay
if (closeSearchButton && searchOverlay) {

    closeSearchButton.addEventListener("click", () => {

        searchOverlay.classList.remove("active");

    });

}


// Search articles
if (searchForm && searchInput) {

    searchForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const searchTerm = searchInput.value
            .toLowerCase()
            .trim();

        if (searchTerm === "") {
            searchResultsContainer.innerHTML = "";
            return;
        }


        const searchResults = posts.filter((post) => {

            const title = post.title.toLowerCase();
            const excerpt = post.excerpt.toLowerCase();
            const category = post.category.toLowerCase();

            const tags = post.tags
                .join(" ")
                .toLowerCase();

            return (
                title.includes(searchTerm) ||
                excerpt.includes(searchTerm) ||
                category.includes(searchTerm) ||
                tags.includes(searchTerm)
            );

        });


        if (searchResults.length === 0) {

            searchResultsContainer.innerHTML = `
                <p class="search-no-results">
                    No articles found.
                </p>
            `;

            return;
        }


        searchResultsContainer.innerHTML = searchResults
            .map((post) => {

                return `
                    <article class="search-result">

                        <div class="search-result-content">

                            <div class="post-meta">
                                <span>${post.category}</span>
                                <span>•</span>
                                <span>${post.date}</span>
                            </div>

                            <h3 class="search-result-title">
                                <a href="post.html?id=${post.id}">
                                    ${post.title}
                                </a>
                            </h3>

                            <p class="search-result-excerpt">
                                ${post.excerpt}
                            </p>

                        </div>

                    </article>
                `;

            })
            .join("");

    });

}