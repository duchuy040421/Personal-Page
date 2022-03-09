import db from "../utils/db.js";

export default {
    async findAll(){
        return db('personalweb.portfolio').select();
    }
}