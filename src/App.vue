<script setup lang="ts">
import ToastProvider from '@/components/toast/ToastProvider.vue';
import { RouterView } from 'vue-router';
</script>
<template>
  <RouterView />
  <ToastProvider />
</template>
