<template>
  <div>
    <Breadcrumb :modelValue="[{ label: 'Categoria de Serviços' }]" />

    <Layout :titulo="titulo" linkVoltar="/">
      <div class="jumbotron">
        <h1 class="display-4">Página inicial do DFT</h1>
        <p class="lead">
          Bem vindo ao Dignus Fortis Thesaurus.
        </p>
        <hr class="my-4" />
        <p>Para iniciar o cadastro e os preenchimentos dos esforços, utilize o menu superior.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Saber mais</a>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
export const titulo = 'Início';

onMounted(() => {
  document.title = titulo;
});

export default {};
</script>
