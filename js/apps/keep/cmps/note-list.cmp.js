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
                     <img class="imgBtn" src="../../../../img/pin.png" @click="togglePin"> 
                     <!-- <input type="color" :style="note.id.backgroundColor" class="btn-remove" v-model="note.id.backgroundColor" > -->
                     <img class="imgBtn" src="../../../../img/edit.png">
                     <img class="imgBtn" src="../../../../img/check-mark.png">
                    
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
        duplicateNote() {
            noteService.save(this.currNote);
        },

        
    },



}