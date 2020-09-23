import React from 'react'
import { environment } from './../utils/environment'
import imgDefault from './../assets/imgDefault.png'

const ImgProfile = ({user, width, height, fileUrl}) => {

    const { imgUrl } = user.person
    if(imgUrl){
        const profile = `${environment.urlFile}${imgUrl}`
        return <img src={fileUrl || profile} style={{width: width, height: height, borderRadius: '50%'}} alt="foto de perfil"></img>
    }else{
        return <img src={fileUrl || imgDefault} style={{width: width, height: height, borderRadius: '50%'}} alt="foto de perfil"></img>
    }
}

export default ImgProfile