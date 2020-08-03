<template>
  <div class="modal fade" id="editar-item" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ isEdicao ? 'Editar' : 'Criar ' }} Categoria</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form autocomplete="off" v-if="item">
            <div class="mb-3">
              <label class="form-label" for="descricao">Descrição</label>
              <input
                class="form-control"
                id="descricao"
                v-model="item.descricao"
                placeholder="Descrição da categoria de serviço"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="metodologia">Metodologia</label>
              <select class="form-control" id="metodologia" v-model="item.tipo">
                <option value="" disabled>Selecione</option>
                <option value="TIPICA">Típica</option>
                <option value="ATIPICA">Atípica</option>
                <option value="OUTRA">Outra</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">
            <i class="fa fa-fw fa-times"></i>
            Fechar
          </button>
          <button type="button" class="btn btn-sm btn-primary" @click="salvarItem">
            <i class="fa fa-fw fa-save"></i>
            Salvar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup="props, { emit }">
import { onMounted, watch, ref } from 'vue';
import { useCategorias } from '../../stores/categoria.store';

export const { itemSelecionado: item, salvar, isEdicao } = useCategorias();

export const salvarItem = async () => {
  await salvar();
  // Fecha modal
  // $("#editar-item").modal("hide");
  const myModalEl = document.getElementById('editar-item');
  bootstrap.Modal.getInstance(myModalEl).hide();
  // Avisa parent que item foi atualizado
  emit('atualizado');
};

export default {};
</script>

<style scoped></style>
