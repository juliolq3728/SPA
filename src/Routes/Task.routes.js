const express=require('express')
const router=express.Router()

const Task = require('../models/task')

router.get('/',async (req, res)=>{
    const task = await Task.find();
    console.log(task)
    res.json(task)
    
})

router.post('/',async (req, res)=>{
    const {Servicio , Cliente, Descripcion,Staus} = req.body
    const task= new Task({Servicio , Cliente, Descripcion,Staus})
    await task.save()
    res.json({staus:'Task Save'})
    
})

router.put('/:id',async(req,res)=>{
    const {Servicio , Cliente, Descripcion,Staus} = req.body
    const newtask= {Servicio , Cliente, Descripcion,Staus}
    await Task.findByIdAndUpdate(req.params.id,newtask)
    res.json({staus:'Task update'})
})

router.delete('/:id',async(req,res)=>{
    await Task.findByIdAndRemove(req.params.id)
    res.json({staus:'Task Deleted'})
})

module.exports=router;
