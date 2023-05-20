import React, { useState } from "react";
import { AppContext, useAppContext } from "../context/appContext";
import Editar from "./Editar";

const Mostrar = ()=>{

     const {estudiantes, eliminarEstudiante}= useAppContext(AppContext)
    ///console.log(estudiantes);
    const [rowData, setRowData]= useState({})

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = (estudiante) => {
        //console.log('actualizando');
        setRowData(estudiante)
        setShow(true)
    };

    return(
        <>
        <table className="table table-striped table-hover mt-5">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {estudiantes.map((estudiante)=>(
                <tr key={estudiante.id}>
                    <td>{estudiante.nombre}</td>
                    <td>{estudiante.edad}</td>
                    <td>
                        <div className="btn-group">
                            <button onClick={()=>handleShow(estudiante)} className="btn btn-info"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button onClick={()=>{eliminarEstudiante(estudiante.id)}} className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </td>
                </tr> 
                   )) }
            </tbody>
        </table>
            
            <Editar show={show} onClose={handleClose} rowData={rowData}></Editar>
        </>
    );
}

export default Mostrar;