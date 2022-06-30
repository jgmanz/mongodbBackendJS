import { ObjectId } from "mongodb";
import { Mongodb } from "../common/mongodb.js";

export class itprofessionalController {
    
    collectionName = 'it-professional';
    async findById(id) {
        console.log(id);
        const mongodb = new Mongodb();
        const data = await mongodb.getData(this.collectionName, { _id: ObjectId(id) });
        return data;
    }
    async findAll() {
        const mongodb = new Mongodb();
        const data = await mongodb.getData(this.collectionName);
        return data;
    }
    async save(body) {
        const mongodb = new Mongodb();
        const data = await mongodb.saveData(this.collectionName, body);
        response.send(data);

    }
    async save(body) {
        const mongodb = new Mongodb();
        const data = await mongodb.saveData(this.collectionName, body);
        response.send(data);

    }
}