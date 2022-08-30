const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/user');

const router = new express.Router();
/* User API's */
router.post('/users/login', async (req, res)=>{
    try{
        const user = await User.findUserByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.status(200).send({user, token});
    }catch(error){
        res.status(400).send(error);
    }
});

router.post('/users/logout', auth, async(req, res) => {
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token;
        });
        await req.user.save();
        res.send();
    }catch(e){
        res.status(500).send();
    }
});

router.get('/users/logoutAllUsers', auth, async(req, res) => {
    try{
        req.user.tokens = [];
        await req.user.save();
        res.send();
    }catch(e){
        res.status(500).send();
    }
});

router.post('/createUser', async(req, res) => {
    const user = new User(req.body);
    try{
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({user, token}); // 201 means created and 200 means ok
    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
    // user.save().then((result)=>{
    //     res.send(user);
    // }).catch((error)=>{
    //     res.status(400).send(error);
    // })
})

router.get('/users', auth, async(req, res)=>{
    try{
        const result = await User.find({});
        res.status(200).send(result);
    }catch(error){
        res.status(500).send(error);
    }

    // User.find({}).then((result)=>{
    //     res.status(200).send(result);
    // }).catch((error)=>{
    //     res.status(500).send(error);
    // })
});

router.get('/users/me', auth, async(req, res)=>{
   res.send(req.user);
});

router.get('/users/:id', async(req, res)=>{
    try{
        const _id = req.params.id;
        const result = await User.findById(_id);
        if(!result){
            res.status(404).send();
        }
        res.status(200).send(result);
    }catch(error){
        res.status(500).send(error);
    }

    // User.findById(_id).then((result)=>{
    //     if(!result){
    //         res.status(404).send();
    //     }
    //     res.status(200).send(result);
    // }).catch((error)=>{
    //     res.status(500).send(error);
    // })
});

router.patch('/users/:id', async(req, res) =>{
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'age', 'password'];
    const isValidOperation = updates.every((item)=> allowedUpdates.includes(item));

    if(!isValidOperation){
        return res.status(400).send({'error':'Invalid Fields'});
    }

    try{
        const user = await User.findById(req.params.id);
        updates.forEach((item)=>{
            user[item] = req.body[item];
        });

        await user.save();
       // const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true});
        if(!user){
            res.status(404).send('User not found');
        }
        res.send(user);
    }catch(error){
        return res.status(400).send(error);
    }
});

router.delete('/users/:id', async(req, res) =>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            res.status(404).send('Not able to delete this user!');
        }
        res.send(user);
    }catch(error){
        return res.status(400).send(error);
    }
})

module.exports = router;