import { noteService } from "../services/note-service.js";
import noteList from "../cmps/note-list.cmp.js";
import noteFilter from "../cmps/note-filter.cmp.js";

export default {
    template: `
        <section class="note-app app-main">
            <!-- <h3>noteapp</h3> -->
            <note-filter @filtered="setFilter" />
            <router-link to="/note/edit">Add a new note</router-link>
            <note-list :notes="notesForDisplay" @remove="removeNote" />
            <note-edit/>
        </section>
    `,
    components: {
        noteList,
        noteFilter
    },
    data() {
        return {
            notes: null,
            // selectedBook: null,
            filterBy: null
        };

    },
    created() {
        noteService.query()
            .then(notes => this.notes = notes);
    },
    methods: {
        removeNote(id) {
            noteService.remove(id)
                .then(() => {
                    const idx = this.notes.findIndex((note) => note.id === id);
                    this.notes.splice(idx, 1);
                    // eventBus.emit('show-msg', { txt: 'Deleted succesfully', type: 'success' });
                })
                .catch(err => {
                    console.error(err);
                    // eventBus.emit('show-msg', { txt: 'Error - please try again later', type: 'error' });
                });
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }

    },
    computed: {
        notesForDisplay() {
            if (!this.filterBy) return this.notes;
            const regex = new RegExp(this.filterBy.info, 'i');
            return this.notes.filter(note => regex.test(note.info.txt));
        }
    },
}