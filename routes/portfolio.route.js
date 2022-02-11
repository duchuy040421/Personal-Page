import express from 'express'

const router = express.Router();

router.get('/',function(req,res){
    res.render('elements/portfolio',{
       layout: 'main.hbs'
    });
});

export default router;