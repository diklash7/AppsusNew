import { noteService } from "../services/note-service.js";
export default {
    props: ['note'],
    template: `
            <section class="note-video">
    
                    <h3>{{note.info.title}}</h3>
                
                    <iframe width="200"
                         :src="note.info.url">
                     </iframe>
                     <img class="imgBtn" src="../../../../img/copying.png" @click="duplicateNote()">

            </section>
    `,
    data() {
        return {

        }

    },
    created() {
        this.currNote = this.note;
        console.log('this.currNote:', this.currNote);
    },
    methods: {

        duplicateNote() {
            noteService.save(this.currNote);
        },
    }
}