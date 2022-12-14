const express = require('express');
const Task = require('../models/task.js');
const router = new express.Router();

router.get('/test', (req, res)=>{
    res.send('sdwedewde')
})

/* Tasks API's */
router.post('/createTask', async(req, res) => {
    const task = new Task(req.body);

    try{
        await task.save();
        res.status(201).send(task);
    }catch(error){
        res.status(400).send(error);
    }
    // task.save().then((result)=>{
    //     res.status(201).send(task);
    // }).catch((error)=>{
    //     res.status(400).send(error);
    // })
});

router.get('/tasks', async(req, res)=>{

    try{
        const result = await Task.find({});
        res.status(200).send(result);
    }catch(error){
        res.status(500).send(error);
    }
    // Task.find({}).then((result)=>{
    //     res.status(200).send(result);
    // }).catch((error)=>{
    //     res.status(500).send(error);
    // })
});

router.get('/tasks/:id', async(req, res)=>{

    try{
        const _id = req.params.id;
        const result = await Task.findById(_id);
        if(!result){
            res.status(404).send();
        }
        res.status(200).send(result);
    }catch(error){
        res.status(500).send(error);
    }

    // const _id = req.params.id;
    // Task.findById(_id).then((result)=>{
    //     if(!result){
    //         res.status(404).send();
    //     }
    //     res.status(200).send(result);
    // }).catch((error)=>{
    //     res.status(500).send(error);
    // })
});

router.patch('/tasks/:id', async(req, res) =>{
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = updates.every((item)=> allowedUpdates.includes(item));

    if(!isValidOperation){
        return res.status(400).send({'error':'Invalid Fields'});
    }

    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true});
        if(!task){
            //res.status(404).send('Task not found');
        }
        res.send(task);
    }catch(error){
        return res.status(400).send(error);
    }
});

router.delete('/tasks/:id', async(req, res) =>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task){
            res.status(404).send('Not able to delete this task!');
        }
        res.send(task);
    }catch(error){
        return res.status(400).send(error);
    }
});

module.exports = router;