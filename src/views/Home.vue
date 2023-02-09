<template>
  <div class="home">
    <h2 class="title">Pokédex</h2>
    <div class="container">
      <inputTexto v-model="prm_Pokemon" />
      <btnSubmit @click="GetPokemon(this.prm_Pokemon)" />
    </div>
  </div>
</template>

<script>
import inputTexto from "../components/campos/cp_input_texto.vue";
import btnSubmit from "../components/botoes/cp_btn_submit.vue";

import { getPokeapi } from "../services/axios-pokeapi.js";

export default {
  name: "HomeView",
  components: {
    inputTexto,
    btnSubmit,
  },
  data() {
    let prm_Pokemon = "";

    return {
      prm_Pokemon,
    };
  },
  methods: {
    GetPokemon(prm_pokemon) {
      getPokeapi(prm_pokemon).then((response) => {
        if (response.status == 200) {
          console.log(response);
        } else {
          console.log("não funfou");
        }
      });
    },
  },
};
</script>
<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  background: #48a3a7;
}
.container {
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.title {
  color: white;
  padding-top: 15%;
}
</style>
