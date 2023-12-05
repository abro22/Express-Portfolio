// Initial Setup
// Create a variable
const express = require('express')
//locates file
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/public')))


//CRUD : create, read, update, distroy
//request types : Post, Get, Put, delete

//when someone makes a get request what do we want to do
//request- Information sent from browser - url header ect
//response - What I am sending back
// app.get("/", (req, res) => {
//     //when someone goes to homepage- we want to send something back
//     res.send("Hello World!")
// })


///make app listen to input

app.get("/cats", (req, res) => {
    res.send("Meow!")
})

app.get("/dogs", (req, res) => {
    res.send("Woof!")
})


//sending a webpage made in html


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

















app.listen(3000) //port number

console.log("express is running")
