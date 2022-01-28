import { engine } from 'express-handlebars';

export default function (app){
    app.engine('hbs', engine());
    app.set('view engine', 'hbs');
    app.set('views', './views');
}