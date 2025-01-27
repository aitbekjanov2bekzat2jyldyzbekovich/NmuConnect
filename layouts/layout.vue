<template>
  <Message />
  <ModalWindow />
  <Vheader />
  <div>
    <slot />
  </div>
</template>

<script>
import Message from "@/components/message.vue";
import ModalWindow from "@/components/modalWindow.vue";
import Vheader from "@/components/v-header.vue";
export default {
  components: {
    Vheader,
    ModalWindow,
    Message,
  },
};
</script>
