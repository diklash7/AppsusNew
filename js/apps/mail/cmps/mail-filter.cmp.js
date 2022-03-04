export default {
    template: `
        <section class="mail-filter">
            <div class="searches">
                <span>🔍</span> 
                <input @input="setFilter" type="text" v-model="filterBy.fullname" 
                placeholder="Search mail">
                <select v-model="filterBy.isRead">
                    <option>All</option>
                    <option>Read</option>
                    <option>Unread</option>
                </div>
            </select>
        </section>
    `,
    data() {
        return {
            filterBy: {
                fullname: '',
                isRead: false,
            }
        };
    },
    methods: {
        setFilter() {
            this.$emit('filtered', {...this.filterBy });
        },
    }
}