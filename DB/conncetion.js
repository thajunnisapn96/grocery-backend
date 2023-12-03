const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB connected with PT SERVER")
}).catch((err)=>{
    console.log(err)
})