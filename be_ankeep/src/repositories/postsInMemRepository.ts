import { Post } from '../types/Post';
import { PostsRepository } from '../types/PostsRepository';

const inMemoryPostsRepo = (): PostsRepository => {
  console.log('Creating database...');
  const posts: Post[] = [];

  async function addPost(post: Post): Promise<void> {
    posts.push(post);
    // maybe add date and sort by date added too?
  }

  async function getAllPosts(): Promise<Post[]> {
    return posts;
    // add date and sort by date added too?
  }
  return {
    addPost,
    getAllPosts,
  };
};

export const inMemoryDB = inMemoryPostsRepo();
