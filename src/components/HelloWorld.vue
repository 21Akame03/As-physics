<template>
  <Navbar />
  <Kinematics />
</template>

<script setup>
import { defineComponent, defineProps, reactive } from 'vue';
import Navbar from './Reusable/Navbar.vue';
import Kinematics from './Kinematics/Kinematics.vue';

defineComponent({
  Kinematics
})
</script>

<style scoped>

</style>
