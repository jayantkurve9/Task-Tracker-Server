const todosData = require('./sampleData');

const getTodo = () => {
	return todosData;
};

const saveTodos = (todos) => {
	const mappedTodos = todos.map(todo => {
		const randomId = Math.random().toString(16).slice(2, 9);
		return {
			_id: randomId,
			text: todo,
			isCompleted: false,
			createdAt: new Date().toLocaleString()
		}
	});
	todosData.push(...mappedTodos);
	return mappedTodos;
}

const setTodoAsCompleted = (id) => {
	let completedTodo;
	todosData.forEach(todo => {
		if (todo._id === id) {
			todo.isCompleted = true;
			completedTodo = todo;
		}
	})
	return completedTodo;
}

const deleteTodo = (id) => {
	let deletedTodo;
	todosData.forEach((todo, index) => {
		if (todo._id === id) {
			deletedTodo = todo;
			todosData.splice(index,1);
		}
	})
	return deletedTodo;
}

module.exports = {
	getTodo,
	saveTodos,
	deleteTodo,
	setTodoAsCompleted
}
