<template>
  <div class="page active">
    <main class="responsive">
      <vue-beercss-table
        selection="multiple"
        :columns="columns"
        v-model:rows="rows"
        v-model:selected-rows="selectedRows"
        @sort="sortChenged"
      >
      </vue-beercss-table>
    </main>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const rows = ref([
  { nome: 'João', idade: 18, id: 1 },
  { nome: 'Cleber', idade: 22, id: 2 },
  { nome: 'Maria', idade: 35, id: 3 },
  { nome: 'Joaquina', idade: 49, id: 4 },
  { nome: 'Fabio', idade: 13, id: 5 },
  { nome: 'Ícaro', idade: 12, id: 6 },
  { nome: 'Igor', idade: 11, id: 7 },
  { nome: 'Sylvia', idade: 65, id: 8 },
  { nome: 'Julia', idade: 14, id: 9 },
  { nome: 'Marina', idade: 19, id: 10 },
  { nome: 'Marcelo', idade: 18, id: 11 },
  { nome: 'William', idade: 20, id: 12 },
  { nome: 'David', idade: 21, id: 13 }
])
const columns = ref([
  {
    name: 'nome',
    class: 'left-align',
    headerClass: 'left-align',
    label: 'Nome',
    field: 'nome',
    sortable: true
  },
  {
    name: 'idade',
    class: 'center-align',
    headerClass: 'center-align',
    footerClass: 'center-align',
    label: 'Idade',
    field: 'idade',
    sortable: false
  }
])
const selectedRows = ref([])

function sortChenged(column) {
  console.log('sort: ', column)
}
</script>

<style scoped>
</style>
