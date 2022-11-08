require('dotenv').config()
const mongoose=require('mongoose')

mongoose.connect(process.env.URI)
    .then(db=> console.log("connected to Atlas"))
    .catch(err=> console.log(err))


module.exports=mongoose