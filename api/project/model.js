// build your `Project` model here
const db = require('../../data/dbConfig');

const getProjectsArr = async () => {
	let projects =  await db('projects');
	return projects.map(project => {
        return {
            ...project,
            "project_completed": project['project_completed'] == 0 ? false : true
        }
    })
}

const addProject = async (newProject) => {
	const project = await db('projects').insert(newProject);
	return project;
}

module.exports = {
	getProjectsArr,
	addProject
};