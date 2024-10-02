import { ref, onMounted, onUnmounted } from 'vue';

export function useOrientation() {
  const isPortrait = ref(window.innerHeight > window.innerWidth);

  const handleOrientationChange = () => {
    isPortrait.value = window.innerHeight > window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', handleOrientationChange);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleOrientationChange);
  });

  return { isPortrait };
}