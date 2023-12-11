<script setup lang="ts">
import BoardColumn from '@/components/BoardColumn.vue'
import DashBoardMenu from '@/components/DashboardMenu.vue'
import NavBar from '@/components/NavBar.vue'
import TaskDetailsModal from '@/components/TaskDetailsModal.vue'
import { useColumns } from '@/store/useColumns'

const { addColumn, columns } = useColumns()

const addColumnHandler = () => {
  console.log(('handler'))
  addColumn()
}
</script>

<template>
  <NavBar />

  <TaskDetailsModal />
  <main grid grid-cols-4>
    <DashBoardMenu />
    <BoardColumn v-for="column in columns" :key="column.id" :column="column" />

    <button class="add-column-button" @click="() => addColumnHandler()">+</button>
  </main>
</template>
