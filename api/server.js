// build your server here and require it from index.js
const express = require('express');
const taskRouter = require('./task/router')
const resourceRouter = require('./resource/router');
const projectRouter = require('./project/router');

const server = express();
server.use(express.json());

server.use('/api/tasks', taskRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/projects', projectRouter);


server.get('/', (req, res) => {
	res.status(200).json({
		message: 'no worries, we are online'
	})
})

server.use((err, req, res, next) => {
	console.log(err)

	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server;