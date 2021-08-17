import React from 'react'
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter()
    return (
        <header>
            <button className="go_back" type="button" onClick={() => router.back()}>
                <img src='back.svg' width='48px' height='48px'/>
         </button>
            Blog Generator with OG cards
        </header>
    )
}
