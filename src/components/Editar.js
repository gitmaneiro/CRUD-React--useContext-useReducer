import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, FormGroup } from "react-bootstrap";
import { AppContext, useAppContext } from "../context/appContext";

///modal de editar

const Editar = ({show, onClose, rowData})=>{

      const {actualizarEstudiante}=useAppContext(AppContext)

      const {nombre, edad}= rowData

      const [formData, setFormData]= useState({
        id:'',
        nombre:'',
        edad:''
      })

      const llenarDatos=(key, value)=>{

          setFormData({
            ...formData, [key]:value
          })
         ///// console.log(formData)
      }

      const actualizarDatos=(e)=>{
          e.preventDefault()

          actualizarEstudiante(formData)
          ///console.log(formData);
          onClose()
      }

      useEffect(()=>{
          setFormData(rowData)

      }, [rowData])

    return(
        <>
    <form>
      <Modal show={show} onHide={onClose}>
        <Modal.Header className="bg-info" closeButton>
          <Modal.Title>Actualizar Estudiante</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group className='mb-3'>
                <Form.Control type="text" name="nombre" defaultValue={nombre} onChange={e=> llenarDatos('nombre', e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3'>
            <Form.Control type="number" name="edad" defaultValue={edad} onChange={e=> llenarDatos('edad', e.target.value)}></Form.Control>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={actualizarDatos}>
            Actualizar
          </Button>
        </Modal.Footer>
      </Modal>
      </form>
    </>
   
    );
}

export default Editar;