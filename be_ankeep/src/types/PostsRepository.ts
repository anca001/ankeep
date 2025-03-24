import { Post } from './Post';

export interface PostsRepository {
  addPost(post: Post): Promise<void>;
  getAllPosts(): Promise<Post[]>;
}
