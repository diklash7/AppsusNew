import { noteService } from "../services/note-service.js";
// import { eventBus } from '../services/eventBus-service.js';

export default {
    template: `
    
        <section v-if="noteToEdit" class="note-edit app-main">
            <!-- <h4>{{formTitle}}</h4> -->
            <form @submit.prevent="save">
                <input type="text" v-model="noteToEdit.txt" placeholder="please edit your note">
                <!-- <input type="number" v-model.number="noteToEdit.maxSpeed" placeholder="Max speed"> -->
                <button>Save</button>
            </form>
        </section>
    `,
    data() {
        return {
            noteToEdit: null
        };
    },
    created() {
        const id = this.$route.params.noteId;
        if (id) {
            console.log('id:', id);
            noteService.get(id)
                .then(note => this.noteToEdit = note);
        } else {
            this.noteToEdit = noteService.getEmptyNote();
        }
    },
    methods: {
        save() {
            if (!this.noteToEdit.txt) return;
            noteService.save(this.noteToEdit)
                .then(car => {
                    eventBus.emit('show-msg', { txt: 'Saved succesfully', type: 'success' })
                    this.$router.push('/note')
                });
        }
    },
    // computed: {
    //     formTitle() {
    //         const id = this.$route.params.noteId;
    //         return id ? 'Edit car' : 'Add car';
    //     }
    // }
};