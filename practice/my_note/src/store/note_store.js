import { defineStore } from 'pinia'

export const useNoteStore = defineStore(
    'notes', {
        state: () => ({
            notes:[
                {
                id: 1,
                title: 'HOMEWORK',
                content: 'DO YOUR HOMEWORK',
                isPinned: true
            },
            {
                id: 2,
                title: 'cleaning',
                content: 'do dishes',
                isPinned: true
            },
            {
                id: 3,
                title: 'cleaning',
                content: 'bathroom cleaning',
                isPinned: false
            },
            {
                id: 4,
                title: 'laundry',
                content: 'do laundry',
                isPinned: false
            },
            {
                id: 5,
                title: 'reading',
                content: 'read books',
                isPinned: false
            },
        ],
        searchResults: []
        }),
        getters: { //預設取得資料的函式集
            showPinned(){
                return this.notes.filter(note => note.isPinned)
            },
            showUnpinned(){
                return this.notes.filter(note => !note.isPinned)
            }
        },
        actions: {
            addNote(item){
                console.log(item)
                const last_id = this.notes.length +1
                this.notes.push({
                    id: last_id,
                    title: item.title1,
                    content: item.content1,
                    isPinned: false
                })
                return true
            },
            editNote(id, new_title, new_content){
                const note = this.notes.find(note => note.id === id)
                if(!note) return false
                note.title = new_title
                note.content = new_content
                return true
            },
            searchNotes(keyword){
                this.searchResults = this.notes.filter(note => note.title.includes(keyword) || note.content.includes(keyword))
                console.log(this.searchResults);
            },
            deleteNote(id){
                const index = this.notes.findIndex(note => note.id !== id)
                if(index !== -1){
                    this.notes.splice(index, 1)
                    return true
                }
            },
        }
    }
)