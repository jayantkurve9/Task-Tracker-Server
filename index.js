const { getTodo, saveTodos, setTodoAsCompleted, deleteTodo } =  require('./todoController');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const myMiddleware = (req, res, next) => {
	console.log("In middleware");
	next();
}

app.get("/", (req, res) => {
	res.send("The Todos API");
});

app.get("/todos", (req, res) => {
	const todos = getTodo();
	res.send(todos);
});

app.post("/todos", (req, res) => {
	const todos = req.body;
	const todo = saveTodos(todos);
	res.send(todo);
});

app.post("/todos/:id/completed", (req, res) => {
	const completedTodo = setTodoAsCompleted(req.params.id);
	res.send(completedTodo);
});

app.delete("/todos/:id", (req,res) => {
	const deletedTodo = deleteTodo(req.params.id);
	console.log("Deleted todo....:", deletedTodo);
	res.send(deletedTodo);
});

app.listen(8080, () => {
	console.log("Listen on the port 8080...");
}); 	