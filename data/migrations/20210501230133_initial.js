
exports.up = async function(knex) {

	await knex.schema.createTable('projects', (table) => {
		table.increments('project_id');
		table.text('project_name').notNull().unique();
		table.text('project_description').nullable();
		table.integer('project_completed').unsigned().defaultTo(0);
	})

	await knex.schema.createTable('resources', (table) => {
		table.increments('resource_id');
		table.text('resource_name').notNull().unique();
		table.text('resource_description').nullable();
	})

	await knex.schema.createTable('tasks', (table) => {
		table.increments('task_id');
		table.text('task_description').notNull();
		table.text('task_notes').nullable();
		table.integer('task_completed').unsigned().defaultTo(0);

		table.integer('project_id')
			.notNull()
			.unsigned()
			.references('project_id')
			.inTable('projects')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
	})

	await knex.schema.createTable('project_resources', (table) => {
		table.increments('pr_rs_id');

		table.integer('project_id')
			.notNull()
			.unsigned()
			.references('project_id')
			.inTable('projects')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');

		table.integer('resource_id')
			.notNull()
			.unsigned()
			.references('resource_id')
			.inTable('resources')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');

		table.integer('task_id')
			.notNull()
			.unsigned()
			.references('task_id')
			.inTable('tasks')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');
		
	})
  
};

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists('project_resources')
	await knex.schema.dropTableIfExists('tasks')
	await knex.schema.dropTableIfExists('resources')
	await knex.schema.dropTableIfExists('projects')
};
