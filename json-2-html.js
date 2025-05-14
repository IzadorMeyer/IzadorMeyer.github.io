const json2html = require("node-json2html")

let data = [
    { name: "cheese", age: "3", flavor: "swiss", price: "5"},
    { name: "snatch", age: "2000", flavor: "swiss", price: "5"}
    
]

let transform = {
    "<>": "div", html: [
        { "<>": "p", html: "$(name)" },
        { "<>": "h1", html: "$(age)" },
        { "<>": "li", html: "$(flavor)" },
        { "<>": "h2", html: "$(age)" },
    ],
}
let html = json2html.render(data, transform)

console.log(html.split('><').join('>\n<'))