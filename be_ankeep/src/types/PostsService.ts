import { Post } from './Post';

export interface PostsService {
  addPost(post: Post): Promise<void>;
  getAllPosts(): Promise<Post[]>;
}
