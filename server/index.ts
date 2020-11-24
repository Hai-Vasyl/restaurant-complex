import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import userRoutes from "./routes/users"
import daterangeRoutes from "./routes/daterange"
import hrcomplexRoutes from "./routes/hrcomplex"
import imageRoutes from "./routes/image"
import cors from "cors"
import { config } from "dotenv"
config()

const { PORT, MONGO_USER, MONGO_PASS, MONGO_DB, NODE_ENV } = process.env

;(async () => {
  try {
    const app = express()
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    await mongoose.connect(
      `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.osxef.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      () => console.log("MongoDB successfully connected!")
    )

    app.use("/auth", userRoutes)
    app.use("/daterange", daterangeRoutes)
    app.use("/hrcomplex", hrcomplexRoutes)
    app.use("/image", imageRoutes)

    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
  } catch (error) {
    console.error(`Server error: ${error.message}`)
  }
})()
