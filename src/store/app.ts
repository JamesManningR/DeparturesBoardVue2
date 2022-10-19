import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isEditOpen = ref(false)

  /**
   * Toggles the edit for open or closed
   * if an argument is passed, it will set isEditOpen to that value
   * otherwise it will toggle it
   * @param open The value to set isEditOpen to
   * @returns The new value of isEditOpen
   */
  const toggleEditOpen = (open?: boolean) => {
    isEditOpen.value = open ?? !isEditOpen.value
    return isEditOpen
  }

  return {
    isEditOpen,
    toggleEditOpen,
  }
})
