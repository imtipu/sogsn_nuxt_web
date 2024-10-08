import {defineStore} from 'pinia';

export const useMobileStore = defineStore({
    id: 'mobile',
    state: () => ({
        mobileMenu: false
    }),

    actions: {
        toggleMobileMenu() {
            this.mobileMenu = !this.mobileMenu
        },
        closeMobileMenu() {
            this.mobileMenu = false
        }
    },

    getters: {
        isMobileMenuOpen() {
            return this.mobileMenu
        }
    },

})