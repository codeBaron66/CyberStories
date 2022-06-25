const Btn = document.getElementById("btn");
const card = document.getElementById("cardy");
Btn.addEventListener("click", getNews);
let stories = [];

function getNews(e) {
    let URL = "https://newsapi.org/v2/everything?q=ransomware"
    fetch(URL, {
        method: "GET",
        headers: {
            'Authorization': '477f3f4a86e2451198ba71e20dc9db29'
        }
    })
    .then(response => response.json())
    .then(response => {
        let res = response.articles;
        // console.log(res);
        res.forEach(story => {
            console.log(story);
            card.innerHTML += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title" id="newsTitle">${story.title}</h5>
                    <p class="card-text" id="newsSyn">${story.description}</p>
                    <a href="{article.url}" class="btn btn-primary">Read More</a>
                </div>
            </div>
            `;
        });
    });
}
// function getID() {
//     fetch("newsapk.json")
//     .then(response => response.json())
//     .then(response => console.log(response.key))
// }
// const getKey = getID();
// console.log(getKey);
