import * as db from "$lib/server/database";

// @ts-ignore
export function load({ cookies }){
    const id = cookies.get("userid");
    
    if(!id){
        cookies.set("userid" , crypto.randomUUID() , {path : "/"});
    };

    return{
        todos: db.GetTodos(id) ?? [],
    }
}

// @ts-ignore
export const actions= {
    default:async({ request , cookies }) => {
        const data = await request.formData();
        
        db.addTodos(cookies.get("userid") , data.get("description"));
    }
}