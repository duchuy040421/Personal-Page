import db from "../utils/db.js";

export default {
    async addReport(entity){
        await db('report').insert(entity);
    }
}