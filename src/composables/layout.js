import { defineAsyncComponent, onMounted, onUnmounted, ref, shallowRef } from 'vue'

export function useLayout() {
  const layout = shallowRef()
  const currentWidth = ref(0)


  // Arquivo editado para futuras alterações com mais responsividade

  const updateLayout = () => {
    const width = window.innerWidth
    if (width < 768 && width != currentWidth.value) {
      layout.value = defineAsyncComponent(() => import('@/layouts/LayoutMobile.vue'))
    // } else if (width < 1200 && width != currentWidth.value) {
    //   layout.value = defineAsyncComponent(() => import('@/layouts/LayoutMedium.vue'))
    } else {
      layout.value = defineAsyncComponent(() => import('@/layouts/LayoutDesktop.vue'))
    }
  }

  onMounted(() => {
    updateLayout()
    window.addEventListener('resize', updateLayout)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateLayout)
  })

  return { layout }
}