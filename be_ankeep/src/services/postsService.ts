import winston from 'winston';
import { PostsRepository } from '../types/PostsRepository';
import { PostsService } from '../types/PostsService';
import { Post } from '../types/Post';
import { mongoDB } from '../repositories/postsMongoDBRepo.js';
import { logger } from '../utils/logger.js';

const postsService = (
  db: PostsRepository,
  logger: winston.Logger,
): PostsService => {
  logger.info('creating service');
  async function addPost(post: Post): Promise<void> {
    try {
      await db.addPost(post);
      // check if event ID/ unique identifier already exists?
    } catch (e: any) {
      throw new Error(
        `Creating new post failed in DB with error: '${e.message}'`,
      );
    }
  }
  async function getAllPosts(): Promise<Post[]> {
    return await db.getAllPosts();
  }
  return {
    addPost,
    getAllPosts,
  };
};

export const postsSvc = postsService(mongoDB, logger);
