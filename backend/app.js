const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const postsRoutes = require("./routes/posts")
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
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
  next()
})

app.use("/api/posts", postsRoutes)

module.exports = app
