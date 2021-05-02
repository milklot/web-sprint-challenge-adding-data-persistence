// build your `Resource` model here
const db = require('../../data/dbConfig');

const resourcesArr = async () => {
	return db('resources')
}

const addResource = async (newResource) => {
	const resource = await db('resources').insert(newResource);
	return resource;
}

module.exports = {
	resourcesArr,
	addResource
}