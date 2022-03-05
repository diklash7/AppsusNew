// import noteActions from "./note-actions.cmp.js"
import { noteService } from "../services/note-service.js";
// import { eventBus } from "../../../services/eventBus-service.js";

export default {
    props: ['note'],
    template: `
        <section class="note note-img" @mouseleave="hover = false" @mouseover="hover = true" >
            <h3>{{note.info.title}}</h3>
            <img :src="note.info.url">
            <img class="imgBtn" src="../../../../img/copying.png" @click="duplicateNote()">
            <!-- <img src="../../../../img/bin.png" class="imgBtn" @click="removeNote()">  -->
            <!-- <img class="imgBtn" src="../../../../img/pin.png" @click="togglePin"> --> -->
                    <!-- <input type="color" :style="note.id.backgroundColor" class="btn-remove" v-model="note.id.backgroundColor" >
                    <img class="imgBtn" src="../../../../img/copying.png" @click="duplicateNote()">
                   <img class="imgBtn" src="../../../../img/edit.png">
                    <img class="imgBtn" src="../../../../img/check-mark.png"> -->
            <!-- <note-actions v-if="hover" :note="note" @duplicateNote="duplicateNote" @removeNote="removeNote" @togglePin="togglePin" @updateColor="updateColor"/> -->
         </section>
    
    `,
    data() {
        return {
            // type: 'note-img',
            currNote: null,
            hover: false,
        }

    },
    created() {
        this.currNote = this.note;
        console.log('this.currNote:', this.currNote);
    },
    methods:{

        duplicateNote() {
            noteService.save(this.currNote);
        },
    }


}
