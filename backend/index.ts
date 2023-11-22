import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(express.static(path.join(__dirname, '../../frontend/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})