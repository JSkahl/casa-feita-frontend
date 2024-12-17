import { onMounted, onUnmounted, ref } from 'vue';

export function useScreen() {
  const browserWidth = ref(window.innerWidth);
  const deviceWidth = ref(screen.width);
  const isMobile = ref(false);

  const onBrowserResize = () => {
    browserWidth.value = window.innerWidth;
    deviceWidth.value = screen.width;
    isMobile.value = window.innerWidth < 768;

    console.log(isMobile)
  };

  onMounted(() => {
    onBrowserResize()
    window.addEventListener('resize', onBrowserResize);
  });

  onUnmounted(() => {
    onBrowserResize()
    window.removeEventListener('resize', onBrowserResize);
  });

  return { isMobile };
}
