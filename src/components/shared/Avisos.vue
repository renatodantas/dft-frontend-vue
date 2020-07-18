<template>
  <div aria-live="polite" aria-atomic="true" class="toaster-outer">
    <div class="toaster-inner">
      <div
        v-for="(aviso, index) in avisos"
        :key="aviso.mensagem"
        :id="`toast-${index}`"
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-delay="5000"
      >
        <div class="toast-header">
          <img src="/assets/logo.png" width="22" height="22" class="rounded mr-2" alt="..." />
          <strong class="mr-auto">
            Bootstrap
          </strong>
          <!-- <small class="text-muted">just now</small> -->
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">
          {{ aviso.mensagem }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAvisos } from "../../stores/aviso.store";

export default {
  setup() {
    const { avisos } = useAvisos();
    return {
      avisos,
    };
  },
};
</script>

<style scoped>
.toaster-outer {
  position: relative;
}

.toaster-inner {
  position: absolute;
  top: 15px;
  right: 25px;
}
</style>
