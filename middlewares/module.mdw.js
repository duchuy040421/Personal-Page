import configMdw from "./config.mdw.js";
import sessionMdw from "./sessions.mdw.js";
import viewMdw from "./view.mdw.js";
import routesMdw from "./routes.mdw.js";
import errorMdw from "./error.mdw.js";


export default function (app){
    configMdw(app);
    // sessionMdw(app);
    viewMdw(app);
    routesMdw(app);
    errorMdw(app);

    const port = 3000;
    app.listen(port, function(){
        console.log(`Personal app listening on port ${port}`)
    })
}