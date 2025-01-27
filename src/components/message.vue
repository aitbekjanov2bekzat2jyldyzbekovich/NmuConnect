<template>
  <TransitionGroup name="list" tag="div" class="mesageWraper">
    <div
      :class="{ errorr: i.type === 'Ошибка' }"
      class="mesage"
      v-for="i in this.mmStore.appMessage"
      :key="i"
    >
      <h3>{{ i.type }}</h3>
      <p>{{ i.message }}</p>
    </div>
  </TransitionGroup>
</template>

<script>
import { mapStores } from "pinia";
import { useMmStore } from "@/stores/m";

export default {
  computed: {
    ...mapStores(useMmStore),
  },
};
</script>

<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.errorr {
  border-color: red !important;

  h3 {
    color: red !important;
  }
}
.mesageWraper {
  position: fixed;
  left: 0;
  bottom: 10px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .mesage {
    border: 1px solid green;
    border-left: 40px solid green;
    width: 400px;
    background-color: #fff;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    h3 {
      color: green;
      font-weight: 500;
      text-transform: uppercase;
    }

    p {
      font-size: 15px;
      color: #232536;
    }
  }
}
</style>
