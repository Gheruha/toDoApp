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