<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import { useBlocksStore } from '../stores/blocks.js'

const blocksStore = useBlocksStore()

const burger = ref()
const isOpen = ref()

function activateBurger() {
  burger.value.style.transform = 'translateX(0%)'
  isOpen.value = true
  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  }
}

function closeBurger() {
  burger.value.style.transform = 'translateX(100%)'
  isOpen.value = false
  if (!isOpen.value) {
    document.body.style.overflow = ''
  }
}

function scrollToElement(element) {
  closeBurger()

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  })
}
</script>

<template>
  <section class="header">
    <img src="../assets/svg/logo.svg" alt="logo" />

    <div class="burger-wrapper">
      <div class="burger" @click="activateBurger">
        <div class="burger-line burger-line-top"></div>
        <div class="burger-line burger-line-middle"></div>
        <div class="burger-line burger-line-bottom"></div>
      </div>
    </div>

    <div class="burger-container" ref="burger">
      <ul class="burger-container-list">
        <li class="burger-container-list__item" @click="scrollToElement(blocksStore.aboutBlock)">
          About
        </li>
        <li class="burger-container-list__item" @click="scrollToElement(blocksStore.partnersBlock)">
          Partners
        </li>
        <li class="burger-container-list__item" @click="scrollToElement(blocksStore.contactsBlock)">
          Contacts
        </li>
        <li class="burger-container-list__item" @click="scrollToElement(blocksStore.registerBlock)">
          Register
        </li>
      </ul>

      <div class="close-burger" @click="closeBurger()">
        <div class="close-burger-line"></div>
        <div class="close-burger-lineTwo"></div>
      </div>
      <!-- </div> -->
    </div>
  </section>
</template>

<style scoped src="../assets/css/header.css"></style>
