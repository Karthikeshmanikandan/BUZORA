//header
let nav = document.querySelector("nav");
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
  }else {
    nav.classList.remove("sticky");
  }
}
// business news
document.addEventListener("DOMContentLoaded", async function () {
    const newsContainer = document.querySelector(".news-slider");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;
    let articles = [];
    const API_URL = "https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=cd90331efe0e41aeabd15322952eafa2";

    async function fetchNews() {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            
            if (data.articles) {
                articles = data.articles.slice(0, 5); // Get the first 5 news articles
                displayNews();
            }
        } catch (error) {
            console.error("Error fetching news:", error);
            newsContainer.innerHTML = "<p>Failed to load news. Please try again later.</p>";
        }
    }

    function displayNews() {
        newsContainer.innerHTML = ""; // Clear previous content

        articles.forEach((article, index) => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-slide");
            if (index === 0) newsItem.classList.add("active");

            newsItem.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.description || "No description available."}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;

            newsContainer.appendChild(newsItem);
        });

        setupSlider();
    }

    function setupSlider() {
        const slides = document.querySelectorAll(".news-slide");

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove("active");
                if (i === index) slide.classList.add("active");
            });
        }

        prevButton.addEventListener("click", function () {
            currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
            showSlide(currentIndex);
        });

        nextButton.addEventListener("click", function () {
            currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
            showSlide(currentIndex);
        });

        setInterval(() => {
            currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
            showSlide(currentIndex);
        }, 5000);
    }

    // Fetch and display news on page load
    fetchNews();
});
