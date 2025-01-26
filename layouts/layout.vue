<template>
  <Vheader></Vheader>
  <div>
    <slot />
  </div>
</template>

<script>
import Vheader from "@/components/v-header.vue"
export default {
  components: {
    Vheader
  }
};
</script>
