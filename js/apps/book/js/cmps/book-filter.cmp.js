export default {
    template: `
        <section class="book-filter">
            <div>
                Search:
            </div>
            <span class="price-range"> <span>Title: </span>
            <input  type="text" v-model="filterBy.title" placeholder="Search..."></span>
            <label> 
            <span>Min:</span>
                <input  type="number" v-model="filterBy.fromPrice" >
                <span>Max:</span>
                <input  type="number" v-model="filterBy.toPrice" > 
            </label>
            <button class="btn-filter" @click="setFilter">Filter</button>
        </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                price: 200,
                fromPrice: 0,
                toPrice: 0
            }
        };
    },
    methods: {
        setFilter() {
            this.$emit('filtered', {...this.filterBy });
        }
    }
}