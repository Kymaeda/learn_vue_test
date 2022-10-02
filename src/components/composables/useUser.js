import { ref } from 'vue';

export const useUserSimple = (username) => {
  const user = ref(null)
  const loadUser = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    user.value = await response.json()
  }

  return { user, loadUser }
};
