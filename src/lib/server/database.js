const db = new Map();

// @ts-ignore
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

// @ts-ignore
// db = {key=userid : value=[{todos , todos . . .}]}
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

// @ts-ignore
export function setTimer(userid, todoId) {
	const todos = GetTodos(userid);
	// @ts-ignore
	const todoToUpdate = todos.find((todo) => todo.id === todoId);

	if (todoToUpdate) {
		todoToUpdate.setTimer = !todoToUpdate.setTimer;
	}
}

// @ts-ignore

export function deleteTodos(userid, itemToDelete) {
	const todos = GetTodos(userid);
	// @ts-ignore
	// So I take the todos and I say : Hey! I will put in you the findIndex
	// function , you will use "item" as an parameter, after that you to go in
	// this list and to find the id , but how? Simple ! item.id ===
	// itemToDelte(parameter from the function that will have the exact id you
	// need to delete)
	const DeleteIndex = todos.findIndex((item) => item.id === itemToDelete);

	// Hey todos again! detele from you the DeleteIndex , only him !
	todos.splice(DeleteIndex, 1);
}

// @ts-ignore
export function setClock(userid, todoid, clock) {
	const todos = GetTodos(userid);

	// @ts-ignore
	const todoIndex = todos.findIndex((todo) => todo.id === todoid);
	console.log(todoIndex);
	if (todoIndex) {
		todoIndex.clock = clock;
	} else {
		console.log('nothing');
	}
}
