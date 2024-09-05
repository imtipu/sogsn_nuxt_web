export default defineNuxtPlugin((nuxtApp) => {
    const windowWidth = ref(window.innerWidth);
    const windowHeight = ref(window.innerHeight);

    const isMobile = computed(() => windowWidth.value < 768);
    const isTablet = computed(() => windowWidth.value >= 768 && windowWidth.value < 1024);
    const isDesktop = computed(() => windowWidth.value >= 1024);
    const isMobileOrTablet = computed(() => isMobile.value || isTablet.value);

    const updateWindowSize = () => {
        windowWidth.value = window.innerWidth;
        windowHeight.value = window.innerHeight;
    }

    window.addEventListener('resize', updateWindowSize);
    nuxtApp.provide('windowSize', {
        windowWidth,
        windowHeight,
        isMobile,
        isTablet,
        isDesktop,
        isMobileOrTablet
    });
});