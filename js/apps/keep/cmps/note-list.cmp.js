import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteVideo from './note-video.cmp.js'
import notePreview from './note-preview.cmp.js'
import noteActions from './note-actions.cmp.js'

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
          
            <ul>
                <li class="note-style"  v-for="note in notes"> 
                    <component :is="note.type" :info="note.info"> </component>
                    <!-- <button class="btn-remove" @click="remove(note.id)"><img src="../../../../img/bin.png"></button> -->
                   
                    <!-- <note-preview :note="note"/> -->
                    <!-- <div class="actions">
                    </div>  -->
                </li>
            </ul>
            <note-actions  v-if="hover" :note="note" @duplicateNote="duplicateNote" @removeNote="removeNote" @togglePin="togglePin" @updateColor="updateColor"/>
        </section>

`,
    data() {
        return {
            fromTimeWindow: 'Hey here is custom placeholder',
            styleObject:{
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
        noteActions
    },
    methods: {
        remove(id) {
            console.log(id)
            this.$emit('remove', id);
        },
    },
   

}