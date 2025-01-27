<template>
  <Transition>
    <div class="modalWrapper" v-if="this.mmStore.modalStatus">
      <div class="modal" v-if="this.mmStore.modalType === 'auth'">
        <div class="header">
          <h3>Войти в систему</h3>
        </div>
        <div class="inputWrapper">
          <div class="passwordWrapper i">
            <label for="studentPassword">Введите пароль</label>
            <input
              type="password"
              id="studentPassword"
              v-model="this.mmStore.inputAuthPassword"
            />
          </div>
        </div>
        <div class="btn">
          <button @click="this.mmStore.login()">Войти</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { mapStores } from "pinia";
import { useMmStore } from "@/stores/m";
export default {
  computed: {
    ...mapStores(useMmStore),
  },
  mounted() {
    window.addEventListener("click", (e) => {
      if (e.target.className === "modalWrapper") {
        this.mmStore.closeModal();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  left: 0;
  top: 0;
  transition: all 400ms ease-in;
}

.v-enter-from,
.v-leave-to {
  position: absolute;
  left: -100%;
  top: 0;
}
.modalWrapper {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.719);
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 27%;

    .header {
      h3 {
        color: #ffd050;
        font-size: 24px;
      }
    }

    .inputWrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .i {
        &:focus-within {
          label {
            color: #ffd050;
          }
        }
      }

      label {
        color: #232536;
        font-size: 14px;
        transition: all 300ms linear;
      }

      input {
        width: 100%;
        outline: none;
        padding: 0 10px;
        height: 40px;
        border: none;
        border: 2px solid #fff;
        border-bottom: 2px solid #232536;
        transition: all 300ms linear;
        letter-spacing: 3px;
        text-align: center;
        border-radius: 10px;
        font-size: large;

        &:focus {
          border-color: #ffd050;
          color: #ffd050;
        }
      }
    }
    .btn {
      button {
        width: 100%;
        padding: 10px 0;
        background-color: #ffd050;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        color: #232536;
        font-weight: 600;

        &:active {
          opacity: 70%;
        }
      }
      width: 100%;
    }
  }
}
</style>
