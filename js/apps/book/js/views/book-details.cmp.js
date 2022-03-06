import { bookService } from '../services/book-service.js'
import { eventBus } from '../services/eventBus-service.js';
import longText from "../cmps/long-text.cmp.js";
import reviewAdd from "./review-add.cmp.js";

export default {
    template: `
        <section v-if="book" class="book-details">
            <section class="book-details-container" >

                <h2>Book details:</h2>
                <h3 class="sale" v-if="book.listPrice.isOnSale">🔥SALE!! 🔥</h3>
                <img :src="bookImgUrl">
                <h3>title: {{book.title}}</h3>
                <h4>price: <span :class="changeColor">{{SymboleCurrency}}</span></h4>
                <p class="page-count">
                    {{readingType}}
                </p>
                <p class="published-date">
                    {{publishedAtDate}}
                </p>
                <long-text :text="book.description"/>
                <!-- <router-link class="btn-review" :to="'/book/review/'+book.id">review book</router-link> -->
                <review-add :book="book" @addReview="saveReview" @removeReview="removeReview()"> </review-add>
                <router-link class="btn-exit" to="/book">Back to books</router-link>
            </section>
        </section>
        <section v-else class="loading">

        </section>
    `,
    data() {
        return {
            book: null
        };
    },
    components: {
        longText,
        reviewAdd
    },
    created() {
        const id = this.$route.params.bookId;
        bookService.get(id)
            .then(book => this.book = book);
    },
    methods: {
        saveReview(review) {
            bookService.saveReview(this.book.id, review)
                .then(book => {
                    this.book = book
                    console.log(book);
                    eventBus.emit('show-msg', { txt: 'Saved succesfully', type: 'success' })
                });
        },
        removeReview(reviewId) {
            bookService.removeReview(this.book, reviewId)
                .then(book => {
                    this.book = book
                    console.log(book);
                    eventBus.emit('show-msg', { txt: 'Remove succesfully', type: 'removed' })
                });
        }
    },
    computed: {
        bookImgUrl() {
            return this.book.thumbnail;
        },
        readingType() {
            if (this.book.pageCount > 500) return '* Long reading'
            else if (this.book.pageCount > 200) return '* Decent Reading'
            else if (this.book.pageCount < 100) return '* Light Reading'
        },
        SymboleCurrency() {
            return new Intl.NumberFormat('he-IL', {
                style: 'currency',
                currency: this.book.listPrice.currencyCode,
            }).format(this.book.listPrice.amount)
        },
        publishedAtDate() {
            if (new Date().getFullYear() - this.book.publishedDate > 10) return '* Veteran Book'
            else if (new Date().getFullYear() - this.book.publishedDate < 1) return '* New'
        },
        changeColor() {
            return {
                blue: this.book.listPrice.amount > 150,
                green: this.book.listPrice.amount < 50
            }
        },

    }
}