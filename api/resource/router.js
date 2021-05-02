// build your `/api/resources` router here
const router = require('express').Router();
const model = require('./model');

router.get('/', async (req, res, next) => {
	try {
		const resourceArr = await model.resourcesArr();
		res.status(200).json(resourceArr);
	}
	catch (err) {
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	const resource = req.body;

	if (!resource.resource_name) {
		return res.status(500).json({
			message: "missing name field"
		})
	}
	else {
		try {
			const newResource = await model.addResource(resource);
			res.status(201).json(newResource);
		}
		catch(err) {
			next(err);
		}
	}
});

module.exports = router;