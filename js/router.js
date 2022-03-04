import appHome from './pages/app-home.cmp.js'
import appAbout from './pages/app-about.cmp.js'
import bookApp from './apps/book/pages/book-app.cmp.js'
import noteApp from './apps/keep/pages/note-app.cmp.js'
import mailApp from './apps/mail/pages/mail-app.cmp.js'
import mailDetails from './apps/mail/cmps/mail-details.cmp.js'
import mailForm from './apps/mail/cmps/mail-form.cmp.js'



const routes = [{
        path: '/',
        component: appHome
    },
    {
        path: '/about',
        component: appAbout
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/note',
        component: noteApp
    },
    {
        path: '/mail',
        component: mailApp
    },
    {
        path: '/mail/form',
        component: mailForm
    },

    {
        path: '/mail/:mailId',
        component: mailDetails
    },
];



export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});