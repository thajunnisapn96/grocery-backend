
const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')


exports.register = async(req,res)=>{
    console.log('Inside Register Controller Function');

    const {username,email,password} = req.body


    try{
        const existingUser = await users.findOne({email})

        if(existingUser){
            res.status(406).json("Account Already Exists")

        }else{
            const newUser = new users({
                username,email,password,github:'',linkedin:'',profile:'',
            })

            await newUser.save()
            res.status(200).json(newUser)

        }
    }
    catch(err){
        res.status(401).json(`Register API  Failed Error : ${err}` )
    }
}


exports.login = async(req,res)=>{

    console.log('Inside Login Controller Function');

    const {email,password} = req.body

    try{

       const registeredUser = await users.findOne({email,password})

       if(registeredUser){
        
        const token = jwt.sign({userId:registeredUser._id},"superSecretKeyForLogin")

        res.status(200).json({registeredUser,token})
   
       }else{
         res.status(404).json("Invalid Email or Password")

       }

    } catch(err){
        res.status(401).json(`Login API  Failed Error : ${err}` )
    }

}






//edit user

exports.editUser = async (req,res)=>{
    const userId = req.payload

    const {username,email,password,github,linkedin,profile} = req.body
    const uploadImage  = req.file?req.file.filename:profile

    try{
    const updatedUser = await users.findByIdAndUpdate({_id:userId},{
    username,email,password,github,linkedin,profile:uploadImage },{new:true})

    await updatedUser.save()
    res.status(200).json(updatedUser)
    }
    catch(err){
    res.status(401).json(err)

    }
}