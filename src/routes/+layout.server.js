//@ts-nocheck
import * as db from '$lib/server/database';

const key = 'userid';

// LOAD FUNCTION
export function load({ cookies }) {
	const id = cookies.get(key);

	if (!id) {
		cookies.set(key, crypto.randomUUID(), { path: '/' });
	}

	return { todos: db.GetTodos(id) ?? [] };
}
