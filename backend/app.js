const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const Post = require("./models/post")

const app = express()

mongoose.connect("mongodb+srv://ricky:tLyJuPjbp0y68LXE@cluster0.7cm18.mongodb.net/node-angular?retryWrites=true&w=majority")
.then(() => {
  console.log("connected to mongodb")
}).catch(() => {
  console.log("connection failed")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
  next()
})

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.title,
  })
  post.save()
  res.status(201).json({
    message: "Post added successfully"
  })
})

//tLyJuPjbp0y68LXE

app.get("/api/posts",(req, res, next) => {
  Post.find().then(doc => {
    res.status(200).json({
      message: "Posts fectched succesfully!",
      posts: doc
    })
  })


})

module.exports = app
