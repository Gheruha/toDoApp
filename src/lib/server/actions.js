//@ts-nocheck
import * as db from '$lib/server/database';
const key = 'userid';

export const createTodo = async ({ request, cookies }) => {
	const data = await request.formData();
	db.addTodos(cookies.get(key), data.get('description'));
};

export const deleteTodo = async ({ request, cookies }) => {
	const deleteData = await request.formData();
	db.deleteTodos(cookies.get(key), deleteData.get('id'));
};

export const setTodoTimer = async ({ request, cookies }) => {
	const todoToSetTimer = await request.formData();
	db.setTimer(cookies.get(key), todoToSetTimer.get('id'));
};

export const sendClockData = async ({ request, cookies }) => {
	const timerData = await request.formData();
	db.setClockData(
		cookies.get(key),
		timerData.get('todoid'),
		+timerData.get('hourData'),
		+timerData.get('minuteData')
	);
};

export const setDone = async ({ request, cookies }) => {
	const todoData = await request.formData();
	db.setTodoDone(cookies.get(key), todoData.get('id'));
};
