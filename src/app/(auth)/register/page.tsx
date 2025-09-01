import React from 'react'
import RegisterForm from './_components/register-form'
import AuthLayoutDesign from '../_components/auth-layout'

const Page = () => {
    return (
        <div>
            <AuthLayoutDesign>
                <RegisterForm />
            </AuthLayoutDesign>
        </div>
    )
}

export default Page