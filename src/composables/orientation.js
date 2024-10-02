import { ref, onMounted, onUnmounted } from 'vue';

export function useOrientation() {
  const deviceHeight = ref(window.innerHeight);
  const deviceWidth = ref(window.innerWidth);
  const isPortrait = ref(deviceHeight.value > deviceWidth.value);

  const onOrientationChange = () => {
    deviceHeight.value = window.height;
    deviceWidth.value = window.width;
    isPortrait.value = deviceHeight.value > deviceWidth.value
  };

  onMounted(() => {
    window.addEventListener('resize', onOrientationChange);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onOrientationChange);
  });

  return { isPortrait };
}