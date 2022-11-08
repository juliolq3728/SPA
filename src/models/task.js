const mongoose=require('mongoose')
const {Schema}=mongoose;

const TaskSchema=new Schema({
    Servicio:{type: String, required:true},
    Cliente:{type: String, required:true},
    Descripcion:{type: String, required:true},
    Staus:{type: String, required:true}
});

module.exports=mongoose.model('tasks',TaskSchema);
