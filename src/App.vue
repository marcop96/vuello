<script setup lang="ts">
import BoardColumn from '@/components/BoardColumn.vue'

import NavBar from '@/components/NavBar.vue'
import TaskDetailsModal from '@/components/TaskDetailsModal.vue'
import { useColumns } from '@/store/useColumns'

const { addColumn, columns } = useColumns()
</script>

<template>
  <NavBar />

  <TaskDetailsModal />
  <main grid grid-cols-4>
    <BoardColumn v-for="column in columns" :key="column.id" :column="column" />

    <button class="add-column-button" @click="() => addColumn('set title')">+</button>
  </main>
</template>
