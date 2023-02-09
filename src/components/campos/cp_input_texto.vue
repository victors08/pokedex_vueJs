<template>
  <input
    class="input"
    type="text"
    autofocus
    v-model="modelo"
    placeholder="Digite o nome de um Pokémon"
  />
</template>

<script>
import { ref } from "vue";

export default {
  name: "inputTexto",
  data() {
    return { modelo: ref("") };
  },
};
</script>

<style scoped>
.input {
  border-radius: 10px 0px 0px 10px;
  padding: 10px;
  min-width: 35vw;
  min-height: 35px;
  border: none;
}
.input:hover {
  background-color: lightgray;
}
input:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}
</style>
