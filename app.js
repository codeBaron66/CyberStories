const container = document.getElementById("container");
const cyberBtn = document.getElementById("cyber-link");
const warBtn = document.getElementById("war-link");
const techBtn = document.getElementById("tech-link");
const crytoBtn = document.getElementById("crypto-link");
const ransomBtn = document.getElementById("ransom-link");
const linuxBtn = document.getElementById("linux-link");

cyberBtn.addEventListener("click", newsClick);
warBtn.addEventListener("click", newsClick);
techBtn.addEventListener("click", newsClick);
crytoBtn.addEventListener("click", newsClick);
ransomBtn.addEventListener("click", newsClick);
linuxBtn.addEventListener("click", newsClick);

function newsClick(e) {
    if (e.target.id == "cyber-link") {
        let URL = "https://newsapi.org/v2/everything?q=cyber NOT ransomware";
        getNews(URL);
    } else if (e.target.id == "war-link") {
        let URL = "https://newsapi.org/v2/everything?q=war";
        getNews(URL);
    } else if (e.target.id == "tech-link") {
        let URL = "https://newsapi.org/v2/everything?q=technology";
        getNews(URL);
    } else if (e.target.id == "crypto-link") {
        let URL = "https://newsapi.org/v2/everything?q=cryptocurrency";
        getNews(URL);
    } else if (e.target.id == "ransom-link") {
        let URL = "https://newsapi.org/v2/everything?q=ransomware";
        getNews(URL);
    } else if (e.target.id == "linux-link") {
        let URL = "https://newsapi.org/v2/everything?q=linux";
        getNews(URL);
    } else
        return;
}

function getNews(URL){
    container.innerHTML = "";
    fetch(URL, {
        method: "GET",
        headers: {
            'Authorization': '477f3f4a86e2451198ba71e20dc9db29'
        }
    })
    .then(response => response.json())
    .then(response => {
        response.articles.forEach(story => {
            container.innerHTML += `
                <div id="card">
                    <h2>
                        <a href="${story.url}" target="_blank">${story.title}</a>
                    </h2>
                    <p>${story.description}</p>
                </div>
            `;
        });
    });
}
