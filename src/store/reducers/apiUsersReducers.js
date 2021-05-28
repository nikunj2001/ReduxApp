import React from 'react'
const initState=[{
        allUsers:[]
}
]
const apiUsersReducers = (state=initState,action) => {
    switch(action.type){
        case 'STORE_USERS':
            return {allUsers:action.payload}
        default:
            return state
    }
    return (
        <div>
            
        </div>
    )
}

export default apiUsersReducers
