import { defineStore } from "pinia";

export const useMmStore = defineStore("mm", {
  state: () => ({
    authIs: "",
    API: "https://nmuconect-default-rtdb.firebaseio.com/",
  }),
  actions: {
    isAuth() {
      this.authIs = localStorage.getItem("user")
        ? localStorage.getItem("user")
        : "";
    },
  },
  
});
