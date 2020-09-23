import React, { useEffect, useState } from 'react'
import NavBarDash from './../components/NavBarDash'
import { getAllSpecialty, createSpecialty, updateSpecialty, deleteSpecialty } from './../services/Specialty.service'

const SpecialtyPage = () => {

    const [specialties, setSpecialties] = useState([]);
    const [specialty, setSpecialty] = useState({})

    const handleChange = (e) => {
        setSpecialty({...specialty, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!specialty.id){
            createSpecialty(specialty).then(({data})=>{
                getSpecialties()
                resetSpecialty()
            })
        }else{
            updateSpecialty(specialty).then(({data})=> {
                getSpecialties()
                resetSpecialty()
            })
        }
    }
    const resetSpecialty = () => setSpecialty({})

    const modifyGender = (data) => {
        setSpecialty(data)
    }
    const handleDelete = (data) => {
        if (window.confirm(`¿Estas seguro que quieres eliminar la especialidad ${data.name}?`)) {
            deleteSpecialty(data).then(({data}) => {
                getSpecialties()
            })
        }
    }
    const getSpecialties = () =>{getAllSpecialty().then(({data})=>{setSpecialties(data)})}

    useEffect(() => {
        getSpecialties()
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
                                    <h3 className="title">especialidades</h3>
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
                                {specialties.map((item)=>{
                                    return(
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.code}</td>
                                            <td>{item.name}</td>
                                            <td style={{width: "84px"}}>
                                                <a className="mr-2" onClick={() => modifyGender(item)}>
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
                                        <h3 className="title">Nueva Especialidad</h3>
                                </div>
                            </div>
                            <div className="body-card mt-3">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <label>Codigo</label>
                                        <input name="code" id="code" onChange={handleChange} value={specialty.code || ''}/>
                                    </div>
                                    <div className="form-row">
                                        <label>Nombre</label>
                                        <input name="name" id="name" onChange={handleChange} value={specialty.name || ''}/>
                                    </div>
                                    <button className="btn-primary-d" type="submit">Guardar</button>
                                    <button className="btn-primary-d ml-3" type="button" onClick={resetSpecialty}>Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialtyPage