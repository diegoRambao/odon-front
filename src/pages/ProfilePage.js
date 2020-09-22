import React, { useEffect, useState } from 'react'
import NavBarDash from './../components/NavBarDash'
import axios from 'axios'

import './../styles/profile.css'
import { getAllTypeDocument } from './../services/TypeDocument.service'
import { getAllGender } from './../services/Gender.service'
import { getUser } from './../services/User.service'
import { getContextUser } from './../services/Authentication.service'
import { environment } from './../utils/environment'
import loadingImg from './../assets/loading.png'

const UserInterface = {
    id: '',
    person: {
        gender: {},
        typeDocument: {}
    }
}

const ProfilePage = () => {


    const [fileUrl, setFileUrl] = useState('')
    const [file, setFile] = useState('')
    const [typesDocument, setTypesDocument] = useState([])
    const [genders, setGenders] = useState([])
    const [userEdit, setUserEdit] = useState(UserInterface)
    const [loading, setLoading] = useState(true)
    const user = getContextUser()
    const profile = `${environment.urlFile}${user.person.imgUrl}`

    const handleChangeFile = (event) => {
        setFile(event.target.files[0])
        setFileUrl(URL.createObjectURL(event.target.files[0]))
    }

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
            .then((response) => {
                console.log(response)
            }).catch((error) => {
        });
    }

    useEffect(() => {
        getAllTypeDocument().then(({data}) => {setTypesDocument(data)})
        getAllGender().then(({data}) => {setGenders(data)})
        getUser(user.id).then(({data}) => {
            setUserEdit(data)
            setLoading(false)
        })
    }, [])

    return(
        <div>
            <NavBarDash />
            <div className="container mt-4">
                <h2>Editar Perfil</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                        {loading?
                            <div className="text-center"><img src={loadingImg} className="loadingImg-sm"/></div>
                            :
                            <div className="edit-profile-img">
                                <img src={fileUrl || profile} className="mb-4"></img>
                                <h5>{userEdit.person.name} {userEdit.person.surname} {userEdit.person.secondSurname}</h5>
                                <p>{userEdit.person.email}</p>
                            </div>
                        }
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card">
                        {loading ?
                            <div className="text-center"><img src={loadingImg} className="loadingImg"/></div>
                            :
                            <form onSubmit={handelSubmit}>
                                <input name="name" placeholder="Nombres" value={userEdit.person.name} onChange={handleChangePerson}/>
                               <div className="form-row">
                                    <div className="col">
                                        <input name="surname" placeholder="Primer Apellido" value={userEdit.person.surname || ''} onChange={handleChangePerson}/>
                                    </div>
                                    <div className="col">
                                        <input name="secondSurname" placeholder="Segundo Apellido" value={userEdit.person.secondSurname} onChange={handleChangePerson}/>
                                    </div>
                               </div>
                               <div className="form-row">
                                    <div className="col">
                                        <select name="id" className="form-control" value={userEdit.person.typeDocument.id} onChange={handleChangeTypeDocument}>
                                            {typesDocument.map((item) => {
                                                return <option value={item.id}>{item.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col">
                                        <input name="documentNumber" placeholder="Numero de documento" value={userEdit.person.documentNumber} onChange={handleChangePerson}/>
                                    </div>
                               </div>
                               <input name="email" placeholder="email" value={userEdit.person.email} onChange={handleChangePerson}/>
                               <div className="form-row">
                                    <div className="col">
                                        <input name="numberPhone" placeholder="Numero de Telefono" value={userEdit.person.numberPhone} onChange={handleChangePerson}/>
                                    </div>
                                    <div className="col mb-5">
                                        <select name="id" className="form-control" value={userEdit.person.gender.id} onChange={handleChangeGender}>
                                            {genders.map((item) => {
                                                return <option value={item.id}>{item.name}</option>
                                            })}
                                        </select>
                                    </div>
                               </div>
                                <input type="file" onChange={handleChangeFile}/>
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