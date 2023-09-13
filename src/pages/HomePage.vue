<template>
  <div class="home container-fluid">

    <section class="row">

      <div class="col-4 pokemon-list bg-danger">

        <div class="d-flex justify-content-around my-2">
          <button @click="changePage(previousUrl)" class="btn btn-light w-25" :disabled="!previousUrl">Previous</button>
          <button @click="changePage(nextUrl)" class="btn btn-light w-25">Next</button>
        </div>


        <button @click="setActive(pokemon.url)" v-for="pokemon in pokemons" :key="pokemon.name"
          class="btn btn-outline-light w-100 my-2">{{ pokemon.name
          }}
        </button>
      </div>

      <div class="col-8">
        <ActivePokemon />
      </div>

    </section>


  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { pokemonsService } from '../services/PokemonsService.js';
import { AppState } from '../AppState.js'

export default {
  setup() {

    async function getPokemon() {
      try {
        // logger.log('getting pokemon')
        await pokemonsService.getPokemon()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    }

    onMounted(() => {
      getPokemon()
    })

    return {
      pokemons: computed(() => AppState.pokemons),
      nextUrl: computed(() => AppState.nextUrl),
      previousUrl: computed(() => AppState.previousUrl),

      async setActive(pokemonUrl) {
        try {
          // logger.log(pokemonUrl)
          await pokemonsService.setActive(pokemonUrl)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },

      async changePage(url) {
        try {
          // logger.log('change page', string)
          await pokemonsService.changePage(url)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.pokemon-list {
  height: 87.7vh;
  overflow-y: scroll;
}
</style>
