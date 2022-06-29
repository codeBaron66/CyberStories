const card = document.getElementById("container");
const cyberBtn = document.getElementById("cyberLink");
const warBtn = document.getElementById("warLink");

warBtn.addEventListener("click", getWarNews);
cyberBtn.addEventListener("click", getCyberNews);


function getCyberNews(e) {
    let URL = "https://newsapi.org/v2/everything?q=cyber(ransomware AND crypto)";
    getNews(URL);
}

function getWarNews(e) {
    let URL = "https://newsapi.org/v2/everything?q=war";
    getNews(URL);
}


function getNews(URL){
    card.innerHTML = "";
    fetch(URL, {
        method: "GET",
        headers: {
            'Authorization': 'API KEY'
        }
    })
    .then(response => response.json())
    .then(response => {
        let res = response.articles;
        res.forEach(story => {
            card.innerHTML += `
                <div id="card">
                    <h2>${story.title}</h2>
                    <p>${story.description}</p>
                    <a href="${story.url}" id="btn-link">Read More</a>
                    </div>
                </div>
            `;
        });
    });
}
