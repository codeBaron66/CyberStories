const Btn = document.getElementById("btn");
const card = document.getElementById("cardy");
Btn.addEventListener("click", getAllNew);

function getAllNew(){
    getWarNews();
    getCyberNews();
}

function getCyberNews(e) {
    let URL = "https://newsapi.org/v2/everything?q=cyber(ransomware AND crypto)"
    fetch(URL, {
        method: "GET",
        headers: {
            'Authorization': API_KEY
        }
    })
    .then(response => response.json())
    .then(response => {
        let res = response.articles;
        console.log(res);
        res.forEach(story => {
            // console.log(story);
            card.innerHTML += `
            <div class="card col-sm" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title" id="newsTitle">${story.title}</h5>
                    <p class="card-text" id="newsSyn">${story.description}</p>
                    <a href="${story.url}" class="btn btn-primary">Read More</a>
                </div>
            </div>
            `;
        });
    });
}

function getWarNews(e) {
    let URL = "https://newsapi.org/v2/everything?q=war"
    fetch(URL, {
        method: "GET",
        headers: {
            'Authorization': API_KEY'
        }
    })
    .then(response => response.json())
    .then(response => {
        let res = response.articles;
        console.log(res);
        res.forEach(story => {
            // console.log(story);
            card.innerHTML += `
            <div class="card col-sm" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title" id="newsTitle">${story.title}</h5>
                    <p class="card-text" id="newsSyn">${story.description}</p>
                    <a href="${story.url}" class="btn btn-primary">Read More</a>
                </div>
            </div>
            `;
        });
    });
}



