import React from 'react'
import Link from 'next/link'

function Sobre () {
    return (
        <ol>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/sobre">
                    <a>Sobre o projeto</a>
                </Link>
            </li>
        </ol>
    )
}

export default Sobre
