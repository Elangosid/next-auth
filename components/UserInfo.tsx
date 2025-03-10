'use client'

import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const UserInfo = () => {
    const { data: session } = useSession()
    console.log(session)

    return (
        <div className='mx-72 mt-2 p-3'>
            <span>Name <p>{session?.user?.name}</p></span>
            <span>Email <p>{session?.user?.email}</p></span>
            <button className='p-3 bg-amber-300' onClick={() => signOut()}>logout</button>
        </div>
    )
}

export default UserInfo