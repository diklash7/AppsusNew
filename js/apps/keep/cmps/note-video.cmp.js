export default {
    props: ['info'],
        template: `
            <section class="note-video">
    
                    <h3>{{info.title}}</h3>
                
                    <iframe width="200"
                         :src="info.url">
                     </iframe>

            </section>
    `,
    data() {
        return {

        }

    }
}