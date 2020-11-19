const fetch = require("node-fetch") 
const github_details ={
    "token": "1ac9b28229943a76c8506f2cf8e8f758e3d53e5e",
    "username": "Lario0913"
}


const body = {
    query: 
    `query {
        user(login: "lario0913" ) {
        repositories(first:20) {
            nodes{
            name
            }
            }
        }
    }  `
}


const baseUrl = "https://api.github.com/graphql"

const headers = {
    "Content-Type": "application/json",
    Authorization: "token "+ github_details.token
}

require('isomorphic-fetch');

fetch(baseUrl, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(body)
})
  .then(res => res.json())
  .then(res => console.log(res.data.user.repositories.nodes));
