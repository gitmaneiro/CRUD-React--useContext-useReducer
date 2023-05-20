import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import { CREATE, DELETE, UPDATE } from "./actions";

export const AppContext= createContext()

const initialState={
   estudiantes:[
        {id:1, nombre:'Juan Perez', edad:25},
        {id:2, nombre:'Ana Garcia', edad:28},
    ]
}

export const AppProvider=({children})=>{

    const [state, dispatch]= useReducer(reducer, initialState)

    const crearEstudiante=(estudiante)=> dispatch({type:CREATE, payload:estudiante})
    const actualizarEstudiante=(estudiante)=> dispatch({type:UPDATE, payload:estudiante})
    const eliminarEstudiante=(id)=> dispatch({type:DELETE, payload:id})


    return(
        <AppContext.Provider value={{
            estudiantes: state.estudiantes,
            crearEstudiante,
            actualizarEstudiante,
            eliminarEstudiante,
            dispatch
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext=()=>{
    return useContext(AppContext)
}