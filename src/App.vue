<script setup lang="ts">
import { RouterView } from "vue-router";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
import { useBeforeMountApp } from "./hooks";

useBeforeMountApp();
</script>

<template>
  <RouterView />
  <VueQueryDevtools />
</template>

<style scoped lang="scss"></style>
