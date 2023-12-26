<script setup lang="ts">
import BoardColumn from '@/components/BoardColumn.vue'

import NavBar from '@/components/NavBar.vue'
import TaskDetailsModal from '@/components/TaskDetailsModal.vue'
import { useColumns } from '@/store/useColumns'

const { addColumn, columns } = useColumns()
/*
TODO
- remove button
*/
</script>

<template>
  <NavBar />

  <TaskDetailsModal />
  <main grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2>
    <BoardColumn v-for="column in columns" :key="column.id" :column="column" />

    <button class="absolute add-column-button text-3xl" @click="() => addColumn('set title')">+</button>
  </main>
</template>
