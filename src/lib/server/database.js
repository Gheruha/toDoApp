const db = new Map();

// @ts-ignore
export function GetTodos(userid){

    if(!db.get(userid)){
        db.set(userid, [{
            id:crypto.randomUUID(),
            description:"Gym",
            done:false
        }])
    }
    return db.get(userid);
}

// @ts-ignore
// db = {key=userid : value=[{todos , todos . . .}]}
export function addTodos(userid , description){

    const todos = db.get(userid);
    
    todos.push({
        id: crypto.randomUUID() ,
        description: description , 
        done: false,
    })
}

// first let's have the todos in our hand
// @ts-ignore

export function deleteTodos(userid , itemToDelete){
    const todos = db.get(userid);
    // @ts-ignore
    // So I take the todos and I say : Hey! I will put in you the findIndex function , you will use "item" as an parameter, after that you to go in this list and to find the id , but how? Simple ! item.id === itemToDelte(parameter from the function that will have the exact id you need to delete)
    const DeleteIndex = todos.findIndex(item => item.id === itemToDelete);

    todos.splice(DeleteIndex, 1);
}