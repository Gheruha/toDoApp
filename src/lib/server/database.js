// @ts-nocheck
const db = new Map();

export function GetTodos(userid) {
	const currentTime = new Date().toLocaleTimeString();
	if (!db.get(userid)) {
		db.set(userid, [
			{
				id: crypto.randomUUID(),
				description: 'Gym',
				done: false,
				setTimer: false,
				clock: currentTime
			}
		]);
	}
	return db.get(userid);
}

export function addTodos(userid, description) {
	const todos = GetTodos(userid);
	const currentTime = new Date().toLocaleTimeString();
	todos.push({
		id: crypto.randomUUID(),
		description: description,
		done: false,
		setTimer: false,
		clock: currentTime
	});
	console.log(todos);
}

export function setTimer(userid, todoId) {
	const todos = GetTodos(userid);
	const todoToUpdate = todos.find((todo) => todo.id === todoId);

	if (todoToUpdate) {
		todoToUpdate.setTimer = !todoToUpdate.setTimer;
	}
}

export function deleteTodos(userid, itemToDelete) {
	const todos = GetTodos(userid);
	const DeleteIndex = todos.findIndex((item) => item.id === itemToDelete);

	todos.splice(DeleteIndex, 1);
}

export function setClock(userid, todoid, clock) {
	const todos = GetTodos(userid);
	const todoIndex = todos.findIndex((todo) => todo.id === todoid);
	console.log(todoIndex);

	if (todoIndex) {
		todoIndex.clock = clock;
	} else {
		console.log('nothing');
	}
}
