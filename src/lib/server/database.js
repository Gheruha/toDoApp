const db = new Map();

// @ts-ignore
export function GetTodos(userid) {
	if (!db.get(userid)) {
		db.set(userid, [
			{
				id: crypto.randomUUID(),
				description: 'Gym',
				done: false,
				setTimer: false,
			}
		]);
	}
	return db.get(userid);
}

// @ts-ignore
// db = {key=userid : value=[{todos , todos . . .}]}
export function addTodos(userid, description) {
	const todos = db.get(userid);

	todos.push({
		id: crypto.randomUUID(),
		description: description,
		done: false,
		setTimer: false,
	});
	console.log(todos);
}

// @ts-ignore
export function setTimer(userid, todoId){
	const todos = db.get(userid);
	// @ts-ignore
	const todoToUpdate = todos.find(todo => todo.id === todoId);

	if(todoToUpdate){
		todoToUpdate.setTimer = !todoToUpdate.setTimer;
	}

}

// @ts-ignore

export function deleteTodos(userid, itemToDelete) {
	const todos = db.get(userid);
	// @ts-ignore
	// So I take the todos and I say : Hey! I will put in you the findIndex function , you will use "item" as an parameter, after that you to go in this list and to find the id , but how? Simple ! item.id === itemToDelte(parameter from the function that will have the exact id you need to delete)
	const DeleteIndex = todos.findIndex((item) => item.id === itemToDelete);

	// Hey todos again! detele from you the DeleteIndex , only him !
	todos.splice(DeleteIndex, 1);
}
