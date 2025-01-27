import { defineStore } from "pinia";

export const useMmStore = defineStore("mm", {
  state: () => ({
    authIs: "",
    API: "https://nmuconect-default-rtdb.firebaseio.com",
    modalStatus: false,
    modalType: "",
    appMessage: [],

    inputAuthPassword: "",
  }),
  actions: {
    isAuth() {
      this.authIs = localStorage.getItem("user")
        ? localStorage.getItem("user")
        : "";
    },

    openModal(type, status) {
      this.modalStatus = status;
      this.modalType = type;
    },

    closeModal() {
      this.modalStatus = false;
      this.modalType = "";
      this.inputAuthPassword = "";
    },

    async login() {
      const node = "users";
      const field = "password";
      const url = `${this.API}/${node}.json?orderBy=%22${field}%22&equalTo=%22${this.inputAuthPassword}%22`;
      if (this.inputAuthPassword !== "") {
        try {
          const respoonse = await fetch(url);
          const ress = await respoonse.json();
          if (ress) {
            const r = Object.values(ress);
            localStorage.user = r[0].token;
            this.sendMessage("Вы вошли в систему", "запрос успешно выполнено");
            setTimeout(() => {
              location.reload();
            }, 1000);
          } else {
            this.inputAuthPassword = "";
            this.sendMessage("Неправильный пароль", "Ошибка");
          }
        } catch {
          this.sendMessage("Неправильный пароль", "Ошибка");
          this.inputAuthPassword = "";
        }
      } else {
        this.inputAuthPassword = "";
        this.sendMessage("Введите пароль", "Ошибка");
      }
    },

    sendMessage(message, type) {
      this.appMessage.push({
        id: this.appMessage.length + 1,
        message: message,
        type: type,
      });
      console.log(this.appMessage);

      setTimeout(() => {
        this.appMessage.forEach((i) => {
          this.appMessage.pop();
        });
        console.log(this.appMessage);
      }, 2000);
    },
  },
});
