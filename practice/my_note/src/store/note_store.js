import { defineStore } from 'pinia'

export const useNoteStore = defineStore(
    'notes', {
        state: () => ({
            notes:[{
                id: 1,
                title: 'cleaning',
                content: 'do housework',
                pinned: false
            },
        ]
        }),
        getters: {

        },
        actions: {
            
        }
    }
)