export default {
    // props: ['unread'],
    template: `

        <section class="mail-menu">
                <router-link class="btn-compos" to="/mail/form"><span class="plus">+ </span><span>Compos</span></router-link>
               <ul class="btn-menu">
                    <li  @click="selected('inbox')" class="inbox"> <i class="fa fa-inbox"></i>Inbox</li>
                    <li  @click="selected('stared')" class="started"><i class="fa fa-star black-color"></i>Started</li>                              
                    <li @click="selected('sent')" class="sent-mail"><i class="fa fa-paper-plane"></i>Sent Mail</li>
                    <li  @click="selected('trash')" class="drafts"><i class="fa fa-trash-can"></i>Drafts</li>
             </ul>
                 <div class="progress">33%</div>
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