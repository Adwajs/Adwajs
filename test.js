const Server = require('./index')

const server = new Server()

server.route('/test', 'get', (req, res, next) => {
   res.send('middwares are working')
})

server.route('/', 'get', (req, res, next) => {
   res.json({ messsage: 'welcome to Adwa.js' })
})

server.listen({ port: 6000 }, address =>
   console.log('server running on', address)
)
