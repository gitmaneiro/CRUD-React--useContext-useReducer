import { CREATE, UPDATE, DELETE } from "./actions"


const reducer= (state, action)=>{
    switch (action.type) {
        case CREATE: {
            return {
                ...state, 
                        estudiantes:[...state.estudiantes, action.payload]
            }
            
        }

        case UPDATE: {
            return {
                ...state, 
                        estudiantes: state.estudiantes.map((estudiante)=>{
                            return (estudiante.id=== action.payload.id) ? action.payload : estudiante
                })
            }
        }
            
        case DELETE: {
            return {
                ...state, 
                        estudiantes: state.estudiantes.filter((estudiante)=>{
                            return estudiante.id !== action.payload
                })
            }
        }   
    
        default:
            return state
    }
}



export default reducer