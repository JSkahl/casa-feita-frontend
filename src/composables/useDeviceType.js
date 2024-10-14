import { ref, onMounted, onUnmounted } from 'vue';

export function useDeviceType() {
  const isMobile = ref(false);

  const checkDeviceType = () => {
    isMobile.value = window.innerWidth <= 768; // Define a largura para considerar mobile
  };

  onMounted(() => {
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType); // Escuta a mudança de tamanho da tela
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkDeviceType); // Remove o listener ao desmontar
  });

  return { isMobile };
}
