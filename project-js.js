const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/public')))


app.get("/Higher-Lower", (req, res) => {
    res.send("Higher-Lower")
})

app.get("/HangMan-Project", (req, res) => {
    res.send("Hangman")
})

app.get("/Rock-Project", (req, res) => {
    res.send("rock paper scissors")
})



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/project-html.html'))
})

app.listen(4000) //port number

console.log("express is running")