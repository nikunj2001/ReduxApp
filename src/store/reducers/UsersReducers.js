import React from 'react'
const initState={
    
    users:[
        {id:'1',name:"Nikunj Gupta",address:"India"}
    ]
}
const UsersReducers = (state=initState,action) => {
        switch(action.type){
            case 'ADD_USER':
                return {users:[action.payload,...state.users]}
            case 'DELETE_USER':
                const newUsers= state.users.filter(user=>user.id!==action.id)    
                    return {users:newUsers}
            default:
                return state;
        }
}

export default UsersReducers
