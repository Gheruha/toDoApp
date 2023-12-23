// @ts-nocheck
const db = new Map();

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
	console.log(todos);
}

export function deleteTodos(userid, itemToDelete) {
	const todos = GetTodos(userid);
	const DeleteIndex = todos.findIndex((item) => item.id === itemToDelete);

	todos.splice(DeleteIndex, 1);
}

export function setTimer(userid, todoId) {
	const todos = GetTodos(userid);
	const todoToUpdate = todos.find((todo) => todo.id === todoId);

	if (todoToUpdate) {
		todoToUpdate.setTimer = !todoToUpdate.setTimer;
	}
}

export function setClockData(userid, todoid, hourData, minuteData) {
	const todos = GetTodos(userid);
	const todoIndex = todos.findIndex((todo) => todo.id === todoid);

	if (todoIndex !== -1) {
		todos[todoIndex].hour = hourData;
		todos[todoIndex].minute = minuteData;
	/*
		const intervalID = setInterval(() => {
			const now = new Date();
			const currentHour = now.getHours();
			const currentMinute = now.getMinutes();

			todos[todoIndex].minuteLeft = todos[todoIndex].minute - currentMinute;

			if (todos[todoIndex].hour == currentHour && todos[todoIndex].minute == currentMinute) {
				todos[todoIndex].notification = true;
				clearInterval(intervalID);
			}
		}, 1000);
	*/}
}
