// 7306caeaa1b796f3064253d271b1e4c56cf7f1d0
const fetch = require("node-fetch") 
const github_details ={
    "token": "7306caeaa1b796f3064253d271b1e4c56cf7f1d0",
    "username": "Lario0913"
}


const body = {
    "query": `
        query {
            user(login: ${github_details["username"]}) {
            repositories(first:20) {
                nodes{
                name
                }
                }
            }
        }
    `
}

const baseUrl = "https://api.github.com/graphql"

const headers = {
    "Content-Type": "application/json",
    Authentication: "bearer "+ github_details["token"]
}

fetch(baseUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
}).
then(response => {console.log(JSON.stringify(response))}).
catch(error => console.log(JSON.stringify(error)))
