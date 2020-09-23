import React from 'react'

import NavBarDash from './../components/NavBarDash'
import MainPa from './MainPa'
import MainAd from './MainAd'
import { getContextUser } from './../services/Authentication.service'

const Dashboard = () => {
    const { typeUser } = getContextUser()
    return(
        <div>
            <NavBarDash />
            <div className="container-dashboard">
                {
                    typeUser === 'A'?
                    <MainAd />
                    :
                    <MainPa />
                }
            </div>
        </div>
    )
}

export default Dashboard