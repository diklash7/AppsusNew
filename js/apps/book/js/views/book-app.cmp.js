import { bookService } from '../services/book-service.js';
import { eventBus } from '../services/eventBus-service.js';
import bookFilter from '../cmps/book-filter.cmp.js';
import bookList from '../cmps/book-list.cmp.js';
import bookAdd from '../cmps/book-add.cmp.js';
import longTextCmp from '../cmps/long-text.cmp.js';


export default {
    template: `
        <section class="book-app">
           <book-add :book="book"/>
           <book-filter @filtered="setFilter" />
           <book-list :books="booksForDisplay" @remove="removeBook"/>
        </section>
    `,
    components: {
        bookFilter,
        bookList,
        bookAdd,
    },
    data() {
        return {
            books: null,
            filterBy: null
        };
    },
    created() {
        bookService.query()
            .then(books => this.books = books);
    },
    methods: {
        removeBook(id) {
            bookService.remove(id)
                .then(() => {
                    const idx = this.books.findIndex((book) => book.id === id);
                    this.books.splice(idx, 1);
                    eventBus.emit('show-msg', { txt: 'Deleted succesfully', type: 'success' });
                })
                .catch(err => {
                    console.error(err);
                    eventBus.emit('show-msg', { txt: 'Error - please try again later', type: 'error' });
                });
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }
    },
    computed: {
        booksForDisplay() {
            if (!this.filterBy) return this.books;
            const regex = new RegExp(this.filterBy.title, 'i');
            console.log(this.filterBy.title);
            const min = this.filterBy.fromPrice || 0;
            const max = this.filterBy.toPrice || Infinity;
            return this.books.filter(book => (regex.test(book.title) && (min < book.listPrice.amount) && (max > book.listPrice.amount)));
        }
    },
};