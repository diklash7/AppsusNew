import { noteService } from '../services/note-service.js'
import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteVideo from './note-video.cmp.js'
import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
          
            <ul>
                <li class="note-style"  v-for="note in notes"> 
                    <component :is="note.type" :note="note"> </component>
                    <img src="../../../../img/bin.png" class="imgBtn" @click="remove(note.id)"> 
                 </li>
            </ul>
        </section>

`,
    data() {
        return {
            fromTimeWindow: 'Hey here is custom placeholder',
            styleObject: {
                backgroundColor: 'yellow'
            }
        }
    },
    components: {
        notePreview,
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo,
    },
    created() {
        this.currNote = this.note;
        console.log('this.currNote:', this.currNote);
    },
    methods: {
        remove(id) {
            console.log(id)
            this.$emit('remove', id);
        },

        duplicateNote(id) {
            noteService.save(this.currNote)
        },
    },



}