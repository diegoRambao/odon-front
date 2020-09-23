import React, { useEffect, useState } from 'react'
import NavBarDash from './../components/NavBarDash'
import { getAllGender, createGender, updateGender, deleteGender } from './../services/Gender.service'

const GenderPage = () => {

    const [genders, setGenders] = useState([]);
    const [gender, setGender] = useState({})

    const handleChange = (e) => {
        setGender({...gender, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!gender.id){
            createGender(gender).then(({data})=>{
                getGenders()
                resetGender()
            })
        }else{
            updateGender(gender).then(({data})=> {
                getGenders()
                resetGender()
            })
        }
    }
    const resetGender = () => setGender({})

    const modifyGender = (data) => {
        setGender(data)
    }
    const handleDelete = (data) => {
        if (window.confirm(`¿Estas seguro que quieres eliminar el genero ${data.name}?`)) {
            deleteGender(data).then(({data}) => {
                getGenders()
            })
        }
    }
    const getGenders = () =>{getAllGender().then(({data})=>{setGenders(data)})}

    useEffect(() => {
        getGenders()
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
                                    <h3 className="title">Generos</h3>
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
                                {genders.map((item)=>{
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
                                        <h3 className="title">Nuevo Genero</h3>
                                </div>
                            </div>
                            <div className="body-card mt-3">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <label>Codigo</label>
                                        <input name="code" id="code" onChange={handleChange} value={gender.code || ''}/>
                                    </div>
                                    <div className="form-row">
                                        <label>Nombre</label>
                                        <input name="name" id="name" onChange={handleChange} value={gender.name || ''}/>
                                    </div>
                                    <button className="btn-primary-d" type="submit">Guardar</button>
                                    <button className="btn-primary-d ml-3" type="button" onClick={resetGender}>Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenderPage