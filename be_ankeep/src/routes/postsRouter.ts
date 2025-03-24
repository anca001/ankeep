import express, { Request, Response } from 'express';
import { postsSvc } from '../services/postsService.js';

export const postsRouter = express.Router();

postsRouter.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is an app built with Express!');
});

postsRouter.get('/posts', async (req: Request, res: Response) => {
  // eventService. <- add postsService and call it here

  res.send(await postsSvc.getAllPosts()).status(200);
});

// get latest posts
// get one post by ID?

postsRouter.post('/posts', (req: Request, res: Response) => {
  try {
    postsSvc.addPost(req.body);
  } catch (e: any) {
    throw new Error(
      `Creating new post failed in Service with error: ${e.message}`,
    );
  }
  // add try catch in case db fails?
  res.send(200);
});

postsRouter.get('/status', (req: Request, res: Response) => {
  const status = { Status: 'Running' };
  res.send(status);
});
