import express from 'express'
import musicModel from "../models/music.model.js";
import reportModel from "../models/report.model.js";


const router = express.Router();

router.get('/',async function(req,res){
    res.render('elements/music',{
        layout: 'MusicBackground.hbs',
    });
});

router.get('/data/',async function(req,res){
    const data = await musicModel.getAll();
    res.json(data);
});

router.post('/report/', function(req,res){
    const entity ={
        song:req.body.songName,
        note:req.body.note
    }
    reportModel.addReport(entity);
});


export default router;