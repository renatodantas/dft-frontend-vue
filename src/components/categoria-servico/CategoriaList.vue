<template>
  <div>
    <categoria-edit @atualizado="listar" />

    <div class="d-flex justify-content-between">
      <h4>Categorias de Serviço</h4>
      <button class="btn btn-sm btn-primary mb-2" data-toggle="modal" data-target="#editar-item" @click="criarNovo">
        <i class="fa fa-fw fa-plus-circle"></i> Nova categoria
      </button>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tipo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of itens" :key="item.id">
          <td>{{ item.descricao }}</td>
          <td>{{ formatMetodologia(item.tipo) }}</td>
          <td class="align-right">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
                class="btn btn-outline-primary"
                data-toggle="modal"
                data-target="#editar-item"
                @click="selecionar(item)"
              >
                <i class="fa fa-fw fa-pencil"></i>
              </button>
              <button class="btn btn-outline-danger" @click="confirmarExclusao(item)">
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
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { useRouter, useRoute, useLink } from "vue-router";
import { useCategorias } from "../../stores/categoria.store";
import { formatMetodologia } from "../../utils/formatadores";
import CategoriaEdit from "./CategoriaEdit.vue";

export const { paginacao, itens, selecionar, listar, excluir } = useCategorias();
export { formatMetodologia };

onMounted(() => {
  listar();
  const route = useRoute();
  console.log("Route:", route.query);
});

export const criarNovo = () => {
  selecionar({ descricao: "" });
};

export const confirmarExclusao = async (item) => {
  if (confirm(`Deseja excluir a categoria: ${item.descricao}?`)) {
    await excluir(item);
    listar();
  }
};

export default {
  components: {
    CategoriaEdit,
  },
};
</script>
