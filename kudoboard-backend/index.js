const express = require('express')
const app = express()
const PORT = 3000
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const cors = require( 'cors');

app.use(express.json());
app.use(cors());
/*CREATE A BOARD IN THE DATABASE*/
app.post('/board', async (req, res) => {
  const {id, title, category, author} = req.body;
  const newBoard = await prisma.board.create(
    {
    data: {
    id,
    title,
    category,
    author,
    }
  });
  res.status(201).json(newBoard)
});
/* ATTEMPTING TO MAKE LINKED CARDS*/
app.post('/board/cards', async (req, res) => {
  const {id, comment, author, boardId} = req.body;
  const newCard = await prisma.card.create({
    data: {
      id, 
      comment, 
      author,
      boardId
    }
  })
  res.status(201).json(newCard)
});
/*CALLS FOR A SPECIFIC BOARD BY ID*/
app.get('/board/:id', async(req, res) => {
  const {id} = req.params
  const board = await prisma.board.findUnique(
    {
      where: {id:parseInt(id)},
    });
  res.status(200).json(board);
});
/*GETTING ALL BOARDS OR ALL CARDS */
app.get('/board', async (req, res) => {
  const boards = await prisma.board.findMany();
  res.json(boards)
});
app.get('/card', async (req, res) => {
  const cards = await prisma.Card.findMany();
  res.json(cards)
});
/*DEFAULT SCREEN*/
app.get('/', (req, res) => {
    res.send(`
    <html>
      <head>
        <title>Adopt-a-Pet</title>
      </head>
      <body>
        <h1>Hello, World!</h1>
        <p>Welcome to my server.</p>
      </body>
    </html>
  `)
  });
/*SET-UP*/
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  });