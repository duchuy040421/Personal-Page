import db from "../utils/db.js";


export default {
    getAll(){
        return db('music').select();
    }
}