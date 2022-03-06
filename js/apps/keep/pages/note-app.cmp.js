import { noteService } from "../services/note-service.js";
import noteList from "../cmps/note-list.cmp.js";
import noteAdd from "../cmps/note-add.cmp.js";
import noteFilter from "../cmps/note-filter.cmp.js";

export default {
    template: `
        <section class="note-app">
            <note-filter @filtered="setFilter"  />
            <note-add/>
            <note-list :notes="notesForDisplay" @remove="removeNote" />
        </section>
    `,
    components: {
        noteList,
        noteFilter,
        noteAdd
    },
    data() {
        return {
            notes: null,
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
                })
                .catch(err => {
                    console.error(err);
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