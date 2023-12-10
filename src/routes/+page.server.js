import * as db from '$lib/server/database';

// @ts-ignore
export function load({ cookies }) {
	const id = cookies.get('userid');

	if (!id) {
		cookies.set('userid', crypto.randomUUID(), { path: '/' });
	}

	return {
		todos: db.GetTodos(id) ?? []
	};
}

// @ts-ignore
export const actions = {
	// @ts-ignore
	createTodo: async ({ request, cookies }) => {
		const data = await request.formData();
		db.addTodos(cookies.get('userid'), data.get('description'));
	},
	// @ts-ignore
	deleteTodo: async ({ request, cookies }) => {
		const deleteData = await request.formData();
		db.deleteTodos(cookies.get('userid'), deleteData.get('id'));
	},

	// @ts-ignore
	setTodoTimer: async ({ request, cookies }) => {
		const todoToSetTimer = await request.formData();
		db.setTimer(cookies.get('userid'), todoToSetTimer.get('id'));
	}
};
