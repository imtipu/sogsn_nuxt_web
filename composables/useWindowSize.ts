export const useWindowSize = () => {
    const {$windowSize} = useNuxtApp();
    return $windowSize;
}