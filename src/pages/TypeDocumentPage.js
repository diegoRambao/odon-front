import React, { useEffect, useState } from 'react'
import NavBarDash from './../components/NavBarDash'
import { getAllTypeDocument, createTypeDocument, updateTypeDocument, deleteTypeDocument } from './../services/TypeDocument.service'

const TypeDocumentPage = () => {

    const [typeDocuments, setTypeDocuments] = useState([]);
    const [typeDocument, setTypeDocument] = useState({})

    const handleChange = (e) => {
        setTypeDocument({...typeDocument, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!typeDocument.id){
            createTypeDocument(typeDocument).then(({data})=>{
                getTypeDocuments()
                resetTypeDocument()
            })
        }else{
            updateTypeDocument(typeDocument).then(({data})=> {
                getTypeDocuments()
                resetTypeDocument()
            })
        }
    }
    const resetTypeDocument = () => setTypeDocument({})

    const modifyTypeDocument = (data) => {
        setTypeDocument(data)
    }
    const handleDelete = (data) => {
        if (window.confirm(`¿Estas seguro que quieres eliminar el tipo de documento ${data.name}?`)) {
            deleteTypeDocument(data).then(({data}) => {
                getTypeDocuments()
            })
        }
    }
    const getTypeDocuments = () =>{getAllTypeDocument().then(({data})=>{setTypeDocuments(data)})}

    useEffect(() => {
        getTypeDocuments()
    }, [])
    return(
        <div>
            <NavBarDash />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-7 mb-3">
                        <div className="card shadow-sm">
                            <div className="header-card">
                                <div className="container-title">
                                    <h3 className="title">Tipos de documentos</h3>
                                </div>
                            </div>
                            <div className="body-card mt-3">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Codigo</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col" style={{width: "84px"}}>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {typeDocuments.map((item)=>{
                                    return(
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.code}</td>
                                            <td>{item.name}</td>
                                            <td style={{width: "84px"}}>
                                                <a className="mr-2" onClick={() => modifyTypeDocument(item)}>
                                                    <i className="fa fa-edit"></i>
                                                </a>
                                                <a className="mr-2" onClick={() => handleDelete(item)}>
                                                    <i className="fa fa-trash-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                )})}
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card shadow-sm">
                            <div className="header-card">
                                <div className="container-title">
                                        <h3 className="title">Nuevo Tipo de documento</h3>
                                </div>
                            </div>
                            <div className="body-card mt-3">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <label>Codigo</label>
                                        <input name="code" id="code" onChange={handleChange} value={typeDocument.code || ''}/>
                                    </div>
                                    <div className="form-row">
                                        <label>Nombre</label>
                                        <input name="name" id="name" onChange={handleChange} value={typeDocument.name || ''}/>
                                    </div>
                                    <button className="btn-primary-d" type="submit">Guardar</button>
                                    <button className="btn-primary-d ml-3" type="button" onClick={resetTypeDocument}>Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypeDocumentPage