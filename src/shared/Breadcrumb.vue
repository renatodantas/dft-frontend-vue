<template>
  <div class="bg-white p-2 pl-3 rounded mb-4 shadow-sm">
    <i class="fa fa-fw fa-home pr-2"></i>
    <span v-for="{ label, route, separator } of itens" :key="label + separator" class="px-1">
      <router-link v-if="route" :to="route">{{ label }}</router-link>
      <span v-if="separator">&nbsp;►</span>
      <span v-if="!route">{{ label }}</span>
    </span>
  </div>
</template>

<script setup="props" lang="ts">
import { onMounted } from 'vue';

interface BreadcrumbItem {
  label: String;
  route: String;
  separator: Boolean;
}

// Props do componente
declare const props: {
  modelValue: BreadcrumbItem[];
};

export const itens = props?.modelValue || [];
export default {};
</script>

<style scoped></style>
