export default {
    template: `
        <section class="note-filter">
        
            <input ref="noteInput" @input="setFilter" type="text" v-model="filterBy.info" placeholder="🔍  Search notes">
           
        </section>
    `,
    data() {
        return {
            filterBy: {
                type: ''
            }
        };
    },
    mounted() {
        this.$refs.noteInput.focus()
    },
    methods: {
        setFilter() {
            this.$emit('filtered', {...this.filterBy });
        }
    }
}