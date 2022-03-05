import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../../services/eventBus-service.js'
import mailPreview from './mail-preview.cmp.js'

export default {
    props: ['mails'],
    template: `
            <section class="mail-list">
                <ul>
                  <li v-for="mail in mails" :key="mail.id" class="mail-preview-container" >
                    <mail-preview :mail="mail" @stared="setStared" @remove="removeMail" />  
                 </li>
                </ul>
            </section>
`,
    components: {
        mailPreview
    },
    methods: {
        removeMail(id) {
            mailService.remove(id)
                .then(() => {
                    const idx = this.mails.findIndex((mail) => mail.id === id);
                    this.mails.splice(idx, 1);
                    eventBus.emit('show-msg', { txt: 'Deleted succesfully', type: 'success' });
                })
                .catch(err => {
                    console.error(err);
                    eventBus.emit('show-msg', { txt: 'Error - please try again later', type: 'error' });
                });
        },
        select(mail) {
            this.$emit('selected', mail);
        },
        setStared(mail) {
            this.$emit('stared', mail)
        }
    },


}