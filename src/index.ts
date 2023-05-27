import express, { Request, Response } from 'express'
import { registerSlashCommands, interactionsHandler } from './discord'

const PORT = process.env.PORT ?? '8080'

const app = express()

app.get('/', async (_: Request, res: Response) => {
  return res.status(200).send('Hello, World!')
})

const init = async () => {
  await registerSlashCommands()
}

const tryInit = () =>
  init()
    .then(() => console.log('app initialized'))
    .catch(() => {
      console.log('retrying...')
      setTimeout(() => {
        tryInit()
      }, 1000)
    })

tryInit()

app.post('/interactions', interactionsHandler)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
