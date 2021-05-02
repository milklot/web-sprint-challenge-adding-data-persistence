// start your server here
const server = require('./api/server');

const port = process.env.PORT || 4000;
const lh = 'http://localhost:';

server.listen(port, () => {
	console.log(`Running at ${lh}${port}`)
});