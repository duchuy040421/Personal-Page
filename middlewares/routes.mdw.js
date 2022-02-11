import portfolioRoute from '../routes/portfolio.route.js'
import musicRoute from '../routes/music.route.js'

export default function (app){
    app.get('/', function(req,res){
        res.render('home',{
            layout: 'main.hbs'
        });
    });

    app.use('/portfolio',portfolioRoute);
    app.use('/music',musicRoute);
}