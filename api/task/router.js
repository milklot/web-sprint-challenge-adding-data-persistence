// build your `/api/tasks` router here
const router = require('express').Router();
const model = require('./model');

router.get('/', async (req, res, next) => {
	try {
		const tasks = await model.getTasksArr();
		res.status(200).json(tasks);
	}
	catch(err) {
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	const task = req.body;

	if (!task.task_description) {
		return res.status(500).json({
			message: "missing task description field"
		});
	}
	else {
		try {
			const newTask = await model.addTask(task);
			res.status(201).json(newTask);
		}
		catch (err) {
			next(err);
		}
	}
});

module.exports = router;