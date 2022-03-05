import { mailService } from '../services/mail-service.js';
// import { eventBus } from '../services/eventBus-service.js';


export default {
    template: `
        <section v-if="mail" class="mail-details app-main">
            <section class="mail-details-container">
         <div class="header-details">
            <div class="header-subject">{{mail.subject}}</div>
                <h2> {{mail.fullname}}</h2> 
                <p><{{mail.to}}></p>
         </div>
              <div class="body-details" >{{mail.body}}</div>
                   <router-link class="btn-delete" :to="'/mail'">x</router-link>
              </div>
            </section>
        </section>
        <section v-else class="loading">
        </section>
    `,
    data() {
        return {
            mail: null
        };
    },
    components: {

    },
    created() {
        const id = this.$route.params.mailId;
        mailService.get(id)
            .then(mail => this.mail = mail);
    },
    methods: {},
    computed: {

    }
}