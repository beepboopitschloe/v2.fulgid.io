const { parse } = require('url')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000

app.prepare()
  .then(() => {
    const server = express()

    server.use('/static', express.static('static'))

    server.get('/posts', (req, res) => {
      return app.render(req, res, '/')
    })

    server.get('/post/:slug', (req, res) => {
      const queryParams = {
        slug: req.params.slug,
        type: req.params.type
      }
      return app.render(req, res, '/post/details', queryParams)
    })

    server.get('*', (req, res) => handle(req, res, parse(req.url, true)))

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
