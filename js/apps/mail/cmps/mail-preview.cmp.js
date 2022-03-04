import longText from "../cmps/long-text.cmp.js";


export default {
    props: ['mail'],
    template: `
        <section class="mail-preview flex">
           <router-link class="open-details" :to="'/mail/'+mail.id">
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
        return {}
    },
    components: {
        longText,
    },
    created() {},
    methods: {
        remove(mailId) {
            this.$emit('remove', mailId)
        }
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