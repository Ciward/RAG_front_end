import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null,
  }),
  actions: {
    setCurrentUser(user) {
      this.currentUser = user;
    },
    getCurrentUser() {
      return this.currentUser;
    },
  },
});
