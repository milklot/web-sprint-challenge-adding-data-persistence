// build your `Task` model here
const db = require('../../data/dbConfig');

const getTasksArr = async () => {
	let tasks = await db("tasks")
    return tasks.map(task => {
        return {
            ...task,
            "task_completed": task['task_completed'] == 0 ? false : true
        }
    })
};

const addTask = async (newTask) => {
	const task = await db('tasks').insert(newTask);

	return task;
}

module.exports = {
	getTasksArr,
	addTask
};