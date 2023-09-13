import axios from "axios"
import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { logger } from "../utils/Logger.js"
import { pokemonApi } from "./AxiosService.js"

class PokemonsService {

    async getPokemon() {
        const res = await pokemonApi.get()
        logger.log('[GETTING POKEMON]', res.data)
        AppState.pokemons = res.data.results
        AppState.nextUrl = res.data.next
        AppState.previousUrl = res.data.previous
    }

    async setActive(pokemonUrl) {
        const res = await pokemonApi.get(pokemonUrl)
        logger.log('[SETTING ACTIVE]', res.data)
        AppState.activePokemon = new Pokemon(res.data)
    }

    async changePage(url) {
        const res = await axios.get(url)
        logger.log(res.data)
        AppState.pokemons = res.data.results
        AppState.nextUrl = res.data.next
        AppState.previousUrl = res.data.previous
    }

}

export const pokemonsService = new PokemonsService()