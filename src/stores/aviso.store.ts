import { computed, ref, Ref, watch } from 'vue';

interface Aviso {
  tipo: 'info' | 'error';
  mensagem: string;
  excepton?: any;
}

// Lista de mensagens
const avisos: Ref<Aviso[]> = ref([]);
// 5 segundos para remover a mensagem
const TIMEOUT = 5000;
// Bootstrap 5
declare const bootstrap: any;

/**
 * Monitora alterações nas mensagens. Sempre que
 * houver novas mensagens, é solicitado a exibição do toaster
 * pelo índice do array.
 */
watch(avisos, (messages, oldMessages) => {
  if (messages.length > oldMessages.length) {
    //$(`#toast-${messages.length - 1}`).toast("show");
    // FIXME: verificar
    const toasts = [].slice.call(document.querySelectorAll('.toast'));
    toasts.forEach(toast => {
      console.log(toast);
      const t = new bootstrap.Toast(toast, undefined);
      console.log('Toast:', t);
      t.show();
    });

    // var toastList = toastElList.map(function (toastEl) {
    //   return new bootstrap.Toast(toastEl, undefined)
    // })
  }
});

/**
 * Adiciona uma nova mensagem do tipo "Info".
 * @param {string} mensagem mensagem informativa
 */
function msgInfo(mensagem: string) {
  avisos.value = [...avisos.value, { tipo: 'info', mensagem }];
  agendarRemocao(mensagem);
}

/**
 * Adiciona uma nova mensagem do tipo "Erro".
 * @param mensagem mensagem informativa
 * @param err erro capturado
 */
function msgErro(mensagem: string, err?: any) {
  let msg = mensagem;
  if (err) {
    msg = `${msg}: ${err.message || err.response.data.message}`;
  }
  avisos.value = [...avisos.value, { tipo: 'error', mensagem: msg }];
  agendarRemocao(mensagem);
}

/**
 * Agenda a remoção da mensagem dentro do tempo limite.
 * @param {string} message a ser removida
 */
function agendarRemocao(message: string) {
  setTimeout(() => {
    avisos.value = avisos.value.filter(a => a.mensagem != message);
  }, TIMEOUT);
}

export function useAvisos() {
  return {
    avisos: computed(() => avisos.value),
    msgInfo,
    msgErro,
  };
}
