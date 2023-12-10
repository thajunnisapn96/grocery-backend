const { default: mongoose } = require('mongoose')
const mangoose = require('mongoose')
const projectSchema = new mangoose.Schema({
    title: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    projectThumb: {
        type: String,
        required: true,
    },
    userId:{
        type:String,
        required:true
    }

})

const projects = mongoose.model("projects", projectSchema)
module.exports = projects
