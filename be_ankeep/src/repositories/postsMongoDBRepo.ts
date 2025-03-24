import { Post } from '../types/Post';
import { PostsRepository } from '../types/PostsRepository';
import { logger } from '../utils/logger.js';
import { MongoClient } from 'mongodb';
import '../utils/loadEnvironment.js';

const mongodbPostsRepo = async (): Promise<PostsRepository> => {
  console.log('Creating database...');
  const connectionString = process.env.ATLAS_URI || '';
  const client = new MongoClient(connectionString);
  let conn;
  let mongoDb: any;
  try {
    conn = await client.connect();
    mongoDb = conn.db('posts');
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!',
    );
  } catch (e) {
    logger.error('Problem establishing DB connection: ', e);
  }

  async function addPost(post: Post): Promise<void> {
    try {
      console.log(post);
      const result = await mongoDb.collection('posts').insertOne(post);
      logger.info(`A new post was inserted with _id: ${result.insertedId}`);
    } catch (e) {
      logger.error('Problem establishing DB connection: ', e);
    }
    // posts.push(post);
    // maybe add date and sort by date added too?
  }

  async function getAllPosts(): Promise<Post[]> {
    logger.info('Gettings posts');
    const posts = await mongoDb
      .collection('posts')
      .find({})
      .limit(50)
      .toArray();
    logger.info(posts);
    return posts as any;
    // return posts;
    // add date and sort by date added too?
  }
  return {
    addPost,
    getAllPosts,
  };
};

export const mongoDB: PostsRepository = await mongodbPostsRepo();
