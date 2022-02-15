import db from "../utils/db.js";


export default {
    getAll(){
        return db('personalweb.music').select();
    }
}