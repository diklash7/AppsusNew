import { noteService } from "../services/note-service.js";

export default {
    props: ['note'],
    template: `
        <section class="note note-img">
            <h3>{{note.info.title}}</h3>
            <img :src="note.info.url">
            <img class="imgBtn" src="../../../../img/copying.png" @click="duplicateNote()">
         
         </section>
    
    `,
    data() {
        return {
            currNote: null,
            hover: false,
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