import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLayoutStore = defineStore('layout', () => {
  const collapsed = ref<boolean>(JSON.parse(localStorage.getItem('collapsed') || 'false'));

  const toggleCollapse = () => {
    collapsed.value = !collapsed.value;
    localStorage.setItem('collapsed', JSON.stringify(collapsed.value));
  };

  return { collapsed, toggleCollapse };
});
