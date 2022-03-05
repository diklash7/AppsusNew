import longText from "../cmps/long-text.cmp.js";

export default {
    props: ['mail'],
    template: `
        <section class="mail-preview flex">
           <router-link class="open-details" :to="'/mail/'+mail.id">
               <input type="checkbox">
               <span v-if="!mail.isStared"><i @click="stared" class="fa fa-star black-color"></i></span>
               <span v-if="mail.isStared"><i @click="stared" class='fa fa-star yellow-color'></i></i></span>   
               <span class="fullname">{{mail.fullname}}</span>
               <span class="content">
                   <span class="subject">{{mail.subject}}</span>
                   <span class="body"> {{mail.body}}
                       </span>
                    </span>
           </router-link>
             <div>
                <span class="sent-at">{{months}} </span>
            </div>
              <div class="actions">
                   <button class=""  @click="remove(mail.id)">🗑️</button>
                   <button class="" @click="read(book.id)">✉️</button>
             </div>
    
         </section>
            <hr>
            
    `,
    data() {
        return {
            isStared: false,
        }
    },
    components: {
        longText,
    },
    created() {},
    methods: {
        remove(mailId) {
            this.$emit('remove', mailId)
        },
        stared() {
            this.$emit('stared', this.mail.id)
        },

    },
    computed: {
        months() {
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ];
            return monthNames[new Date().getMonth()] + ',' + new Date().getDay()
        }
    },
}