// build your `/api/projects` router here
const router = require('express').Router();
const model = require('./model');

router.get('/', async (req, res, next) => {
	try {
		const projects = await model.getProjectsArr();
		res.status(200).json(projects)
	}
	catch(err) {
		next(err);
	}
})

router.post('/', async (req, res, next) => {
	const project = req.body
	
	if (!project.project_name) {
		return res.status(500).json({
			message: "missing project name"
		})
	}
	else {
		try {
			const newProject = await model.addProject(project);
			res.status(201).json(newProject);
		}
		catch(err) {
			next(err)
		}
	}
})

module.exports = router;