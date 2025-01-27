<template>
  <ModalWindow />
  <Vheader />
  <div>
    <slot />
  </div>
</template>

<script>
import ModalWindow from "@/components/modalWindow.vue";
import Vheader from "@/components/v-header.vue";
export default {
  components: {
    Vheader,
    ModalWindow,
  },
};
</script>
