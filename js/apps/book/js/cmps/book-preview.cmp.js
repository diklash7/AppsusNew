export default {
    props: ['book'],
    template: `
        <section class="book-preview">
            <div><img :src=bookImgUrl></div>
            <h3>title: {{book.title}}</h3>
            <h4>price:{{SymboleCurrency}} </h4>
        </section>
    `,
    data() {
        return {}
    },
    created() {},
    methods: {

    },
    computed: {
        bookImgUrl() {
            return this.book.thumbnail;
        },
    }
}