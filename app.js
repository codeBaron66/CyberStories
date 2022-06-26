const card = document.getElementById("container");
const cyberBtn = document.getElementById("cyberLink");
const warBtn = document.getElementById("warLink");

cyberBtn.addEventListener("click", getCyberNews);
warBtn.addEventListener("click", getWarNews);

function getCyberNews(e) {
    card.innerHTML = "";
    let URL = "https://newsapi.org/v2/everything?q=cyber(ransomware AND crypto)"
    fetch(URL, {
        method: "GET",
        headers: {
            'Authorization': 'APIKEY'
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
                    <a href="#" id="btn-link">${story.url}</a>
                    </div>
                </div>
            `;
        });
    });
}

function getWarNews(e) {
    card.innerHTML = "";
    let URL = "https://newsapi.org/v2/everything?q=war"
    fetch(URL, {
        method: "GET",
        headers: {
            'Authorization': APIKEY
        }
    })
    .then(response => response.json())
    .then(response => {
        let res = response.articles;
        console.log(res);
        res.forEach(story => {
            // console.log(story);
            card.innerHTML += `
            <div id="card">
                    <h2>${story.title}</h2>
                    <p>${story.description}</p>
                    <a href="#" id="btn-link">${story.url}</a>
                    </div>
                </div>
            `;
        });
    });
}



