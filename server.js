import express from 'express'
import config from './config'
import apiRouter from './api'
import 'css-modules-require-hook/preset'
import path from 'path'
import serverRender from './serverRender'

const server = express()

server.set('view engine', 'ejs')

server.use(express.static('public'))

server.get('/*', (req, res) => {
  serverRender().then(({initialMarkup, initialData}) => {
    
    console.log('in server initialMarkup: ', initialMarkup)
    console.log('in server initialData: ', initialData)

    res.render('index', {initialMarkup, initialData})
  })
})

server.use('/api', apiRouter)

server.listen(config.port, () => {
  console.info(`Express listening on port ${config.port}`)
})