import { onMounted, onUnmounted, ref } from 'vue';
  
  export function useMonitor() {
    const breakpoint = ref('sm');

    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 576) {
        breakpoint.value = 'xs';
      } else if (width < 768) {
        breakpoint.value = 'sm';
      } else if (width < 992) {
        breakpoint.value = 'md';
      } else if (width < 1200) {
        breakpoint.value = 'lg';
      } else {
        breakpoint.value = 'xl';
      }
    };
  
    onMounted(() => {
      updateBreakpoint();
      window.addEventListener('resize', updateBreakpoint);
    });
  
    onUnmounted(() => {
      window.removeEventListener('resize', updateBreakpoint);
    });
  
    return { breakpoint };
  }