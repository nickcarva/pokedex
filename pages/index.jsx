import React from 'react'
import Link from 'next/link'

export async function getStaticProps (context) {
    // eslint-disable-next-line no-undef
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
        .then(res => {
            return res.pokemon_entries
        })

    return {
        props: {
            pokemons
        }
    }
}

function Home ({ pokemons }) {
    return (
        <div>
            <h3>Pokedex - DevSoutinho</h3>
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

            <ul>
                {pokemons.map(pokemon => (
                    <li key={pokemon.entry_number}>
                        {pokemon.pokemon_species.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home
