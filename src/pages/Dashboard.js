import React from 'react'

import NavBarDash from './../components/NavBarDash'
import MainPa from './MainPa'
import { getContextUser } from './../services/Authentication.service'

const Dashboard = () => {
    const { typeUser } = getContextUser()
    return(
        <div>
            <NavBarDash />
            <div className="container-dashboard">
                {
                    typeUser === 'A'?
                        <h1>ADMINISTRADOR</h1>
                    :
                    <MainPa />
                }
            </div>
        </div>
    )
}

export default Dashboard