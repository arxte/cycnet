import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBlocksStore = defineStore('blocks', () => {
  const aboutBlock = ref()
  const partnersBlock = ref()
  const contactsBlock = ref()
  const registerBlock = ref()

  return {
    aboutBlock,
    partnersBlock,
    contactsBlock,
    registerBlock
  }
})
