import express from 'express'
import portfolioModel from "../models/portfolio.model.js";


const router = express.Router();

router.get('/',async function(req,res){
    const list = await portfolioModel.findAll();

    res.render('elements/portfolio',{
        layout: 'main.hbs',
        list
    });
});

export default router;