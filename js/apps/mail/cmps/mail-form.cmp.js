import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../../services/eventBus-service.js'

export default {
    template: `
      <section v-if="mailToSend" class="mail-form">
          <span class="note">Note: write itsar or dikla to send us :) </span>
         <h4>New message
         <router-link class="btn-exit" :to="'/mail'">x</router-link>
         </h4>
           <section class="form-container">
             <form @submit.prevent="send">
                   <input type="text" v-model="mailToSend.to" placeholder="To:">
                   <input type="text" v-model="mailToSend.fullname" placeholder="Fullname:">
                   <input type="text" v-model="mailToSend.subject" placeholder="Subject:">
                   <textarea  v-model="mailToSend.body" cols="30" rows="20">
                   </textarea>
                <div class="btns-form" >
                    <button class="btn-send">Send <span>🔽</span> </button>
                   
                </div>
                
             </form>
            </section>
     </section>
    `,
    data() {
        return {
            mailToSend: {
                to: '',
                subject: '',
                body: '',
                isInbox: false,

            }
        };
    },
    created() {
        const id = this.$route.params.mailId;
        if (id) {
            mailService.get(id)
                .then(mail => this.mailToSend = mail);
        } else {
            this.mailToSend = mailService.getEmptyMail();
        }
    },
    methods: {
        send() {
            if (!this.mailToSend.to) return;
            if (this.mailToSend.to === 'itsar' || this.mailToSend.to === 'dikla') this.mailToSend.isInbox = true
            else this.mailToSend.isInbox = false
            mailService.save(this.mailToSend)
                .then(mail => {
                    eventBus.emit('show-msg', { txt: 'Saved succesfully', type: 'success' })
                    this.$router.push('/mail')
                });
        },
    },
    computed: {}
};