const express = require("express")
const cors = require("cors")
const path = require("path")
const dotenv = require("dotenv").config()
const loginUser = require("./src/controller/loginController")
const agentProfile = require("./src/controller/agentController")
const studentData = require("./src/controller/studentController")
const connect = require("./src/config/db")

const app = express()
app.use(express.static(path.join(__dirname+ "/public")))
app.use(express.json())
app.use(cors())
app.use("/api/login",loginUser)
app.use("/api/agent",agentProfile)
app.use("/api/student",studentData)

const port = process.env.PORT || 5000
app.listen(port,async()=>{
    try{
        await connect()
        console.log(`Listening to the PORT ${port} successfully...`)
    }
    catch(err){
        console.log(err)
    }
})

 