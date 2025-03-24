import express, { Request, Response } from 'express';
import cors from 'cors';
import { postsRouter } from './routes/postsRouter.js';
// import { postsSvc } from './services/postsService';

const app = express();
const PORT = process.env.PORT || 5656;
// const recipes: object[] = [];

app.use(cors());
app.use(express.json());

app.use('/', postsRouter);

// app.post('/recipe', (req: Request, res: Response) => {
//   const recipe = req.body;
//   recipes.push(recipe);
//   console.log(req.body);
//   res.send(recipes);
// });

// app.post('/signup', (req: Request, res: Response))

// app.post('/login', (req: Request, res: Response))

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, TypeScript with Express!');
// });

// app.get('/status', (req: Request, res: Response) => {
//   const status = { Status: 'Running' };
//   res.send(status);
// });

// app.get('/recipes', (req: Request, res: Response) => {
//   const recipes: Array<object> = [
//     {
//       title: 'Jeyuk Bokkeum',
//       link: 'https://youtube.com/shorts/p_uT1w-sEeU?feature=share',
//     },
//     {
//       title: 'Potato Soup',
//       link: 'https://groceries.aldi.co.uk/en-GB/recipes/CA-iakmdQUmWo0p5BSM3wQ/Peanut-and-Sweet-Potato-Soup-with-Seasame-Halloumi',
//     },
//     {
//       title: 'Korean Stew',
//       link: 'https://youtube.com/shorts/5OtqbvbP8CE?si=oUOr7te_YEjPsN2h',
//     },
//     {
//       title: 'Japanese Curry',
//       link: 'https://youtube.com/shorts/m9xvO-RveX0?si=V_P2J6BwRSWINNwm',
//     },
//     {
//       title: 'Bibimbap',
//       link: 'https://youtube.com/shorts/hvOkB0qYHDc?si=fwURDFrTTptF7ggJ',
//     },
//     {
//       title: 'Pajeori',
//       link: 'https://mykoreankitchen.com/korean-spicy-green-onion-salad/',
//     },
//   ];
//   res.send(recipes);
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
