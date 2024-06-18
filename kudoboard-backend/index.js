const express = require('express')
const app = express()
const PORT = 3000
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my app!')
  })
  
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })

app.get('/card', async (req, res) => {
  // res.send('card');
  const cards = await prisma.Card.findMany();
  res.json(cards)
})
