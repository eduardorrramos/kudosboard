const express = require('express')
const app = express()
const PORT = 3000
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
// const cors = require('cors')
const cors = require( 'cors');

app.use(express.json());
app.use(cors());
//  board has id name 
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

app.get('/board/:id', async(req, res) => {
  const {id} = req.params
  const board = await prisma.board.findUnique(
    {
      where: {id:parseInt(id)},
    });
  res.status(200).json(board);
});
// app.get('/card/:id', async(req, res) => {
//   const {id} = req.params
//   const card = await prisma.Card.findUnique(
//     {
//       where: {boardId:parseInt(id)},
//     });
//   res.status(200).json(card);
// });
/*GETTING ALL BOARDS OR ALL CARDS */
app.get('/board', async (req, res) => {
  // res.send('card');
  const boards = await prisma.board.findMany();
  res.json(boards)
});
app.get('/card', async (req, res) => {
  // res.send('card');
  const cards = await prisma.Card.findMany();
  res.json(cards)
});


/* DOES NOT WORK CAN NOT FETCH ALL CARDS*/
// app.get('/board/:category', async (req, res) => {
//   // res.send('card');
//   const cards = await prisma.card.findMany();
//   res.json(cards)
// });
/* FILTERING RESULTS WITH QUERY PARAMETERS*/
// app.get('/board/:name', async(req, res) => {
//   const {names} = req.params; 
//   const board = await prisma.board.findUnique(
//     {
//       where: {name:parseInt(names)},
//     });
//   res.status(200).json(board);
// });
//   let query = 'SELECT * FROM board'
//   const queryParams = []
//   const conditions = []
// if (req.query.type) {
//   queryParams.push(req.query.type)
//   conditions.push('type = ${queryParams.length}')
// }

//   const {name} = req.params
//   const board = await prisma.board.findUnique(
//     {
//       where: {name:parseInt(name)},
//     });






// app.post('/board/:id/card', async (req, res) => {
//   const {title, comment, author, boardId} = req.body
//   const newCard = await prisma.board.create({
//     data: {
//     id,
//     title, 
//     comment,
//     author,
//     boardId
//     }
//   })
//   cards.push(newCard)
//   res.status(201).json(newCard)
// });

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
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  });





  /* res.send('welcome to my world')

/*
// cards/id board/id
// button to fetch board and its cards, use get board and it will 
// all cards that have that same board id
// THINKING ok have button, fetch request and ${} the specific cardid
// and then have that plugged the same into backedn

/*example get something form movie 500 in api call SPECIFIC FROM ARRAY 
:id denotes variable, /cards instead for my array
// app.get('/users/:id', function(req, res) { 
//   res.send('User ID: ' + req.params.id
//          or ('User ID: ${req.params.id})
// );
// })
// app.get('/users/:cat/dogs/:dogid', function(req, res) { 
//          or ('User ID: ${req.params.cat})
// );
//  PRISMA PRISMA PRISMA PRISMA PRISMA PRISMA PRISMA PRISMA PRISMA
// button, onclick-handler, fetch or requests from backend
// using get, 

// if someone makes a {get/post/delete} at this location, we send
// the following back

// get - get info from server, post - changing data or creating data
// put - updating existing data, delete - delete resource on server

// app.get('/chosencard', async (req, res) => {
//   // res.send('card');
//   const cards = await prisma.Card.findMany();
//   res.json(cards)
//   res.send('You clicked on a card!') */


// app.get('/cards', (req, res) => {
//   res.json(cards)
// });
// app.get('/cards/:id', (req, res) => {
//   const id = parseInt(req.params.id)
//   console.log(id)
//   const card = cards.find(card =>card.id ===id)
//   if (card) {
//     res.json(card)
//   }
//   else {
//     res.status(404).send('card not here')
//   }
// });
/*CREATES and GETS BOARD/S in DATABASE show up on board 
insomnia and also in npx prisma studio*/


// let cards = [
//   {id:1, title: "First Card", comment: "This is my first card.", author: "Eduardo Ramos", boardId: 1},
//   {id:2, title: "First Card", comment: "This is my first card.", author: "Eduardo Ramos", boardId: 1}
// ]