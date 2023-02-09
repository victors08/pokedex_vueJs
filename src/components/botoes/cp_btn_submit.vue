<template>
  <button class="btn" type="button">Buscar</button>
</template>

<script>
export default {
  name: "btnSubmit",
};
</script>

<style scoped>
.btn {
  border-radius: 0px 10px 10px 0;
  min-height: 35px;
  border: none;
  padding: 0px 15px;
  color: white;
  background-color: green;
}

.btn:hover {
  background-color: rgb(14, 165, 14);
  cursor: pointer;
}
</style>
