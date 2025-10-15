import express from "express"
import cors from "cors"

import dotenv from "dotenv"
dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!!!! 4 try to deploy")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
