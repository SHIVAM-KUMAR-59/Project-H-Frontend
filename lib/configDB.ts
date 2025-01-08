import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGO_URI
<<<<<<< HEAD
=======
console.log('MONGODB_URI', MONGODB_URI)
>>>>>>> fb972fb5a73b870511ca743142d121d493cdd3f2

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

declare global {
  var mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  } | undefined;
}

let cached = global.mongoose as {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URI!, opts)
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default connectDB
