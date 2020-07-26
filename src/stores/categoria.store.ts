import { computed, ComputedRef, ref, Ref } from 'vue';
import { useAvisos } from '../stores/aviso.store';
import { httpDelete, httpGet, httpPost, httpPut } from '../utils/http';

/**
 * Descrição da entidade.
 */
interface CategoriaServico {
  id?: number;
  descricao?: string;
  tipo?: string;
}

interface Paginacao<T> {
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number; // numero da página
  numberOfElements: number; // qtd de elementos da página
  //pageable: { sort: { … }, offset: 0, pageNumber: 0, pageSize: 10, paged: true, … };
  //sort: { sorted: true, unsorted: false, empty: false };
  size: number; // Tamanho da página
  totalElements: number; // total de itens cadastrados
  totalPages: number; // total de páginas
  content: T[];
}

const API = '/categorias-servico';

const paginacao: Ref<Paginacao<CategoriaServico>> = ref(null);
const itens: ComputedRef<CategoriaServico[]> = computed(() => paginacao.value?.content || []);
const itemSelecionado: Ref<CategoriaServico> = ref(null);
const isEdicao: Ref<boolean> = computed(() => !!itemSelecionado.value?.id);
const { msgInfo, msgErro } = useAvisos();

// --------------------------------------------------------------------------

/**
 * Obtém todas as categorias na API.
 */
async function listar(): Promise<void> {
  try {
    const res = await httpGet(API);
    paginacao.value = res.data;
  } catch (err) {
    msgErro('Erro ao listar categorias', err);
  }
}

/**
 * Seleciona uma categoria.
 *
 * @param {CategoriaServico} item a categoria para selecionar
 */
function selecionar(item: CategoriaServico): void {
  itemSelecionado.value = { ...item };
}

/**
 * Função genérica para salvar item.
 * Dependendo do ID selecionado, pode invocar o
 * <code>criar()</code> ou o <code>atualizar()</code>
 */
async function salvar(): Promise<void> {
  if (isEdicao.value) {
    await atualizar();
  } else {
    await criar();
  }
}

async function criar(): Promise<void> {
  try {
    console.log('Criando:', itemSelecionado.value);
    await httpPost(API, itemSelecionado.value);
    msgInfo('Categoria criada com sucesso');
  } catch (err) {
    msgErro('Erro ao criar categoria', err);
    throw err;
  }
}

async function atualizar(): Promise<void> {
  try {
    console.log('Atualizando:', itemSelecionado.value);
    await httpPut(`${API}/${itemSelecionado.value.id}`, itemSelecionado.value);
    msgInfo('Categoria atualizada com sucesso');
  } catch (err) {
    msgErro('Erro ao atualizar categoria', err);
    throw err;
  }
}

async function excluir(item: CategoriaServico): Promise<void> {
  try {
    const itemExclusao = item || itemSelecionado.value;
    console.log('Excluindo:', itemExclusao);
    await httpDelete(`${API}/${itemExclusao.id}`);
    msgInfo('Categoria excluída com sucesso');
  } catch (err) {
    msgErro('Erro ao excluir categoria', err);
    throw err;
  }
}

export function useCategorias() {
  return {
    paginacao,
    itens,
    itemSelecionado: computed(() => itemSelecionado.value),
    isEdicao,
    listar,
    selecionar,
    salvar,
    criar,
    atualizar,
    excluir,
  };
}
