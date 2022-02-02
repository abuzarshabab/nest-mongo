import { Injectable } from '@nestjs/common';
import { dbInstance as db } from '../db/dbModule';
import { ObjectId } from 'mongodb';

class userInsert {
  name: string;
  email: string;
  password: string;
}

const tableName = 'mongo';

@Injectable()
export class CrudService {
  async create(body: userInsert) {
    try {
      return await db().collection(tableName).insertOne(body);
    } catch (err) {
      console.log('error', err);
    }
  }

  async findAll() {
    try {
      return await db().collection(tableName).find().toArray();
    } catch (err) {
      console.log('error', err);
    }
  }

  async findOne(id: number) {
    const _id = new ObjectId(id);

    try {
      return await db().collection(tableName).findOne({ _id });
    } catch (err) {
      console.log('error', err);
    }
  }
}
