import React, { useState } from "react";
import { AppContext, useAppContext } from "../context/appContext";


const Crear = ()=>{

    const {crearEstudiante}= useAppContext(AppContext)

    const [nombre, setNombre]= useState('')
    const [edad, setEdad]= useState('')

    const enviarDatos= (e)=>{
        e.preventDefault()
        //console.log(`Nombre:${nombre} - Edad:${edad}`);
        crearEstudiante({id:Date.now, nombre:nombre, edad:edad })
        setNombre('')
        setEdad('')

    }


    return(
        <form onSubmit={enviarDatos}>
           <div className="form-floating mb-3">
                <input type="text" value={nombre} name="nombre" onChange={(e)=>setNombre(e.target.value)} className="form-control" id="floatingInput" placeholder="Nombre"/>
                <label>Nombre</label>
            </div>
            <div className="form-floating">
                <input type="number" value={edad} name="edad" onChange={(e)=>setEdad(e.target.value)} className="form-control" id="floatingPassword" placeholder="Edad"/>
                <label>Edad</label>
            </div>
            <div className="d-grid gap-2 mt-3">
                <button className="btn btn-primary" type="submit">Agregar</button>
            </div> 
        </form>
    );
}

export default Crear;