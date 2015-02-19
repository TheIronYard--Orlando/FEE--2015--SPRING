(function (window) {
	'use strict';

  if ( !getTasks().length ){
		// Create some dummy tasks if none exist...
		// FIXME: remove when "create task" works...
		setTasks([
			{ text: 'Taste JavaScript',
				done: true, editing: false },
			{ text: 'Buy a unicorn',
			  done: false, editing: false },
		]);
	}

	new Vue({
		el: '#todoapp',
		data: {
			tasks: getTasks()
		},
		methods: {
			/**
			 * @param Object task to remove
			 */
			remove: function(task){
				this.tasks.splice(this.tasks.indexOf(task), 1);
				setTasks(this.tasks);
			},
			/**
			 * @param Object task to edit
			 */
			edit: function(task){
				task.editing = true;
			},
			/**
			 * @param Object task to save
			 */
			save: function(task){
				task.editing = false;
				setTasks(this.tasks);
			}
		}
	}); // END new Vue

	/**
	 * @returns Array
	 */
	function getTasks(){
		return JSON.parse(localStorage.getItem('tasks')) || [ ];
	}

	/**
	 * @param Array of Object representing tasks
	 */
	function setTasks(tasks){
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}

})(window);
