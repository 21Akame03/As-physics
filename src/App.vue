<template>
  <HelloWorld/>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  position: fixed;
  padding: 0;
  left: 0;
  top: 0;
}


.screenview {
  height: 100%;
  width: 100%;
  display: grid;
  z-index: 10;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  position: absolute;
}
</style>
