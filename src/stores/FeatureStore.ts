import { defineStore } from 'pinia'

export const useFeatureStore = defineStore('features', {
    state: () => ({
        features: [
            {
                id: 1,
                name: 'Vue',
                link: 'https://vuejs.org/',
            },
            {
                id: 2,
                name: 'Pinia',
                link: 'https://pinia.esm.dev/',
            },
            {
                id: 3,
                name: 'Vue Router',
                link: 'https://router.vuejs.org/',                
            },
            {
                id: 4,
                name: 'VueUse',
                link: 'https://vueuse.org/',
            },
            {
                id: 5,
                name: 'UnHead',
                link: 'https://unhead.harlanzw.com/',
            },
            {
                id: 6,
                name: 'Axios',
                link: 'https://axios-http.com/',
            },
            {
                id: 7,
                name: 'Unplugin Vue Components',
                link: 'https://github.com/antfu/unplugin-vue-components'
            },
            {
                id: 8,
                name: 'Unplugin Auto Import',
                link: 'https://github.com/antfu/unplugin-auto-import'
            },
            {
                id: 9,
                name: 'Vite',
                link: 'https://vitejs.dev/',                
            },
            {
                id: 10,
                name: 'Vitest',
                link: 'https://vitest.dev/guide/',
            },
            {
                id: 11,
                name: 'Vue Test Utils',
                link: 'https://next.vue-test-utils.vuejs.org/',
            },
            {
                id: 12,
                name: 'Tailwind CSS',
                link: 'https://tailwindcss.com/',
            },
            {
                id: 13,
                name: 'DaysiUI',
                link: 'https://daisyui.com/',
            },
            {
                id: 14,
                name: 'TypeScript',
                link: 'https://www.typescriptlang.org/',
            }
        ]
    }),

    actions: {
       
    },

    getters: {
        
    }
});