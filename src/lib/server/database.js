// @ts-nocheck
const db = new Map();

// GET TODOS
export function GetTodos(userid) {
	if (!db.get(userid)) {
		db.set(userid, [
			{
				id: crypto.randomUUID(),
				description: 'Gym',
				done: false,
				setTimer: false,
				hour: 0,
				minute: 0,
				notification: false,
				hourLeft: 0,
				minuteLeft: 0
			}
		]);
	}
	return db.get(userid);
}

// ADD TODOS
export function addTodos(userid, description) {
	const todos = GetTodos(userid);
	todos.push({
		id: crypto.randomUUID(),
		description: description,
		done: false,
		setTimer: false,
		hour: 0,
		minute: 0,
		notification: false,
		hourLeft: 0,
		minuteLeft: 0
	});
}

// DELETE TODOS
export function deleteTodos(userid, itemToDelete) {
	const todos = GetTodos(userid);
	const DeleteIndex = todos.findIndex((item) => item.id === itemToDelete);

	todos.splice(DeleteIndex, 1);
}

// SET TIMER
export function setTimer(userid, todoId) {
	const todos = GetTodos(userid);
	const todoToUpdate = todos.find((todo) => todo.id === todoId);

	if (todoToUpdate) {
		todoToUpdate.setTimer = !todoToUpdate.setTimer;
	}
}

// SET CLOCK DATA , NOTIFICATION
export function setClockData(userid, todoid, hourData, minuteData) {
	let todos = GetTodos(userid);
	const todoIndex = todos.findIndex((todo) => todo.id === todoid);
	if (todoIndex === -1) return; // Guard / Protecting / I check the preconditsion ()

	todos[todoIndex].hour = hourData;
	todos[todoIndex].minute = minuteData;
	todos[todoIndex].elapsed = 0;

	const intervalID = setInterval(() => {
		const now = new Date();
		const currentHour = now.getHours();
		const currentMinute = now.getMinutes();
		todos[todoIndex].elapsed = todos[todoIndex].elapsed + 1;

		if (todos[todoIndex].hour == currentHour && todos[todoIndex].minute == currentMinute) {
			todos[todoIndex].notification = true;
			todos[todoIndex].elapsed = 123;
			clearInterval(intervalID);
		}
	}, 500);
}

// SET TODOS DONE
export function setTodoDone(userid, todoid) {
	const todos = GetTodos(userid);
	const todoIndex = todos.find((todo) => todo.id === todoid);

	if (todoIndex === -1) return;
	todoIndex.done = !todoIndex.done;
}