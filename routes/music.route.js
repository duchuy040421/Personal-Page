import express from 'express'

const router = express.Router();

router.get('/',function(req,res){
    res.render('elements/music',{
        layout: 'MusicBackground.hbs'
    });
});

export default router;