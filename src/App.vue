<script setup lang="ts">
import BoardColumn from '@/components/BoardColumn.vue'
import DashBoardMenu from '@/components/DashboardMenu.vue'
import NavBar from '@/components/NavBar.vue'
import TaskDetailsModal from '@/components/TaskDetailsModal.vue'
</script>

<template>
  <NavBar />

  <TaskDetailsModal />
  <main grid grid-cols-4>
    <DashBoardMenu />
    <BoardColumn />
  </main>
</template>
