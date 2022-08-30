const express = require('express');

const app =  express();
const port = process.env.PORT || 3000;

require('./db/mongoose.js');
const userRoutes = require('./routers/user');
const taskRoutes = require('./routers/task');

// app.use((req, res, next)=>{
//     res.status(503).send('Temporary Unavailabel!');
// });

app.use(express.json());
app.use(userRoutes);
app.use(taskRoutes);

app.listen(port, ()=>{
    console.log('server is running on port: '+ port);
});