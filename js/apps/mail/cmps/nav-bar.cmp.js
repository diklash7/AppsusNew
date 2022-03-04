export default {
    // props: ['unread'],
    template: `

        <section class="mail-menu">
                <router-link class="btn-compos" to="/mail/form"><span class="plus">+ </span><span>Compos</span></router-link>
               <ul class="btn-menu">
                    <li  @click="selected('inbox')" class="inbox">Inbox</li>
                    <li  @click="selected('stared')" class="started">Started</li>                              
                    <li @click="selected('sent')" class="sent-mail">Sent Mail</li>
                    <li  @click="selected('trash')" class="drafts">Drafts</li>
             </ul>
                 <div class="progress">32%</div>
         </section>
                `,
    components: {},
    data() {
        return {
            select: 'inbox'
        }
    },
    created() {

    },

    methods: {
        selected(select) {
            this.select = select
            this.$router.push(`/mail`)
            this.$emit('selected', select)
        }

    },
    computed: {

    },
}