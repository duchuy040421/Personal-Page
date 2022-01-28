
export default function (app){
    app.get('/err',function (req,res){
        throw new Error('Error!');
    });

    app.use(function(req,res,next){
       res.json('404');
    });

    app.use(function (err,req,res,next){
        console.error(err.stack);
        res.json('505');
    })
}
