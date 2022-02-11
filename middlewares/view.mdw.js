import { engine } from 'express-handlebars';
import hbs_sections from "express-handlebars-sections";

export default function (app){
    app.engine('.hbs', engine({
        extname:'.hbs',
        helpers: {
            section: hbs_sections(),
        }
    }));
    app.set('view engine', '.hbs');
    app.set('views', './views');
}