import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.get('/recipes', (req: Request, res: Response) => {
  const recipes: object = {
    jeyukBokkeum: 'https://youtube.com/shorts/p_uT1w-sEeU?feature=share',
    potatoSoup: 'https://groceries.aldi.co.uk/en-GB/recipes/CA-iakmdQUmWo0p5BSM3wQ/Peanut-and-Sweet-Potato-Soup-with-Seasame-Halloumi',
    koreanStew: 'https://youtube.com/shorts/5OtqbvbP8CE?si=oUOr7te_YEjPsN2h',
    japaneseCurry: 'https://youtube.com/shorts/m9xvO-RveX0?si=V_P2J6BwRSWINNwm',
    bibimbap: 'https://youtube.com/shorts/hvOkB0qYHDc?si=fwURDFrTTptF7ggJ',
  };
  res.send(recipes);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
