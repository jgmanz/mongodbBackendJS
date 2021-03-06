
import { MongoClient, ObjectId } from "mongodb";
export class Mongodb {
    // client = new MongoClient();
    database_name = 'itrrhh';
    db_url = "mongodb://localhost:27017/itrrhh";
    async getData(collection, parms) {
        const conn = await MongoClient.connect(this.db_url);
        return await conn.db(this.database_name)
            .collection(collection)
            .find(parms).toArray();
    }
    async saveData(collection, object) {
        const conn = await MongoClient.connect(this.db_url);
        return await conn.db(this.database_name).collection(collection).insertOne(object)
    }
    async updateData(collection, id, object) {
        const conn = await MongoClient.connect(this.db_url);
        return await conn.db(this.database_name).collection(collection)
            .updateOne(
                { _id: ObjectId(id) },
                { $set: object }
            );
    }

    async deleteData(collection, id) {
        const conn = await MongoClient.connect(this.db_url);
        return await conn.db(this.database_name).collection(collection)
            .deleteOne({_id: ObjectId(id)})
    }

}