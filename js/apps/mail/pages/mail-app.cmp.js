import { mailService } from '../services/mail-service.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailList from '../cmps/mail-list.cmp.js';
import navBar from "../cmps/nav-bar.cmp.js";


export default {
    template: `
        <section class="mail-app">
        <nav-bar @selected="setFilterSent" :unread="unread"></nav-bar>
               <div class="mail-display">
                   <mail-filter @filtered="setFilter"/>
                   <mail-list :mails="mailsForDisplay" />
                </div>
        </section>
    `,
    components: {
        mailFilter,
        mailList,
        navBar,

    },
    data() {
        return {
            mails: null,
            unread: null,
            filterBy: '',
            filterBySent: ''
                // myFilterBy: {
                //     status: 'inbox',
                //     txt: '',
                //     isRead: false,
                //     isStared: false,
                //     mail: '',
                // }
        };
    },
    created() {
        mailService.query()
            .then(mails => this.mails = mails)
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        setFilterSent(select) {
            this.filterBySent = select
            console.log(this.filterBySent);
        },
    },
    computed: {
        mailsForDisplay() {
            if (!this.filterBy && !this.filterBySent) return this.mails;

            if (this.filterBy.fullname) {
                const regex = new RegExp(this.filterBy.fullname, 'i');
                return this.mails.filter(mail => regex.test(mail.fullname))
            } else {
                if (this.filterBySent === 'inbox') return this.mails.filter(mail => mail.isInbox)
                else if (this.filterBySent === 'sent') return this.mails.filter(mail => !mail.isInbox)
                    // else if (this.filterBySent === 'stared') return this.mails.filter(mail => mail.isStarred)
                    // else if (this.filterBySent === 'drafts') return this.mails.filter(mail => mail.isDraft)
            }
        }
    }
}