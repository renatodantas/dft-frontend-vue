<template>
  <div class="card">
    <div class="card-header d-flex align-items-center align-middle">
      <router-link class="mr-2" :to="linkVoltar">
        <i class="fa fa-fw fa-arrow-left"></i>
      </router-link>
      <div class="titulo mr-auto">{{ titulo }}</div>

      <slot name="direita"></slot>
    </div>

    <div class="card-body">
      <slot />
    </div>

    <!-- Sem rodapé por enquanto 
    <div class="card-footer d-flex justify-content-center">
      <ng-content select="[rodape]"></ng-content>
    </div>
    -->
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true,
    },
    linkVoltar: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
/*
.card-header {
  height: 76px;
}
*/

.titulo {
  font-size: 1.3em;
  font-weight: bold;
}
</style>
