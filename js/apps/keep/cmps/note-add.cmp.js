export default {
    template: `
    <section>
        <form @submit.prevent="save" >
            <div v-for="(cmp, idx) in noteAdd.cmps">
                
           </div >
            <button>Save</button>
    </section>
    `,
}