import express, { Request, Response } from 'express'

const PORT = process.env.PORT ?? '8080'

const app = express()

app.get('/', async (_: Request, res: Response) => {
  return res.status(200).send('Hello, World!')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
