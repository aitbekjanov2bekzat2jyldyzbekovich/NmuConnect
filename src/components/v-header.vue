<template>
  <header>
    <div class="elasticContainer">
      <div class="appLogoName">
        <div class="logo" />
        <h2>NMUconnect</h2>
      </div>

      <nav>
        <ul>
          <li>
            <router-link
              to="/"
              :class="{ activRout: this.$route.name === 'home' }"
              >Гдавная</router-link
            >
          </li>
          <li>
            <router-link to="/">Проекты</router-link>
          </li>
          <li>
            <router-link to="/">Кружки</router-link>
          </li>
          <li>
            <router-link to="/">Новости</router-link>
          </li>
        </ul>
        <button v-if="this.mmStore.authIs == ''">Войти</button>
        <button v-else>Выйти</button>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapStores } from "pinia";
import { useMmStore } from "@/stores/m";
export default {
  computed: {
    ...mapStores(useMmStore),
  },
  mounted() {
    this.mmStore.isAuth();
  },
};
</script>

<style lang="scss" scoped>
.activRout {
  color: #fff !important;
}
header {
  width: 100%;
  height: 70px;
  position: sticky;
  top: 0;
  background-color: #ffd050;
  .elasticContainer {
    display: flex;
    justify-content: space-between;
    height: 100%;

    .appLogoName {
      display: flex;
      gap: 10px;
      align-items: center;
      height: 100%;

      .logo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #fff;
      }
      h2 {
        color: #fff;
        font-weight: 600;
        font-size: 30px;
      }
    }
    nav,
    ul {
      display: flex;
      height: 100%;
      gap: 20px;
      align-items: center;
      list-style: none;

      a {
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
        color: #232536;
        transition: color 500ms ease-in;
        line-height: 26px;
        padding: 10px;

        &:active {
          opacity: 50%;
        }
        &:hover {
          color: #fff;
        }
      }
      button {
        cursor: pointer;
        padding: 15px 35px;
        color: #232536;
        background-color: #fff;
        border: none;
        font-size: 18px;
        font-weight: 700;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transition: translate 500ms ease-in-out;

        &:active {
          color: #ffd050;
        }
        &:hover {
          translate: 0px -3px;
        }
      }
    }
  }
}
</style>
