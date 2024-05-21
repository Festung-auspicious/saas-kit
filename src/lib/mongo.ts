
import { Db, MongoClient } from 'mongodb';
import mongoose from "mongoose";

const MONGODB_URI : string = process.env.MONGODB_URI  ??  "";
const MONGODB_DB : string = process.env.DB_NAME ?? "Shop";

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!MONGODB_DB) {
    throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}
//Using Mongodb for Auth adpter
class MongoConnection {
    private static instance: MongoConnection;
    public db: Db | undefined;
    private client: MongoClient | undefined;
    private clientPromise : Promise<MongoClient>;
    private constructor() {
        const opts : object = {};

        this.client = new MongoClient(MONGODB_URI, opts);
        this.clientPromise = this.client.connect();

    }


    static async getInstance() {
        if (!this.instance) {
            this.instance = new MongoConnection();
            await this.instance.connect();
        }
        return this.instance.clientPromise
    }

    async connect() {
        if (this.db) {
            return;
        }
        this.db = this.client?.db(MONGODB_DB);
    }
}

const clientPromise= MongoConnection.getInstance();
export default clientPromise ;


declare global {
  var mongoose: any; // This must be a `var` and not a `let / const`
}


let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName:process.env.DB_NAME
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
