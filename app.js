const Btn = document.getElementById("btn");
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
    .then((data) => {
        console.log(data.articles[0]);
        document.getElementById('card').innerHTML = `
            <div class="card-body">
                <h5 class="card-title" id="newsTitle">${data.articles[0].title}</h5>
                <p class="card-text" id="newsSyn">${data.articles[0].description}</p>
                <a href="${data.articles[0].url}" class="btn btn-primary">Read More</a>
            </div>
        `
    })
}





// function getID() {
//     fetch("newsapk.json")
//     .then(response => response.json())
//     .then(response => console.log(response.key))
// }
// const getKey = getID();
// console.log(getKey);