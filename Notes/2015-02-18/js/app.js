(function (window) {
	'use strict';

	var listOfTasks = [
		{ text: 'Taste JavaScript',
			done: true, editing: false },
		{ text: 'Buy a unicorn',
		  done: false, editing: false },
	];


	new Vue({
		el: '#todoapp',
		data: {
			"tasks": listOfTasks
		},
		methods: {
			remove: function(task){
				this.tasks.splice(this.tasks.indexOf(task), 1);
			},
			edit: function(task){
				task.editing = true;
			},
			unedit: function(task){
				task.editing = false;
			}
		}
	});

})(window);
