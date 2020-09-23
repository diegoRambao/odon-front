import React, { useEffect, useState } from 'react'
import NavBarDash from './../components/NavBarDash'
import ImgProfile from './../components/ImgProfile'
import Loading from './../components/Loading'
import axios from 'axios'
import { User } from './../models/User'

import './../styles/profile.css'
import { getAllTypeDocument } from './../services/TypeDocument.service'
import { getAllGender } from './../services/Gender.service'
import { getContextUser, updateSession } from './../services/Authentication.service'

const ProfilePage = () => {
    const [fileUrl, setFileUrl] = useState('')
    const [file, setFile] = useState('')
    const [typesDocument, setTypesDocument] = useState([])
    const [genders, setGenders] = useState([])
    const [userEdit, setUserEdit] = useState(new User())
    const [showAlert, setShowAlert] = useState(false)
    const user = getContextUser()

    const handleChangeFile = (event) => {
        setFile(event.target.files[0])
        setFileUrl(URL.createObjectURL(event.target.files[0]))
    }
    useEffect(() => {
        getAllTypeDocument().then(({data}) => {setTypesDocument(data)})
        getAllGender().then(({data}) => {setGenders(data)})
        setUserEdit(user)
    }, [])
    const handleChangePerson = (e) => {
        setUserEdit({...userEdit,
            person: {
                ...userEdit.person,
                [e.target.name]: e.target.value,
            }
        })
    }
    const handleChangeGender = (e) => {
        setUserEdit({...userEdit,
            person: {
                ...userEdit.person,
                gender: {
                    [e.target.name]: e.target.value
                }
            }
        })
    }
    const handleChangeTypeDocument = (e) => {
        setUserEdit({...userEdit,
            person: {
                ...userEdit.person,
                typeDocument: {
                    [e.target.name]: e.target.value
                }
            }
        })
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('imgUrl', file);
        formData.append('user', JSON.stringify(userEdit))
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://localhost:8000/api/user_update/2",formData,config)
            .then(({data}) => {
                updateSession(data)
                setShowAlert(true)
                setTimeout(()=> {
                    setShowAlert(false)
                }, 3000)
                console.log(data)
            }).catch((error) => {
        });
    }
    return(
        <div>
            <NavBarDash />
            <div className="container mt-4">
                <h2>Editar Perfil</h2>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card shadow-sm">
                        {genders.length === 0 || typesDocument.length === 0 ?
                            <Loading />:
                            <div className="edit-profile-img">
                                <ImgProfile user={user} width="140px" height="140px" fileUrl={fileUrl}/>
                                <h5 className="mt-4">{userEdit.person.name} {userEdit.person.surname} {userEdit.person.secondSurname}</h5>
                                <p>{userEdit.person.email}</p>
                            </div>
                        }
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card shadow-sm">
                        {showAlert && <div className="alert alert-success" role="alert">¡Usuario Actualizado con exito!</div>}
                        {genders.length === 0 || typesDocument.length === 0 ?
                            <Loading />
                            :
                            <form onSubmit={handelSubmit}>
                                <div className="form-row">
                                    <label>Nombre</label>
                                    <input name="name" placeholder="Nombres" value={userEdit.person.name} onChange={handleChangePerson} required/>
                                </div>
                               <div className="form-row">
                                    <div className="col">
                                        <label>Primer Apellido</label>
                                        <input name="surname" placeholder="Primer Apellido" value={userEdit.person.surname || ''} onChange={handleChangePerson} required/>
                                    </div>
                                    <div className="col">
                                        <label>Segundo Apellido</label>
                                        <input name="secondSurname" placeholder="Segundo Apellido" value={userEdit.person.secondSurname || ''} onChange={handleChangePerson}/>
                                    </div>
                               </div>
                               <div className="form-row">
                                    <div className="col">
                                        <label>Tipo de documento</label>
                                        <select name="id" className="form-control" value={userEdit.person.typeDocument.id} onChange={handleChangeTypeDocument}>
                                            <option>seleccionar</option>
                                            {typesDocument.map((item) => {
                                                return <option value={item.id}>{item.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col">
                                            <label>Numero de documento</label>
                                        <input name="documentNumber" placeholder="Numero de documento" value={userEdit.person.documentNumber} required onChange={handleChangePerson}/>
                                    </div>
                               </div>

                               <div className="form-row">
                                    <label>Email</label>
                                    <input name="email" placeholder="email" value={userEdit.person.email} onChange={handleChangePerson}/>
                               </div>
                               <div className="form-row">
                                    <div className="col">
                                        <label>Numero de documento</label>
                                        <input name="numberPhone" placeholder="Numero de Telefono" value={userEdit.person.numberPhone} onChange={handleChangePerson}/>
                                    </div>
                                    <div className="col">
                                        <label>Genero</label>
                                        <select name="id" className="form-control" value={userEdit.person.gender.id} onChange={handleChangeGender}>
                                            {genders.map((item) => {
                                                return <option value={item.id}>{item.name}</option>
                                            })}
                                        </select>
                                    </div>
                               </div>
                               <div className="form-row">
                                    <label>Imagen</label>
                                    <input type="file" onChange={handleChangeFile}/>
                               </div>
                                <button className="btn-primary-d" type="submit">Enviar</button>
                            </form>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage