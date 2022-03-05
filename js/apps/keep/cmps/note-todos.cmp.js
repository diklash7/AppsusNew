import { noteService } from "../services/note-service.js";

export default {
    props: ['note'],
    template: `
    <section>
    <label>
    
    {{note.info.label}}
    {{note.info.todos.txt}}
    <img class="imgBtn" src="../../../../img/copying.png" @click="duplicateNote()">

    </label>
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