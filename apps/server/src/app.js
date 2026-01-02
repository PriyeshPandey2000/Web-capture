import express from 'express';


import screenshot from './api/routes/screenshot.routes.js'

const app=express();
app.use(express.json());
app.use('/api',screenshot);

app.get('/',(req,res)=>{
    res.send("server runningg");
})

export {app};