<template>
  <div>
    <Breadcrumb v-model="breadcrumb" />

    <Layout :titulo="titulo" linkVoltar="/">
      <template v-slot:direita>
        <button
          class="btn btn-primary"
          title="Incluir nova categoria"
          data-toggle="modal"
          data-target="#editar-item"
          @click="criarNovo()"
        >
          <i class="fa fa-fw fa-plus"></i>
        </button>
      </template>
      <categoria-edit @atualizado="listar" />

      <!--
      <div class="d-flex justify-content-between">
        <h4>Categorias de Serviço</h4>
        <button class="btn btn-sm btn-primary mb-2" data-toggle="modal" data-target="#editar-item" @click="criarNovo">
          <i class="fa fa-fw fa-plus-circle"></i> Nova categoria
        </button>
      </div>
      -->

      <table class="table table-hover table-bordeless">
        <thead>
          <tr>
            <th>
              Nome
              <a href="#" @click="ordenar()">
                <i class="fa fa-fw fa-caret-down"></i>
              </a>
            </th>
            <th>Tipo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of itens" :key="item.id">
            <td>{{ item.descricao }}</td>
            <td>{{ formatMetodologia(item.tipo) }}</td>
            <td class="text-right">
              <div class="btn-group" role="group" aria-label="Grupo de botões de ação">
                <button
                  class="btn btn-outline-primary btn-sm"
                  data-toggle="modal"
                  data-target="#editar-item"
                  @click="selecionar(item)"
                >
                  <i class="fa fa-fw fa-pencil"></i>
                </button>
                <button class="btn btn-outline-danger btn-sm" @click="confirmarExclusao(item)">
                  <i class="fa fa-fw fa-trash-o"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <nav aria-label="Navegação da página" v-if="paginacao">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: paginacao.first }">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item" v-for="pagina in paginacao.totalPages" :key="pagina">
            <a class="page-link" href="#">{{ pagina }}</a>
          </li>
          <li class="page-item" :class="{ disabled: paginacao.last }">
            <a class="page-link" href="#">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, watch } from 'vue';
import { useRouter, useRoute, useLink } from 'vue-router';
import { useCategorias } from '../../stores/categoria.store';
import { formatMetodologia } from '../../utils/formatadores';
import Layout from '../../shared/Layout.vue';
import Breadcrumb from '../../shared/Breadcrumb.vue';
import CategoriaEdit from './CategoriaEdit.vue';

// ----------------------------------------------

export const { itens, selecionar, listar, excluir } = useCategorias();
export { formatMetodologia };
export const titulo = 'Categorias de Serviços';
export const breadcrumb = [
  { label: 'Tipificação', route: '/tipificacao' },
  { separator: true },
  { label: 'Categoria de Serviços' },
];

// ----------------------------------------------

declare const bootstrap: any;
const route = useRoute();
const router = useRouter();

onMounted(() => {
  listar();
});

watch(route, (newRoute, prevRoute) => {
  const { sort, order } = <{ sort: string; order: 'asc' | 'desc' }>newRoute.query;
  listar({ sort, order });
});

export const criarNovo = () => {
  selecionar({ descricao: '' });
};

export const confirmarExclusao = async item => {
  if (confirm(`Deseja excluir a categoria: ${item.descricao}?`)) {
    await excluir(item);
    listar();
  }
};

export const ordenar = () => {
  router.push('?sort=descricao&order=desc');
};

export default {
  components: {
    Layout,
    Breadcrumb,
    CategoriaEdit,
  },
};
</script>

<style scoped>
th {
  font-weight: bold;
  color: gray;
}
</style>
