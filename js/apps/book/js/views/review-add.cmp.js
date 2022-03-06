import { utilService } from '../services/util-service.js'

export default {
    props: ['book'],
    template: `
       <section v-if="review" class="review-add">
            <h4>Review book:</h4>
            <form @submit.prevent="save">
                <div>
                    <span class="review-name">Your full name:</span>
                     <input type="text" v-model="review.title" placeholder="name">
                </div>
                <div>
                    <span class="rate">Rate:</span> 
                     <select v-model="review.rate">
                        <option v-for="rate in 5">{{rate}}</option>
                    </select>
                </div>
                <div class="line-read">
                   <span class="read">Read at: </span> 
                    <input type="date" v-model="review.readAt" required>
                </div>
                 <span class="review-title"> Your review:</span>
                 <textarea  v-model="review.textarea" name="" id="" cols="25" rows="6"></textarea>
             <button>Save</button>
           
            </form>
          <section class="comment-user" v-if="book" v-for="review in showReviews">
           <div>Name: <span> {{review.title}}</span></div>
           <div>Rate: <span>{{review.rate}}</span></div>
           <div>Read at: <span>{{review.readAt}}</span></div>
           <div>Textarea: <span>{{review.textarea}}</span></div>
        <button class="remove-review" @click="remove(review.id)">Remove-review</button>  
        </section>
        </section>
       `,
    data() {
        return {
            review: {
                id: null,
                title: 'Books Reader',
                rate: 1,
                readAt: new Date().toISOString().slice(0, 10),
                textarea: '',
            },
        }

    },
    // mounted() {
    //     this.$refs
    // },
    created() {
        // this.review.id = utilService.makeId()
    },
    computed: {
        showReviews() {
            if (Array.isArray(this.book.reviews)) return this.book.reviews
        }

    },
    methods: {
        save() {
            this.review.id = utilService.makeId()

            if (!this.review.title) return;
            this.$emit('addReview', {...this.review })
        },
        remove(reviewId) {
            console.log(reviewId);
            // if (!this.review.title) return;
            this.$emit('removeReview', reviewId)
        },
    },
}